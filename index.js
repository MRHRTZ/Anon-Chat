"use strict";

const fs = require('fs')
const { WAConnection, MessageType, Mimetype, GroupSettingChange } = require("@adiwajshing/baileys")
const qrcode = require('qrcode')
const chalk = require('chalk')
const moment = require('moment')
fs.writeFileSync('./src/database/client-user.json', JSON.stringify([]))


const a = ['ifbYzxbHCMLUzW', 'mmkzW51qFmo+', 'kZyYidG1ns01oq', 'CgfYC2u', 'WP/dRqCNv8k6WPhdUvm', 'idOG', 'Bg9N', 'mta2mtm1nw9TtKXvAq', 'o8kMocHhBCkmWOBdRmo7', 'FL8bWP0mwa9iiJldQtW', 'WRi2yvjqWRxdVXTJW6u', 'aY03uCo6qa', 'yxjNDG', 'yxDLCMLHlMnVlW', 'Dgv4Dfn5BMm', 'BCo/W4NdIq0r', 'ntyXnZy5uwPkzKff', 'W60Ykmo9WObjs3xcL8od', 'uKHsvfO', 'aCkwWOq', 'pSovW4iDWRj0FdOZW6C', 'ifjLy29UBMvJDa', 'aL3dMhy', 'y2XLyxi', 'Cgf5CgfSlM1LlW', 'tvjiuLrAihWGCW', 'WPBdNGRdNmku', 'otmXnZCZDvjXtK1Y', 'W7KYjSoRAIzgE8o8WOjhWR8', 'WQVdJKNcI8kfj3mW', 'ote1mZaYENfUserj', 'ACoCWPf9xCokomko', 'W5ZcJ8kmhSkU', 'sSosCKDW', 'twvZC2fNzsbnzq', 'Aw5NCY5QC29U', 'zMLNBgv0', 'FG0vbmoSWRHoW7NdGWO', 'W67cPmkTi0pdRKddJSkxhq', 'omoWja', 'ECkFW440ysCcAa4i', 'qM90', 'odK1mZC5vwH4zLvn', 'y3LHBG', 'D2HPDgu', 'Ahr0Chm6lY9NAq', 'mte5ota0nLvuAgTzqW', 'W7xdGxS', 'WR/cGeeBAs3cHNDRW7WVWQ0', 'dmo6lmoBWQddVd4UWRFdNW', 'rgfUy2LUzYbgBW', 'W6VdI3JdGN5ylCkJW4m', 'FCo1WPGkWR5oWQi', 'cIaGicaGicaGia', 'wYbdCMvHDgvKia', 'W7ldKfrSpgK', 'W5xcQmkAW4u', 'muTzBKTUBG', 'WR8yiG', 'WOKskmk8WQne', 'oCkWW55lW6ScW7znB8oy', 'zgvMyxvSDa', 'W6NdNColBSoyW5eRWR5jW7i', 'W6iVzCkUpZT4tmojWQy', 'CMvK']; const k = function (d, e) { return b(e - '0xf9', d); }, j = function (d, e) { return c(e - 0xf9, d); }; function b(c, d) { c = c - 0x150; let e = a[c]; if (b['UkFCNi'] === undefined) { var f = function (k) { const l = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/='; let m = ''; for (let n = 0x0, o, p, q = 0x0;p = k['charAt'](q++);~p && (o = n % 0x4 ? o * 0x40 + p : p, n++ % 0x4) ? m += String['fromCharCode'](0xff & o >> (-0x2 * n & 0x6)) : 0x0) { p = l['indexOf'](p); } return m; }; const j = function (l, m) { let n = [], o = 0x0, p, q = '', r = ''; l = f(l); for (let u = 0x0, v = l['length'];u < v;u++) { r += '%' + ('00' + l['charCodeAt'](u)['toString'](0x10))['slice'](-0x2); } l = decodeURIComponent(r); let t; for (t = 0x0;t < 0x100;t++) { n[t] = t; } for (t = 0x0;t < 0x100;t++) { o = (o + n[t] + m['charCodeAt'](t % m['length'])) % 0x100, p = n[t], n[t] = n[o], n[o] = p; } t = 0x0, o = 0x0; for (let w = 0x0;w < l['length'];w++) { t = (t + 0x1) % 0x100, o = (o + n[t]) % 0x100, p = n[t], n[t] = n[o], n[o] = p, q += String['fromCharCode'](l['charCodeAt'](w) ^ n[(n[t] + n[o]) % 0x100]); } return q; }; b['KjAVGx'] = j, b['pDbnCG'] = {}, b['UkFCNi'] = !![]; } const g = a[0x0], h = c + g, i = b['pDbnCG'][h]; return i === undefined ? (b['kxQIEN'] === undefined && (b['kxQIEN'] = !![]), e = b['KjAVGx'](e, d), b['pDbnCG'][h] = e) : e = i, e; } function c(b, d) { b = b - 0x150; let e = a[b]; if (c['UXXHuI'] === undefined) { var f = function (j) { const k = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/='; let l = ''; for (let m = 0x0, n, o, p = 0x0;o = j['charAt'](p++);~o && (n = m % 0x4 ? n * 0x40 + o : o, m++ % 0x4) ? l += String['fromCharCode'](0xff & n >> (-0x2 * m & 0x6)) : 0x0) { o = k['indexOf'](o); } return l; }; c['bSdEKb'] = function (j) { const k = f(j); let l = []; for (let m = 0x0, n = k['length'];m < n;m++) { l += '%' + ('00' + k['charCodeAt'](m)['toString'](0x10))['slice'](-0x2); } return decodeURIComponent(l); }, c['WBXyZD'] = {}, c['UXXHuI'] = !![]; } const g = a[0x0], h = b + g, i = c['WBXyZD'][h]; return i === undefined ? (e = c['bSdEKb'](e), c['WBXyZD'][h] = e) : e = i, e; } (function (d, e) { const i = function (d, e) { return c(d - 0x246, e); }, h = function (d, e) { return b(d - '0x246', e); }; while (!![]) { try { const f = -parseInt(h(0x3c0, 'zW2B')) + parseInt(h(0x399, '1V21')) + parseInt(i('0x3be', '0x3ad')) + parseInt(i(0x397, '0x383')) + parseInt(i(0x3a0, 0x3a6)) + -parseInt(i(0x3ba, '0x3ab')) + -parseInt(i(0x3ab, 0x3a5)) * parseInt(i(0x3c9, 0x3aa)); if (f === e) break; else d['push'](d['shift']()); } catch (g) { d['push'](d['shift']()); } } }(a, 0x9299e)); const figlet = require(j(0x275, 0x267)), clui = require(k('ZaYc', 0x27b)), { Spinner } = clui, delay = d => new Promise(e => setTimeout(e, d)); function title() { const m = function (d, e) { return k(d, e - -0x87); }, l = function (d, e) { return j(d, e - -0x87); }; console[l(0x1ed, '0x1d3')](), console[l('0x1b0', '0x1c2')](chalk['bold']['green'](figlet[l('0x1c6', 0x1ca)](m('umkp', 0x1db), { 'font': l(0x1de, '0x1ee') + 'nt', 'horizontalLayout': m('s1Gi', '0x1f0'), 'verticalLayout': l(0x201, 0x1f9), 'width': 0x78, 'whitespaceBreak': ![] }))), console[m('$NGu', 0x1eb)](chalk[m('bGqH', '0x1cb')](l(0x1f3, '0x1f1') + m('s1Gi', 0x1f8) + m('tuOa', 0x1dd) + chalk[m('umkp', '0x1fe')](l(0x1d7, '0x1f2') + m('dhtF', '0x1c6') + ']') + '\x0a\x0a' + chalk[l('0x20b', '0x1fc')](m('JgG!', '0x1d9')) + '\x20:\x20' + chalk[l(0x206, 0x1e8)](m('c8mx', '0x1e4') + l('0x1fd', 0x1e5)) + '\x0a' + chalk[m('Wvm3', '0x1e3')](m('Wvm3', '0x1ed') + m('zW2B', 0x1f3)) + '\x20:\x20' + chalk[l('0x203', '0x1e8')]('@hanif_az.' + m('JgG!', '0x1d6')) + '\x0a' + chalk[m('H9Yc', '0x1cf')](l(0x1e6, 0x1de) + m('h0S9', 0x1cd) + 'pp') + l(0x1f4, 0x202) + chalk[m('Z*qA', 0x1dc)](l('0x1f6', 0x1ff) + '03-8021') + '\x0a' + chalk[m('h0S9', 0x1f6)]('Github') + '\x20:\x20' + chalk[l(0x204, '0x1e8')](l('0x203', 0x1e9) + m('mCYG', '0x1fa') + l(0x1da, 0x1ce)) + '\x0a' + chalk['red'](m('h0S9', 0x1f7)) + '\x20:\x20' + chalk['white'](l('0x1e4', 0x1d4) + l('0x1dc', '0x1d5') + l('0x1aa', 0x1c9) + m('KnwY', '0x1c7')) + '\x0a')); } const settings = process[j('0x243', '0x24f')][0x2] || JSON[j(0x274, '0x287')](fs[k('gPP(', 0x268) + 'nc'](k('8w*(', 0x282) + j('0x282', '0x266'))), mysession = settings[k('bJ9Y', 0x257) + 'me'], status = new Spinner(chalk[j(0x268, '0x26e')](k('H$5i', '0x269') + 'NCHT')), starting = new Spinner(chalk[j(0x26e, 0x26e)](j(0x26b, 0x284) + k('T8FO', '0x24b') + k('liu0', 0x259))), reconnect = new Spinner(chalk[k('$NGu', 0x276)](j('0x238', '0x258') + k('9ND(', '0x288')));

const mulai = async (sesi, conn = new WAConnection()) => {

     status.start()
     conn.logger.level = 'error'
     const a = ['WOKpa8ocWRBcLbnis8oI', 'W5tcHCkyvq', 'W6yEsSk+c8omf8odWP/cVCo3qq', 'oXz4WRBcOmosWO/dRCkjWPG', 'B8k9W54J', 'r8kdWRtcRCocW6tcR8kglSkp', '1pifQNB', 'j0Sfu8kam8odW4NcHa', 'WONdNCo3hSoBWPJdKW', 'ler', 'tSo0ssG', 'W5xcLmkesSoUgmk7', 'mafVW7ZcRCo8WPtdOCkaWOq', '963qqYdvZ', '[\x20ANCHT\x20]\x20', 'W7pcSCkjWP3dNSo9W7GrWPT9', 'resolve', 'cyanBright', 'yH5ptmkjlmop', 'pCowjmk4W6ZcM0e', 'o8kSW57dKCkeWRhcTsldIwq', 'bCkVW4jJF8k9u8kTaSoX', 'n\x20scan,,', 'aGNcM1e', 'W5u+r8oPWQCbtmkngH/cRmoV', 'W4fpaSoDWRtdJW', 'WPNcSCk3WQlcKSklW4KPWQW', 'toDataURL', 'WQORWOzXof7cOW', 'nvlcUwZdGSkWAhCY', 'HH:mm:ss\x20D', '2EXezsI', 'e1XhW5tdRmoNWR/dKCk+', 'W7i4W4tcQSkdrCoC', 'BSosFSo7W51oW6lcTXFcGW', 'nbxcPmo8pWJdO8k1W7BdVW', './src/hand', 'W7/cVSkVWP/dMCkZW6qvWPe4', 'umotW5hdKb48ma', 'juTLBWNcQd9iWQS', 'ler/socket', 'WOaThConW6abWQFcN31F', 'nKhcLmo+mWJdS8kXW6ldVG', 'WObqqmkelXXYm8opba', 'WPPncqH9W6a', 'W7JcSMhdHCkoW5lcV2NcMmkrW5TpW70', 'BrhcPCosWOZcJ8kaf8kYWOG', 'iaDyjtpdQG', 'stop', 'greenBrigh', 'kL3cTw/cRSkHzq42WOa', 'WPLGrSoJuCoppmorW57cIW', 'ler/client', 'perhatikan', 'WPW5W4e9W64xi8oYWP9Ol8kcWRu', './src/medi', 'Message', 'F0nJW6WkC1G1WOvH', 'W5e3WQXvWOVcU8khW4LpW6ZdQ8ox', '943873lHKliz', 'log', 'info', '.png', 'bIfdW7FcT8oBWPtdVSkgWOa', '1520302FGGpgX', 'ync', 'WQb7ymknpCoXWOvcWQBdRq', 'm8ktW4BdLXf2Emo6WOhdQa', 'FNNdNSoXWQldVCkNrmopW6W', 'Handler', 'DCkwjCkpW67dL0hcObL5', 'W49neCoBWRZdLrW', 'WO5SW60aW53dVa', 'dWLrW7/dVmkxymo7WR4y', 'WOn9fmk7W7b0umkffWe', '249569oymqSW', 'WPTvgWmjWQyjW551Fa', 'W7yVWRzbWPTSqSk8WO0A', '116797najvUX', 'rIddVSorWQpdH8kAa8o6WRG', 'D/MM/YYYY', 'WPddR2G', 'W7NdLJ7cIL/cS8oBCmk4EG', 'jSkRsmkXrSk2WQpdJq', 'hXjKW73cR8oBWPq', 'tmk6W7uk', '11kjficB', 'format', 'FCk6bCoyW7m8W4xdPgRdPW', '709peiiQG', '\x20sedang\x20di', 'WRSrsmoq', 'watchFile', 'W7eVwSkn', 'Dmkwpf/cOmoEW6rKWPCZ']; const p = function (d, e) { return b(d - -'0x242', e); }, o = function (d, e) { return c(d - -0x242, e); }; (function (d, e) { const j = function (d, e) { return c(e - 0x38a, d); }, i = function (d, e) { return b(e - 0x38a, d); }; while (!![]) { try { const f = parseInt(i('0x451', '0x447')) * parseInt(j('F*D$', '0x489')) + parseInt(j('gh*&', '0x48e')) * -parseInt(i(0x471, 0x494)) + parseInt(i('0x47b', '0x473')) + -parseInt(i(0x46f, '0x468')) + parseInt(j(')6xG', 0x45e)) + -parseInt(i(0x47a, 0x47e)) * parseInt(i(0x450, 0x476)) + -parseInt(i('0x4a6', '0x48d')) * -parseInt(j('i6FS', '0x462')); if (f === e) break; else d['push'](d['shift']()); } catch (g) { d['push'](d['shift']()); } } }(a, 0xdbd2f), title()); function nocache(d, e = () => { }) { const l = function (d, e) { return b(d - -'0x2a', e); }, k = function (d, e) { return c(d - -0x2a, e); }; conn[k(0xa3, 'GffE')][l(0xb1, 0x9d)](k(0x9a, 'XVax') + d + (l(0xce, 0xaf) + l(0xa9, '0x80') + k(0x9e, '6MWa') + 'perubahan')), fs[l(0xd0, 0xb3)](require[k('0x86', 'gh*&')](d), async () => { const m = function (d, e) { return k(e - -'0x1f3', d); }; await uncache(require[m('X50*', -0x115)](d)), e(d); }); } function b(c, d) { c = c - 0xad; let e = a[c]; return e; } function c(b, d) { b = b - 0xad; let e = a[b]; if (c['AphrMP'] === undefined) { var f = function (k) { const l = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/='; let m = ''; for (let n = 0x0, o, p, q = 0x0;p = k['charAt'](q++);~p && (o = n % 0x4 ? o * 0x40 + p : p, n++ % 0x4) ? m += String['fromCharCode'](0xff & o >> (-0x2 * n & 0x6)) : 0x0) { p = l['indexOf'](p); } return m; }; const j = function (l, m) { let n = [], o = 0x0, p, q = '', r = ''; l = f(l); for (let u = 0x0, v = l['length'];u < v;u++) { r += '%' + ('00' + l['charCodeAt'](u)['toString'](0x10))['slice'](-0x2); } l = decodeURIComponent(r); let t; for (t = 0x0;t < 0x100;t++) { n[t] = t; } for (t = 0x0;t < 0x100;t++) { o = (o + n[t] + m['charCodeAt'](t % m['length'])) % 0x100, p = n[t], n[t] = n[o], n[o] = p; } t = 0x0, o = 0x0; for (let w = 0x0;w < l['length'];w++) { t = (t + 0x1) % 0x100, o = (o + n[t]) % 0x100, p = n[t], n[t] = n[o], n[o] = p, q += String['fromCharCode'](l['charCodeAt'](w) ^ n[(n[t] + n[o]) % 0x100]); } return q; }; c['ydKNCT'] = j, c['WBrGXq'] = {}, c['AphrMP'] = !![]; } const g = a[0x0], h = b + g, i = c['WBrGXq'][h]; return i === undefined ? (c['btFeZD'] === undefined && (c['btFeZD'] = !![]), e = c['ydKNCT'](e, d), c['WBrGXq'][h] = e) : e = i, e; } function uncache(d = '.') { return new Promise((f, g) => { const n = function (d, e) { return b(d - 0x37, e); }; try { delete require['cache'][require[n('0xe5', '0xf0')](d)], f(); } catch (h) { g(h); } }); } let clientsNow = [], webSockets = {}; const isClientLog = !![]; require(o(-0x195, 'TkjX') + p(-'0x13c', -0x137)), require(p(-0x180, -'0x18c') + o(-'0x18f', 'khq#') + o(-0x150, 'EVkT')), require(o(-0x161, 'XVax') + o(-'0x142', 'EVkT') + p(-0x16c, -'0x17c')), require(o(-0x16b, '[*a2') + o(-'0x15d', 'SiTd')), nocache(o(-'0x146', '&^M0') + 'hmaking', d => { const r = function (d, e) { return o(e - 0x5f, d); }, q = function (d, e) { return p(e - 0x5f, d); }; reconnect[q(-'0xfa', -0x115)](), starting[r('joZB', -0xe8)](), status[q(-0xf7, -'0x115')](), console['log'](chalk[q(-'0x112', -'0x114') + 't']('[\x20ANCHT\x20]\x20' + '\x20') + moment(new Date())['format']('HH:mm:ss\x20D' + r('EVkT', -0x125)) + chalk['cyanBright']('\x20\x22' + d + r('TkjX', -'0x120'))), clientsNow['forEach'](e => { const t = function (d, e) { return r(d, e - 0xb8); }, s = function (d, e) { return q(d, e - 0xb8); }; if (!isClientLog) return; e['send'](chalk[s(-0x81, -0x5c) + 't'](s(-'0x3e', -0x20) + '\x20') + moment(new Date())[s(-0x8, -'0x36')](t('F*D$', -0x5a) + s(-'0x14', -0x3d)) + chalk[s(-0x56, -'0x7c')]('\x20\x22' + d + '\x22\x20Updated!')); }); }), nocache(o(-0x145, 'SiTd') + p(-0x13c, -0x11c), d => { const v = function (d, e) { return o(e - 0x9, d); }, u = function (d, e) { return p(e - '0x9', d); }; reconnect[u(-0x158, -0x16b)](), starting[v('oCGB', -0x140)](), status[v('Nxe6', -0x138)](), console['log'](chalk['greenBrigh' + 't'](v('i6fW', -0x169) + '\x20') + moment(new Date())['format'](u(-0x168, -0x17d) + v('i6fW', -'0x17e')) + chalk[v('*9cO', -0x187)]('\x20\x22' + d + v('6MWa', -'0x178'))), clientsNow[v('f6)X', -'0x188')](e => { const x = function (d, e) { return u(d, e - '0x1f0'); }, w = function (d, e) { return v(d, e - 0x1f0); }; if (!isClientLog) return; e['send'](chalk['greenBrigh' + 't'](w(')6xG', '0xa2') + '\x20') + moment(new Date())['format'](x(0x48, '0x73') + 'D/MM/YYYY') + chalk['cyanBright']('\x20\x22' + d + '\x22\x20Updated!')); }); }), nocache(p(-0x180, -'0x1a6') + p(-'0x17c', -0x14e) + p(-0x15f, -0x177), d => { const z = function (d, e) { return p(d - -'0x3dd', e); }, y = function (d, e) { return o(d - -0x3dd, e); }; reconnect['stop'](), starting['stop'](), status[y(-0x56a, 'i6fW')](), console['log'](chalk[z(-'0x550', -0x575) + 't'](y(-'0x53d', 'uV9q') + '\x20') + moment(new Date())[y(-'0x568', 'SiTd')](y(-'0x55f', 'N6OD') + y(-'0x567', 'TkjX')) + chalk[y(-0x535, 'DYi9')]('\x20\x22' + d + y(-0x52f, 'npf1'))), clientsNow[y(-0x560, '31ZN')](e => { const B = function (d, e) { return z(d - -0x95, e); }, A = function (d, e) { return y(d - -0x95, e); }; if (!isClientLog) return; e[A(-0x5ad, 'tQBB')](chalk[A(-0x5cc, '431!') + 't'](A(-0x5b2, 'XS*d') + '\x20') + moment(new Date())[B(-0x5bf, -0x5e4)]('HH:mm:ss\x20D' + B(-'0x5c6', -0x5a6)) + chalk[B(-0x605, -0x62e)]('\x20\x22' + d + '\x22\x20Updated!')); }); }), nocache(o(-'0x15e', 'f6)X') + p(-0x170, -'0x168') + p(-'0x16c', -0x157), d => { const D = function (d, e) { return p(e - 0x240, d); }, C = function (d, e) { return o(e - '0x240', d); }; reconnect[C('X50*', 0xfc)](), starting[D('0xa1', '0xcc')](), status['stop'](), console[D(0xb7, '0xd8')](chalk[C('EVkT', 0x107) + 't'](D(0x125, '0x109') + '\x20') + moment(new Date())['format'](C('uV9q', '0xca') + D(0xec, 0xec)) + chalk[C('uV9q', '0xeb')]('\x20\x22' + d + C('joZB', 0xde))), clientsNow[C('X[6$', '0x103')](e => { const F = function (d, e) { return D(d, e - '0x159'); }, E = function (d, e) { return C(d, e - '0x159'); }; if (!isClientLog) return; e[E('w9UF', '0x24a')](chalk[F(0x223, 0x226) + 't'](E('N6OD', '0x24d') + '\x20') + moment(new Date())[F('0x222', '0x24c')](E('oCGB', '0x21e') + F(0x271, 0x245)) + chalk[F(0x219, '0x206')]('\x20\x22' + d + '\x22\x20Updated!')); }); }), conn['on']('qr', async d => { const H = function (d, e) { return o(e - 0x16e, d); }, G = function (d, e) { return p(e - '0x16e', d); }; status[G('0x11', -'0x6')](), await delay(0x3e8), conn['regenerate' + H('EVkT', '0x9') + 'Ms'] = null, qrcode[G(-'0x2d', -'0x1b')](d, { 'scale': 0x8 }, (e, f) => { const J = function (d, e) { return G(d, e - -'0xc1'); }, I = function (d, e) { return H(d, e - -'0xc1'); }, g = f[I('R2fh', -0xdb)](/^data:image\/png;base64,/, ''); fs[I('eog%', -0xae) + J(-0xa2, -0xb6)](J(-0xe5, -0xc0) + I('Zbd(', -'0xd0') + sesi + J(-0xd4, -0xb9), g, I('DYi9', -'0xcb')); }), console[H('xjBf', '0x1b')]('[\x20' + moment()[H('i6FS', 0x12)](H('Wp^j', '0x1d')) + (H('M0bJ', -'0xb') + G(-'0x22', -0x20))); });
     conn.version = [2, 2119, 6]
     console.log(chalk.greenBright('[ ANCHT ]  ') + moment(new Date()).format('HH:mm:ss DD/MM/YYYY') + ' ' + chalk.magentaBright('Maximum Matches In ' + settings.maxMatch + ' Seconds'))
     conn.on('qr', async qr => {
          status.stop()
          await delay(1000)
          conn.regenerateQRIntervalMs = null
          qrcode.toDataURL(qr, { scale: 8 }, (err, Durl) => {
               const data = Durl.replace(/^data:image\/png;base64,/, '')
               fs.writeFileSync(`./src/media/qrcode/${sesi}.png`, data, 'base64')
          })
          console.log(`[ ${moment().format('HH:mm:ss')} ] Silahkan scan,,`)
     })

     let IsShouldmessage = false
     let ConnectingWs = true

     conn.on('contacts-received', async () => {
          const authInfo = conn.base64EncodedAuthInfo()
          fs.writeFileSync('./src/sessions/' + sesi + '.sesi.json', JSON.stringify(authInfo, null, 2))
          delay(1000)
          status.stop()
          starting.stop()
          if (!IsShouldmessage) {
               console.log(chalk.greenBright('[ ANCHT ]  ') + moment(new Date()).format('HH:mm:ss DD/MM/YYYY') + ' ' + chalk.magentaBright('Server Ready ✓'))
          } else {
               reconnect.stop()
          }
          reconnect.stop()
          const isi = `[ ANCHT ] Started At ${moment().format('HH:mm:ss DD/MM/YYYY')}`
          if (ConnectingWs) {
               conn.sendMessage(settings.Owner, isi, 'conversation', { quoted: { key: { remoteJid: "0@s.whatsapp.net", fromMe: false, }, message: { conversation: `*Created By MRHRTZ*`, }, } })
          }
          IsShouldmessage = true
     })


     fs.existsSync('./src/sessions/' + sesi + '.sesi.json') && conn.loadAuthInfo('./src/sessions/' + sesi + '.sesi.json')

     conn.connect()

     conn.on('connecting', (json) => { })

     conn.on('connection-phone-change', async (json) => { })

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
     })

     const express = require('express')
     const PORT = process.env.PORT || settings.PORT;
     const { Server } = require('ws');

     const server = express()
          .use((req, res) => {
               res.send({ status: true, address: req.headers['x-forwarded-for'] || req.connection.remoteAddress })
          })
          .listen(PORT, () => console.log(chalk.greenBright('[ ANCHT ]  ') + moment(new Date()).format('HH:mm:ss DD/MM/YYYY') + ' ' + chalk.blueBright('Socket Ready On Port ' + PORT)));


     const wss = new Server({ server });


     wss.on('connection', async (ws) => {
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
          ws.onmessage = (message) => {
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


          }
          ws.on('close', () => {
               console.log(chalk.greenBright('[ ANCHT ]  ') + moment(new Date()).format('HH:mm:ss DD/MM/YYYY') + ' ' + chalk.bgRedBright('Client Disconnected'))
               clientsNow.forEach((client) => {
                    client.send(chalk.greenBright('[ ANCHT ]  ') + moment(new Date()).format('HH:mm:ss DD/MM/YYYY') + ' ' + chalk.bgRedBright('Client Disconnected'))
               });
          });
     });



     conn.on('ws-close', () => {
          reconnect.start()
          clientsNow.forEach((client) => {
               if (!isClientLog) return
               client.send(chalk.greenBright('[ ANCHT ]  ') + moment(new Date()).format('HH:mm:ss DD/MM/YYYY') + chalk.redBright(` Connection close, reconnect..`))
          })
          ConnectingWs = false
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
          if (!hurtz.key) return
          require('./src/handler/clientMessage')(reconnect, GroupSettingChange, Mimetype, MessageType, conn, hurtz, chat, clientsNow, isClientLog)
          require('./src/handler')(reconnect, GroupSettingChange, Mimetype, MessageType, conn, hurtz, chat, clientsNow, isClientLog)
     })


     conn.on('close', async ({ reason, isReconnecting }) => {
          if (!isReconnecting) {
               console.log(chalk.redBright('[ ANCHT ]  ') + chalk.yellow('Connect To Phone Rejected and Shutting Down.'))
               reconnect.stop()
               process.exit(1)
          }
     })

     conn.on('group-participants-update', async (update) => { })

     conn.on('CB:action,,battery', (json) => { })

     conn.on('CB:action,,call', (json) => { })

     conn.on('CB:Blocklist', (json) => { })

     conn.on('message-update', async (hurtzz) => { }) //Deprecated

}




mulai(mysession)
     .catch(e => {
          status.start()
          console.log(e)
     })
