import Web3 from "web3";
import notifier from "node-notifier";

const { WEB3_INFURA_PROJECT_ID } = process.env;
const wsUrl = `wss://mainnet.infura.io/ws/v3/${WEB3_INFURA_PROJECT_ID}`;

const {
  providers: { WebsocketProvider },
} = Web3;

const wsOptions = {
  reconnect: {
    auto: true,
    delay: 5000,
    maxAttempts: 5,
    onTimeout: false,
  },
};

const wsProvider = new WebsocketProvider(wsUrl, wsOptions);
const web3 = new Web3(wsProvider);

const {
  eth: { getGasPrice },
  utils: { fromWei },
} = web3;

const [_foo, _bar, thresholdArg, ..._baz] = process.argv;
const threshold = thresholdArg ? parseInt(thresholdArg, 10) : 46;

const TEN_MINUTES = 10 * 60 * 1000;

setInterval(async () => {
    const rawGasPrice = await getGasPrice();
    const rawGasPriceInGwei = rawGasPrice && fromWei(rawGasPrice, 'gwei');
    const gasPrice = rawGasPriceInGwei && parseInt(rawGasPriceInGwei, 10);
    const shouldRejoice = gasPrice && 0 < gasPrice && gasPrice < threshold;

    console.log({ time: new Date(), gasPrice, threshold, shouldRejoice });

    if (shouldRejoice) {
        notifier.notify({
            title: "ga$ss$s",
            message: `⛽️ is cheap 🐕 it's like ${gasPrice} 🐕`,
            sound: true,
            timeout: 15,
        });
    }
}, TEN_MINUTES);
