/* jshint esversion: 6 */

require('dotenv').config();

const request = require('request');
const giphy = require('giphy-api')();
const Discord = require('discord.js');

const acebot = new Discord.Client();
const prefix = process.env.PREFIX;

// Format date for last online
const dateFormat = require('dateformat');

const now = new Date();
const onlineNow = dateFormat(now, 'shortDate');
const updatedDate = `${dateFormat(now, 'shortDate')} at ${dateFormat(now, 'shortTime')}`;

// Client Events
acebot.on('ready', () => {
  console.log('I am ready, gimmie some commands!!');
  acebot.user.setStatus('online', `Last Restart: ${onlineNow}`).catch(console.error);
});

acebot.on('channelPinsUpdate', (channel) => {
  channel.send(`The pins for **${channel.name}** have been updated on ${updatedDate}`).catch(console.error);
});

acebot.on('channelCreate', (channel) => {
  console.log(`A ${channel.type} channel by the name of ${channel.name} was created ${channel.createdAt} with the ID of ${channel.id}`);
  channel.send(`Successfully created this channel on ${updatedDate}.`).catch(console.error);
});

acebot.on('channelDelete', (channel) => {
  console.log(`A ${channel.type} channel by the name of ${channel.name} was successfully deleted on ${updatedDate}.`);
});

// Message handler
acebot.on('message', (message) => {
  if (message.author.bot) {
    return;
  }
  if (!message.content.startsWith(prefix)) {
    return;
  }

  const args = message.content.split(' ').slice(1);
  const AdminRole = message.guild.roles.find('name', 'Admin');
  let result = args.join(' ');

  let command = message.content.split(' ')[0];
  command = command.slice(prefix.length).toLowerCase();
  console.log(command);

  // Add numbas - do maths
  if (command === 'add') {
    const numArray = args.map(n => parseInt(n, 10));
    const total = numArray.reduce((p, c) => p + c);
    message.channel.send(total).catch(console.error);
  }
  // Help
  if (command === 'helpme') {
    message.reply("\n\nCommands:\n\n**!ping** - Sends 'pong' back to user\n\n**!btc** - Responds with current USD market price of bitcoin\n\n**!eth** - Responds with current USD market price of ethereum\n\n**!ltc** - Responds with current USD market price of litecoin\n\n**!goat** - Responds with random goat gif\n\n**!kitten** - Responds with random kitten gif\n\n**!helpme** - Bot help\n\n**!add** - Adds numbers; Example '!add 5 5 5' Total = 15 \n\n**!foo** - Responds with 'bar!' if you're an Admin.\n\n**!triggered** - Responds with favorite triggered gif.\n\n**!brule** - Responds with random Steve Brule gif.\n\n**!bringo** - Responds with favorite Steve Brule bringo gif.\n\n**!bow** - Responds with favorite James Franco bow gif.\n\n**!hue** - Responds with random HueHueHue gif.").catch(console.error);
  }
  // Ping - Pong
  if (command === 'ping') {
    message.channel.send('Pong!').catch(console.error);
  }
  // Foo - Bar - locked down to Admin Role only
  if (command === 'foo') {
    if (message.member.roles.has(AdminRole.id)) {
      message.channel.send('bar!').catch(console.error);
    } else {
      message.channel.send('Hah, you noob. You don`t have access to that command!').catch(console.error);
    }
  }
  // Bitcoin
  if (command === 'btc') {
    request('https://api.coinbase.com/v2/prices/BTC-USD/spot', (error, response, body) => {
      if (!error && response.statusCode === 200) {
        const btc = JSON.parse(body);
        const USD = btc.data.amount; // Set USD to the latest USD bitcoin price
        message.reply(`the current Bitcoin market price is: $ ${USD} USD`).catch(console.error); // Send price to user that requested price
      }
    });
  }
  // Litecoin
  if (command === 'ltc') {
    request('https://api.coinbase.com/v2/prices/LTC-USD/spot', (error, response, body) => {
      if (!error && response.statusCode === 200) {
        const ltc = JSON.parse(body);
        const USD = ltc.data.amount; // Set USD to the latest USD litecoin price
        message.reply(`the current Litecoin market price is: $ ${USD} USD`).catch(console.error); // Send price to user that requested price
      }
    });
  }
  // Ethereum
  if (command === 'eth') {
    request(' https://api.coinbase.com/v2/prices/ETH-USD/spot', (error, response, body) => {
      if (!error && response.statusCode === 200) {
        const eth = JSON.parse(body);
        const USD = eth.data.amount; // Set USD to the latest USD ethereum price
        message.reply(`the current Ethereum market price is: $ ${USD} USD`).catch(console.error); // Send price to user that requested price
      }
    });
  }
  // Random goat gif
  if (command === 'goat') {
    // Search with options using callback
    giphy.random({
      tag: 'goat',
    }, (err, res) => {
      // Res contains gif data!
      const goatURL = res.data.image_url;
      message.channel.send(goatURL, '', ':goat: | **Here is your random goat:**').catch(console.error);
    });
  }
  // Random cat gif
  if (command === 'kitten') {
    // Search with options using callback
    giphy.random({
      tag: 'kitten',
    }, (err, res) => {
      // Res contains gif data!
      const kittenURL = res.data.image_url;
      message.channel.send(kittenURL, '', ':cat2: | **Here is your random kitten:**').catch(console.error);
    });
  }
  // Steve Brule - Bringo Gif
  if (command === 'bringo') {
    message.channel.send('https://media.giphy.com/media/xLsaBMK6Mg8DK/giphy.gif').catch(console.error);
  }
  // Jumping Doge Gif
  if (command === 'imback') {
    message.channel
      .send('https://i.imgur.com/wmba9uw.gifv')
      .catch(console.error);
  }
  // Zoop emojis
  if (command === 'zoop') {
    message.channel
      .send(':point_right: :sunglasses: :point_right:')
      .catch(console.error);
  }
  // Triggered Gif
  if (command === 'triggered') {
    message.channel.send('https://media.giphy.com/media/vk7VesvyZEwuI/giphy.gif').catch(console.error);
  }
  // Bow Gif
  if (command === 'bow') {
    message.channel.send('https://media3.giphy.com/media/uvqkm9ip7mNvq/giphy.gif').catch(console.error);
  }
  // tongue Gif
  if (command === 'tongue') {
    message.channel.send('https://media.giphy.com/media/yxPLEa1MTvj7TErGp5/giphy.gif').catch(console.error);
  }
  // wat Gif
  if (command === 'wat') {
    message.channel.send('https://media.giphy.com/media/oDK8A6xUNjD2M/giphy.gif').catch(console.error);
  }
  // conan Gif
  if (command === 'conan') {
    message.channel.send('http://giphygifs.s3.amazonaws.com/media/SoBfbf8QGWzaU/giphy.gif').catch(console.error);
  }
  // steve erwin Gif
  if (command === 'steve') {
    message.channel.send('https://media.giphy.com/media/3oEjHFbOJ4DzYeZM6k/giphy.gif').catch(console.error);
  }
  // Random Steve Brule gif
  if (command === 'brule') {
    // Search with options using callback
    giphy.random({
      tag: 'steve brule',
    }, (err, res) => {
      // Res contains gif data!
      const bruleURL = res.data.image_url;
      message.channel.send(bruleURL, '', '**Here is your random Steve Brule gif:**').catch(console.error);
    });
  }
  // HueHueHue Gif
  if (command === 'hue') {
    // Search with options using callback
    giphy.random({
      tag: 'huehuehue',
    }, (err, res) => {
      // Res contains gif data!
      const hueURL = res.data.image_url;
      message.channel.send(hueURL, '', '**Here is your random HueHueHue gif:**').catch(console.error);
    });
  }
  // Set status
  if (command === 'setstatus') {
    if (!result) {
      result = 'online';
    }
    acebot.user.setStatus(result).catch(console.error);
  }
  // Set game
  if (command === 'setgame') {
    if (message.member.roles.has(AdminRole.id)) {
      if (!result) {
        result = null;
      }
      acebot.user.setGame(result).catch(console.error);
    } else {
      message.channel.send('Hah, you noob. You don`t have access to that command!').catch(console.error);
    }
  }
}); // End message handler

acebot.login(process.env.LOGIN_TOKEN);
