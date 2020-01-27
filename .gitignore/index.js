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
