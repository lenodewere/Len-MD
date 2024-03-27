const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: Lennie-W,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-zubair-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function LENNIE_W_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_Lennie_W = Lennie_W({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)", "", ""]
             });
             if(!Pair_Code_By_Lennie_W.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_Lennie_W.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_Lennie_W.ev.on('creds.update', saveCreds)
            Pair_Code_By_Lennie_W.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_Lennie_W.sendMessage(Pair_Code_By_Gifted_Tech.user.id, { text: '' + b64data });

               let Lennie_W_TEXT = `
*_Pair Code Connected by Lennie W_*
*_Made With ❤_*
______________________________________
╔════◇
║ *『 WOW THANKS FOR CHOOSING LENNIE-Wv1 』*
║ _You Have Completed the First Step to Deploy a Whatsapp Bot._
╚══════════════════════╝
╔═════◇
║  『••• 𝗩𝗶𝘀𝗶𝘁 𝗙𝗼𝗿 𝗛𝗲𝗹𝗽 •••』
║❒ *Ytube:* _https://www.youtube.com/@lenniestic_arts_
║❒ *Owner:* _https://wa.me/qr/CQ5INADHTCXEM1_
║❒ *Repo:* _https://github.com/lenodewere/Lennie-W_
║❒ *WaGroup:* _https://chat.whatsapp.com/BH53XC67o4K7pH5pFkBtRy_
║❒ *WaChannel:* _https://whatsapp.com/channel/0029VaYiIj0BA1f37lBAZQ2O_
╚══════════════════════╝ 
_____________________________________

_Don't Forget To Give Star To My Repo_`
 await Pair_Code_By_Lennie_W.sendMessage(Pair_Code_By_Lennie_W.user.id,{text:LENNIE_W_TEXT},{quoted:session})


        await delay(100);
        await Pair_Code_By_Lennie_W.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    LENNIE_W_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await LENNIE_W_PAIR_CODE()
});
module.exports = router