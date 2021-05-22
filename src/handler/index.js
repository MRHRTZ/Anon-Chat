"use strict";


var fs = require("fs");
var request = require('request')
var chalk = require('chalk')
var moment = require('moment')
var { exec } = require('child_process')
var util = require('util');
var delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
var time = moment(new Date()).format('HH:mm:ss DD/MM/YYYY')

const { match, stop, isMatched } = require('../../lib/matchmaking')

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

          const a = ['4330LOeUTG', 'Sticker', 'Debug', 'fromMe', 'low', '13658LyovPv', '5nfOjhB', 'Not\x20a\x20vali', 'Created\x20By', 'includes', 'conversati', 'composing', 'stringify', 'jid', '\x20☠️🇮🇩', '196147miyDei', 'xtMessage', 'paused', 'END:VCARD', 'ings.json', '177539BaPabn', 'Contact', 'sage', 'vname', 'none', 'Owner', '0@s.whatsa', '4nslAqW', '1114057xqSIlO', 'BY\x20MRHRTZ*', 'thumbnailM', 'Owner\x20bot', 'ssage', 'audioMessa', 'remoteJid', 'ence', '1025836CEDsaG', 'ext', 'slice', 'caption', 'contacts', 'quotedM', 'endsWith', 'essage', 'sendMessag', 'extendedTe', '\x20MRHRTZ', 'greenBrigh', 'document', '\x20pesan', 'message', '149JUAGpe', 'i\x20error\x20nt', 'key', 'age', 'text', 'gan\x20digant', 'ar\x20nangid\x20', 'test', './src/sett', 'split', 'okey', 'error', 'substr', 'pp.net', 'forEach', 'D/MM/YYYY', 'imageMessa', '22ksRTGc', 'replace', '@s.whatsap', 'match', 'FN:', 'subject', 'quotedMess', '\x20di\x20', '@c.us', 'updatePres', 'Audio', 'VERSION:3.', 'HH:mm:ss\x20D', 'notify', 'user', 'mentionedT', 'parse', 'blueBright', '5\x205903\x20802', '021:+62\x2085', 'format', 'keys', 'documentMe', 'd\x20url!', '[\x20NOT\x20FOUN', 'chatRead', 'push', '[\x20ANCHT\x20]\x20', 'log', '76003LdxpGI', 'participan', '\x20Uni;\x0a', 'ephemeralM', 'groupMetad', 'contextInf', '\x20dari\x20', 'isAdmin', 'ORG:Ashoka', 'contact', 'stickerMes', 'ata', 'owner', 'videoMessa', 'send']; const l = function (c, d) { return b(c - -0x350, d); }; (function (c, d) { const k = function (c, d) { return b(c - 0x2d4, d); }; while (!![]) { try { const e = -parseInt(k(0x3df, 0x3be)) * -parseInt(k(0x3ac, '0x3bd')) + parseInt(k('0x3b2', '0x3bf')) * -parseInt(k(0x39d, '0x3b3')) + parseInt(k('0x3c8', 0x3ca)) + -parseInt(k('0x3b1', '0x3d3')) * parseInt(k('0x380', '0x35d')) + parseInt(k(0x3c0, '0x3a0')) * parseInt(k(0x3c7, '0x3df')) + -parseInt(k(0x3bb, 0x39a)) + -parseInt(k(0x3d0, 0x400)); if (e === d) break; else c['push'](c['shift']()); } catch (f) { c['push'](c['shift']()); } } }(a, 0x8a67d)); const time = moment(hurtz['messageTim' + 'estamp'][l(-0x274, -0x291)] * 0x3e8)[l(-'0x290', -'0x2c7')](l(-0x298, -'0x26f') + l(-0x2a6, -'0x271')); let settings = JSON[l(-0x294, -0x262)](fs['readFileSy' + 'nc'](l(-0x23d, -'0x20b') + l(-0x265, -'0x288'))); const from = hurtz['key']['remoteJid'], konten = JSON[l(-'0x26c', -0x281)](hurtz[l(-0x246, -0x230)], null, 0x2), { text, extendedText, audio, video, document, image } = MessageType, self = hurtz[l(-'0x243', -0x210)][l(-'0x275', -'0x283')], isGroup = from[l(-0x24e, -0x23c)]('@g.us'); let type = Object[l(-0x28f, -0x25b)](hurtz['message'])[0x0]; type = type === l(-0x24b, -0x240) + l(-'0x268', -'0x23d') && hurtz['message'][l(-0x24b, -0x218) + l(-0x268, -0x287)][l(-0x241, -0x22e)][l(-'0x26f', -'0x2a6')]('@') ? type = l(-0x295, -0x270) + l(-'0x253', -'0x243') : type; let hurtzText = hurtz; type == l(-'0x284', -'0x251') + l(-0x24d, -'0x235') && (type = Object[l(-0x28f, -0x27c)](hurtz[l(-0x246, -0x265)]['ephemeralM' + l(-'0x24d', -0x21d)][l(-0x246, -'0x232')]), hurtzText = hurtz[l(-'0x246', -0x22d)][l(-'0x284', -'0x288') + 'essage']); const body = type == 'conversati' + 'on' ? hurtzText[l(-0x246, -0x27a)]['conversati' + 'on'] : type == l(-'0x295', -'0x28d') + l(-0x253, -0x242) ? hurtzText[l(-0x246, -0x27e)][l(-0x24b, -'0x253') + l(-'0x268', -0x27e)][l(-0x241, -'0x240')] : type == l(-0x24b, -0x257) + l(-0x268, -'0x29f') ? hurtzText[l(-'0x246', -0x25f)][l(-0x24b, -0x220) + l(-'0x268', -0x25e)]['text'] : type == l(-0x2a5, -0x2bf) + 'ge' ? hurtzText['message'][l(-0x2a5, -0x2d4) + 'ge'][l(-0x251, -'0x267')] : type == l(-0x27d, -0x28c) + 'sage' ? l(-0x277, -'0x265') : type == l(-0x257, -'0x23a') + 'ge' ? l(-'0x29a', -'0x2a5') : type == l(-'0x27a', -0x273) + 'ge' ? hurtzText[l(-0x246, -'0x24e')][l(-0x27a, -0x259) + 'ge'][l(-'0x251', -0x283)] : type == l(-'0x28e', -'0x26a') + 'ssage' ? l(-'0x248', -'0x269') : type == 'contactMes' + l(-0x262, -0x252) ? l(-'0x263', -'0x250') : l(-'0x28c', -'0x2ab') + 'D\x20BODY\x20@Me' + 'chaBOT\x20]', bodyAsak = body[l(-0x2a9, -'0x2a1')](0x0, 0x28)['split']('\x0a')[0x0], args = body[l(-0x23c, -'0x208')](/ +/g), cmd = body['toLowerCas' + 'e']()[l(-0x23c, -0x257)]('\x20')[0x0] || '', prf = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?@#$%^&.\/\\©^]/[l(-0x23e, -0x21e)](cmd) ? cmd[l(-'0x2a1', -0x2cf)](/^[°•π÷×¶∆£¢€¥®™✓_=|~!?@#$%^&.\/\\©^]/gi) : '-', anticol = /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g, isMedia = type === l(-'0x2a5', -0x29a) + 'ge' || type === 'videoMessa' + 'ge', isQuotedImage = type == l(-'0x24b', -0x254) + l(-0x268, -0x29f) && konten[l(-'0x26f', -'0x275')]('imageMessa' + 'ge'), isQuotedVideo = type == l(-'0x24b', -'0x21b') + 'xtMessage' && konten['includes']('videoMessa' + 'ge'), isQuotedSticker = type == 'extendedTe' + 'xtMessage' && konten[l(-'0x26f', -'0x26f')]('stickerMes' + l(-'0x262', -'0x24c')), isQuotedAudio = type == l(-0x24b, -'0x252') + 'xtMessage' && konten[l(-0x26f, -'0x2a1')](l(-'0x257', -'0x233') + 'ge'); let typeQuoted = type == l(-0x24b, -'0x21b') + l(-'0x268', -'0x26e') && hurtz[l(-0x246, -'0x22f')][l(-'0x24b', -'0x27d') + 'xtMessage'] ? Object[l(-0x28f, -'0x285')](hurtz[l(-'0x246', -'0x22f')][l(-'0x24b', -0x22a) + l(-'0x268', -0x27c)][l(-0x282, -'0x25e') + 'o'] ? hurtz[l(-'0x246', -0x26c)][l(-0x24b, -'0x218') + l(-'0x268', -'0x232')][l(-0x282, -'0x251') + 'o']['quotedMess' + l(-'0x242', -'0x21f')] ? hurtz[l(-0x246, -0x227)][l(-'0x24b', -'0x23e') + l(-0x268, -'0x285')]['contextInf' + 'o'][l(-0x29e, -0x2cf) + l(-'0x242', -0x22a)] : { 'mentionedText': l(-'0x270', -0x25a) + l(-0x24a, -'0x21c') } : { 'thumbnailMessage': 'MRHRTZ\x20Jan' + l(-'0x240', -0x248) + l(-0x244, -'0x21c') + l(-0x23f, -0x240) + ':v' })[0x0] : type, hurtzMediaData = type == l(-0x24b, -0x225) + l(-'0x268', -'0x2a0') && Object[l(-'0x28f', -'0x2a6')](JSON[l(-'0x294', -0x277)](JSON['stringify'](hurtz)[l(-0x2a3, -0x2ce)](l(-'0x24f', -0x257), 'm'))['message']) != 'ephemeralM' + l(-0x24d, -'0x25e') ? JSON['parse'](JSON[l(-'0x26c', -'0x24c')](hurtz)[l(-0x2a3, -0x2a3)](l(-'0x24f', -'0x252'), 'm'))[l(-'0x246', -'0x254')][l(-0x24b, -0x24b) + l(-'0x268', -0x26c)][l(-'0x282', -0x2ba) + 'o'] : hurtzText; type == l(-0x24b, -0x253) + 'xtMessage' && Object[l(-0x28f, -0x263)](JSON[l(-0x294, -'0x289')](JSON[l(-0x26c, -'0x27a')](hurtz)[l(-0x2a3, -0x27d)](l(-0x24f, -0x23b), 'm'))[l(-'0x246', -0x244)]) == l(-'0x284', -'0x294') + l(-'0x24d', -'0x245') && JSON[l(-0x294, -'0x2a2')](JSON[l(-0x26c, -0x284)](hurtz)['replace']('quotedM', 'm'))[l(-'0x246', -'0x25e')][l(-0x284, -0x286) + l(-'0x24d', -0x261)][l(-'0x246', -'0x23b')][l(-'0x24b', -0x232) + l(-0x268, -0x243)][l(-0x282, -0x2a0) + 'o'][l(-0x246, -'0x267')] && (typeQuoted = Object[l(-'0x28f', -0x283)](JSON['parse'](JSON[l(-'0x26c', -0x253)](hurtz)[l(-'0x2a3', -0x29f)]('quotedM', 'm'))['message'][l(-'0x284', -'0x2bb') + l(-0x24d, -'0x224')][l(-0x246, -0x245)][l(-0x24b, -'0x227') + l(-0x268, -0x29b)]['contextInf' + 'o'][l(-'0x246', -0x277)]), hurtzMediaData = JSON['parse'](JSON[l(-'0x26c', -'0x245')](hurtz)[l(-'0x2a3', -0x2c1)](l(-0x24f, -0x254), 'm'))[l(-0x246, -0x238)][l(-'0x284', -0x293) + l(-'0x24d', -'0x229')][l(-0x246, -'0x220')][l(-0x24b, -0x251) + 'xtMessage'][l(-'0x282', -0x278) + 'o']); function b(c, d) { c = c - 0xa5; let e = a[c]; return e; } const mediaData = type == l(-0x24b, -'0x270') + 'xtMessage' ? typeQuoted == l(-'0x25a', -'0x22f') + l(-0x24d, -0x24b) ? hurtzText : hurtzMediaData : hurtzText; let typesWA = [l(-0x26e, -'0x27f') + 'on', l(-0x24b, -'0x21f') + l(-'0x268', -0x26f), l(-'0x295', -0x2cc) + l(-'0x253', -0x21c), 'imageMessa' + 'ge', 'stickerMes' + l(-0x262, -'0x290'), 'audioMessa' + 'ge', l(-'0x27a', -'0x249') + 'ge', l(-'0x28e', -0x258) + 'ssage', l(-'0x25a', -'0x22c') + 'essage']; const bodyQuoted = typesWA[l(-'0x26f', -'0x23d')](type === l(-'0x24b', -'0x21c') + 'xtMessage' && hurtzMediaData ? Object['keys'](hurtzMediaData[l(-'0x246', -'0x219')] ? hurtzMediaData[l(-0x246, -'0x23f')] : { 'MRHRTZ': l(-'0x2ab', -'0x2a1') })[0x0] : l(-'0x260', -'0x282')) ? typeQuoted == 'conversati' + 'on' ? hurtzMediaData[l(-0x246, -'0x270')][l(-'0x26e', -'0x239') + 'on'] : typeQuoted == l(-0x24b, -0x21f) + l(-0x268, -0x24e) ? hurtzMediaData['message'][l(-0x24b, -'0x27a') + l(-'0x268', -0x23f)]['text'] : typeQuoted == l(-0x295, -0x25e) + 'ext' ? hurtzMediaData[l(-0x246, -0x262)][l(-0x24b, -0x251) + l(-0x268, -0x261)][l(-'0x241', -0x20f)] : typeQuoted == 'imageMessa' + 'ge' ? hurtzMediaData['message'][l(-0x2a5, -'0x295') + 'ge'][l(-0x251, -'0x259')] : typeQuoted == l(-0x27d, -0x279) + l(-'0x262', -0x23f) ? l(-'0x277', -0x25d) : typeQuoted == l(-0x257, -'0x269') + 'ge' ? l(-'0x29a', -0x295) : typeQuoted == l(-0x27a, -0x255) + 'ge' ? hurtzMediaData[l(-'0x246', -'0x214')]['videoMessa' + 'ge'][l(-'0x251', -'0x25d')] : typeQuoted == l(-'0x28e', -'0x282') + l(-0x258, -0x28c) ? l(-'0x248', -'0x24b') : typeQuoted == l(-0x25a, -'0x276') + 'essage' ? hurtzMediaData[l(-0x246, -'0x220')] : '' : ''; settings[l(-'0x276', -'0x2a6')] ? console[l(-'0x288', -0x2b2)](JSON['stringify'](hurtz)) : ''; let toggleCmd = ![]; const isCmd = toggleCmd, query = args[l(-'0x252', -0x234)](0x1)['join']('\x20'), sender = self ? conn[l(-0x296, -0x292)][l(-0x26b, -'0x23f')] : isGroup ? hurtz[l(-0x286, -'0x266') + 't'] : hurtz[l(-'0x243', -'0x230')][l(-'0x256', -'0x285')], botNumber = conn[l(-'0x296', -0x261)]['jid'], noSym = /[-\s+]/g, groupMetadata = isGroup ? await conn[l(-'0x283', -0x27c) + l(-0x27c, -'0x246')](from) : '', groupName = isGroup ? groupMetadata[l(-0x29f, -0x27a)] : '', groupId = isGroup ? groupMetadata['id'] : '', isImageMsg = type == 'imageMessa' + 'ge' ? !![] : ![], isStickerMsg = type == l(-'0x27d', -'0x273') + 'sage' ? !![] : ![], isAudioMsg = type == l(-0x257, -0x27e) + 'ge' ? !![] : ![], isVideoMsg = type == l(-'0x27a', -'0x258') + 'ge' ? !![] : ![], nomerOwner = [settings[l(-'0x25f', -'0x295')], conn[l(-0x296, -'0x28f')][l(-'0x26b', -0x287)]], isOwner = nomerOwner[l(-0x26f, -'0x2a2')](sender), isOwnerGroup = isGroup ? (await conn['groupMetad' + l(-'0x27c', -'0x277')](from))[l(-'0x27b', -'0x278')] == sender['replace'](l(-0x2a2, -0x2c4) + 'p.net', l(-0x29c, -'0x27c')) ? !![] : ![] : ''; let expvipnum = [], adminGroups = []; const metadata = isGroup ? await conn[l(-'0x283', -0x27f) + l(-'0x27c', -'0x26d')](from) : '', partc = metadata['participan' + 'ts'] ? metadata['participan' + 'ts'] : []; for (let adm of partc) { adm[l(-'0x280', -'0x265')] && adminGroups[l(-0x28a, -0x27d)](adm[l(-0x26b, -'0x282')]); } const isAdmin = adminGroups[l(-0x26f, -0x25b)](sender), isBotAdmin = adminGroups[l(-'0x26f', -'0x272')](botNumber), jid = sender, conts = hurtz[l(-'0x243', -'0x21a')][l(-0x275, -'0x275')] ? conn['user'][l(-'0x26b', -'0x255')] : conn[l(-'0x250', -'0x260')][sender] || { 'notify': sender[l(-0x2a3, -0x26c)](/@.+/, '') }, pushname = hurtz[l(-'0x243', -'0x231')][l(-0x275, -0x28c)] ? conn[l(-0x296, -'0x2a8')]['name'] : conts[l(-0x297, -0x293)] || conts[l(-'0x261', -0x287)] || conts['name'] || '-'; function customQuote(c) { const m = function (c, d) { return l(c - 0xea, d); }; return { 'key': { 'remoteJid': m(-0x174, -0x14f) + m(-0x1be, -0x1aa), 'fromMe': ![] }, 'message': { 'conversation': c } }; } function toBuffer(c) { return new Promise((d, e) => { const n = function (c, d) { return b(c - '0x3b8', d); }; if (!/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/gi[n(0x4ca, 0x498)](c)) return console['error'](n(0x497, 0x48b) + n(0x47b, 0x496)); request({ 'url': c, 'encoding': null }, (f, g, h) => { d(h); }); }); } async function mengetik(c) { const o = function (c, d) { return l(d - 0x146, c); }; await conn[o(-0x11f, -0x145)](c), await conn['updatePres' + o(-'0x12d', -0x10f)](c, o(-'0xf3', -0x127)); } async function balasNp(c, d) { const p = function (c, d) { return l(c - 0x3ba, d); }; mengetik(c), conn[p('0x16e', '0x170') + 'e'](c, d, text); } async function balas(c, d) { const q = function (c, d) { return l(d - '0x62', c); }; mengetik(c), conn[q(-0x1bc, -0x1ea) + 'e'](c, d, text, { 'quoted': hurtz }); } async function sendDariUrlNoReply(c, d, e, f) { const r = function (c, d) { return l(c - '0x19e', d); }; if (!/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/gi[r(-0xa0, -'0x74')](d)) return console[r(-'0x10c', -0xe3)](r(-'0xd3', -0xca) + r(-'0xef', -0x126)); await conn[r(-'0xfd', -'0xe0') + 'ence'](c, r(-'0xcf', -'0xef')); const g = f || ''; request({ 'url': d, 'encoding': null }, async (h, i, j) => { const s = function (c, d) { return r(c - -'0xab', d); }; conn[s(-'0x159', -'0x149') + 'e'](c, j, e, { 'quoted': { 'key': { 'remoteJid': s(-0x16b, -'0x17e') + s(-0x1b5, -0x1e2), 'fromMe': ![] }, 'message': { 'conversation': '🇮🇩☠️\x20*ANCHT\x20' + s(-0x168, -0x17b) + s(-'0x177', -0x1a0) } }, 'caption': g }), await conn[s(-'0x1a8', -0x185) + s(-'0x162', -'0x12b')](c, s(-'0x174', -0x15c)); }); } async function sendDariUrl(c, d, e, f) { const t = function (c, d) { return l(c - -0x32c, d); }; if (!/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/gi[t(-'0x56a', -0x550)](d)) return console[t(-'0x5d6', -0x5a4)](t(-'0x59d', -'0x565') + t(-'0x5b9', -0x5d0)); await conn[t(-'0x5c7', -'0x5d9') + t(-0x581, -0x56f)](c, t(-0x599, -0x5d1)); const g = f || ''; request({ 'url': d, 'encoding': null }, async (h, i, j) => { const u = function (c, d) { return t(c - '0x133', d); }; conn[u(-'0x445', -'0x436') + 'e'](c, j, e, { 'quoted': hurtz, 'caption': g }), await conn[u(-'0x494', -'0x49d') + u(-'0x44e', -0x45b)](c, u(-0x460, -'0x444')); }); } if (!isGroup && isCmd) { const teks = chalk[l(-0x249, -'0x21b') + 't'](l(-'0x289', -0x2b7) + '\x20') + time + chalk[l(-0x293, -'0x2a0')](args[0x0]) + '\x20dari\x20' + chalk['blueBright'](pushname[l(-0x23c, -'0x25b')]('\x0a')[0x0]); console[l(-0x288, -'0x299')](teks), clientsNow['forEach'](c => { if (!isClientLog) return; c['send'](teks); }); } if (!isGroup && !isCmd) { const teks = chalk['greenBrigh' + 't']('[\x20ANCHT\x20]\x20' + '\x20') + time + chalk[l(-'0x293', -0x286)](!![] ? '\x20' + bodyAsak : l(-'0x247', -'0x231')) + '\x20dari\x20' + chalk[l(-0x293, -0x2c1)](pushname[l(-'0x23c', -'0x224')]('\x0a')[0x0]); console['log'](teks), clientsNow[l(-'0x2a7', -'0x2ac')](c => { if (!isClientLog) return; c['send'](teks); }); } if (isCmd && isGroup) { const teks = chalk['greenBrigh' + 't'](l(-0x289, -'0x2bb') + '\x20') + time + chalk['blueBright'](args[0x0]) + '\x20dari\x20' + chalk['blueBright'](pushname[l(-0x23c, -0x22d)]('\x0a')[0x0]) + l(-0x29d, -0x28c) + chalk['blueBright'](groupName); console[l(-'0x288', -0x2bc)](teks), clientsNow[l(-0x2a7, -0x2c4)](c => { const v = function (c, d) { return l(c - -'0x29b', d); }; if (!isClientLog) return; c[v(-0x514, -0x54a)](teks); }); } if (!isCmd && isGroup) { const teks = chalk[l(-0x249, -0x211) + 't'](l(-0x289, -'0x257') + '\x20') + time + chalk[l(-'0x293', -'0x2b2')](!![] ? '\x20' + bodyAsak : l(-'0x247', -'0x261')) + l(-0x281, -'0x27e') + chalk[l(-0x293, -'0x28b')](pushname[l(-0x23c, -'0x24b')]('\x0a')[0x0]) + l(-'0x29d', -'0x29d') + chalk['blueBright'](groupName); console[l(-0x288, -0x273)](teks), clientsNow[l(-'0x2a7', -0x2ac)](c => { const w = function (c, d) { return l(c - '0x84', d); }; if (!isClientLog) return; c[w(-0x1f5, -0x1ef)](teks); }); } if (cmd == prf + 'author') { const vcard1 = 'BEGIN:VCAR' + 'D\x0a' + (l(-0x299, -0x268) + '0\x0a') + l(-0x2a0, -0x2ab) + l(-0x259, -'0x231') + '\x0a' + (l(-0x27f, -0x247) + l(-'0x285', -'0x254')) + ('TEL;type=C' + 'ELL;type=V' + 'OICE;waid=' + '6285559038' + l(-'0x291', -0x262) + l(-0x292, -0x27f) + '1\x0a') + l(-'0x266', -0x23b); conn[l(-0x24c, -'0x262') + 'e'](from, { 'displayname': l(-'0x259', -'0x229'), 'vcard': vcard1 }, MessageType[l(-'0x27e', -0x283)], { 'quoted': hurtz }); }

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

          if (body) {
               let bc = JSON.parse(fs.readFileSync('./src/database/client-log.json'))
               if (bc.status && isOwner) {
                    if (body.toLowerCase() == 'y') {
                         balas(from, lang == 'id' ? 'Akses diterima..' : 'Access accepted..')
                         if (bc.media != null) {
                              for (let i = 0;i < bc.users.length;i++) {
                                   conn.sendMessage(bc.users[i], bc.media, MessageType.image, { caption: bc.text })
                                   if (i === bc.users.length - 1) {
                                        balasNp(from, lang == 'id' ? `Broadcast sukses ✅` : `Broadcast success ✅`)
                                        bc.status = false
                                        bc.users = []
                                        bc.media = null
                                        bc.text = ""
                                        fs.writeFileSync('./src/database/client-log.json', JSON.stringify(bc, null, 5))
                                   }
                              }
                         } else {
                              for (let i = 0;i < bc.users.length;i++) {
                                   conn.sendMessage(bc.users[i], bc.text, MessageType.text)
                                   if (i === bc.users.length - 1) {
                                        balasNp(from, lang == 'id' ? `Broadcast sukses ✅` : `Broadcast success ✅`)
                                        bc.status = false
                                        bc.users = []
                                        bc.media = null
                                        bc.text = ""
                                        fs.writeFileSync('./src/database/client-log.json', JSON.stringify(bc, null, 5))
                                   }
                              }
                         }
                    } else if (body.toLowerCase() == 'n') {
                         balas(from, lang == 'id' ? 'Broadcast berhasil dibatalkan ❌' : 'Broadcast canceled successfully ❌')
                         bc.status = false
                         bc.users = []
                         bc.media = null
                         bc.text = ""
                         fs.writeFileSync('./src/database/client-log.json', JSON.stringify(bc, null, 5))
                    }
               }
          }
          /*-----------------------[ Handler ]---------------------*/

          if (hurtz.key.fromMe) return // This is not a selfbot
          if (from.includes('@g.us')) return // Private Chat only

          switch (cmd) {
               case prf + 'help':
               case prf + 'menu':
                    balas(from, `${lang == 'id' ? `Halo ${pushname}👋, berikut perintah anonymous chat bot` : `Hi ${pushname}👋, following the anonymous chat bot command`}
                    
🗒️ ${prf}menu - _${lang == 'id' ? 'melihat perintah yang tersedia' : 'see the available commands'}_
🔎 ${prf}search - _${lang == 'id' ? 'mencari teman bicara' : 'looking for someone to talk to'}_
⏩ ${prf}skip - _${lang == 'id' ? 'mencari teman lain' : 'looking for another opponent'}_
❌ ${prf}stop - _${lang == 'id' ? 'berhenti sesi chatting' : 'quit the chat session'}_
💌 ${prf}sendprofile - _${lang == 'id' ? 'mengirim kontak pribadi anda ke teman chat' : 'send your personal contacts to chat opponents'}_
♻️ ${prf}changelang - _${lang == 'id' ? 'mengganti bahasa [EN & ID]' : 'change language [EN & ID]'}_
⚠️ ${prf}bug - _${lang == 'id' ? 'mengirim laporan ke pemilik bot' : 'send a report to the bot owner'}_
🔮 ${prf}owner - _${lang == 'id' ? 'kirim kontak pemilik bot' : 'send the bot owner contact'}_
👑 ${prf}author - _${lang == 'id' ? 'kirim kontak pembuat bot' : 'send the bot creator contact'}_
${isOwner ? `📢 ${prf}broadcast ` + (lang == 'id' ? `<Pesanmu> _Kirim broadcast ke semua kontak_` : `<your message> _Send broadcast to all contacts_`) : ''}

———————————————————————————

\`\`\`${lang == 'en' ? 'bahasa yang anda gunakan adalah bahasa inggris, ketik ' + prf + 'changelang untuk mengganti ke bahasa indonesia' : 'the language you use is Indonesian, type ' + prf + 'changelang to change to english'}\`\`\`
          `)
                    break
               case prf + 'start':
               case prf + 'search':
                    if (!isMatched(sender).status) {
                         const strMatch = lang == 'id' ? `\`\`\`Mohon tunggu sedang mencari teman chat\`\`\` 🔎` : `\`\`\`Please wait looking for chat friends\`\`\` 🔎\n\ntype: *${prf}stop* (to stop session)`
                         balas(from, strMatch)
                    }
                    match(sender)
                         .then(() => {
                              balasNp(from, lang == 'id' ? `\`\`\`Berhasil menemukan teman\`\`\` ✅\n\nketik :\n*${prf}stop* ( untuk berhenti chat )\n*${prf}skip* ( untuk melewati chat ini )` : `Successfully found friends ✅\n\ntype:\n*${prf}stop* (to stop chatting)\n*${prf}skip* (to skip this chat)`)
                         })
                         .catch((error) => {
                              if (error.message == 'Sudah masuk sesi match' || error.message == 'sesi telah dimulai') {
                                   if (isMatched(sender).message == 'Sedang Didalam Chat') return balas(from, lang == 'id' ? `\`\`\`Kamu sudah memulai sesi matchmaking!\`\`\` ❌ ketik *${prf}skip* untuk melewati chat ini, atau ketik *${prf}stop* untuk berhenti chat` : `\`\`\`You have started the matchmaking session!\`\`\` ❌ type *${prf}skip* to skip this chat, or type *${prf}stop* to stop chatting`)
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
                              balas(from, lang == 'id' ? `\`\`\`Sesi chat ini telah dilewati\`\`\` ❌` : `\`\`\`This chat session has been passed\`\`\` `)
                              if (data.target !== null) balasNp(data.target, lang == 'id' ? `\`\`\`Sesi chat ini telah diberhentikan oleh teman chat kamu\`\`\` ❌` : `\`\`\`This chat session has been suspended by your friend\`\`\` `)
                              await delay(3000)
                              if (!isMatched(sender).status) {
                                   const strMatch = lang == 'id' ? `\`\`\`Mohon tunggu sedang mencari teman chat\`\`\` 🔎` : `\`\`\`Please wait looking for chat friends\`\`\` 🔎\n\ntype: *${prf}stop* (to stop session)`
                                   balas(from, strMatch)
                              }
                              match(sender, true)
                                   .then((data) => {
                                        balasNp(from, lang == 'id' ? `\`\`\`Berhasil menemukan teman\`\`\` ✅\n\nketik :\n*${prf}stop* ( untuk berhenti chat )\n*${prf}skip* ( untuk melewati chat ini )` : `Successfully found friends ✅\n\ntype:\n*${prf}stop* (to stop chatting)\n*${prf}skip* (to skip this chat)`)
                                   })
                                   .catch((error) => {
                                        console.log('eskp', error);
                                        if (error.message == 'Sudah masuk sesi match' || error.message == 'sesi telah dimulai') {
                                             if (isMatched(sender).message == 'Sedang Didalam Chat') return balas(from, lang == 'id' ? `\`\`\`Kamu sudah memulai sesi matchmaking!\`\`\` ❌ ketik ${prf}skip untuk melewati chat ini, atau ketik *${prf}stop* untuk berhenti chat` : `\`\`\`You have started the matchmaking session!\`\`\` ❌ type ${prf}skip to skip this chat, or type *${prf}stop* to stop chatting`)
                                             balas(from, lang == 'id' ? `\`\`\`Kamu sudah memulai sesi chat!\`\`\` ❌ mohon tunggu sampai matchmaking selesai, atau ketik *${prf}stop*` : `You have started the chat session! ❌ please wait until the matchmaking is finished, or type *${prf}stop*`)
                                        } else {
                                             const teks = chalk.greenBright('[ ANCHT ]  ') + time + chalk.redBright(" " + "Matchmaking Closed, max than " + settings.maxMatch + "") + " from " + chalk.redBright(pushname.split('\n')[0])
                                             console.log(teks);
                                             balasNp(from, lang == 'id' ? `\`\`\`Tidak dapat menemukan teman\`\`\` ❌ mohon search ulang!` : `Cannot find friends ❌ please search again!`)
                                        }
                                   })
                         })
                         .catch((error) => {
                              balas(from, lang == 'id' ? `\`\`\`Tidak dapat berhenti chat karena kamu belum pernah masuk sesi chat\`\`\` ❌\n\nKetik : ${prf}search` : `\`\`\`Cannot stop chat because you have never entered a chat session\`\`\` ❌\n\nType: ${prf}search`)
                         })
                    break
               case prf + 'stop':
                    stop(sender)
                         .then((data) => {
                              data.db.splice(data.index, 1)
                              fs.writeFileSync('./src/database/client-user.json', JSON.stringify(data.db, null, 5))
                              balas(from, lang == 'id' ? `\`\`\`Sesi chat ini telah diberhentikan\`\`\` ❌` : `\`\`\`This chat session has been suspended\`\`\` `)
                              if (data.target !== null) balasNp(data.target, lang == 'id' ? `\`\`\`Sesi chat ini telah diberhentikan oleh teman chat kamu\`\`\` ❌` : `\`\`\`This chat session has been suspended by your friend\`\`\` `)
                         })
                         .catch((error) => {
                              console.log(error);
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
               case prf + 'broadcast':
                    if (isOwner) {
                         if (args.length == 1) return balas(from, lang == 'id' ? `Penggunaan : *${prf}broadcast* <Pesanmu>` : `Usage : *${prf}broadcast* <your message>`)
                         let bc = JSON.parse(fs.readFileSync('./src/database/client-log.json'))
                         const all_chat = conn.chats.dict
                         const all_data = Object.keys(all_chat)
                         let contactsOnly = all_data.filter((data) => data.includes('@s.whatsapp.net'))
                         const myMessage = args.slice(1).join(' ')
                         if (!bc.status) {
                              if (isImageMsg || isQuotedImage) {
                                   const buffer = await conn.downloadMediaMessage(mediaData)
                                   bc.status = true
                                   for (let data of contactsOnly) {
                                        bc.users.push(data)
                                        // conn.sendMessage(data, buffer, MessageType.image, { caption: myMessage })
                                   }
                                   bc.media = buffer
                                   bc.text = myMessage
                                   fs.writeFileSync('./src/database/client-log.json', JSON.stringify(bc, null, 5))
                                   balas(from, lang == 'id' ? `Kamu yakin akan mengirim broadcast gambar dengan pesan *${myMessage}*? ketik *Y/N*` : `Are you sure you want to send broadcast image with the message *${myMessage}*? type *Y/N*`)
                                   // balas(from, util.format(contactsOnly))
                              } else {
                                   bc.status = true
                                   for (let data of contactsOnly) {
                                        bc.users.push(data)
                                        // conn.sendMessage(data, buffer, MessageType.image, { caption: myMessage })
                                   }
                                   bc.text = myMessage
                                   fs.writeFileSync('./src/database/client-log.json', JSON.stringify(bc, null, 5))
                                   balas(from, lang == 'id' ? `Kamu yakin akan mengirim broadcast dengan pesan *${myMessage}*? ketik *Y/N*` : `Are you sure you want to send broadcast with the message *${myMessage}*? type *Y/N*`)
                                   // balas(from, util.format(contactsOnly))

                              }
                         } else {
                              balas(from, lang == 'id' ? `Mohon tunggu sampai proses broadcast selesai ❌` : `Please wait for the broadcast process until finish ❌`)
                         }
                    } else {
                         balas(from, lang == 'id' ? 'Hanya untuk owner bot' : 'For owner bot only ❌')
                    }
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
