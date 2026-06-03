# AFK VC Bots Project

## Overview
This project creates multiple Discord bots that automatically join a voice channel and stay AFK (idle) inside it.

## Features
- Supports multiple bots (not just one)
- Automatically joins a voice channel on startup
- Lightweight and simple structure
- Built with discord.js v14

---

## Setup Instructions

### 1. Install Node.js
Download Node.js LTS version:
https://nodejs.org

---

### 2. Install dependencies
Open terminal in project folder and run:

```
npm install
```

---

### 3. Configure the bots

Open `config.json` and fill in:

- guildId → Your Discord server ID
- voiceChannelId → The voice channel ID where bots will join
- bots → list of bot tokens

Example:
```json
"bots": [
  { "token": "TOKEN1", "name": "AFK-1" },
  { "token": "TOKEN2", "name": "AFK-2" }
]
```

---

### 4. Run the project

```
npm start
```

---

## How to create multiple AFK bots

Instead of running one bot only, this system allows you to run multiple bots from a single project.

### Why use multiple bots?
- Fill voice channel slots
- Simulate activity
- Keep channel always occupied

### How it works
Each bot has:
- Its own token
- Its own login session
- Same behavior: join VC and stay AFK

You simply add more entries inside `config.json`.

---

## Notes
- Make sure all bots are invited to your server
- Each bot must have permission to join voice channels
- Do not spam too many bots to avoid Discord limits
