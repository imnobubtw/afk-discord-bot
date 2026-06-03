const { Client, GatewayIntentBits } = require('discord.js');
const { joinVoiceChannel } = require('@discordjs/voice');
const config = require('./config.json');

function startBot(botConfig) {
  const client = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildVoiceStates
    ]
  });

  client.once('ready', () => {
    console.log(`${botConfig.name} logged in as ${client.user.tag}`);

    const connection = joinVoiceChannel({
      channelId: config.voiceChannelId,
      guildId: config.guildId,
      adapterCreator: client.guilds.cache.get(config.guildId).voiceAdapterCreator,
      selfDeaf: true,
      selfMute: true
    });

    console.log(`${botConfig.name} joined voice channel`);
  });

  client.login(botConfig.token);
}

for (const bot of config.bots) {
  startBot(bot);
}
