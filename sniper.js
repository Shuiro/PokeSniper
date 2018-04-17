const client = new (require('discord.js')).Client();

// Customisable stuff

var sniper = {};

sniper.instance = 1; 
sniper.enablecatch = true;
sniper.enablespam = true;
sniper.enablelogs = true;
sniper.spawn = 'some-channel-id';
sniper.spam = ['some-channel-id', 'some-channel-id'];
sniper.spamtime = 5000;
sniper.logs = 'some-channel-id';
sniper.pokeprefix = '-';
sniper.botprefix = '>';
sniper.playing = 'Fortnite';
sniper.token = 'your-user-token';
sniper.owner = 'your-discord-id';

// Text to spam

sniper.words = [
    "test1",
    "test2",
    "test3",
    "test4"
];

// Pokemon to snipe

sniper.list = {
    "https://www.pokecord.com/assets/kgXSBkJJPKDr.png": "celebi",
    "https://www.pokecord.com/assets/UlaeTRHTQKPZ.png": "sylveon",
    "https://www.pokecord.com/assets/kVhVHnuRGyXx.png": "abra",
    "https://www.pokecord.com/assets/cZwtyzSpoTGK.png": "mewtwo",
    "https://www.pokecord.com/assets/GOvTOLWUXLyi.png": "mew",
    "https://www.pokecord.com/assets/NKcRJRyzXtCs.png": "ho-oh",
    "https://www.pokecord.com/assets/roMQvSFJuVGc.png": "dratini",
    "https://www.pokecord.com/assets/rBzaKCSiotIE.png": "eevee",
    "https://www.pokecord.com/assets/qYyBjmtLqNJb.png": "lugia",
    "https://www.pokecord.com/assets/shlrBzJyKXCf.png": "snorlax",
    "https://www.pokecord.com/assets/HTUFeYOkaxJO.png": "omastar",
    "https://www.pokecord.com/assets/tABILovbRKFj.png": "articuno",
    "https://www.pokecord.com/assets/EZuvTLLhEpDT.png": "raikou",
    "https://www.pokecord.com/assets/VgFYcpQTuGcL.png": "entei",
    "https://www.pokecord.com/assets/uDGccLGDwfAr.png": "suicune",
    "https://www.pokecord.com/assets/cHMJOYWOrpfI.png": "latios",
    "https://www.pokecord.com/assets/cUlaoIUTYzze.png": "latias",
    "https://www.pokecord.com/assets/qwZjNWcRpYeL.png": "kyogre",
    "https://www.pokecord.com/assets/tsHyEzrFRvvf.png": "groudon",
    "https://www.pokecord.com/assets/dVGlPeBZiVWQ.png": "gengar",
    "https://www.pokecord.com/assets/EyrnISUymuXj.png": "dialga",
    "https://www.pokecord.com/assets/nkPKoCOJhjCQ.png": "palkia",
    "https://www.pokecord.com/assets/zLjZxfPivZxG.png": "giratina",
    "https://www.pokecord.com/assets/EtfoHCBPdbWf.png": "zygarde",
    "https://www.pokecord.com/assets/PzJhuXvooAxu.png": "jolteon",
    "https://www.pokecord.com/assets/WwEkVykHXvni.png": "flareon",
    "https://www.pokecord.com/assets/VHqyKhNEQFty.png": "umbreon",
    "https://www.pokecord.com/assets/rnjjaCzNDTVh.png": "vaporeon",
    "https://www.pokecord.com/assets/rhBoRNRwCIno.png": "espeon",
    "https://www.pokecord.com/assets/eVyEviGywEOl.png": "glaceon",
    "https://www.pokecord.com/assets/vHPNnLbWftdv.png": "leafeon",
    "https://www.pokecord.com/assets/bohDfKyJVhlQ.png": "shaymin",
    "https://www.pokecord.com/assets/lUUbmdNYWQGe.png": "rayquaza",
    "https://www.pokecord.com/assets/bWWexYtKUQBp.png": "chansey",
    "https://www.pokecord.com/assets/qWIjKKIExWHW.png": "marshadow",
    "https://www.pokecord.com/assets/pCQQZWewTILN.png": "magearna",
    "https://www.pokecord.com/assets/BcVcWlExuScw.png": "volcanion",
    "https://www.pokecord.com/assets/ysHnagYrnyDk.png": "hoopa",
    "https://www.pokecord.com/assets/iWZbnGuUnqPQ.png": "Diancie",
    "https://www.pokecord.com/assets/CLMXnAHoJBHz.png": "Arceus",
    "https://www.pokecord.com/assets/PymtoiCJkjfF.png": "Darkrai",
    "https://www.pokecord.com/assets/OhHdWsAIonRP.png": "Manaphy",
    "https://www.pokecord.com/assets/KFBEarCORUNx.png": "Deoxys",
    "https://www.pokecord.com/assets/mtKGpuxmLsNU.png": "Jirachi",
    "https://www.pokecord.com/assets/XAHqDsmsnYPy.png": "Xerneas",
    "https://www.pokecord.com/assets/PGCDPsKYozzb.png": "garchomp",
    "https://www.pokecord.com/assets/BQlppBYsqWJX.png": "regirock",
    "https://www.pokecord.com/assets/PegdgOrDJauX.png": "regice",
    "https://www.pokecord.com/assets/FLBrevJUKtwb.png": "registeel",
    "https://www.pokecord.com/assets/tegGYtnnnXrY.png": "uxie",
    "https://www.pokecord.com/assets/eZrtVXpOsXYD.png": "mesprit",
    "https://www.pokecord.com/assets/QsIWrEOWzdFZ.png": "azelf",
    "https://www.pokecord.com/assets/iqIDyvqbxkSK.png": "heatran",
    "https://www.pokecord.com/assets/cHXUuofxeSJe.png": "regigigas",
    "https://www.pokecord.com/assets/FYRxKEoKrDsn.png": "kyurem",
    "https://www.pokecord.com/assets/yUNhHsvuJSJd.png": "cresselia",
    "https://www.pokecord.com/assets/mGVUFalDTQCu.png": "cobalion",
    "https://www.pokecord.com/assets/tFnkfCFfHGeI.png": "terrakion",
    "https://www.pokecord.com/assets/dhJqIQArvMEW.png": "virizion",
    "https://www.pokecord.com/assets/BdBnEooMYXOy.png": "tornadus",
    "https://www.pokecord.com/assets/KnjGZlmuVNLD.png": "thundurus",
    "https://www.pokecord.com/assets/dAQPPuTcdnBu.png": "reshiram",
    "https://www.pokecord.com/assets/swDzioNyoHsd.png": "zekrom",
    "https://www.pokecord.com/assets/rDOWDgxkTBKN.png": "landorus",
    "https://www.pokecord.com/assets/BCkOKdujjXJL.png": "yveltal",
    "https://www.pokecord.com/assets/IPCdYBDsYZRO.png": "silvally",
    "https://www.pokecord.com/assets/nQXyvWqtwaCa.png": "tapu koko",
    "https://www.pokecord.com/assets/FZuKruLQPZDP.png": "tapu lele",
    "https://www.pokecord.com/assets/lEPrPfHAIMLa.png": "tapu bulu",
    "https://www.pokecord.com/assets/XSuqyqVXTHHb.png": "tapue fini",
    "https://www.pokecord.com/assets/eYbkjWOSQYGT.png": "cosmog",
    "https://www.pokecord.com/assets/EzQRANYAtxmE.png": "cosmoem",
    "https://www.pokecord.com/assets/ukhkOXgNulEK.png": "solgaleo",
    "https://www.pokecord.com/assets/rmKkFJEJvHIk.png": "lunala",
    "https://www.pokecord.com/assets/mfRYgHJuvUUT.png": "necrozma",
    "https://www.pokecord.com/assets/psVyZGhxJJYF.png": "phione",
    "https://www.pokecord.com/assets/gmypxntMuvAg.png": "meloetta",
    "https://www.pokecord.com/assets/jpTSifixFERC.png": "salamence",
    "https://www.pokecord.com/assets/tABILovbRKFj.png": "articuno",
    "https://www.pokecord.com/assets/jrtwAZnqbchL.png": "zapdos",
    "https://www.pokecord.com/assets/eZkYQHqyjWHF.png": "moltres",
};
// Logging in to discord

client.login(sniper.token);

client.on('ready', () => {
    client.user.setGame(sniper.playing);
    client.user.setStatus('online');
});

// Spamming to level pokemon and generate spawns

if (sniper.enablespam == true) {
    setInterval(function() {
        return client.channels.get(sniper.spam[Math.floor(Math.random() * sniper.spam.length)]).send(sniper.words[Math.floor(Math.random() * sniper.words.length)]);
    }, sniper.spamtime);
}


client.on('message', (message) => {

    // The sniper

    if (message.author.id == '365975655608745985' && message.channel.id == sniper.spawn && sniper.enablecatch == true) {
        if (message.embeds[0]) {
            var embed = message.embeds[0];
            if (embed.image) {
                if (sniper.list[embed.image.url]) {
                    message.channel.send(sniper.pokeprefix + "catch " + sniper.list[embed.image.url]);
                    if (sniper.enablelogs == true) {
                        return client.channels.get(sniper.logs).send('**WooHoo!** I just caught a __**' + sniper.list[embed.image.url] + '**__ [' + new Date().toLocaleString() + ']');
                    }
                } else {
                    return message.channel.send('Skipping..');
                }
            }
        }
    }

    // Owner Commands (Uses instance ID)

    if (message.author.id == sniper.owner) {

        const args = message.content.slice(sniper.botprefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();

        if (message.content.startsWith(sniper.botprefix + 'info') && args[0] == sniper.instance) {
            return message.channel.send(sniper.pokeprefix + "info");
        }

        if (message.content.startsWith(sniper.botprefix + 'pokemon') && args[0] == sniper.instance) {
            return message.channel.send(sniper.pokeprefix + "pokemon");
        }

        if (message.content.startsWith(sniper.botprefix + 'select') && args[0] == sniper.instance) {
            return message.channel.send(sniper.pokeprefix + "select " + args[1]);
        }

        if (message.content.startsWith(sniper.botprefix + 'trade') && args[0] == sniper.instance) {
            return message.channel.send(sniper.pokeprefix + "trade <@" + sniper.owner + ">");
        }

        if (message.content.startsWith(sniper.botprefix + 'add')) {
            return message.channel.send(sniper.pokeprefix + "p add " + args[0]);
        }

        if (message.content.startsWith(sniper.botprefix + 'confirm')) {
            return message.channel.send(sniper.pokeprefix + "confirm");
        }

    }

});
