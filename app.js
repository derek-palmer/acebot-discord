require('dotenv').config();
var request = require('request');

const Discord = require('discord.js');
const acebot = new Discord.Client();

acebot.on('ready', () => {
  console.log('I am ready!');
});

//Ping - Pong
acebot.on('message', message => {
  if(message.author.bot) return;
  if (message.content === '!pong') {
    message.reply('ping');
  }
});

//Bitcoin
acebot.on('message', message => {
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

acebot.login(process.env.LOGIN_TOKEN);
