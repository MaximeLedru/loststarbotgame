const Discord = require('discord.js');
const bot = new Discord.Client();
bot.login(process.env.TOKEN);

bot.on('ready', () => {
    bot.user.setActivity("LOST STAR");
    console.log('Le bot est prêt pour être utilisé !');
});
bot.on('message', message => {
    if (message.content === '!beta') {
        message.reply('Le jeu est encore en développement et donc les inscriptions pour y participer ne sont pas encore ouvert.');
    }
});
bot.on('message', message => {

        if (message.content === '!clear') {
            message.react("👍")
            message.channel.bulkDelete(100);
            message.reply('Les messages ont été supprimés.');
        
    }
});
bot.on('message', message => {
    if (message.content === '!site' || message.content === '!web') {
        message.reply('Site de Spatial-Studio : https://spatial-studio.com/');
    }
});
bot.on('message', message => {
    if (message.content === '!help' || message.content === '!aide') {
        message.react("👍")
        message.author.send("Commandes :\n!site & !web : affiche le lien du site.\n!beta : commande pour s'inscrire à la bêta\n !twitter : affiche le compte twitter");
    }
});

//Message bienvenue
bot.on('guildMemberAdd', member => {
    member.guild.channels.get('460767412430700544').send("Bienvenue sur le serveur **" + member+"** ! \n\n\n🇫🇷🇫🇷 **Fançais**🇫🇷🇫🇷 \n\nVous êtes bien sur le Discord officiel du groupe français de création de jeux vidéo **Spatial-Studio**. \n\n**Site Web :** https://spatial-studiocom/\n\n\n\n\n🇬🇧🇬🇧**English**🇬🇧🇬🇧 \n\nYou are on the official Discord of the French video game group **Spatial-Studio**. \n\n**Website :** https://spatial-studiocom/");
});

bot.on('guildMemberRemove', member => {
    member.guild.channels.get('460767412430700544').send(member + " a quitté le serveur. :'(/n"+member+" has left the server. :'(");
});
