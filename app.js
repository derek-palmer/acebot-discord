/*jshint esversion: 6 */
(function() {
  "use strict";
  // this function is strict...
}());

require('dotenv').config();
const request = require('request');
const giphy = require('giphy-api')();

const Discord = require('discord.js');
const acebot = new Discord.Client();
const config = require("./config.json");
const prefix = config.prefix;

//Format date for last online
var dateFormat = require('dateformat');
var now = new Date();
var online_now = dateFormat(now, 'shortDate');

//Client Events
acebot.on('ready', (channel) => {
  console.log('I am ready, gimmie some commands!!');
  acebot.user.setGame(`Last Restart: ${online_now}`).catch(console.error);
});

acebot.on('disconnect', () =>{
  console.log(`You have been disconnected at ${new Date()}`);
});

acebot.on('reconnecting', () => {
  console.log(`Reconnecting at ${new Date()}`);
});

acebot.on('channelPinsUpdate', (channel, time) => {
  channel.guild.defaultChannel.sendMessage(`The pins for **${channel.name}** have been updated at ${time}`).catch(console.error);
});

acebot.on('channelCreate', channel => {
  console.log(`A ${channel.type} channel by the name of ${channel.name} was created ${channel.createdAt} with the ID of ${channel.id}`);
  channel.guild.defaultChannel.sendMessage(`Channel: **${channel.name}** was created`);
  if (channel.type === 'text') return channel.sendMessage('You successfully created this channel.').catch(console.error);
});

acebot.on('channelDelete', channel => {
  console.log(`A ${channel.type} by the name of ${channel.name} was successfully deleted.`);
  channel.guild.defaultChannel.sendMessage(`Channel: **${channel.name}** was deleted`).catch(console.error);
});

//Message handler
acebot.on('message', message => {
  if (message.author.bot)
    return;
  if (!message.content.startsWith(prefix))
    return;

  let args = message.content.split(" ").slice(1);
  let AdminRole = message.guild.roles.find("name", "Admin");
  var result = args.join(' ');

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length).toLowerCase();
  console.log(command);

  //Add numbas - do maths
  if (command === "add") {
    let numArray = args.map(n => parseInt(n));
    let total = numArray.reduce((p, c) => p + c);
    message.channel.sendMessage(total).catch(console.error);
  }
  //Help
  if (command === 'helpme') {
    message.reply("\n\nCommands:\n\n**!pong** - Sends 'ping' back to user\n\n**!bitcoin** - Responds with current USD market price of bitcoin\n\n**!goat** - Responds with random goat gif\n\n**!kitten** - Responds with random kitten gif\n\n**!helpme** - Bot help\n\n**!add** - Adds numbers; Example '!add 5 5 5' Total = 15 \n\n**!foo** - Responds with 'bar!' if you're an Admin.\n\n**!triggered** - Responds with favorite triggered gif.\n\n**!brule** - Responds with randome Steve Brule gif.\n\n**!bringo** - Responds with favorite Steve Brule bringo gif.\n\n**!bow** - Responds with favorite James Franco bow gif.\n\n**!hue** - Responds with favorite HueHueHue gif.").catch(console.error);
  }
  //Ping - Pong
  if (command === 'pong') {
    message.channel.sendMessage(`Ping! \`${Date.now() - message.createdTimestamp} ms\``).catch(console.error);
  }
  //Foo - Bar - locked down to Admin Role only
  if (command === 'foo') {
    if (message.member.roles.has(AdminRole.id)) {
      message.channel.sendMessage('bar!').catch(console.error);
    } else {
      message.channel.sendMessage(`Hah, you noob. You don't have access to that command!`).catch(console.error);
    }
  }
  //Bitcoin
  if (command === 'bitcoin') {
    request('https://blockchain.info/ticker', function(error, response, body) {
      if (!error && response.statusCode == 200) {
        const result = JSON.parse(body);
        const USD = result.USD.last; //Set USD to the latest USD bitcoin price
        message.reply(`the current Bitcoin market price is: $ ${USD} USD`).catch(console.error); //Send price to user that requested price
      }
    });
  }
  //Random goat gif
  if (command === 'goat') {
    // Search with options using callback
    giphy.random({
      tag: 'goat'
    }, function(err, res) {
      // Res contains gif data!
      const goatURL = res.data.image_url;
      message.channel.sendFile(goatURL, '', ':goat: | **Here is your random goat:**').catch(console.error);
    });
  }
  //Random cat gif
  if (command === 'kitten') {
    // Search with options using callback
    giphy.random({
      tag: 'kitten'
    }, function(err, res) {
      // Res contains gif data!
      const kittenURL = res.data.image_url;
      message.channel.sendFile(kittenURL, '', ':cat2: | **Here is your random kitten:**').catch(console.error);
    });
  }
  //Steve Brule - Bringo Gif
  if (command === 'bringo') {
    message.channel.sendFile('https://media.giphy.com/media/xLsaBMK6Mg8DK/giphy.gif').catch(console.error);
  }
  //Triggered Gif
  if (command === 'triggered') {
    message.channel.sendFile('https://media.giphy.com/media/vk7VesvyZEwuI/giphy.gif').catch(console.error);
  }
  //James Franco Bow Gif
  if (command === 'bow') {
    message.channel.sendFile('assets/bow.gif').catch(console.error);
  }
  //Random Steve Brule gif
  if (command === 'brule') {
    // Search with options using callback
    giphy.random({
      tag: 'steve brule'
    }, function(err, res) {
      // Res contains gif data!
      const bruleURL = res.data.image_url;
      message.channel.sendFile(bruleURL, '', '**Here is your random Steve Brule gif:**').catch(console.error);
    });
  }
  //HueHueHue Gif
  if (command === 'hue') {
    // Search with options using callback
    giphy.random({
      tag: 'huehuehue'
    }, function(err, res) {
      // Res contains gif data!
      const hueURL = res.data.image_url;
      message.channel.sendFile(hueURL, '', '**Here is your random HueHueHue gif:**').catch(console.error);
    });
  }
  //Set status
  if (command === 'setstatus') {
      if (!result) {
      result = 'online';
    }
    acebot.user.setStatus(result).catch(console.error);
  }
  // Set game
  if (command === 'setgame'){
    if (message.member.roles.has(AdminRole.id)) {
      if (!result){
        result = null;
      }
      acebot.user.setGame(result).catch(console.error);
    } else {
      message.channel.sendMessage(`Hah, you noob. You don't have access to that command!`).catch(console.error);
    }
  }

}); //End message handler

acebot.login(process.env.LOGIN_TOKEN);
