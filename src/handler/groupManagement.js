const { default: Axios } = require('axios');
const fs = require('fs');
const moment = require('moment')
const time = moment(new Date()).format('HH:mm:ss DD/MM/YYYY')
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

module.exports = groupManagement = async (GroupSettingChange, Mimetype, MessageType, conn, update) => {


     const isGroupAllowed = JSON.parse(fs.readFileSync('./src/database/group.json'))

     const from = update.jid
     const people = update.participants[0]
     const action = update.action
     const fromMe = people == conn.user.jid ? true : false
     const conts = fromMe ? conn.user.jid : conn.contacts[people] || { notify: people.replace(/@.+/, '') } || people
     const pushname = fromMe ? conn.user.name : conts.notify || conts.vname || conts.name || people

     async function mengetik(dari) {
          await conn.updatePresence(dari, 'composing')
     }

     async function balas(dari, textnya) {
          mengetik(dari)
          conn.sendMessage(dari, textnya, MessageType.text);
     }
     async function sendDariUrl(dari, url, type, text) {
          if (!/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/gi.test(url)) return console.error(`Not a valid url!`)
          const caption = text || ''
          const buffData = await Axios.request({
               method: 'GET',
               url: url,
               responseType: 'arraybuffer',
               responseEncoding: 'binary'
          });
          conn.sendMessage(dari, buffData.data, type, { contextInfo: { mentionedJid: [people] }, caption: caption })
     }
     // console.log('dluar ', JSON.stringify(update, null, 2))
     const metaData = await conn.groupMetadata(from)
     if (!isGroupAllowed.includes(metaData.id)) return
     if (action == 'remove') {
          const strLeave = `@${people.replace(/@s.whatsapp.net/, '')} telah keluar dari grup ini 😔`
          conn.sendMessage(from, strLeave, MessageType.text, { contextInfo: { mentionedJid: [people] } })
     } else if (action == 'add') {
          const strAdd = `Selamat datang @${people.replace(/@s.whatsapp.net/, '')}, di grup ${metaData.subject} 😄${metaData.desc ? `\n\n${metaData.desc}` : ''}`
          conn.sendMessage(from, strAdd, MessageType.text, { contextInfo: { mentionedJid: [people] } })
     } else if (action == 'promote') {
          conn.sendMessage(from, `Jabatan @${people.replace(/@s.whatsapp.net/, '')} telah dinaikan menjadi admin. 😄`, MessageType.text, { contextInfo: { mentionedJid: [people] } })
     } else if (action == 'demote') {
          conn.sendMessage(from, `Jabatan @${people.replace(/@s.whatsapp.net/, '')} telah dihapus dari admin. 😔`, MessageType.text, { contextInfo: { mentionedJid: [people] } })
     }

}