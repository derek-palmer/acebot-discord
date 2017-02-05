/*jshint esversion: 6 */
require('dotenv').config();
var request = require('request');

const Discord = require('discord.js');
const acebot = new Discord.Client();
const config = require("./config.json");
const prefix = config.prefix;

//Notify when ready
acebot.on('ready', () => {
    console.log('I am ready, gimmie some commands!!');
});

//Welcome new user and mention them
acebot.on("guildMemberAdd", member => {
    let guild = member.guild;
    guild.defaultChannel.sendMessage(`Welcome to the Aceholes! ${member.user}`);
});

//Log when bot is added to new discord server
acebot.on("guildCreate", guild => {
    console.log(`New guild added : ${guild.name}, owned by ${guild.owner.user.username}`);
});

//Give role when playing World of Warcraft
acebot.on("presenceUpdate", (oldMember, newMember) => {
    let guild = newMember.guild;
    let playWoW = guild.roles.find("name", "Playing World of Warcraft");
    if (!playWoW) return;
    if (newMember.user.presence.game && newMember.user.presence.name === "World of Warcraft") {
        newMember.addRole(playWoW).catch(console.error);
    } else if (!newMember.user.presence.game && newMember.roles.has(playWoW.id)) {
        newMember.removeRole(playWow).catch(console.error);
    }
});

acebot.on('message', message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
    console.log(command);

    //Add numbas - do maths
    let args = message.content.split(" ").slice(1);
    if (command === "add") {
        let numArray = args.map(n => parseInt(n));
        let total = numArray.reduce((p, c) => p + c);
        message.channel.sendMessage(total).catch(console.error);
    }
    //Help
    if (command === 'helpme') {
        message.reply("help? You don't need help.").catch(console.error);
    }
    //Ping - Pong
    if (command === 'pong') {
        message.channel.sendMessage('ping').catch(console.error);
    }
    //Foo - Bar - locked down to Admin Role only
    if (command === 'foo') {
        let AdminRole = message.guild.roles.find("name", "Admin");
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
                console.log(body); //Show output in JSON
                var result = JSON.parse(body); //Parse JSON Result
                var USD = result.USD.last; //Set USD variable to the latest USD bitcoin price
                console.log(USD); //Show price in console
                message.reply(`the current Bitcoin market price is: $ ${USD} USD`).catch(console.error); //Send price to user that requested price
            }
        });
    }
});

acebot.login(process.env.LOGIN_TOKEN);
