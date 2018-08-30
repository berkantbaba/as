const Discord = require('discord.js');
const bot = new Discord.Client();
const RichEmbed = new Discord.RichEmbed();
var fs = require('fs');

// -->COMMANDS<--

bot.on('guildMemberAdd',member =>{
    member.send('** :trident: Lonely Kingdom ve Fearless Sunucusuna Dvetlisiniz:trident: PROJESI**: https://discord.gg/NwYf85s https://discord.gg/zruSq2h\n**COVER**'https://gph.is/2vXgvnt );

    //member.guild.defaultChannel.sendmessage(`Welcome "${member.user.username}"! Be sure to set your platform by typing "!role"`);

});


bot.on('guildMemberRemove', member=>{

});



bot.on('ready',()=> {
console.log('NEGRONN');

});

bot.login(process.env.BOT_TOKEN);
