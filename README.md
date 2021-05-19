# ⛽️ gas alarm 🚨

when gas is cheap, you want to hear about it. this will check every ten minutes and bloop you an audible but unobtrusive desktop notification

you'll need an infura project id

après cloning and cding ...

```
$ export WEB3_INFURA_PROJECT_ID=st3aLmyaP1s3CRetId4r3y0Ubro
$ yarn
```

start script with a gas threshold in gwei. defaults to 46, exclusive, so you'll hear about 45 and under

```
$ yarn start 65
```

only tried it on macos 11. no promises otherwise ... or at all

have fun out there 🪐🤑🦁
