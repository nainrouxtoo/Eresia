const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = require('discord-prefix')
prefix.setPrefix('!')

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

client.login(process.env.TOKEN);
