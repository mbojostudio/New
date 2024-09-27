require("./all/module.js")

//========== Setting Owner ==========//
global.owner = "62xxx"
global.namaowner = "いんじえ"

//======== Setting Bot & Link ========//
global.namabot = "いんじえ" 
global.namabot2 = "いんじえ"
global.foother = "© 𝐈𝐍𝐙𝐈𝐄"
global.idsaluran = "120363298682648906"
global.linkgc = 'https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k'
global.linksaluran = "https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k"
global.linkyt = 'https://youtube.com/@inzieofc'
global.linktele = "t.me/inzkwece"
global.packname = "𝐈𝐍𝐙𝐈𝐄 𝐎𝐅𝐂"
global.author = "𝐈𝐍𝐙𝐈𝐄 𝐖𝐀𝐍𝐆𝐒𝐀𝐅𝐅"

//========== Setting Event ==========//
global.welcome = true
global.autoread = false
global.anticall = true 
global.owneroff = false

//==== Waktu Jeda Jpm & Pushkon ====//
global.delaypushkontak = 8000
global.delayjpm = 9000

//========= Setting Url Foto =========//
//Lihat Di Folder Media!

//========== Setting Panell ==========//
global.egg = "15"
global.loc = "1"
global.domain = "https://"
global.apikey = "plta_"
global.capikey = "pltc_"

//========= Setting Payment =========//
//Kalo Gak Ada Isi Aja jadi false
global.dana = "nomorlu"
global.gopay = false
global.ovo = false
global.qris = "MINTA KE ADMIN"
                             
//=========== Api Domain ===========//
global.zone1 = "-";
global.apitoken1 = "-";
global.tld1 = "-"

//========== Api Domain 2 ==========//
global.zone2 = "-";
global.apitoken2 = "-";
global.tld2 = "-";
//========== Api Domain 3 ==========//
global.zone3 = "-";
global.apitoken3 = "-";
global.tld3 = "-";
//========== Api Domain 4 ==========//
global.zone4 = "-";
global.apitoken4 = "-";
global.tld4 = "-";

//========= Setting Message =========//
global.msg = {
"error": "Error terjadi kesalahan",
"done": "Done Bang ✅", 
"wait": "Bot Sedang Memproses Tunggu Sebentar . . .", 
"group": "*• Group Only* Fitur Ini Hanya Untuk Di Dalam Grup!", 
"private": "*• Private Chat* Fitur Ini Hanya Untuk Didalam Private Chat!", 
"admin": "*• Admin Only* Fitur Ini Hanya Untuk Admin Grup!", 
"adminbot": "*• Bot Admin* Fitur Ini Dapat Digunakan Ketika Bot Menjadi Admin", 
"owner": "*• Owner Only* Fitur Ini Hanya Untuk Owner Bot!", 
"developer": "*• Developer Only* Fitur Ini Hanya Untuk Developer"
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})