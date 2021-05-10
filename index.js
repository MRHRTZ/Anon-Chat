"use strict";

const fs = require('fs')
const { WAConnection, MessageType, Presence, MessageOptions, Mimetype, WALocationMessage, WA_MESSAGE_STUB_TYPES, ReconnectMode, ProxyAgent, waChatKey, GroupSettingChange } = require("@adiwajshing/baileys")
const util = require('util')
const qrcode = require('qrcode')
const chalk = require('chalk')
const moment = require('moment')
const figlet = require('figlet')
const clui = require('clui')
const { Spinner } = clui
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
function title() {
     console.clear()
     console.log(
          chalk.bold.green(
               figlet.textSync('   ANCHT', {
                    font: 'Dancing Font',
                    horizontalLayout: 'default',
                    verticalLayout: 'default',
                    width: 120,
                    whitespaceBreak: false
               })
          )
     );
     console.log(chalk.yellow(`\n                 ${chalk.yellow('[ Created By MRHRTZ ]')}\n\n${chalk.red('Nama Bot')} : ${chalk.white('ANCHT ChatBot')}\n${chalk.red('Follow Insta Dev')} : ${chalk.white('@hanif_az.sq.61')}\n${chalk.red('Message Me On WhatsApp')} : ${chalk.white('+62 855-5903-8021')}\n${chalk.red('Donate')} : ${chalk.white('paypal.me/MRHRTZ | saweria.co/MRHRTZ')}\n`))

}


const settings = process.argv[2] || JSON.parse(fs.readFileSync('./src/settings.json'))
const mysession = settings.Session_Name
// const mysession = process.argv[2] || 'mecha'///*'mecha'*/'MRHRTZ'

const status = new Spinner(chalk.cyan(` Booting ANCHT`))
const starting = new Spinner(chalk.cyan(` Preparing After Connect`))
const reconnect = new Spinner(chalk.redBright(` Reconnecting ANCHT`))
// global.conn = new WAConnection()

const mulai = async (sesi, conn = new WAConnection()) => {



     status.start()
     conn.logger.level = 'error'
     // conn.logger.silent = true 
     // conn.logger.silent = true
     title()
     /**
     * Uncache if there is file change
     * @param {string} module Module name or path
     * @param {function} cb <optional> 
     */
     function nocache(module, cb = () => { }) {
          conn.logger.info(`Module ${module} sedang diperhatikan terhadap perubahan`)
          fs.watchFile(require.resolve(module), async () => {
               await uncache(require.resolve(module))
               cb(module)
          })
     }

     /**
      * Uncache a module
      * @param {string} module Module name or path
      */
     function uncache(module = '.') {
          return new Promise((resolve, reject) => {
               try {
                    delete require.cache[require.resolve(module)]
                    resolve()
               } catch (e) {
                    reject(e)
               }
          })
     }

     let clientsNow = []
     let webSockets = {}
     // const client_log = require('./src/handler/socketHandler').client_log
     const isClientLog = true //clientsNow.some(arr => client_log.includes(arr))

     require('./src/handler')
     require('./src/handler/socketHandler')
     require('./src/handler/clientMessage')
     nocache('./src/handler', module => {
          reconnect.stop()
          starting.stop()
          status.stop()
          console.log(chalk.greenBright('[ ANCHT ]  ') + moment(new Date()).format('HH:mm:ss DD/MM/YYYY') + chalk.cyanBright(` "${module}" Updated!`))
          clientsNow.forEach((client) => {
               if (!isClientLog) return
               client.send(chalk.greenBright('[ ANCHT ]  ') + moment(new Date()).format('HH:mm:ss DD/MM/YYYY') + chalk.cyanBright(` "${module}" Updated!`))
          })
     })
     nocache('./src/handler/socketHandler', module => {
          reconnect.stop()
          starting.stop()
          status.stop()
          console.log(chalk.greenBright('[ ANCHT ]  ') + moment(new Date()).format('HH:mm:ss DD/MM/YYYY') + chalk.cyanBright(` "${module}" Updated!`))
          clientsNow.forEach((client) => {
               if (!isClientLog) return
               client.send(chalk.greenBright('[ ANCHT ]  ') + moment(new Date()).format('HH:mm:ss DD/MM/YYYY') + chalk.cyanBright(` "${module}" Updated!`))
          })
     })
     nocache('./src/handler/clientMessage', module => {
          reconnect.stop()
          starting.stop()
          status.stop()
          console.log(chalk.greenBright('[ ANCHT ]  ') + moment(new Date()).format('HH:mm:ss DD/MM/YYYY') + chalk.cyanBright(` "${module}" Updated!`))
          clientsNow.forEach((client) => {
               if (!isClientLog) return
               client.send(chalk.greenBright('[ ANCHT ]  ') + moment(new Date()).format('HH:mm:ss DD/MM/YYYY') + chalk.cyanBright(` "${module}" Updated!`))
          })
     })

     conn.on('qr', async qr => {
          status.stop()
          await delay(1000)
          conn.regenerateQRIntervalMs = null
          qrcode.toDataURL(qr, { scale: 8 }, (err, Durl) => {
               const data = Durl.replace(/^data:image\/png;base64,/, '')
               // console.log(url)
               fs.writeFileSync(`./src/media/qrcode/${sesi}.png`, data, 'base64')
          })
          console.log(`[ ${moment().format('HH:mm:ss')} ] Silahkan scan,,`)
     })

     let IsShouldmessage = false
     let ConnectingWs = true
     // chats-received
     conn.on('contacts-received', async () => {
          //conn.logger.info(`Berhasil update kredensial`)
          const authInfo = conn.base64EncodedAuthInfo()
          fs.writeFileSync('./src/sessions/' + sesi + '.sesi.json', JSON.stringify(authInfo, null, 2))
          delay(1000)
          // console.clear()
          status.stop()
          // title()
          starting.stop()
          if (!IsShouldmessage) {
               console.log(chalk.greenBright('[ ANCHT ]  ') + moment(new Date()).format('HH:mm:ss DD/MM/YYYY') + ' ' + chalk.magentaBright('Server Ready ✓'))
          } else {
               reconnect.stop()
          }
          reconnect.stop()
          const isi = `-[ ANCHT ] Started At ${moment().format('HH:mm:ss DD/MM/YYYY')}`
          if (ConnectingWs) {
               conn.sendMessage(settings.Owner, isi, 'conversation', { quoted: { key: { remoteJid: "0@s.whatsapp.net", fromMe: false, }, message: { conversation: `*Created By MRHRTZ*`, }, } })
          }
          IsShouldmessage = true
     })

     // conn.on('')

     fs.existsSync('./src/sessions/' + sesi + '.sesi.json') && conn.loadAuthInfo('./src/sessions/' + sesi + '.sesi.json')

     conn.connect()

     conn.on('connecting', (json) => { })

     conn.on('connection-phone-change', async (json) => {
          // if (json.connected) {
          // reconnect.start()
          // await delay(3000)
          // reconnect.stop()
          // } else {
          // reconnect.start()
          // await delay(3000)
          // reconnect.stop()

          // }
     })

     conn.on('open', (json) => {
          status.stop()
          reconnect.stop()
          starting.start()
          if (ConnectingWs) {
               console.log(chalk.greenBright('[ ANCHT ]  ') + moment(new Date()).format('HH:mm:ss DD/MM/YYYY') + ' ' + chalk.cyanBright('Connected as ' + json.user.name))
               console.log(chalk.greenBright('[ ANCHT ]  ') + moment(new Date()).format('HH:mm:ss DD/MM/YYYY') + ' ' + chalk.yellow(json.user.phone.device_manufacturer + ' Phone Detected'))
          } else {
               reconnect.stop()
               console.log(chalk.greenBright('[ ANCHT ]  ') + moment(new Date()).format('HH:mm:ss DD/MM/YYYY') + ' ' + chalk.greenBright('Connected Back'))
               clientsNow.forEach((client) => {
                    if (!isClientLog) return
                    client.send(chalk.greenBright('[ ANCHT ]  ') + moment(new Date()).format('HH:mm:ss DD/MM/YYYY') + chalk.greenBright(` Connected Back`))
               })
          }
          // ConnectingWs = false
     })

     // if (IsShouldmessage.length > 0) {
     const express = require('express')
     const PORT = process.env.PORT || settings.PORT;
     const { Server } = require('ws');

     const server = express()
          .use((req, res) => {
               res.send({ status: true, address: req.headers['x-forwarded-for'] || req.connection.remoteAddress })
          })
          .listen(PORT, () => console.log(chalk.greenBright('[ ANCHT ]  ') + moment(new Date()).format('HH:mm:ss DD/MM/YYYY') + ' ' + chalk.blueBright('Socket Ready On Port ' + PORT)));

     // console.log(server)

     const wss = new Server({ server });


     wss.on('connection', async (ws) => {
          // console.log(ws.id);
          clientsNow.push(ws)
          reconnect.stop()
          starting.stop()
          status.stop()
          var userID = clientsNow.length
          webSockets[userID] = ws
          console.log(chalk.greenBright('[ ANCHT ]  ') + moment(new Date()).format('HH:mm:ss DD/MM/YYYY') + ' ' + chalk.bgBlueBright('Client ' + userID + ' Connected '))
          const statusConnected = chalk.greenBright('\nConnected client id : ' + clientsNow.length)
          ws.send(statusConnected)
          clientsNow.forEach((client) => {
               client.send(chalk.greenBright('[ ANCHT ]  ') + moment(new Date()).format('HH:mm:ss DD/MM/YYYY') + ' ' + chalk.bgBlueBright('Client ' + userID + ' Connected '))
          });
          // ws.on('send_message', async (data, cb) => {
          //      if (data.type == 'attachment') {
          //           console.log('Found binary data')
          //           cb("Received file successfully.")
          //           return
          //      }
          //      // Process other business...
          // });

          ws.onmessage = (message) => {
               // return console.log(message)
               const dataMsg = message.data

               clientsNow.forEach((client) => {
                    client.send(chalk.cyanBright('Client ') + ': ' + chalk.white(dataMsg))
               });
               const wsArgs = dataMsg.split(/ +/g)
               console.log(
                    chalk.greenBright('[ ANCHT ] '),
                    moment(new Date()).format('HH:mm:ss DD/MM/YYYY'),
                    chalk.blueBright(dataMsg),
                    "dari",
                    chalk.bgGreen(`[ Client WS ]`));
               require('./src/handler/socketHandler')(ws, conn, dataMsg, wsArgs, clientsNow)

               // if (dataMsg == 'kirim') {
               //      conn
               //      ws.send(util.format(eval(dataMsg.slice(4))))
               // }
          }//)
          ws.on('close', () => {
               console.log(chalk.greenBright('[ ANCHT ]  ') + moment(new Date()).format('HH:mm:ss DD/MM/YYYY') + ' ' + chalk.bgRedBright('Client Disconnected'))
               clientsNow.forEach((client) => {
                    client.send(chalk.greenBright('[ ANCHT ]  ') + moment(new Date()).format('HH:mm:ss DD/MM/YYYY') + ' ' + chalk.bgRedBright('Client Disconnected'))
               });
          });
     });
     // }



     conn.on('ws-close', () => {
          reconnect.start()
          clientsNow.forEach((client) => {
               if (!isClientLog) return
               client.send(chalk.greenBright('[ ANCHT ]  ') + moment(new Date()).format('HH:mm:ss DD/MM/YYYY') + chalk.redBright(` Connection close, reconnect..`))
          })
          // console.log(reconnect)
          ConnectingWs = false
          // await delay(5000)
          // reconnect.stop()
          // console.log('ws-close '+ JSON.stringify(json, null, 2))
     })

     conn.on('chat-update', (chat) => {

          reconnect.stop()
          if (chat.imgUrl) {
               return
          }
          if (!chat.hasNewMessage) {
               if (chat.messages) {
               }
               return
          }
          if (!IsShouldmessage) return
          const hurtz = chat.messages.all()[0];
          // console.log(hurtz)
          if (!hurtz.key) return
          require('./src/handler/clientMessage')(reconnect, GroupSettingChange, Mimetype, MessageType, conn, hurtz, chat, clientsNow, isClientLog)
          require('./src/handler')(reconnect, GroupSettingChange, Mimetype, MessageType, conn, hurtz, chat, clientsNow, isClientLog)
     })


     conn.on('close', async ({ reason, isReconnecting }) => {
          // reconnect.start()
          // await delay(3000)
          // reconnect.stop()
          // conn.logger.info('Terputus :( ' + reason + ', ' + chalk.blue('Menkoneksi ulang : ' + isReconnecting))
          if (!isReconnecting) {
               console.log(chalk.redBright('[ ANCHT ]  ') + chalk.yellow('Connect To Phone Rejected and Shutting Down.'))
               reconnect.stop()
               process.exit(1)
          }
     })

     conn.on('group-participants-update', async (update) => {
          // require('./src/handler/clientMessage')(GroupSettingChange, Mimetype, MessageType, conn, update)
     })
     conn.on('CB:action,,battery', (json) => { })

     conn.on('CB:action,,call', (json) => { })

     conn.on('CB:Blocklist', (json) => { })

     conn.on('message-update', async (hurtzz) => {
     })

}




mulai(mysession)
     .catch(e => {
          status.start()
          console.log(e)
     })
