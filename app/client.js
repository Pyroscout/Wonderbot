
require('dotenv').config()
import Discord from 'discord.js'

const client = new Discord.Client();

client.login(process.env.BOT_TOKEN);

module.exports = client