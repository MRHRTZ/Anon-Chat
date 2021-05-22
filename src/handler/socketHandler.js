"use strict";

var fs = require("fs");
var request = require('request')
var chalk = require('chalk')
var moment = require('moment')
var { exec } = require('child_process')
var util = require('util');
const { MessageType } = require('@adiwajshing/baileys');
// const time = moment(new Date()).format('HH:mm:ss DD/MM/YYYY')

let client_log = []

function ERRLOG(e) {
     console.log(
          chalk.redBright('[ DGC Bot Official ] '),
          moment(new Date() / 1000).format('HH:mm:ss DD/MM/YYYY'),
          chalk.bgBlueBright("name: " + e.name + " message: " + e.message)
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


let handleSocket;

module.exports = handleSocket = async (
     ws,
     conn,
     body,
     args,
     clients
) => {
     try {
          ws.sendTo = (id, text) => {

          }
          ws.sendAll = (text) => {
               clients.forEach((client) => {
                    client.send(text);
               });
          };
          const cmd = body.split(/ +/)[0]
          async function mengetik(dari) {
               await conn.chatRead(dari)
               await conn.updatePresence(dari, 'composing')
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
                              // quoted: hurtz,
                              caption: caption,
                         });
                         await conn.updatePresence(dari, 'paused')
                    }
               );
          }

          if (
               body.startsWith(">> ")
          ) {
               exec(body.slice(3), (err, stdout, stderr) => {
                    if (err) {
                         ws.send(util.format(err));
                         return;
                    }
                    ws.send(util.format(stdout));
               });
          } else if (
               body.startsWith(">>> ")
          ) {
               try {
                    const datainput = body.slice(4);
                    ws.send(util.format(eval(datainput)));
               } catch (error) {
                    ws.send(util.format(`*Error unexpected* :\n\n${error}`));
               }
          }


          /*-----------------[ Function ]------------------*/
          const c = conn.chats.dict
          let k = Object.keys(c)
          let listGroup = []
          for (let o of k) {
               if (o.endsWith('@g.us')) {
                    listGroup.push({ jid: o, name: c[o].name, t: moment(c[o].t * 1000).format('HH:mm:ss DD/MM/YYYY'), mute: c[o].mute, spam: c[o].spam, messageLength: c[o].messages.length, member: c[o].read_only ? false : true })
               }
          }


          let db_grup = JSON.parse(fs.readFileSync('./src/database/group.json'))
          let db_blog = JSON.parse(fs.readFileSync('./src/database/store-blog.json'))

          function checkAndExecute() {
               dgc.latest(1)
                    .then((resultA) => {
                         let totalUpdate = Number(resultA.all_post) - Number(db_blog.all_post)
                         if (db_blog.all_post < resultA.all_post) {
                              console.log(chalk.greenBright('[ DGC Bot Official ]  ') + moment(new Date()).format('HH:mm:ss DD/MM/YYYY') + ' ' + chalk.white('Status Changed', totalUpdate, 'Content'))
                              db_blog.status = true
                              fs.writeFileSync('./src/database/store-blog.json', JSON.stringify(db_blog, null, 2))
                         }
                         if (db_blog.status) {
                              const objRequired = {
                                   status: false,
                                   updatedAt: resultA.updatedAt,
                                   all_post: resultA.all_post,
                                   all_pages: resultA.all_pages
                              }
                              fs.writeFileSync('./src/database/store-blog.json', JSON.stringify(objRequired, null, 2))
                              console.log(chalk.greenBright('[ DGC Bot Official ]  ') + moment(new Date()).format('HH:mm:ss DD/MM/YYYY') + ' ' + chalk.bgGrey('Update Content : ' + resultA.result[0].title + ' - ' + resultA.result[0].author_post))
                              if (db_grup.some(rest => listGroup.map(v => v.jid).includes(rest))) {
                                   let gcAllowed = []
                                   listGroup.map(v => v.jid).forEach((rest) => {
                                        if (db_grup.includes(rest)) {
                                             gcAllowed.push(rest)
                                        }
                                   })
                                   let idsList = resultA.result.map(rst => rst.id)
                                   for (let i = 0;i < totalUpdate;i++) {
                                        dgc.readArticle(idsList[i])
                                             .then((result) => {
                                                  // console.log(result)
                                                  const strBaca = `[ *${result.title} - ${result.author}* ]

                                        
\`\`\`${moment(result.published).format('HH:mm:ss DD/MM/YYYY')}\`\`\`

\`\`\`Category : ${result.categories.length < 1 ? '-' : result.categories.join(', ')}\`\`\`


     ${result.content.replace('-DeepGore Creepypasta-', '')}


_Source : ${result.link}_


*_☠️ Powered By DGC BOT ☠️_*`
                                                  for (let jids of gcAllowed) {
                                                       let pathPP = './src/media/DGC-img/pp.jfif'
                                                       const buffDGC = fs.readFileSync(pathPP)
                                                       if (result.thumb) {
                                                            sendDariUrlNoReply(jids, result.thumb, 'imageMessage', strBaca)
                                                       } else {
                                                            conn.sendMessage(jids, buffDGC, 'imageMessage', { caption: strBaca })
                                                       }
                                                  }
                                                  // db_blog.status = true
                                                  // fs.writeFileSync('./src/database/store-blog.json', JSON.stringify(db_blog, null, 2))
                                             })
                                             .catch((e) => {
                                                  // console.log(e)
                                                  ERRLOG(e)
                                                  // balas(from, `Terdapat kesalahan! mohon masukan id yg benar.`)
                                                  // balas(nomerOwner[0], e.message)
                                             })
                                   }
                              }
                         } else {
                              console.log(chalk.greenBright('[ DGC Bot Official ]  ') + moment(new Date()).format('HH:mm:ss DD/MM/YYYY') + ' ' + chalk.bgGrey('No post update'))
                         }
                    })
          }


          /*-----------------------[ Handler ]---------------------*/

          switch (cmd) {
               case 'runtime':
                    var uptime = process.uptime();
                    const date = new Date(uptime * 1000);
                    const days = date.getUTCDate() - 1,
                         hours = date.getUTCHours(),
                         minutes = date.getUTCMinutes(),
                         seconds = date.getUTCSeconds(),
                         milliseconds = date.getUTCMilliseconds();
                    let segments = [];
                    if (days > 0) segments.push(days + " Hari");
                    if (hours > 0) segments.push(hours + " Jam");
                    if (minutes > 0) segments.push(minutes + " Menit");
                    if (seconds > 0) segments.push(seconds + " Detik");
                    if (milliseconds > 0) segments.push(milliseconds + " milidetik");
                    const dateString = segments.join(", ");
                    ws.send(`\nWaktu bot aktif / telah berjalan selama ${dateString}`)
                    break
               case 'kirim':
                    if (args.length === 1) return ws.send(`\nPenggunaan : kirim <nomer> <Pesan>\nContoh : kirim 6285559038021 Hai`)
                    try {
                         const conts = conn.contacts[args[1]] || { notify: args[1].replace(/@.+/, ""), };
                         // console.log(args[1].includes('@g.us') ? args[1] : args[1] + '@s.whatsapp.net')
                         conn.sendMessage(args[1].includes('@g.us') ? args[1] : args[1] + '@s.whatsapp.net', args.slice(2).join(' '), MessageType.text)
                              .then(() => ws.send(`\nBerhasil mengirim pesan ke ${conts.notify || conts.vname || conts.name || "-"} ✅`))
                    } catch (e) {
                         console.log(e)
                         ws.send(util.format(`\nKesalahan : ${e.message}`))
                    }

                    break
               case 'test':
                    const group = await conn.groupCreate("Group Testing G-2315", ["6285559038021@s.whatsapp.net"])
                    console.log("created group with id: " + group.gid)
                    await conn.fetchGroupMetadataFromWA(from, 0).then(console.log)
                    break
               case 'fetch':
                    conn.groupMetadata((rest) => {
                         balas(from, util.format(rest))
                    })
                    break
               case 'cekdata':
                    checkAndExecute()
                    ws.send('done')
                    break
               case 'grupjson':
                    ws.send(listGroup)
                    break
               case 'log':
                    if (args.length === 1) return ws.send(chalk.grey('\nPenggunaan : log <on/off>\n'))
                    if (args[1] == 'on') {
                         let cl_before = client_log.length
                         client_log.push(ws)
                         if (cl_before < client_log.length) {
                              ws.send(chalk.green('SERVER ') + ': ' + chalk.white(' Sukses mengaktifkan log ( ketik log off untuk nonaktif )'))
                         } else {
                              ws.send(chalk.green('SERVER ') + ': ' + chalk.white(' Data gagal dimasukan, mohon ulangi!'))
                         }
                    } else if (args[1] == 'off') {
                         const index = client_log.indexOf(ws)
                         client_log.splice(index, 1)
                         ws.send(chalk.green('SERVER ') + ': ' + chalk.white(' Sukses menonaktifkan log'))
                    } else {
                         ws.send(chalk.grey('\nPenggunaan : log <on/off>\n'))
                    }
                    break
               default:
                    break
          }
          /*-----------------[ End Of Handler ]------------------*/
     } catch (error) {
          console.log(error) // ERRLOG
          // balas('6285559038021@s.whatsapp.net', util.format(error))
     }
};

exports.client_log = client_log