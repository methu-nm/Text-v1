const config = require('../config');
const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');
const imageUrl = 'https://i.ibb.co/VpSgnn4y/3239.jpg';

cmd({
    pattern: "menu",
    react: "📜",
    alias: ["panel", "commands"],
    desc: "බොට් විධාන ලැයිස්තුව ලබා ගන්න",
    category: "main",
    use: '.matrix',
    filename: __filename
},
async (conn, mek, m, { from, quoted, pushname, reply }) => {
    try {
        const selectionMessage = `
╭━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷
*⇆ 𝘏𝘪 පැන්චෝ🙈💝 ⇆*

     *${pushname}*
╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷
┏━━━━━━━━━━━━━━━━━━━━━━━━━━
      *𝗠𝗘𝗧𝗛𝗨_𝗠𝗗 💞 ᴄᴏᴍᴍᴀɴᴅꜱ*
┗━━━━━━━━━━━━━━━━━━━━━━━━━━

*┌─〈 ${config.BOT_NAME} 〉─◆*
*│╭─────────────···▸*
*┴│▸*
*❖│▸* *ʀᴜɴᴛɪᴍᴇ* : ${runtime(process.uptime())}
*❖│▸* *ᴍᴏᴅᴇ* : *[${config.MODE}]*
*❖│▸* *ᴘʀᴇғɪx* : *[${config.PREFIX}]*
*❖│▸* *ʀᴀᴍ ᴜsᴇ* : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*❖│▸* *ʙᴏᴛ ɴᴀᴍᴇ* : *𝐃𝐚𝐫𝐤-Nadu md*
*❖│▸* *ᴄʀᴇᴀᴛᴏʀ* : *queen methu*
*❖│▸* *ᴠᴇʀsɪᴏɴ* : *ᴠ.1.0.0*
*❖│▸* *ᴍᴇɴᴜ ᴄᴍᴅ* : *𝗠𝗘𝗧𝗛𝗨_𝗠𝗗 ᴍᴇɴᴜ ʟɪsᴛ*
*┬│▸*
*│╰────────────···▸▸*
*└──────────────···▸*

*♡︎•━━━━━━━━━☻︎━━━━━━━━━•♡︎*

┌────────────────···▸*
*│╭─────────────···▸*
*┴│▸* 
*◈│▸* *1. DOWNLOAD MENU*
*◈│▸* *2. SEARCH MENU* 
*◈│▸* *3. AI MENU*
*◈│▸* *4. OWNER MENU*
*◈│▸* *5. GROUP MENU*
*◈│▸* *6. INFO MENU*
*◈│▸* *7. CONVERTER MENU*
*◈│▸* *8. RANDOM MENU*
*◈│▸* *9. WALLPAPERS MENU*
*◈│▸* *10. OTHER MENU*
*┬│▸* *11 BUG MENU*
*│╰────────────···▸▸*
*└────────────────···▸*

> ©ʀᴇ-ᴄᴏᴅᴇᴅ ʙʏ 𝗠𝗘𝗧𝗛𝗨_𝗠𝗗-𝗕𝗢𝗧
`;

        const sentMsg = await conn.sendMessage(from, {
            image: { url: imageUrl },
            caption: selectionMessage,
            contextInfo: { forwardingScore: 999, isForwarded: true },
        }, { quoted: mek });

        // පරිශීලක ප්‍රතිචාර ලබා ගැනීම
        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const userResponse = msg.message.extendedTextMessage.text.trim();
            if (msg.message.extendedTextMessage.contextInfo &&
                msg.message.extendedTextMessage.contextInfo.stanzaId === sentMsg.key.id) {

                let responseText;

                switch (userResponse) {
                    case '1': // DOWNLOAD MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *📥 DOWNLOADER-MENU 📥* *❒⁠⁠⁠⁠* 
*┋* *.ғʙ <ᴜʀʟ>*
*┋* *.ɪɴꜱᴛᴀ <ᴜʀʟ>*
*┋* *.ᴠɪᴅᴇᴏ <ᴜʀʟ>*
*┋* *.ɢᴅʀɪᴠᴇ <ᴜʀʟ>*
*┋* *.ᴛᴡɪᴛᴛᴇʀ <ᴜʀʟ>*
*┋* *.ᴛᴛ<ᴜʀʟ>*
*┋* *.ᴍᴇᴅɪᴀғɪʀᴇ <ᴜʀʟ>*
*┋* *.ꜱᴏɴɢ <ϙᴜᴇʀʏ>*
*┋* *.ᴘʟᴀʏ <ᴜʀʟ>*
*┋* *.ᴠɪᴅᴇᴏ <ϙᴜᴇʀʏ>*
*┋* *.ᴠɪᴅᴇᴏ2 <ᴜʀʟ>*
*┋* *.ɪᴍɢ <ϙᴜᴇʀʏ>*
*┋* *.ᴀᴘᴋ <ɴᴀᴍᴇ>*
*┋* *.ᴅᴀʀᴀᴍᴀ <ᴛɪᴛᴛʟᴇ>*
*┋* *.ᴘʟᴀʏ2 <ᴛɪᴛᴛʟᴇ>*
*┋* *.ʙᴀɪsᴄᴏᴘᴇ <ᴜʀʟ>*
*┋* *.ɢɪɴɪsɪsɪʟᴀ <ᴛɪᴛᴛʟᴇ>*
*╰───────────────────❒*

> ©ʀᴇ-ᴄᴏᴅᴇᴅ ʙʏ 𝗠𝗘𝗧𝗛𝗨_𝗠𝗗-𝗕𝗢𝗧
`;
                        break;
                    case '2': // SEARCH MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *🔎 SEARCH-MENU 🔍* *❒⁠⁠⁠⁠* 
*┋* *.ʏᴛꜱ  <ᴛᴇxᴛ>*
*┋* *.ʏᴛᴀ <ᴜʀʟ>*
*┋* *.ʟᴏʟɪ <ᴛᴇxᴛ>*
*┋* *.ᴍᴏᴠɪᴇɪɴғᴏ <ᴛᴇxᴛ>*
*┋* *.ɪᴍɢ <ᴛᴇxᴛ>*
*┋* *.ᴡᴇᴀᴛʜᴇʀ <ᴄɪᴛʏ>*
*╰───────────────────❒*

> ©ʀᴇ-ᴄᴏᴅᴇᴅ ʙʏ 𝗠𝗘𝗧𝗛𝗨_𝗠𝗗-𝗕𝗢𝗧
`;
                        break;
                    case '3': // AI MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *🧠 AI-MENU 🧠* *❒⁠⁠⁠⁠* 
*┋* *.ɢᴘᴛ <ᴛᴇxᴛ>*
*┋* *.ᴀɪ <ᴛᴇxᴛ>*
*┋* *.ʙᴏᴛ <ᴛᴇxᴛ>*
*╰───────────────────❒*

> ©POWERED BY 𝗠𝗘𝗧𝗛𝗨_𝗠𝗗-𝗕𝗢𝗧
`;
                        break;
                    case '4': // OWNER MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *👽🤘 OWNER-MENU 👽🤘* *❒⁠⁠⁠⁠* 
*┋* *.ᴜᴘᴅᴀᴛᴇᴄᴍᴅ*
*┋* *.sᴇᴛᴛɪɴɢs*
*┋* *.ᴏᴡɴᴇʀ*
*┋* *.ʀᴇᴘᴏ*
*┋* *.ꜱʏꜱᴛᴇᴍ*
*┋* *.ꜱᴛᴀᴛᴜꜱ*
*┋* *.ʙʟᴏᴄᴋ*
*┋* *.ᴜɴʙʟᴏᴄᴋ*
*┋* *.sʜᴜᴛᴅᴏᴡɴ*
*┋* *.ᴄʟᴇᴀʀᴄʜᴀᴛs*
*┋* *.sᴇᴛᴘᴘ*
*┋* *.ʙʀᴏᴀᴅᴄᴀsᴛ*
*┋* *.ᴊɪᴅ*
*┋* *.ɢᴊɪᴅ*
*┋* *.ʀᴇꜱᴛᴀʀᴛ*
*╰───────────────────❒*

> ©ʀᴇ-ᴄᴏᴅᴇᴅ ʙʏ 𝗠𝗘𝗧𝗛𝗨_𝗠𝗗-𝗕𝗢𝗧
`;
                        break;
                    case '5': // GROUP MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *👥 GROUP-MENU 👥* *❒⁠⁠⁠⁠* 
*┋* *.ʀᴇᴍᴏᴠᴇ <ʀᴇᴘʟʏ ғᴏʀ ᴅᴇʟᴇᴛᴇ sᴍs>*
*┋* *.ᴅᴇʟᴇᴛᴇ <ʀᴇᴘʟʏ ғᴏʀ ᴅᴇʟᴇᴛᴇ sᴍs>*
*┋* *.ᴀᴅᴅ*
*┋* *.ᴋɪᴄᴋ*
*┋* *.sᴇᴛɢᴏᴏᴅʙʏᴇ <ᴛᴇxᴛ>*
*┋* *.sᴇᴛᴡᴇʟᴄᴏᴍᴇ <ᴛᴇxᴛ>*
*┋* *.ᴘʀᴏᴍᴏᴛᴇ*
*┋* *.ᴅᴇᴍᴏᴛᴇ*
*┋* *.ᴛᴀɢᴀʟʟ*
*┋* *.ɢᴇᴛᴘɪᴄ*
*┋* *.ɪɴᴠɪᴛᴇ*
*┋* *.ʀᴇᴠᴏᴋᴇ*
*┋* *.ᴊᴏɪɴʀᴇǫᴜᴇsᴛs*
*┋* *.ᴀʟʟʀᴇǫ*
*┋* *.ᴍᴜᴛᴇ*
*┋* *.ᴜɴᴍᴜᴛᴇ*
*┋* *.ʟᴏᴄᴋɢᴄ*
*┋* *.ᴜɴʟᴏᴄᴋɢᴄ*
*┋* *.ʟᴇᴀᴠᴇ*
*┋* *.ᴜᴘᴅᴀᴛᴇɢɴᴀᴍᴇ*
*┋* *.ᴜᴘᴅᴀᴛᴇɢᴅᴇsᴄ*
*┋* *.ᴊᴏɪɴ*
*┋* *.ʜɪᴅᴇᴛᴀɢ*
*┋* *.ɢɪɴғᴏ*
*┋* *.ᴅɪsᴀᴘᴘᴇᴀʀ ᴏɴ*
*┋* *.ᴅɪsᴀᴘᴘᴇᴀʀ ᴏғғ*
*┋* *.ᴅɪsᴀᴘᴘᴇᴀʀ 7ᴅ 24ʜ 90ᴅ*
*┋* *.sᴇɴᴅᴅᴍ*
*╰───────────────────❒*

> ©ʀᴇ-ᴄᴏᴅᴇᴅ ʙʏ 𝗠𝗘𝗧𝗛𝗨_𝗠𝗗-𝗕𝗢𝗧
`;
                        break;
                    case '6': // INFO MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *📃 INFO-MENU 📃* *❒⁠⁠⁠⁠* 
*┋* *.ᴍᴇɴᴜ*
*┋* *.ᴍᴇɴᴜ2*
*┋* *.ᴍᴇɴᴜ3*
*┋* *.ᴀʙᴏᴜᴛ*
*┋* *.sᴄʀɪᴘᴛ*
*┋* *.ʀᴇᴘᴏ*
*┋* *.ᴀʟɪᴠᴇ*
*┋* *.ʙᴏᴛɪɴꜰᴏ*
*┋* *.ꜱᴛᴀᴛᴜꜱ*
*┋* *.ꜱᴜᴘᴘᴏʀᴛ*
*┋* *.ᴘɪɴɢ*
*┋* *.ᴘɪɴɢ2*
*┋* *.ꜱʏꜱᴛᴇᴍ*
*╰───────────────────❒*

> ©ʀᴇ-ᴄᴏᴅᴇᴅ ʙʏ 𝗠𝗘𝗧𝗛𝗨_𝗠𝗗-𝗕𝗢𝗧
`;
                        break;
                    case '7': // CONVERTER MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *🎡 CONVERTER-MENU 🎡* *❒⁠⁠⁠⁠* 
*┋* *.sᴛɪᴄᴋᴇʀ*
*┋* *.ᴛʀᴛ <ᴛᴇxᴛ>*
*┋* *.ᴛᴛs <ᴛᴇxᴛ>*
*╰───────────────────❒*

> ©ʀᴇ-ᴄᴏᴅᴇᴅ ʙʏ 𝗠𝗘𝗧𝗛𝗨_𝗠𝗗-𝗕𝗢𝗧
`;
                        break;
                    case '8': // WALLPAPERS MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *⛱️ RANDOM-MENU ⛱️* *❒⁠⁠⁠⁠* 
*┋* *.ᴋɪɴɢ*
*┋* *.ᴅᴏɢ*
*┋* *.ᴀɴɪᴍᴇ*
*┋* *.ᴀɴɪᴍᴇɢɪʀʟ*
*┋* *.ᴀɴɪᴍᴇɢɪʀʟ1*
*┋* *.ᴀɴɪᴍᴇɢɪʀʟ2*
*┋* *.ᴀɴɪᴍᴇɢɪʀʟ3*
*┋* *.ᴀɴɪᴍᴇɢɪʀʟ4*
*┋* *.ᴀɴɪᴍᴇɢɪʀʟ5*
*╰───────────────────❒*

> ©ʀᴇ-ᴄᴏᴅᴇᴅ ʙʏ 𝗠𝗘𝗧𝗛𝗨_𝗠𝗗-𝗕𝗢𝗧
`;
                        break;
                    case '9': // WALLPAPER MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *🏜️ WALLPAPERS-MENU 🏜️* *❒⁠⁠⁠⁠* 
*┋* *.ɪᴍɢ*
*╰───────────────────❒*

> ©ʀᴇ-ᴄᴏᴅᴇᴅ ʙʏ 𝗠𝗘𝗧𝗛𝗨_𝗠𝗗-𝗕𝗢𝗧
`;
                        break;
                    case '10': // OTHER MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *🌐 OTHER-MENU 🌐* *❒⁠⁠⁠⁠* 
*┋* *.ᴛʀᴛ*
*┋* *.ᴊᴏᴋᴇ*
*┋* *.ꜰᴀᴄᴛ*
*┋* *.ɢɪᴛʜᴜʙꜱᴛᴀʟᴋ*
*┋* *.ɢᴘᴀꜱꜱ*
*┋* *.ʜᴀᴄᴋ*
*┋* *.ǫᴜᴏᴛᴇ*
*┋* *.ꜱʀᴇᴘᴏ*
*┋* *.ᴅᴇꜰɪɴᴇ*
*╰───────────────────❒*

> ©ʀᴇ-ᴄᴏᴅᴇᴅ ʙʏ 𝗠𝗘𝗧𝗛𝗨_𝗠𝗗-𝗕𝗢𝗧
`;
                        break;
                    case '11': // OTHER MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *BUG MENU👽🤘* *❒⁠⁠⁠⁠* 
*┋* *.ꜱᴘᴀᴍᴛxᴛ*
*┋* *.ᴄʀʏᴘᴛᴏ*
*┋* *.ᴅʀᴋʙᴜɢ*
*┋* *.ᴍᴀᴛʀɪxᴠ1*
*╰───────────────────❒*

> ©ʀᴇ-ᴄᴏᴅᴇᴅ ʙʏ 𝗠𝗘𝗧𝗛𝗨_𝗠𝗗-𝗕𝗢𝗧
`;

                        break;
                    default:
                        responseText = "*❌ Invalid option. Please enter a valid number (1-11)*";
                }

                // තෝරාගත් මෙනුව WhatsApp chat එකට යවයි.
                await conn.sendMessage(from, { text: responseText }, { quoted: mek });
            }
        });

    } catch (e) {
        console.error(e);
        reply(`*⚠ An error occurred: ${e.message}*`);
    }
});
