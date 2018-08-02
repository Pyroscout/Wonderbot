import client from './client'
import embed from './embed.js'

var afkCheck

client.on('message', readMessage)


async function readMessage(message) {
  if (message.content == '-hc') {
    const shattersKey = client.emojis.get("451191377599004672")
    client.channels.get("474123875928768513").send(`@here We are starting a headcount! React with ${shattersKey} to participate and :shatterskey: if you have a key and are willing to pop!`)
  }
  if (message.content == '-afk') {
    afkCheck = await message.channel.send({
      embed
    })
    afkCheck.react('💚')
  }
}