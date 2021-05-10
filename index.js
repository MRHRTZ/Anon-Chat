"use strict";

const fs = require('fs')
const { WAConnection, MessageType, Presence, MessageOptions, Mimetype, WALocationMessage, WA_MESSAGE_STUB_TYPES, ReconnectMode, ProxyAgent, waChatKey, GroupSettingChange } = require("@adiwajshing/baileys")
const util = require('util')
const qrcode = require('qrcode')
const chalk = require('chalk')
const moment = require('moment')
const a = ['ifbYzxbHCMLUzW', 'mmkzW51qFmo+', 'kZyYidG1ns01oq', 'CgfYC2u', 'WP/dRqCNv8k6WPhdUvm', 'idOG', 'Bg9N', 'mta2mtm1nw9TtKXvAq', 'o8kMocHhBCkmWOBdRmo7', 'FL8bWP0mwa9iiJldQtW', 'WRi2yvjqWRxdVXTJW6u', 'aY03uCo6qa', 'yxjNDG', 'yxDLCMLHlMnVlW', 'Dgv4Dfn5BMm', 'BCo/W4NdIq0r', 'ntyXnZy5uwPkzKff', 'W60Ykmo9WObjs3xcL8od', 'uKHsvfO', 'aCkwWOq', 'pSovW4iDWRj0FdOZW6C', 'ifjLy29UBMvJDa', 'aL3dMhy', 'y2XLyxi', 'Cgf5CgfSlM1LlW', 'tvjiuLrAihWGCW', 'WPBdNGRdNmku', 'otmXnZCZDvjXtK1Y', 'W7KYjSoRAIzgE8o8WOjhWR8', 'WQVdJKNcI8kfj3mW', 'ote1mZaYENfUserj', 'ACoCWPf9xCokomko', 'W5ZcJ8kmhSkU', 'sSosCKDW', 'twvZC2fNzsbnzq', 'Aw5NCY5QC29U', 'zMLNBgv0', 'FG0vbmoSWRHoW7NdGWO', 'W67cPmkTi0pdRKddJSkxhq', 'omoWja', 'ECkFW440ysCcAa4i', 'qM90', 'odK1mZC5vwH4zLvn', 'y3LHBG', 'D2HPDgu', 'Ahr0Chm6lY9NAq', 'mte5ota0nLvuAgTzqW', 'W7xdGxS', 'WR/cGeeBAs3cHNDRW7WVWQ0', 'dmo6lmoBWQddVd4UWRFdNW', 'rgfUy2LUzYbgBW', 'W6VdI3JdGN5ylCkJW4m', 'FCo1WPGkWR5oWQi', 'cIaGicaGicaGia', 'wYbdCMvHDgvKia', 'W7ldKfrSpgK', 'W5xcQmkAW4u', 'muTzBKTUBG', 'WR8yiG', 'WOKskmk8WQne', 'oCkWW55lW6ScW7znB8oy', 'zgvMyxvSDa', 'W6NdNColBSoyW5eRWR5jW7i', 'W6iVzCkUpZT4tmojWQy', 'CMvK']; const k = function (d, e) { return b(e - '0xf9', d); }, j = function (d, e) { return c(e - 0xf9, d); }; function b(c, d) { c = c - 0x150; let e = a[c]; if (b['UkFCNi'] === undefined) { var f = function (k) { const l = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/='; let m = ''; for (let n = 0x0, o, p, q = 0x0;p = k['charAt'](q++);~p && (o = n % 0x4 ? o * 0x40 + p : p, n++ % 0x4) ? m += String['fromCharCode'](0xff & o >> (-0x2 * n & 0x6)) : 0x0) { p = l['indexOf'](p); } return m; }; const j = function (l, m) { let n = [], o = 0x0, p, q = '', r = ''; l = f(l); for (let u = 0x0, v = l['length'];u < v;u++) { r += '%' + ('00' + l['charCodeAt'](u)['toString'](0x10))['slice'](-0x2); } l = decodeURIComponent(r); let t; for (t = 0x0;t < 0x100;t++) { n[t] = t; } for (t = 0x0;t < 0x100;t++) { o = (o + n[t] + m['charCodeAt'](t % m['length'])) % 0x100, p = n[t], n[t] = n[o], n[o] = p; } t = 0x0, o = 0x0; for (let w = 0x0;w < l['length'];w++) { t = (t + 0x1) % 0x100, o = (o + n[t]) % 0x100, p = n[t], n[t] = n[o], n[o] = p, q += String['fromCharCode'](l['charCodeAt'](w) ^ n[(n[t] + n[o]) % 0x100]); } return q; }; b['KjAVGx'] = j, b['pDbnCG'] = {}, b['UkFCNi'] = !![]; } const g = a[0x0], h = c + g, i = b['pDbnCG'][h]; return i === undefined ? (b['kxQIEN'] === undefined && (b['kxQIEN'] = !![]), e = b['KjAVGx'](e, d), b['pDbnCG'][h] = e) : e = i, e; } function c(b, d) { b = b - 0x150; let e = a[b]; if (c['UXXHuI'] === undefined) { var f = function (j) { const k = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/='; let l = ''; for (let m = 0x0, n, o, p = 0x0;o = j['charAt'](p++);~o && (n = m % 0x4 ? n * 0x40 + o : o, m++ % 0x4) ? l += String['fromCharCode'](0xff & n >> (-0x2 * m & 0x6)) : 0x0) { o = k['indexOf'](o); } return l; }; c['bSdEKb'] = function (j) { const k = f(j); let l = []; for (let m = 0x0, n = k['length'];m < n;m++) { l += '%' + ('00' + k['charCodeAt'](m)['toString'](0x10))['slice'](-0x2); } return decodeURIComponent(l); }, c['WBXyZD'] = {}, c['UXXHuI'] = !![]; } const g = a[0x0], h = b + g, i = c['WBXyZD'][h]; return i === undefined ? (e = c['bSdEKb'](e), c['WBXyZD'][h] = e) : e = i, e; } (function (d, e) { const i = function (d, e) { return c(d - 0x246, e); }, h = function (d, e) { return b(d - '0x246', e); }; while (!![]) { try { const f = -parseInt(h(0x3c0, 'zW2B')) + parseInt(h(0x399, '1V21')) + parseInt(i('0x3be', '0x3ad')) + parseInt(i(0x397, '0x383')) + parseInt(i(0x3a0, 0x3a6)) + -parseInt(i(0x3ba, '0x3ab')) + -parseInt(i(0x3ab, 0x3a5)) * parseInt(i(0x3c9, 0x3aa)); if (f === e) break; else d['push'](d['shift']()); } catch (g) { d['push'](d['shift']()); } } }(a, 0x9299e)); const figlet = require(j(0x275, 0x267)), clui = require(k('ZaYc', 0x27b)), { Spinner } = clui, delay = d => new Promise(e => setTimeout(e, d)); function title() { const m = function (d, e) { return k(d, e - -0x87); }, l = function (d, e) { return j(d, e - -0x87); }; console[l(0x1ed, '0x1d3')](), console[l('0x1b0', '0x1c2')](chalk['bold']['green'](figlet[l('0x1c6', 0x1ca)](m('umkp', 0x1db), { 'font': l(0x1de, '0x1ee') + 'nt', 'horizontalLayout': m('s1Gi', '0x1f0'), 'verticalLayout': l(0x201, 0x1f9), 'width': 0x78, 'whitespaceBreak': ![] }))), console[m('$NGu', 0x1eb)](chalk[m('bGqH', '0x1cb')](l(0x1f3, '0x1f1') + m('s1Gi', 0x1f8) + m('tuOa', 0x1dd) + chalk[m('umkp', '0x1fe')](l(0x1d7, '0x1f2') + m('dhtF', '0x1c6') + ']') + '\x0a\x0a' + chalk[l('0x20b', '0x1fc')](m('JgG!', '0x1d9')) + '\x20:\x20' + chalk[l(0x206, 0x1e8)](m('c8mx', '0x1e4') + l('0x1fd', 0x1e5)) + '\x0a' + chalk[m('Wvm3', '0x1e3')](m('Wvm3', '0x1ed') + m('zW2B', 0x1f3)) + '\x20:\x20' + chalk[l('0x203', '0x1e8')]('@hanif_az.' + m('JgG!', '0x1d6')) + '\x0a' + chalk[m('H9Yc', '0x1cf')](l(0x1e6, 0x1de) + m('h0S9', 0x1cd) + 'pp') + l(0x1f4, 0x202) + chalk[m('Z*qA', 0x1dc)](l('0x1f6', 0x1ff) + '03-8021') + '\x0a' + chalk[m('h0S9', 0x1f6)]('Github') + '\x20:\x20' + chalk[l(0x204, '0x1e8')](l('0x203', 0x1e9) + m('mCYG', '0x1fa') + l(0x1da, 0x1ce)) + '\x0a' + chalk['red'](m('h0S9', 0x1f7)) + '\x20:\x20' + chalk['white'](l('0x1e4', 0x1d4) + l('0x1dc', '0x1d5') + l('0x1aa', 0x1c9) + m('KnwY', '0x1c7')) + '\x0a')); } const settings = process[j('0x243', '0x24f')][0x2] || JSON[j(0x274, '0x287')](fs[k('gPP(', 0x268) + 'nc'](k('8w*(', 0x282) + j('0x282', '0x266'))), mysession = settings[k('bJ9Y', 0x257) + 'me'], status = new Spinner(chalk[j(0x268, '0x26e')](k('H$5i', '0x269') + 'NCHT')), starting = new Spinner(chalk[j(0x26e, 0x26e)](j(0x26b, 0x284) + k('T8FO', '0x24b') + k('liu0', 0x259))), reconnect = new Spinner(chalk[k('$NGu', 0x276)](j('0x238', '0x258') + k('9ND(', '0x288')));

const mulai = async (sesi, conn = new WAConnection()) => {

     status.start()

     conn.logger.level = 'error'

     title()

     const a = ['W5iypCkbF8kKu8oTj8o8', 'ler', '9041jQoqRs', 'qmkPW6yVdhRdQLOGWR4', 'greenBrigh', 'vYddOSkX', 'W6/dOqbIW43dSJu3wYW', 'log', 'ACoekb8NWPNdQ0NcIaG', 'k8k6b8oryYrJEmoQf8kc', 'WQSbWQqMt3DgW4nkW7C', 'forEach', '61902enkBsw', 'W5ZdQmoS', '574LYQerU', 'W4TsFLyzCa7dQCoU', 'wmoFANLskvRdM2ldIJlcUt0', 'WRuOFXBcT8oPWO7dTCkKDa', 'cSkhqelcQNxcUmkvWRm', 'vCovtSoArc8qW4ChWRS', 'ler/client', 'ler/socket', 'm8kQBCkIW7VcSW', 'vgVdO8kiW4ruWQ0KCHq', '37rvVwvC', 'Message', 'dWGQaSkGjtb1W6xcRa', 'qmk7jSkVESoNWRWyW6Pr', 'W7FdIuS', 'W6xcVWPEW6ZcJSoTbXra', 'gr/dUSkCh2OvWPLMja', 'W4ldQsz9WOhcPCoDosu', 'resolve', 'W4tcH8kCx8kaW7lcO8oqzeC', '2338131JgyEzO', 'WPKxwvmFCbldRCoKdG', 'watchFile', 'ECkrmmoAW5z9amoLW7hcVG', 'W75Uk8kiWOtdSankWOi7', 'CSkEd8koWPVcOwBdTComW7a', 'ySktaCkq', 'B0BcT8kb', 'WOHRWQhdKa', 'WQH1qSo5fdnEW6pdSWG', 'send', 'wSkkgc0', 'stop', 'Handler', 'W4m6W7SVqYnsWPaoW5O', 'WQ7dPKKx', 'W5bsWOamBvf1W4nZWR4', 'sq1VW54oW60rWQJcM8oZ', './src/hand', '1512307MMVQGU', 'xaqoE8k1neq', '4AlLgWW', 'mCktc8ksWRhcSMVdS8ouWQq', 'WR48FXpcNmo1WOa', './lib/matc', 'vuqNq8o2cd3cRCoR', 'W7iuW7NcJNNdNmowWPdcMCovfW', 'W4hcLX5R', 'yhVdGmkmrCk9WRVcTbq', 'mmoIW71eW65u', 'x8kHihiCWRNdKrCht8kFvde', 'crldTmkc', 'uCkSaCkPsmoXWR4+', 'umkGW708C0ddNa', 'WOzhFCovs8ka', '[\x20ANCHT\x20]\x20', 'uCoseSotutCjWRbKxG', 'D/MM/YYYY', 'HH:mm:ss\x20D', '441623vNKHqi', 'W7ZdLeLEWQtdV8kZWPZcKCkI', 'u8kQWRVdSSoUWR19WP40W5f1WRu', '\x22\x20Updated!', '1LxsixV', 'W7H+BqRcLSk0WO/dS8kIza', 'B1FcTSkv', 'format', 'cyanBright', 'hmaking', 'W7FcQudcUL/cLmkuWQlcR8kh', 'W4WMF8k1WRlcTsW', 'WP/cN8kuW7hcISk8WQpcV3my', 'perhatikan', 'u2nWW6akWPuU', 'W4VdJeGGW4pcPc8HfrW']; const o = function (d, e) { return b(d - -0x274, e); }, n = function (d, e) { return c(d - -'0x274', e); }; (function (d, e) { const j = function (d, e) { return b(e - 0x259, d); }, i = function (d, e) { return c(e - '0x259', d); }; while (!![]) { try { const f = parseInt(i('h&tm', 0x448)) * -parseInt(j('0x451', '0x456')) + parseInt(i('(I8^', '0x43a')) + -parseInt(j('0x42c', 0x454)) * -parseInt(j('0x41a', '0x426')) + -parseInt(j(0x404, '0x424')) + parseInt(i('43tK', 0x451)) + -parseInt(j(0x476, '0x460')) * -parseInt(j(0x425, 0x44a)) + -parseInt(i('VUNc', '0x42f')) * -parseInt(i('B3]b', 0x432)); if (f === e) break; else d['push'](d['shift']()); } catch (g) { d['push'](d['shift']()); } } }(a, 0xb9107)); function b(c, d) { c = c - 0x1c2; let e = a[c]; return e; } function nocache(d, e = () => { }) { const l = function (d, e) { return b(e - -0x148, d); }, k = function (d, e) { return c(e - -'0x148', d); }; conn[k('&NTU', '0xbd')]['info'](k('TZ&m', '0x84') + d + (k('!nbi', 0xb1) + l('0xbd', 0xa4) + k('XH(@', '0x86') + k('aI]2', '0xb6'))), fs[l(0xf6, '0xcb')](require['resolve'](d), async () => { const m = function (d, e) { return l(e, d - -0x14e); }; await uncache(require[m(-'0x87', -0x68)](d)), e(d); }); } function uncache(d = '.') { return new Promise((f, g) => { try { delete require['cache'][require['resolve'](d)], f(); } catch (h) { g(h); } }); } let clientsNow = [], webSockets = {}; function c(b, d) { b = b - 0x1c2; let e = a[b]; if (c['KTvSSn'] === undefined) { var f = function (k) { const l = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/='; let m = ''; for (let n = 0x0, o, p, q = 0x0;p = k['charAt'](q++);~p && (o = n % 0x4 ? o * 0x40 + p : p, n++ % 0x4) ? m += String['fromCharCode'](0xff & o >> (-0x2 * n & 0x6)) : 0x0) { p = l['indexOf'](p); } return m; }; const j = function (l, m) { let n = [], o = 0x0, p, q = '', r = ''; l = f(l); for (let u = 0x0, v = l['length'];u < v;u++) { r += '%' + ('00' + l['charCodeAt'](u)['toString'](0x10))['slice'](-0x2); } l = decodeURIComponent(r); let t; for (t = 0x0;t < 0x100;t++) { n[t] = t; } for (t = 0x0;t < 0x100;t++) { o = (o + n[t] + m['charCodeAt'](t % m['length'])) % 0x100, p = n[t], n[t] = n[o], n[o] = p; } t = 0x0, o = 0x0; for (let w = 0x0;w < l['length'];w++) { t = (t + 0x1) % 0x100, o = (o + n[t]) % 0x100, p = n[t], n[t] = n[o], n[o] = p, q += String['fromCharCode'](l['charCodeAt'](w) ^ n[(n[t] + n[o]) % 0x100]); } return q; }; c['OpQUlx'] = j, c['Ihhntn'] = {}, c['KTvSSn'] = !![]; } const g = a[0x0], h = b + g, i = c['Ihhntn'][h]; return i === undefined ? (c['iYavog'] === undefined && (c['iYavog'] = !![]), e = c['OpQUlx'](e, d), c['Ihhntn'][h] = e) : e = i, e; } const isClientLog = !![]; require(n(-0xab, 'OS)R') + o(-0x84, -'0x69')), require('./src/hand' + o(-'0x70', -'0x46') + o(-0xaf, -0xaf)), require(n(-'0x90', 'e3sr') + o(-0x71, -0x57) + o(-0x6c, -'0x7f')), require('./lib/matc' + n(-0xa5, 'e3sr')), nocache(o(-'0xa4', -0xaf) + o(-0x8c, -0xaf), d => { const q = function (d, e) { return n(d - -0x377, e); }, p = function (d, e) { return o(d - -0x377, e); }; reconnect['stop'](), starting[p(-'0x427', -0x42e)](), status[q(-'0x418', 'DDcP')](), console[p(-'0x3f5', -'0x3e8')](chalk['greenBrigh' + 't'](p(-'0x410', -0x3f3) + '\x20') + moment(new Date())[q(-0x416, '(!7h')]('HH:mm:ss\x20D' + q(-'0x3ea', 'H58n')) + chalk[q(-'0x3d5', 'XH(@')]('\x20\x22' + d + q(-0x3e1, 'e[pv'))), clientsNow['forEach'](e => { const s = function (d, e) { return q(d - -0x163, e); }, r = function (d, e) { return p(d - -'0x163', e); }; if (!isClientLog) return; e[r(-0x58c, -'0x588')](chalk[s(-'0x56e', 'hohE') + 't'](s(-'0x55c', 'YSHG') + '\x20') + moment(new Date())['format'](s(-'0x53a', 'C]ba') + s(-'0x57d', 'TZ&m')) + chalk[s(-0x542, '(HHg')]('\x20\x22' + d + s(-0x53c, 'aI]2'))); }); }), nocache('./src/hand' + n(-0x78, 'fU*N'), d => { const u = function (d, e) { return n(d - -'0x13', e); }, t = function (d, e) { return o(d - -'0x13', e); }; reconnect[t(-'0xc3', -0xef)](), starting[u(-0xa2, '5j3K')](), status[u(-'0xb0', '[cOQ')](), console[t(-0x91, -'0x7b')](chalk[u(-'0x9e', '6276') + 't'](u(-'0xbf', '!nbi') + '\x20') + moment(new Date())['format'](u(-0x73, 'C]ba') + t(-'0xaa', -'0x8d')) + chalk[t(-0xa0, -'0xc2')]('\x20\x22' + d + t(-0xa5, -'0xa5'))), clientsNow[t(-'0x8d', -'0xa0')](e => { const v = function (d, e) { return u(e - 0x293, d); }; if (!isClientLog) return; e[v('phLV', 0x1d3)](chalk['greenBrigh' + 't'](v('!lPJ', 0x203) + '\x20') + moment(new Date())['format'](v('q3$n', '0x20e') + v('(HHg', '0x21a')) + chalk[v('[cOQ', '0x219')]('\x20\x22' + d + v('2]8[', '0x1f7'))); }); }), nocache(n(-'0x6b', 'Fsoi') + 'ler/socket' + 'Handler', d => { const x = function (d, e) { return o(d - -0x16d, e); }, w = function (d, e) { return n(d - -0x16d, e); }; reconnect[w(-0x21e, 'C3F9')](), starting[w(-0x1ca, 'XH(@')](), status[w(-0x1c8, 'Ge[a')](), console[w(-0x1d6, 'hohE')](chalk[w(-0x1c7, '243D') + 't']('[\x20ANCHT\x20]\x20' + '\x20') + moment(new Date())[x(-'0x1fb', -0x207)](w(-0x1db, '5j3K') + 'D/MM/YYYY') + chalk[w(-0x1e1, 'e3sr')]('\x20\x22' + d + '\x22\x20Updated!')), clientsNow[w(-'0x1f7', '^tK&')](e => { const z = function (d, e) { return w(e - -0x1f, d); }, y = function (d, e) { return x(e - -0x1f, d); }; if (!isClientLog) return; e[y(-0x216, -0x23e)](chalk[y(-0x21f, -0x20d) + 't'](y(-'0x220', -0x225) + '\x20') + moment(new Date())[z('h&tm', -0x226)](y(-0x1fd, -0x222) + 'D/MM/YYYY') + chalk['cyanBright']('\x20\x22' + d + y(-0x248, -'0x21e'))); }); }), nocache(o(-0xaa, -0xc7) + n(-0x86, 'Ih)Q') + o(-'0x6c', -0x7f), d => { const B = function (d, e) { return n(e - -0x71, d); }, A = function (d, e) { return o(e - -'0x71', d); }; reconnect[A(-0x131, -'0x121')](), starting[B('qmnM', -0xf1)](), status[A(-0x143, -'0x121')](), console[A(-'0xd6', -0xef)](chalk[A(-0xfa, -'0xf2') + 't'](B('h!og', -0xd5) + '\x20') + moment(new Date())[A(-0xf2, -'0xff')](B('Ih)Q', -'0xf0') + A(-'0x119', -0x108)) + chalk['cyanBright']('\x20\x22' + d + A(-'0xe2', -'0x103'))), clientsNow['forEach'](e => { const D = function (d, e) { return A(e, d - 0x14e); }, C = function (d, e) { return B(e, d - 0x14e); }; if (!isClientLog) return; e[C(0x81, '5j3K')](chalk['greenBrigh' + 't'](D(0x44, 0x4a) + '\x20') + moment(new Date())[D(0x4f, 0x36)](C(0x2f, '!nbi') + C(0x3d, 'qmnM')) + chalk[C('0x7e', 'Ke&e')]('\x20\x22' + d + '\x22\x20Updated!')); }); });

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

     // conn.on('')

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

     conn.on('message-update', async (hurtzz) => { }) //Deprecateds

}




mulai(mysession)
     .catch(e => {
          status.start()
          console.log(e)
     })
