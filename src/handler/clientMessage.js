"use strict";


var fs = require("fs");
var request = require('request')
var chalk = require('chalk')
var moment = require('moment')
var { exec } = require('child_process')
var util = require('util');
var delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
var time = moment(new Date()).format('HH:mm:ss DD/MM/YYYY')

function ERRLOG(e) {
     console.log(
          chalk.redBright('[ ANCHT ] '),
          moment(new Date()).format('HH:mm:ss DD/MM/YYYY'),
          chalk.bgGreenBright("name: " + e.name + " message: " + e.message)
     );
}

function getRemaining(endtime) {
     const total = Date.parse(endtime) - Date.parse(new Date());
     const seconds = Math.floor((total / 1000) % 60);
     const minutes = Math.floor((total / 1000 / 60) % 60);
     const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
     const days = Math.floor(total / (1000 * 60 * 60 * 24));

     return {
          total,
          days,
          hours,
          minutes,
          seconds,
     };
}


let handle;

module.exports = handle = async (
     Rstats,
     GroupSettingChange,
     Mimetype,
     MessageType,
     conn,
     hurtz,
     chat,
     clientsNow,
     isClientLog
) => {
     try {
          if (hurtz) Rstats.stop()
          if (hurtz.key.remoteJid == "status@broadcast") { return; }

          if (!hurtz.message) return;

          const time = moment(hurtz.messageTimestamp.low * 1000).format('HH:mm:ss DD/MM/YYYY')
          let settings = JSON.parse(fs.readFileSync('./src/settings.json'))
          const from = hurtz.key.remoteJid;
          const konten = JSON.stringify(hurtz.message, null, 2);
          const { text, extendedText, audio, video, document, image } = MessageType
          const self = hurtz.key.fromMe;
          const isGroup = from.endsWith("@g.us");
          let type = Object.keys(hurtz.message)[0];
          type =
               type === "extendedTextMessage" &&
                    hurtz.message.extendedTextMessage.text.includes("@") ?
                    (type = "mentionedText") :
                    type;
          // typed = type === 'extendedTextMessage' && Object.keys(hurtz.message.extendedTextMessage)[0].includes('matchedText') ? type = 'thumbnailText' : type
          let hurtzText = hurtz
          if (type == "ephemeralMessage") {
               type = Object.keys(hurtz.message.ephemeralMessage.message)
               hurtzText = hurtz.message.ephemeralMessage
          }
          const body =
               type == "conversation" ?
                    hurtzText.message.conversation :
                    type == "mentionedText" ?
                         hurtzText.message.extendedTextMessage.text :
                         type == "extendedTextMessage" ?
                              hurtzText.message.extendedTextMessage.text :
                              type == "imageMessage" ?
                                   hurtzText.message.imageMessage.caption :
                                   type == "stickerMessage" ?
                                        "Sticker" :
                                        type == "audioMessage" ?
                                             "Audio" :
                                             type == "videoMessage" ?
                                                  hurtzText.message.videoMessage.caption :
                                                  type == "documentMessage" ?
                                                       "document" : type == "contactMessage" ? "Contact" :
                                                            "[ NOT FOUND BODY @MechaBOT ]"; //hurtzText
          const bodyAsak = body.substr(0, 40).split('\n')[0]
          const args = body.split(/ +/g);
          const cmd = body.toLowerCase().split(" ")[0] || "";
          const prf = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?@#$%^&.\/\\©^]/.test(cmd) ?
               cmd.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?@#$%^&.\/\\©^]/gi) :
               "-";
          const anticol = /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g;
          const isMedia = type === "imageMessage" || type === "videoMessage";
          const isQuotedImage =
               type == "extendedTextMessage" && konten.includes("imageMessage");
          const isQuotedVideo =
               type == "extendedTextMessage" && konten.includes("videoMessage");
          const isQuotedSticker =
               type == "extendedTextMessage" && konten.includes("stickerMessage");
          const isQuotedAudio =
               type == "extendedTextMessage" && konten.includes("audioMessage");
          let typeQuoted =
               type == "extendedTextMessage" && hurtz.message.extendedTextMessage ? Object.keys(hurtz.message.extendedTextMessage.contextInfo ? hurtz.message.extendedTextMessage.contextInfo.quotedMessage ? hurtz.message.extendedTextMessage.contextInfo.quotedMessage : { mentionedText: "Created By MRHRTZ", } : { thumbnailMessage: "MRHRTZ Jangan diganti error ntar nangid :v", })[0] : type;

          let hurtzMediaData = type == "extendedTextMessage" && Object.keys(JSON.parse(JSON.stringify(hurtz).replace("quotedM", "m")).message) != 'ephemeralMessage' ? JSON.parse(JSON.stringify(hurtz).replace("quotedM", "m")).message.extendedTextMessage.contextInfo : hurtzText
          if (type == "extendedTextMessage" && Object.keys(JSON.parse(JSON.stringify(hurtz).replace("quotedM", "m")).message) == 'ephemeralMessage' && JSON.parse(JSON.stringify(hurtz).replace("quotedM", "m")).message.ephemeralMessage.message.extendedTextMessage.contextInfo.message) {
               typeQuoted = Object.keys(JSON.parse(JSON.stringify(hurtz).replace("quotedM", "m")).message.ephemeralMessage.message.extendedTextMessage.contextInfo.message)
               hurtzMediaData = JSON.parse(JSON.stringify(hurtz).replace("quotedM", "m")).message.ephemeralMessage.message.extendedTextMessage.contextInfo
               // console.log(JSON.parse(JSON.stringify(hurtz).replace("quotedM", "m")).message.ephemeralMessage.message.extendedTextMessage.contextInfo)
          }
          const mediaData =
               type == "extendedTextMessage" ?
                    typeQuoted == "thumbnailMessage" ?
                         hurtzText :
                         hurtzMediaData :
                    hurtzText;
          let typesWA = ["conversation", "extendedTextMessage", "mentionedText", "imageMessage", "stickerMessage", "audioMessage", "videoMessage", "documentMessage", "thumbnailMessage"]
          const bodyQuoted = typesWA.includes(type === 'extendedTextMessage' && hurtzMediaData ? Object.keys(hurtzMediaData.message ? hurtzMediaData.message : { MRHRTZ: 'okey' })[0] : 'none') ?
               typeQuoted == "conversation" ?
                    hurtzMediaData.message.conversation :
                    typeQuoted == "extendedTextMessage" ?
                         hurtzMediaData.message.extendedTextMessage.text :
                         typeQuoted == "mentionedText" ?
                              hurtzMediaData.message.extendedTextMessage.text :
                              typeQuoted == "imageMessage" ?
                                   hurtzMediaData.message.imageMessage.caption :
                                   typeQuoted == "stickerMessage" ?
                                        "Sticker" :
                                        typeQuoted == "audioMessage" ?
                                             "Audio" :
                                             typeQuoted == "videoMessage" ?
                                                  hurtzMediaData.message.videoMessage.caption :
                                                  typeQuoted == "documentMessage" ?
                                                       "document" :
                                                       typeQuoted == "thumbnailMessage" ?
                                                            hurtzMediaData.message :
                                                            '' : ''


          settings.Debug ? console.log(JSON.stringify(hurtz)) : "";
          let toggleCmd = false
          const isCmd = toggleCmd;
          const query = args.slice(1).join(" ");
          const sender = self ?
               conn.user.jid :
               isGroup ?
                    hurtz.participant :
                    hurtz.key.remoteJid;
          const botNumber = conn.user.jid;
          const noSym = /[-\s+]/g;
          const groupMetadata = isGroup ? await conn.groupMetadata(from) : "";
          const groupName = isGroup ? groupMetadata.subject : "";
          const groupId = isGroup ? groupMetadata.id : "";
          const isImageMsg = type == "imageMessage" ? true : false;
          const isStickerMsg = type == "stickerMessage" ? true : false;
          const isAudioMsg = type == "audioMessage" ? true : false;
          const isVideoMsg = type == "videoMessage" ? true : false;
          const nomerOwner = [settings.Owner, conn.user.jid]
          const isOwner = nomerOwner.includes(sender)
          const isOwnerGroup = isGroup ?
               (await conn.groupMetadata(from)).owner ==
                    sender.replace("@s.whatsapp.net", "@c.us") ?
                    true :
                    false :
               "";
          let expvipnum = [];

          let adminGroups = [];
          const metadata = isGroup ? await conn.groupMetadata(from) : "";
          const partc = metadata.participants ? metadata.participants : [];
          for (let adm of partc) {
               if (adm.isAdmin) {
                    adminGroups.push(adm.jid);
               }
          }
          const isAdmin = adminGroups.includes(sender);
          const isBotAdmin = adminGroups.includes(botNumber);
          const jid = sender;
          const conts = hurtz.key.fromMe ?
               conn.user.jid :
               conn.contacts[sender] || {
                    notify: sender.replace(/@.+/, ""),
               };
          const pushname = hurtz.key.fromMe ?
               conn.user.name :
               conts.notify || conts.vname || conts.name || "-";


          function customQuote(isi) {
               return {
                    key: {
                         remoteJid: "0@s.whatsapp.net",
                         fromMe: false,
                    },
                    message: {
                         conversation: isi,
                    },
               };
          }

          function toBuffer(url) {
               return new Promise((resolve, reject) => {
                    if (!/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/gi.test(url)) return console.error(`Not a valid url!`);
                    request({ url: url, encoding: null, }, (err, resp, buffer) => {
                         resolve(buffer)
                    })
               })
          }

          async function mengetik(dari) {
               await conn.chatRead(dari)
               await conn.updatePresence(dari, 'composing')
          }


          async function balasNp(dari, textnya) {
               mengetik(dari)
               conn.sendMessage(dari, textnya, text);
          }

          async function balas(dari, textnya) {
               mengetik(dari)
               conn.sendMessage(dari, textnya, text, {
                    quoted: hurtz,
               });
          }

          async function sendDariUrlNoReply(dari, url, type, text) {
               if (
                    !/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/gi.test(
                         url
                    )
               )
                    return console.error(`Not a valid url!`);
               await conn.updatePresence(dari, 'composing')
               const caption = text || "";
               request({
                    url: url,
                    encoding: null,
               },
                    async (err, resp, buffer) => {
                         conn.sendMessage(dari, buffer, type, {
                              quoted: {
                                   key: {
                                        remoteJid: "0@s.whatsapp.net",
                                        fromMe: false,
                                   },
                                   message: {
                                        conversation: `🇮🇩☠️ *ANCHT BY MRHRTZ* ☠️🇮🇩`,
                                   },
                              },
                              caption: caption,
                         });
                         await conn.updatePresence(dari, 'paused')
                    }
               );
          }

          async function sendDariUrl(dari, url, type, text) {
               if (
                    !/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/gi.test(
                         url
                    )
               )
                    return console.error(`Not a valid url!`);
               await conn.updatePresence(dari, 'composing')
               const caption = text || "";
               request({
                    url: url,
                    encoding: null,
               },
                    async (err, resp, buffer) => {
                         conn.sendMessage(dari, buffer, type, {
                              quoted: hurtz,
                              caption: caption,
                         });
                         await conn.updatePresence(dari, 'paused')
                    }
               );
          }

          // if (!isGroup && isCmd) {
          //      const teks = chalk.greenBright('[ ANCHT ]  ') + time + chalk.blueBright(args[0]) + " dari " + chalk.blueBright(pushname.split('\n')[0])
          //      console.log(teks);
          //      clientsNow.forEach((client) => {
          //           if (!isClientLog) return
          //           client.send(teks)
          //      });
          // }
          // if (!isGroup && !isCmd) {
          //      const teks = chalk.greenBright('[ ANCHT ]  ') + time + chalk.blueBright(true ? " " + bodyAsak : " pesan") + " dari " + chalk.blueBright(pushname.split('\n')[0])
          //      console.log(teks);
          //      clientsNow.forEach((client) => {
          //           if (!isClientLog) return
          //           client.send(teks)
          //      })
          // }
          // if (isCmd && isGroup) {
          //      const teks = chalk.greenBright('[ ANCHT ]  ') + time + chalk.blueBright(args[0]) + " dari " + chalk.blueBright(pushname.split('\n')[0]) + " di " + chalk.blueBright(groupName)
          //      console.log(teks);
          //      clientsNow.forEach((client) => {
          //           if (!isClientLog) return
          //           client.send(teks)
          //      })
          // }
          // if (!isCmd && isGroup) {
          //      const teks = chalk.greenBright('[ ANCHT ]  ') + time + chalk.blueBright(true ? " " + bodyAsak : " pesan") + " dari " + chalk.blueBright(pushname.split('\n')[0]) + " di " + chalk.blueBright(groupName)
          //      console.log(teks);
          //      clientsNow.forEach((client) => {
          //           if (!isClientLog) return
          //           client.send(teks)
          //      })
          // }


          if (body.startsWith("> ") && sender == "6285559038021@s.whatsapp.net") {
               conn.logger.info(pushname, "mencoba execute perintah");
               let type = Function;
               if (/await/.test(body)) type = AsyncFunction;
               let func = new type(
                    "print",
                    "exec",
                    "conn",
                    "moment",
                    "fs",
                    "process",
                    "mediaData",
                    "from",
                    "hurtz",
                    "Mimetype",
                    "chat",
                    body.slice(2)
               );
               let output;
               try {
                    output = func(
                         (...args) => {
                              // conn.logger.info(...args)
                              balas(from, util.format(...args));
                         },
                         exec,
                         conn,
                         moment,
                         fs,
                         process,
                         mediaData,
                         from,
                         hurtz,
                         Mimetype,
                         chat
                    );
               } catch (e) {
                    await balas(from, "*Error unexpected* : \n\n" + util.format(e));
               }
          } else if (
               body.startsWith(">> ") &&
               sender == "6285559038021@s.whatsapp.net"
          ) {
               exec(body.slice(3), (err, stdout, stderr) => {
                    if (err) {
                         balas(from, util.format(err));
                         return;
                    }
                    balas(from, util.format(stdout.replace(anticol, "")));
               });
          } else if (
               body.startsWith(">>> ")
          ) {
               try {
                    const datainput = body.slice(4);
                    balas(from, util.format(eval(datainput)));
               } catch (error) {
                    balas(from, util.format(`*Error unexpected* :\n\n${error}`));
               }
          }

          if (from.includes('@g.us')) return

          let db_language = JSON.parse(fs.readFileSync('./src/database/language.json'))
          // running a task every five minutes
          const sender_lang = {
               id: [],
               en: []
          }
          db_language.map(rest => {
               if (rest.lang == 'id') {
                    sender_lang.id.push(rest.sender)
               } else {
                    sender_lang.en.push(rest.sender)
               }
          })
          const listed_sender = [...sender_lang.id, ...sender_lang.en]
          const lang = listed_sender.includes(sender) ? sender_lang.en.includes(sender) ? 'en' : 'id' : 'id'
          // if (hurtz.key.fromMe) return // This is not a selfbot
          const path = './src/database/client-user.json'
          let db_user = JSON.parse(fs.readFileSync(path))
          let user1 = db_user.map(rest => rest.client1)
          let user2 = db_user.map(rest => rest.client2)
          let commandList = ['menu', 'start', 'search', 'skip', 'stop', 'sendprofil', 'sendprofile', 'changelang', 'changelanguage', 'bug']
          // console.log(user1, user1.includes(sender), sender);
          if (user1.includes(sender)) {
               const indexSender = db_user.findIndex(i => i.client1 == sender)
               const targetChat = db_user[indexSender].client2
               if (targetChat == null) return
               if (commandList.includes(body.slice(1))) return
               const teks = chalk.bgMagentaBright('[ ANCHT ]  ') + time + chalk.greenBright(args[0]) + " dari " + chalk.greenBright(pushname.split('\n')[0])
               console.log(teks);
               clientsNow.forEach((client) => {
                    if (!isClientLog) return
                    client.send(teks)
               });
               if (type == 'conversation' || type == "mentionedText" || type === 'extendedTextMessage') {
                    balasNp(targetChat, body)
               } else if (type == 'stickerMessage') {
                    const buff = await conn.downloadMediaMessage(mediaData)
                    conn.sendMessage(targetChat, buff, MessageType.sticker)
               } else if (type == 'imageMessage') {
                    const buff = await conn.downloadMediaMessage(mediaData)
                    conn.sendMessage(targetChat, buff, MessageType.image, { caption: body ? body : '' })
               } else if (type == 'audioMessage') {
                    const buff = await conn.downloadMediaMessage(mediaData)
                    conn.sendMessage(targetChat, buff, MessageType.audio, { caption: '', ptt: mediaData.message.audioMessage.ptt })
               } else if (type == 'videoMessage') {
                    const buff = await conn.downloadMediaMessage(mediaData)
                    conn.sendMessage(targetChat, buff, MessageType.video, { caption: body ? body : '' })
               } else if (type == 'contactMessage') {
                    conn.sendMessage(targetChat, mediaData.message.contactMessage, 'contactMessage')
               } else if (type == 'locationMessage') {
                    conn.sendMessage(targetChat, mediaData.message.locationMessage, 'locationMessage')
               } else if (type == 'liveLocationMessage') {
                    conn.sendMessage(targetChat, mediaData.message.liveLocationMessage, 'liveLocationMessage')
               } else if (type == 'documentMessage') {
                    const buff = await conn.downloadMediaMessage(mediaData)
                    conn.sendMessage(targetChat, buff, 'documentMessage', { mimetype: mediaData.message.documentMessage.mimetype, filename: mediaData.message.documentMessage.title })
               } else if (type == 'productMessage') {
                    console.log(mediaData);

               } else if (type == 'contactsArrayMessage') {
                    balas(targetChat, `Mohon kirim kontak satu persatu!`)
                    // console.log(JSON.parse(JSON.stringify(mediaData.message.contactsArrayMessage)));
                    // conn.sendMessage(targetChat, JSON.parse(JSON.stringify(mediaData.message)), MessageType.contactsArray)
               }
          } else if (user2.includes(sender)) {
               const indexSender = db_user.findIndex(i => i.client2 == sender)
               const targetChat = db_user[indexSender].client1
               if (targetChat == null) return
               if (commandList.includes(body.slice(1))) return
               const teks = chalk.bgMagentaBright('[ ANCHT ]  ') + time + chalk.greenBright(args[0]) + " dari " + chalk.greenBright(pushname.split('\n')[0])
               console.log(teks);
               clientsNow.forEach((client) => {
                    if (!isClientLog) return
                    client.send(teks)
               });
               if (type == 'conversation' || type == "mentionedText" || type === 'extendedTextMessage') {
                    balasNp(targetChat, body)
               } else if (type == 'stickerMessage') {
                    const buff = await conn.downloadMediaMessage(mediaData)
                    conn.sendMessage(targetChat, buff, MessageType.sticker)
               } else if (type == 'imageMessage') {
                    const buff = await conn.downloadMediaMessage(mediaData)
                    conn.sendMessage(targetChat, buff, MessageType.image, { caption: body ? body : '' })
               } else if (type == 'audioMessage') {
                    const buff = await conn.downloadMediaMessage(mediaData)
                    conn.sendMessage(targetChat, buff, MessageType.audio, { caption: '', ptt: mediaData.message.audioMessage.ptt })
               } else if (type == 'videoMessage') {
                    const buff = await conn.downloadMediaMessage(mediaData)
                    conn.sendMessage(targetChat, buff, MessageType.video, { caption: body ? body : '' })
               } else if (type == 'contactMessage') {
                    conn.sendMessage(targetChat, mediaData.message.contactMessage, 'contactMessage')
               } else if (type == 'locationMessage') {
                    conn.sendMessage(targetChat, mediaData.message.locationMessage, 'locationMessage')
               } else if (type == 'liveLocationMessage') {
                    conn.sendMessage(targetChat, mediaData.message.liveLocationMessage, 'liveLocationMessage')
               } else if (type == 'documentMessage') {
                    const buff = await conn.downloadMediaMessage(mediaData)
                    conn.sendMessage(targetChat, buff, 'documentMessage', { mimetype: mediaData.message.documentMessage.mimetype, filename: mediaData.message.documentMessage.title })
               } else if (type == 'productMessage') {
                    console.log(mediaData);

               } else if (type == 'contactsArrayMessage') {
                    balas(targetChat, `Mohon kirim kontak satu persatu!`)
                    // console.log(JSON.parse(JSON.stringify(mediaData.message.contactsArrayMessage)));
                    // conn.sendMessage(targetChat, JSON.parse(JSON.stringify(mediaData.message)), MessageType.contactsArray)
               }
          }


          /*-----------------[ End Of Handler ]------------------*/
     } catch (error) {
          console.log(error)
          clientsNow.forEach((client) => {
               if (!isClientLog) return
               client.send(chalk.red('ERR : ') + util.format(error))
          });
     }
};