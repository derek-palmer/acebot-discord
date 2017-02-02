require('dotenv').config()

const Discord = require('discord.js');
const bitbot = new Discord.Client();

bitbot.on('ready', () => {
  console.log('I am ready!');
});

bitbot.on('message', message => {
  if(message.author.bot) return;
  if (message.content === '!ping') {
    message.reply('pong');
  }
});

bitbot.on('message', message => {
  if(message.author.bot) return;
  if (message.content === '!bitcoin') {
    message.reply('This functionality is not ready yet, please be patient.');
  }
});


bitbot.login(process.env.LOGIN_TOKEN);
