import client from './client'
import embed from './embed.js'

client.on('message', message => {
    if(message.content == '-hc') {
      client.channels.get("474123875928768513").send("@here We are starting a headcount! React with :shatters: to participate and :shatterskey: if you have a key and are willing to pop!")
    }
    if (message.content == '-afk') {
      message.channel.send({
        embed
      })
    }
  })