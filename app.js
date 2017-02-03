var env = require('dotenv').config()
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
    request('https://blockchain.info/ticker', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body) //Show output
        var result = JSON.parse(body); //Parse JSON Resultset
        console.log(result); // Spit out parsed ResultSet
        var USD = result.USD.last;
        console.log(USD);
        message.reply('the current Bitcoin market price is: $ ' + USD + ' USD');
      }
    })
  }
});

bitbot.login(process.env.LOGIN_TOKEN);
