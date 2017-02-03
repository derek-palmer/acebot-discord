require('dotenv').config()
var request = require('request');

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

bitbot.on('message', message => {
  if(message.author.bot) return;
  if (message.content === '!bitcoin-test') {
    request('https://blockchain.info/ticker', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body) //Show output
        var result = JSON.parse(body);
        console.log(result);
        var USD = result.USD.last;
        console.log(result.USD.last);
      }
    })
    message.reply.USD;
  }
});

bitbot.login(process.env.LOGIN_TOKEN);
