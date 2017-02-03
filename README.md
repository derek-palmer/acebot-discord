# Acebot ![Build Status](https://travis-ci.org/derek-palmer/acebot-discord.svg)
Bot for Discord Server

## Setup

###Clone repo:
```
git clone https://github.com/derek-palmer/acebot-discord.git
```

###Install dependencies:
```
npm install
```
###Your App/Bot, client ID and token can be created here:

https://discordapp.com/developers/applications/me/

###Add your bot to your discord server:

https://discordapp.com/oauth2/authorize?&client_id=YOUR_CLIENT_ID_HERE&scope=bot&permissions=0

Add your token to your .env file

##Start app:
```
nodemon app.js
```

Nodemon will keep wait for changes to the file system and automatically restart upon any changes.
