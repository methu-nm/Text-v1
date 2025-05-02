const { cmd } = require('../command'); // Assurez-vous que cmd est bien défini dans votre projet
const axios = require('axios');

cmd({
    pattern: "sex", // Nom de la commande
    desc: "Display a list of NSFW options",
    category: "fun",
    use: '.sex',
    react: "🫣", // Réaction ajoutée
    filename: __filename
},
async (conn, mek, m, { from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Liste des options NSFW
        const nsfwList = `
   *❦ \`NADU-MD ＳＥＸＹ ＨＵＢ.🎀🍭\`*

1️⃣ *xvdown🫣*
2️⃣ *xnxxdown🫣*

────────────────
*_Simply type the number corresponding to the option you'd like to choose._*
────────────────
⚠️\`[NOTICE]\` 
*By Continueing You Agree that you are 18+ .*`;

        // URL image for NSFW
        const imageUrl = 'https://ibb.co/Dg6CwyJS';

        // Envoi de la liste avec l'image et la légende
        await conn.sendMessage(from, {
            text: nsfwList,
            caption: 'Choose one from the list above!',
            image: { url: imageUrl }
        }, { quoted: mek });
    } catch (e) {
        console.error(e);
        reply('❌ An error occurred while processing your request.');
    }
});
