# AFK VC Bots Project

## Overview
This project creates multiple Discord bots that automatically join a voice channel and stay AFK inside it.

## Features
- Supports multiple bots (not just one)
- Lightweight and simple structure
- Built with discord.js v14

---

## Setup Instructions

### 1. Install Node.js
Download Node.js LTS version:
https://nodejs.org

---

### 2. Install dependencies
open the terminal in project folder and run:

```
npm install
```

---

### 3. Configure the bots

Open `config.json` and fill in:

- guildId → Your Discord server ID 
(right click on server and press copy server ID)

- voiceChannelId → The voice channel ID where bots will join
(right click the voice channel you want and press copy channel ID)

- bots → list of bot tokens

---

how to get bot token:
```
1. open https://discord.com/developers/home 
2. login with your discord account 
3. press applications from the bar on the left
4. press new  application
5. put any name you want  
6. press create
7. add "/bot" to the end of the url
8. scroll sown and find bot permissions then check Administrator 
9. then scroll up and press reset token and confirm it
8. enter your password
9. then delete "/bot" from the edn od the url and replace it with "/oauth2"
10. then scroll down and check bot the scroll and check Administrator
11. scroll down and find Generated URL and copy the url and open it and invite the bot to your server
12. then go to config.json and find " "token": "BOT_TOKEN_1", "
13. paste your token in "BOT_TOKEN_??"
14. and if you want to add one more afk bot do this instructions one more time 
```

---

### 4. Run the project
open the terminal in project folder and run:
```
npm start
```
