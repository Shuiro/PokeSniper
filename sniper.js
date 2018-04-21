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
    "https://www.pokecord.com/assets/kgXSBkJJPKDr.png": "Celebi",
    "https://www.pokecord.com/assets/UlaeTRHTQKPZ.png": "Sylveon",
    "https://www.pokecord.com/assets/GaHwiNbMfaxB.png": "Absol",
    "https://www.pokecord.com/assets/cZwtyzSpoTGK.png": "Mewtwo",
    "https://www.pokecord.com/assets/GOvTOLWUXLyi.png": "Mew",
    "https://www.pokecord.com/assets/NKcRJRyzXtCs.png": "Ho-oh",
    "https://www.pokecord.com/assets/roMQvSFJuVGc.png": "Dratini",
    "https://www.pokecord.com/assets/rBzaKCSiotIE.png": "Eevee",
    "https://www.pokecord.com/assets/qYyBjmtLqNJb.png": "Lugia",
    "https://www.pokecord.com/assets/shlrBzJyKXCf.png": "Snorlax",
    "https://www.pokecord.com/assets/HTUFeYOkaxJO.png": "Omastar",
    "https://www.pokecord.com/assets/tABILovbRKFj.png": "Articuno",
    "https://www.pokecord.com/assets/EZuvTLLhEpDT.png": "Raikou",
    "https://www.pokecord.com/assets/VgFYcpQTuGcL.png": "Entei",
    "https://www.pokecord.com/assets/uDGccLGDwfAr.png": "Suicune",
    "https://www.pokecord.com/assets/cHMJOYWOrpfI.png": "Latios",
    "https://www.pokecord.com/assets/cUlaoIUTYzze.png": "Latias",
    "https://www.pokecord.com/assets/qwZjNWcRpYeL.png": "Kyogre",
    "https://www.pokecord.com/assets/tsHyEzrFRvvf.png": "Groudon",
    "https://www.pokecord.com/assets/dVGlPeBZiVWQ.png": "Gengar",
    "https://www.pokecord.com/assets/EyrnISUymuXj.png": "Dialga",
    "https://www.pokecord.com/assets/nkPKoCOJhjCQ.png": "Palkia",
    "https://www.pokecord.com/assets/zLjZxfPivZxG.png": "Giratina",
    "https://www.pokecord.com/assets/EtfoHCBPdbWf.png": "Zygarde",
    "https://www.pokecord.com/assets/PzJhuXvooAxu.png": "Jolteon",
    "https://www.pokecord.com/assets/WwEkVykHXvni.png": "Flareon",
    "https://www.pokecord.com/assets/VHqyKhNEQFty.png": "Umbreon",
    "https://www.pokecord.com/assets/rnjjaCzNDTVh.png": "Vaporeon",
    "https://www.pokecord.com/assets/rhBoRNRwCIno.png": "Espeon",
    "https://www.pokecord.com/assets/eVyEviGywEOl.png": "Glaceon",
    "https://www.pokecord.com/assets/vHPNnLbWftdv.png": "Leafeon",
    "https://www.pokecord.com/assets/bohDfKyJVhlQ.png": "Shaymin",
    "https://www.pokecord.com/assets/lUUbmdNYWQGe.png": "Rayquaza",
    "https://www.pokecord.com/assets/KRSAMJTKhehv.png": "Blissey",
    "https://www.pokecord.com/assets/qWIjKKIExWHW.png": "Marshadow",
    "https://www.pokecord.com/assets/pCQQZWewTILN.png": "Magearna",
    "https://www.pokecord.com/assets/BcVcWlExuScw.png": "Volcanion",
    "https://www.pokecord.com/assets/ysHnagYrnyDk.png": "Hoopa",
    "https://www.pokecord.com/assets/iWZbnGuUnqPQ.png": "Diancie",
    "https://www.pokecord.com/assets/CLMXnAHoJBHz.png": "Arceus",
    "https://www.pokecord.com/assets/PymtoiCJkjfF.png": "Darkrai",
    "https://www.pokecord.com/assets/OhHdWsAIonRP.png": "Manaphy",
    "https://www.pokecord.com/assets/KFBEarCORUNx.png": "Deoxys",
    "https://www.pokecord.com/assets/mtKGpuxmLsNU.png": "Jirachi",
    "https://www.pokecord.com/assets/XAHqDsmsnYPy.png": "Xerneas",
    "https://www.pokecord.com/assets/PGCDPsKYozzb.png": "Garchomp",
    "https://www.pokecord.com/assets/BQlppBYsqWJX.png": "Regirock",
    "https://www.pokecord.com/assets/PegdgOrDJauX.png": "Regice",
    "https://www.pokecord.com/assets/FLBrevJUKtwb.png": "Registeel",
    "https://www.pokecord.com/assets/tegGYtnnnXrY.png": "Uxie",
    "https://www.pokecord.com/assets/eZrtVXpOsXYD.png": "Mesprit",
    "https://www.pokecord.com/assets/QsIWrEOWzdFZ.png": "Azelf",
    "https://www.pokecord.com/assets/iqIDyvqbxkSK.png": "Heatran",
    "https://www.pokecord.com/assets/cHXUuofxeSJe.png": "Regigigas",
    "https://www.pokecord.com/assets/FYRxKEoKrDsn.png": "Kyurem",
    "https://www.pokecord.com/assets/yUNhHsvuJSJd.png": "Cresselia",
    "https://www.pokecord.com/assets/mGVUFalDTQCu.png": "Cobalion",
    "https://www.pokecord.com/assets/tFnkfCFfHGeI.png": "Terrakion",
    "https://www.pokecord.com/assets/dhJqIQArvMEW.png": "Virizion",
    "https://www.pokecord.com/assets/BdBnEooMYXOy.png": "Tornadus",
    "https://www.pokecord.com/assets/KnjGZlmuVNLD.png": "Thundurus",
    "https://www.pokecord.com/assets/dAQPPuTcdnBu.png": "Reshiram",
    "https://www.pokecord.com/assets/swDzioNyoHsd.png": "Zekrom",
    "https://www.pokecord.com/assets/rDOWDgxkTBKN.png": "Landorus",
    "https://www.pokecord.com/assets/BCkOKdujjXJL.png": "Yveltal",
    "https://www.pokecord.com/assets/IPCdYBDsYZRO.png": "Silvally",
    "https://www.pokecord.com/assets/nQXyvWqtwaCa.png": "Tapu Koko",
    "https://www.pokecord.com/assets/FZuKruLQPZDP.png": "Tapu Lele",
    "https://www.pokecord.com/assets/lEPrPfHAIMLa.png": "Tapu Bulu",
    "https://www.pokecord.com/assets/XSuqyqVXTHHb.png": "Tapue Fini",
    "https://www.pokecord.com/assets/eYbkjWOSQYGT.png": "Cosmog",
    "https://www.pokecord.com/assets/EzQRANYAtxmE.png": "Cosmoem",
    "https://www.pokecord.com/assets/ukhkOXgNulEK.png": "Solgaleo",
    "https://www.pokecord.com/assets/rmKkFJEJvHIk.png": "Lunala",
    "https://www.pokecord.com/assets/mfRYgHJuvUUT.png": "Necrozma",
    "https://www.pokecord.com/assets/psVyZGhxJJYF.png": "Phione",
    "https://www.pokecord.com/assets/gmypxntMuvAg.png": "Meloetta",
    "https://www.pokecord.com/assets/jpTSifixFERC.png": "Salamence",
    "https://www.pokecord.com/assets/tABILovbRKFj.png": "Articuno",
    "https://www.pokecord.com/assets/jrtwAZnqbchL.png": "Zapdos",
    "https://www.pokecord.com/assets/eZkYQHqyjWHF.png": "Moltres",
    "https://www.pokecord.com/assets/jpZFhVGXfqLm.png": "Nihilego",
    "https://www.pokecord.com/assets/ANvAfwmkGRaB.png": "Buzzwole",
    "https://www.pokecord.com/assets/qsgvDVdRNzub.png": "Pheromosa",
    "https://www.pokecord.com/assets/NUZGOUliZbVp.png": "Xurkitree",
    "https://www.pokecord.com/assets/wWVViynlNwhq.png": "Celesteela",
    "https://www.pokecord.com/assets/BerOymYadVZb.png": "Kartana",
    "https://www.pokecord.com/assets/rRNgybNqrYHt.png": "Guzzlord",
    "https://www.pokecord.com/assets/CxNLfbLtZvMP.png": "Poipole",
    "https://www.pokecord.com/assets/bmmBRtRnAKMm.png": "Naganadel",
    "https://www.pokecord.com/assets/oXPJVtJJDCWO.png": "Stakataka",
    "https://www.pokecord.com/assets/kkWnZrvNFUht.png": "Blacephalon",
    "https://www.pokecord.com/assets/SVNIugrJFtLE.png": "Lucario",
    "https://www.pokecord.com/assets/QPtVRizQYUaO.png": "Riolu",
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
