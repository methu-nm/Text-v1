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
cmd({
  'pattern': "xnxxdown",
  'alias': ["dlxnxx", "xnxxdl"],
  'react': '🫣',
  'desc': "Download xnxx videos",
  'category': "nsfw",
  'use': ".xnxx <xnxx link>",
  'filename': __filename
}, async (_0x486161, _0x455e73, _0x44e403, {
  from: _0x1ed280,
  l: _0xd5ac3b,
  quoted: _0x50d06e,
  body: _0xbf6335,
  isCmd: _0x77414e,
  command: _0x2a4087,
  args: _0x3eac74,
  q: _0x47028d,
  isGroup: _0x1ee1f5,
  sender: _0x889d22,
  senderNumber: _0x1aa706,
  botNumber2: _0x48376c,
  botNumber: _0xd92db2,
  pushname: _0x2e4259,
  isMe: _0x1b3a4e,
  isOwner: _0x1f2f15,
  groupMetadata: _0x36a1cb,
  groupName: _0xe67509,
  participants: _0x441600,
  groupAdmins: _0x2a95d5,
  isBotAdmins: _0x4fc5ae,
  isAdmins: _0x2e06a2,
  reply: _0x5685d0
}) => {
  try {
    if (!_0x47028d) {
      return _0x5685d0("*Please give me url !!*");
    }
    let _0x3a9391 = await xdl(_0x47028d);
    let _0x340eb7 = _0x3a9391.result.title;
    await _0x486161.sendMessage(_0x1ed280, {
      'video': {
        'url': _0x3a9391.result.files.high
      },
      'caption': _0x340eb7
    }, {
      'quoted': _0x455e73
    });
  } catch (_0x1ee92f) {
    _0x5685d0("*Error !!*");
    console.log(_0x1ee92f);
  }
});
cmd({
  'pattern': "xvdown",
  'alias': ["dlxv", 'xvdl'],
  'react': '🫣',
  'desc': "Download xvideos videos",
  'category': 'nsfw',
  'use': ".xv <xvideos link>",
  'filename': __filename
}, async (_0xf4b747, _0x2d8700, _0xb5ff80, {
  from: _0x2747f2,
  l: _0x28ada0,
  quoted: _0x1a14ba,
  body: _0x132b6b,
  isCmd: _0x31fc41,
  command: _0x125d37,
  args: _0x3e211e,
  q: _0x17784d,
  isGroup: _0x4aae41,
  sender: _0x435ff6,
  senderNumber: _0x519f66,
  botNumber2: _0x5905f1,
  botNumber: _0x295843,
  pushname: _0xd89eca,
  isMe: _0x4cb90b,
  isOwner: _0x311d1b,
  groupMetadata: _0x11b721,
  groupName: _0x1668e8,
  participants: _0x3340c2,
  groupAdmins: _0x450bd7,
  isBotAdmins: _0x52033f,
  isAdmins: _0x37a118,
  reply: _0x221664
}) => {
  try {
    if (!_0x17784d) {
      return _0x221664("*Please give me url !!*");
    }
    let _0x1c083d = await fetchJson('https://www.dark-yasiya-api.site/download/xvideo?url=' + _0x17784d);
    const _0x40cfc2 = "\n   🔞 *⎝⧹ NADU-MD ⧸⎠ XVIDEO DOWNLOADER* 🔞\n\n     \n• *Title* - " + _0x1c083d.result.title + "\n\n• *Views* - " + _0x1c083d.result.views + "\n\n• *Like* - " + _0x1c083d.result.like + "\n\n• *Deslike* - " + _0x1c083d.result.deslike + "\n\n• *Size* - " + _0x1c083d.result.size;
    await _0xf4b747.sendMessage(_0x2747f2, {
      'video': {
        'url': _0x1c083d.result.dl_link
      },
      'caption': _0x40cfc2
    }, {
      'quoted': _0x2d8700
    });
  } catch (_0x302040) {
    _0x221664("*Error !!*");
    console.log(_0x302040);
  }
});
const fs = require('fs');
const path = require('path');
