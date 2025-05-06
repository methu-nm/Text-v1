const config = require('../config');
const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');
const imageUrl = 'https://i.ibb.co/VpSgnn4y/3239.jpg';

cmd({
    pattern: "menu",
    alias: ["list"],
    desc: "menu the bot",
    react: "📜",
    category: "main"
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
    
        let menu = {
            main: '',
            download: '',
            group: '',
            owner: '',
            convert: '',
            ai: '',
            tools: '',
            search: '',
            fun: '',
            voice: '',
            other: ''
        };

        for (let i = 0; i < commands.length; i++) {
            if (commands[i].pattern && !commands[i].dontAddCommandList) {
                menu[commands[i].category] += `│   .${commands[i].pattern}\n`;
            }
        }
        let desc = `*👋 HII SUDU HAPPY NEW YEAR ${pushname}*
     
     *|I'm 𝗠𝗘𝗧𝗛𝗨_𝗠𝗗 CREAT BY NADU*

*╭─「 MENU LIST 」*
*│◈😺 ʀᴜɴᴛɪᴍᴇ :* ${runtime(process.uptime())}
*│◈😺 ʀᴀᴍ ᴜꜱᴀɢᴇ :* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*╰──────────●●►*
*╭────────*
*│
*│ 1   OWNER*💖
*│ 2   CONVERT*💖
*│ 3   AI*💖
*│ 4   SEARCH*💖
*│ 5   DOWNLOAD*💖
*│ 6   FUN*💖
*│ 7   MAIN*💖
*│ 8   GROUP*💖
*│ 9   OTHER*💖
*╰─────────
🔢 Reply below number
> ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝗠𝗘𝗧𝗛𝗨_𝗠𝗗`;



        const vv = await conn.sendMessage(from, {
  text: desc,
  contextInfo: {
    forwardingScore: 0,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterName: '  |   𝗠𝗘𝗧𝗛𝗨_𝗠𝗗 ',
      newsletterJid: "120363398452475846@newsletter",
    },   externalAdReply: { 
title: '𝗠𝗘𝗧𝗛𝗨_𝗠𝗗',
body: `Hi ${pushname} 💙`,
mediaType: 1,
sourceUrl: 'https://pairsite-isithaanusaras-projects.vercel.app/',
thumbnailUrl: 'https://i.ibb.co/YTF8Qq8Y/2e484ad30bb04fa3.jpg',
renderLargerThumbnail: true,
showAdAttribution: true
}
  }
}, { quoted: mek });
          // Send audio
        await conn.sendMessage(from, {
            audio: { url: 'https://i.ibb.co/xShBDDMs/7568.jpg' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1':
                        reply(`*◈╾──OWNER MENU🤴 ──╼◈*

╭────────●●►
│ 
${menu.owner}│ 
╰──────────────────●●►

> *𝗠𝗘𝗧𝗛𝗨_𝗠𝗗*`);
                        break;
                    case '2':               
                        reply(`*◈╾──CONVERT MENU🔮──╼◈*

╭────────●●►
│ 
${menu.convert}│
╰──────────────────●●►

> 𝗠𝗘𝗧𝗛𝗨_𝗠𝗗`);
                        break;
                    case '3':               
                        reply(`*◈╾──AI MENU🥏──╼◈*

╭────────●●►
│ 
${menu.ai}│
╰──────────────────●●►

> 𝗠𝗘𝗧𝗛𝗨_𝗠𝗗`);
                        break;
                    case '4':               
                        reply(`*◈╾──SEARCH MENU 📖──╼◈*

╭────────●●►
│ 
${menu.search}│
╰──────────────────●●►

> 𝗠𝗘𝗧𝗛𝗨_𝗠𝗗`);
                        break;
                    case '5':               
                        reply(`*◈╾──DOWNLOAD MENU 🎭──╼◈*

╭────────●●►
│ 
${menu.download}│
╰──────────────────●●►

> 𝗠𝗘𝗧𝗛𝗨_𝗠𝗗`);
                        break;
                    case '7':               
                        reply(`*◈╾──MAIN MENU 📰──╼◈*

╭────────●●►
│ 
${menu.main}│
╰──────────────────●●►


> 𝗠𝗘𝗧𝗛𝗨_𝗠𝗗`);
                        break;
                    case '8':               
                        reply(`*◈╾──GROUP MENU🧮──╼◈*

╭────────●●►
│ 
${menu.group}│
╰──────────────────●●►

> 𝗠𝗘𝗧𝗛𝗨_𝗠𝗗               reply(`*◈╾──FUN MENU🎚──╼◈*

╭────────●●►
│ 
${menu.fun}│
╰──────────────────●●►

> 𝗠𝗘𝗧𝗛𝗨_𝗠𝗗`);

                        break;
                    case '9':               
                        reply(`*◈╾──OTHER MENU📒──╼◈*

╭────────●●►
│ 
${menu.other}│
${menu.tools}│
╰──────────────────●●►


> 𝗠𝗘𝗧𝗛𝗨_𝗠𝗗`);


                        break;
                    default:
                        reply("Invalid option. Please select a valid option🔴");
                }

            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply('An error occurred while processing your request.');
    }
});
