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

##Commands (work in progress):

*   !pong - Sends "ping" back to user
*   !bitcoin - Responds with current USD market price of bitcoin
*   !goat - Responds with random goat gif
*   !kitten - Responds with random kitten gif
*   !helpme - Bot help
*   !add - Adds numbers
*   !foo - Reponds with bar!
*   !triggered - Responds with favorite triggered gif.

If you're interested in what's next in the Acebot development queue, request permission to the Trello board:

https://trello.com/b/rQIyjvX8/acebot
