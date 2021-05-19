# ⛽️ gas alarm 🚨

when gas is cheap, you want to hear about it. this will check every ten minutes and bloop you an audible but unobtrusive desktop notification if gas is below your threshold

you'll need an infura project id

```
$ git clone https://github.com/davidfloyd91/gas-alarm.git
$ cd gas-alarm
$ export WEB3_INFURA_PROJECT_ID=st3aLmyaP1s3CRetId4r3y0Ubro
$ yarn
```

start script with a gas threshold in gwei, eg 65. defaults to 46, meaning you'll hear about 45 and under

```
$ yarn start 65
```

only tried it on macos 11. no promises otherwise ... or at all

have fun out there 🪐🤑🦁
