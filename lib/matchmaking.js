"use strict";

const fs = require('fs')
let settings = JSON.parse(fs.readFileSync('./src/settings.json'))
const path = './src/database/client-user.json'
let db_user = JSON.parse(fs.readFileSync(path))
let user1 = db_user.map(rest => rest.client1)
let user2 = db_user.map(rest => rest.client2)

function match(jid) {
     return new Promise((resolve, reject) => {
          let db_user = JSON.parse(fs.readFileSync(path))
          let user1 = db_user.map(rest => rest.client1)
          let user2 = db_user.map(rest => rest.client2)
          db_user.map(rest => {
               if (rest.client1 === undefined) {
                    no_client1.push({
                         jid: rest.client1,
                         index: user1.indexOf(rest.client1)
                    })
               }
          })
          if (user1.includes(jid)) return reject({ status: false, message: 'Sudah masuk sesi match' })
          if (!user1.includes(jid) && user2.includes(jid)) resolve({ status: false, message: 'sesi telah dimulai' })
          // console.log('here');
          if (!user1.includes(jid) && !user2.includes(jid)) {
               let no_client2 = []
               let user1 = db_user.map(rest => rest.client1)
               db_user.map(rest => {
                    if (rest.client2 === null) {
                         no_client2.push({
                              jid: rest.client1,
                              index: user1.indexOf(rest.client1)
                         })
                    }
               })
               console.log(no_client2)

               if (no_client2.length > 0) {
                    let db_user = JSON.parse(fs.readFileSync(path))
                    db_user[no_client2[0].index].status = true
                    db_user[no_client2[0].index].client2 = jid
                    fs.writeFileSync(path, JSON.stringify(db_user, null, 5))
                    resolve({ status: true, message: 'Matching with ' + no_client2[0].jid, target: no_client2[0].jid })
               } else {
                    // console.log();
                    let count = 1
                    let objs = {
                         status: false,
                         client1: jid,
                         client2: null
                    }
                    db_user.push(objs)
                    fs.writeFileSync(path, JSON.stringify(db_user, null, 5))
                    // resolve({ status: true, message: 'start match', time: settings.maxMatch })
                    // Start matching..
                    let intev = setInterval(() => {
                         count + 1
                         // console.log(`${count++}, `)
                         let db_user = JSON.parse(fs.readFileSync(path))
                         let indexMine = db_user.findIndex(i => i.client1 == jid)
                         // console.log(db_user);
                         // console.log(db_user[indexMine].client2 !== null);

                         if (db_user[indexMine].client2 !== null) {
                              clearInterval(intev)
                              resolve({ status: true, code: 201, message: 'Success!', target: db_user[indexMine].client2 })
                         } else if (count == settings.maxMatch) {
                              clearInterval(intev)
                              let indexUser = no_client2.findIndex(i => i.jid == jid)
                              no_client2.splice(indexUser, 1)
                              db_user.splice(indexMine, 1)
                              fs.writeFileSync(path, JSON.stringify(db_user, null, 5))
                              reject({ status: false, message: 'Time out of range' })
                              // console.log(`Tidak dapat menemukan lawan dalam ${settings.maxMatch} detik!`)
                         }
                    }, 1000);
               }
          }

     })
}

function stop(jid) {
     return new Promise((resolve, reject) => {
          let db_user = JSON.parse(fs.readFileSync(path))
          let user1 = db_user.map(rest => rest.client1)
          let user2 = db_user.map(rest => rest.client2)
          if (!user1.includes(jid) && !user2.includes(jid)) return reject({ status: false, message: 'tidak ada sesi!' })
          let indexStop = null
          if (user1.includes(jid)) {
               indexStop = db_user.findIndex(i => i.client1 == jid);
          } else {
               indexStop = db_user.findIndex(i => i.client2 == jid);
          }
          if (indexStop === -1) {
               reject({ status: false, message: "Jid not found in db" })
          } else {
               // let db_user_before = db_user
               // db_user.splice(indexStop, 1)
               // fs.writeFileSync(path, JSON.stringify(db_user, null, 5))
               resolve({ status: true, message: 'Success stop', index: indexStop, db: db_user, target: user1.includes(jid) ? db_user[indexStop].client2 : db_user[indexStop].client1 })
          }
     })
}

// match(process.argv[2])
// stop(process.argv[2])
//      .then(console.log)
//      .catch(console.log)
// console.log(db_user, user1, user2);

module.exports = { match, stop }