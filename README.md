# PokeSniper
Simple single file bot to spawn, level &amp; snipe PokeCord Pokemon

## Requirements
You will need to have node.js installed and the discord.js lib.

## Configurable Options

```JS
sniper.instance = 1;
```
If you plan on running more than one bot, increment this number for every bot that is running.

```JS
sniper.enablecatch = true;
```
Enable sniping? (True/False)

```JS
sniper.enablespam = true;
```
Enable spamming? (True/False)

```JS
sniper.enablelogs = true;
```
Enable catch logging? (True/False)

```JS
sniper.spawn = 'some-channel-id';
```
The id of your redirected spawn room

```JS
sniper.spam = ['some-channel-id', 'some-channel-id'];
```
The ids (array) of your spam rooms

```JS
sniper.spamtime = 5000;
```
How often to send spam messages in ms

```JS
sniper.logs = 'some-channel-id';
```
The id of your catch logs room

```JS
sniper.pokeprefix = '-';
```
The PokeCord Bot Prefix

```JS
sniper.botprefix = '>';
```
The prefix you want to use for the sniper commands

```JS
sniper.playing = 'Fortnite';
```
The game the bot is playing

```JS
sniper.token = 'your-user-token';
```
Your discord user token

```JS
sniper.owner = 'your-discord-id';
```
The owner ID of the sniper (To use commands)

## Commands

**Makes the bot do the PokeCord info command**

```
>info <instance-id>
```

**Makes the bot do the PokeCord pokemon command**

```
>pokemon <instance-id>
```

**Makes the bot do the PokeCord select <pokemon-id> command**

```
>select <instance-id> <pokemon-id>
```

**Makes the bot do the PokeCord trade command**

```
>trade <instance-id>
```

**Makes the bot do the PokeCord p add command**

```
>add <pokemon-id>
```

**Makes the bot do the PokeCord confirm command**

```
>confirm
```
