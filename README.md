# PokeSniper
Simple single file bot to spawn, level &amp; snipe PokeCord Pokemon

## Requirements
You will need to have node.js installed and the discord.js lib.

I also recommend using forever to keep your bot online.

## Configurable Options

```JS
sniper.instance = 1; // Change this number for every instance of snipebot you have running
sniper.enablecatch = true; // Enable sniping? (True/False)
sniper.enablespam = true; // Enable spamming? (True/False)
sniper.enablelogs = true; // Enable catch logging? (True/False)
sniper.spawn = 'some-channel-id'; // The id of your redirected spawn room
sniper.spam = ['some-channel-id', 'some-channel-id']; // The ids (array) of your spam rooms
sniper.spamtime = 5000; // How often to send spam messages in ms
sniper.logs = 'some-channel-id'; // The id of your catch logs room
sniper.pokeprefix = '-'; // The pokeCord Prefix
sniper.botprefix = '>'; // The prefix you want to use for the sniper commands
sniper.playing = 'Fortnite'; // The game you are playing
sniper.token = 'your-user-token'; // Your discord token
sniper.owner = 'your-discord-id'; // The owner ID of the sniper (To use commands)
```

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
## License

This project is licensed under the MIT License. See the [LICENSE.md](https://github.com/X3I/PokeSniper/blob/master/LICENSE) file for details
