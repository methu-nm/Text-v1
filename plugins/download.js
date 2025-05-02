const { fetchJson } = require('../lib/functions')
const config = require('../config')
const { cmd, commands } = require('../command')

// FETCH API URL
let baseUrl;
(async () => {
    let baseUrlGet = await fetchJson(`https://raw.githubusercontent.com/prabathLK/PUBLIC-URL-HOST-DB/main/public/url.json`)
    baseUrl = baseUrlGet.api
})();


const yourName = "> 𝗠𝗘𝗧𝗛𝗨_𝗠𝗗";

//twitter dl (x)
cmd({
    pattern: "twitter",
    alias: ["twdl"],
    desc: "download tw videos",
    category: "download",
    react: "🔎",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q && !q.startsWith("https://")) return reply("give me twitter url")
        //fetch data from api  
        let data = await fetchJson(`${baseUrl}/api/twitterdl?url=${q}`)
        reply("*Downloading...*")
        //send video (hd,sd)
        await conn.sendMessage(from, { video: { url: data.data.data.HD }, mimetype: "video/mp4", caption: `- HD\n\n ${yourName}` }, { quoted: mek })
        await conn.sendMessage(from, { video: { url: data.data.data.SD }, mimetype: "video/mp4", caption: `- SD \n\n ${yourName}` }, { quoted: mek })  
        //send audio    
        await conn.sendMessage(from, { audio: { url: data.data.data.audio }, mimetype: "audio/mpeg" }, { quoted: mek })  
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})

//gdrive(google drive) dl
cmd({
    pattern: "gdrive",
    alias: ["googledrive"],
    desc: "download gdrive files",
    category: "download",
    react: "🔎",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q && !q.startsWith("https://")) return reply("give me gdrive url")
        //fetch data from api  
        let data = await fetchJson(`${baseUrl}/api/gdrivedl?url=${q}`)
        reply("*Downloading...*")
        await conn.sendMessage(from, { document: { url: data.data.download }, fileName: data.data.fileName, mimetype: data.data.mimeType, caption: `${data.data.fileName}\n\n${yourName}` }, { quoted: mek })                                                                                                                 
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})

//mediafire dl
cmd({
    pattern: "mediafire",
    alias: ["mfire"],
    desc: "download mfire files",
    category: "download",
    react: "🔎",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q && !q.startsWith("https://")) return reply("give me mediafire url")
        //fetch data from api  
        let data = await fetchJson(`${baseUrl}/api/mediafiredl?url=${q}`)
        reply("*Downloading...*")
        await conn.sendMessage(from, { document: { url: data.data.link_1 }, fileName: data.data.name, mimetype: data.data.file_type, caption: `${data.data.name}\n\n${yourName}` }, { quoted: mek })                                                                                                                 
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})

//facebook dl
cmd({
  'pattern': 'fb',
  'alias': ["facebook"],
  'desc': "Download Facebook videos",
  'category': "download",
  'filename': __filename
}, async (_0x463020, _0x55bd97, _0x368c99, {
  from: _0xd59c39,
  quoted: _0x3054c8,
  body: _0x267a02,
  isCmd: _0x3e2744,
  command: _0x79551a,
  args: _0x1989d2,
  q: _0x32da14,
  isGroup: _0x3f7b6f,
  sender: _0x42116d,
  senderNumber: _0x45dc5e,
  botNumber2: _0x34e464,
  botNumber: _0x461cb9,
  pushname: _0x213d3c,
  isMe: _0x44ce4f,
  isOwner: _0x1feea4,
  groupMetadata: _0x3e49b1,
  groupName: _0x20f33f,
  participants: _0x5d4661,
  groupAdmins: _0x57a821,
  isBotAdmins: _0x122d73,
  isAdmins: _0x1d8749,
  reply: _0x26d68e
}) => {
  try {
    if (!_0x32da14 || !_0x32da14.startsWith("https://")) {
      return _0x463020.sendMessage(_0xd59c39, {
        'text': "*`Need URL`*"
      }, {
        'quoted': _0x55bd97
      });
    }
    await _0x463020.sendMessage(_0xd59c39, {
      'react': {
        'text': '⏳',
        'key': _0x55bd97.key
      }
    });
    const _0xba6170 = await facebook(_0x32da14);
    const _0x8af79d = "╭━━━〔 *⎝⧹ 𝗠𝗘𝗧𝗛𝗨_𝗠𝗗 ⧸⎠* 〕━━━┈⊷\n┃▸╭───────────\n┃▸┃๏ *FB DOWNLOADER*\n┃▸└───────────···๏\n╰────────────────┈⊷\n╭━━━❐━⪼\n┇๏ *Duration* - " + _0xba6170.result.duration + " \n╰━━━❐━⪼\n╭━❮ *Download Video* ❯━┈⊷\n┃▸╭─────────────·๏\n┃▸┃๏ *1.1*     ┃  *SD Quality*\n┃▸┃๏ *1.2*     ┃  *HD Quality*\n┃▸└────────────┈⊷\n╰━━━━━━━━━━━━━━━⪼\n╭━❮ *Download Audio* ❯━┈⊷\n┃▸╭─────────────·๏\n┃▸┃๏ *2.1*     ┃  *Audio*\n┃▸┃๏ *2.2*     ┃  *Document*\n┃▸┃๏ *2.3*     ┃  *Voice*\n┃▸└────────────┈⊷\n╰━━━━━━━━━━━━━━━⪼\n> *© ⎝⧹ 𝗠𝗘𝗧𝗛𝗨_𝗠𝗗 ⧸⎠♡*";
    const _0x1e4914 = await _0x463020.sendMessage(_0xd59c39, {
      'image': {
        'url': _0xba6170.result.thumbnail
      },
      'caption': _0x8af79d
    }, {
      'quoted': _0x55bd97
    });
    const _0x304402 = _0x1e4914.key.id;
    _0x463020.ev.on("messages.upsert", async _0x1fb420 => {
      const _0x3ddaca = _0x1fb420.messages[0x0];
      if (!_0x3ddaca.message) {
        return;
      }
      const _0x56b3d7 = _0x3ddaca.message.conversation || _0x3ddaca.message.extendedTextMessage?.['text'];
      const _0x138ae5 = _0x3ddaca.key.remoteJid;
      const _0x188836 = _0x3ddaca.message.extendedTextMessage && _0x3ddaca.message.extendedTextMessage.contextInfo.stanzaId === _0x304402;
      if (_0x188836) {
        await _0x463020.sendMessage(_0x138ae5, {
          'react': {
            'text': '⬇️',
            'key': _0x3ddaca.key
          }
        });
        let _0x3f9d82 = _0xba6170.result;
        await _0x463020.sendMessage(_0x138ae5, {
          'react': {
            'text': '⬆️',
            'key': _0x3ddaca.key
          }
        });
        if (_0x56b3d7 === "1.1") {
          await _0x463020.sendMessage(_0x138ae5, {
            'video': {
              'url': _0x3f9d82.links.SD
            },
            'caption': "*©⎝⧹ 𝗠𝗘𝗧𝗛𝗨_𝗠𝗗 ⧸⎠*"
          }, {
            'quoted': _0x3ddaca
          });
        } else {
          if (_0x56b3d7 === "1.2") {
            await _0x463020.sendMessage(_0x138ae5, {
              'video': {
                'url': _0x3f9d82.links.HD
              },
              'caption': "*©⎝⧹ 𝗠𝗘𝗧𝗛𝗨_𝗠𝗗 ⧸⎠*"
            }, {
              'quoted': _0x3ddaca
            });
          } else {
            if (_0x56b3d7 === '2.1') {
              await _0x463020.sendMessage(_0x138ae5, {
                'audio': {
                  'url': _0x3f9d82.links.SD
                },
                'mimetype': "audio/mpeg"
              }, {
                'quoted': _0x3ddaca
              });
            } else {
              if (_0x56b3d7 === '2.2') {
                await _0x463020.sendMessage(_0x138ae5, {
                  'document': {
                    'url': _0x3f9d82.links.SD
                  },
                  'mimetype': "audio/mpeg",
                  'fileName': "SPARK/FBDL.mp3",
                  'caption': "*©⎝⧹ 𝗠𝗘𝗧𝗛𝗨_𝗠𝗗 ⧸⎠*"
                }, {
                  'quoted': _0x3ddaca
                });
              } else if (_0x56b3d7 === '2.3') {
                await _0x463020.sendMessage(_0x138ae5, {
                  'audio': {
                    'url': _0x3f9d82.links.SD
                  },
                  'mimetype': "audio/mp4",
                  'ptt': true
                }, {
                  'quoted': _0x3ddaca
                });
              }
            }
          }
        }
      }
    });
  } catch (_0x536e30) {
    console.log(_0x536e30);
    _0x26d68e('' + _0x536e30);
  }
}); 
cmd({
  'pattern': "baiscope",
  'alias': ["movie2"],
  'react': '📑',
  'category': 'download',
  'desc': "baiscope.lk",
  'filename': __filename
}, async (_0x29f25e, _0x5a1475, _0x23f4fe, {
  from: _0x16270b,
  q: _0x234c71,
  isDev: _0x5a061f,
  reply: _0x2e05d8
}) => {
  try {
    if (!_0x234c71) {
      return await _0x2e05d8("*Please provide a search query! (e.g., Avatar)*");
    }
    const _0x565da1 = "https://www.baiscope.lk/?s=" + encodeURIComponent(_0x234c71);
    const _0x2f6b7f = await axios.get(_0x565da1);
    const _0x55938d = cheerio.load(_0x2f6b7f.data);
    let _0x2a128a = [];
    _0x55938d("article.elementor-post").each((_0xc4379d, _0x58132b) => {
      const _0x3c98a9 = _0x55938d(_0x58132b).find("h5.elementor-post__title > a").text().trim();
      const _0x4f6c46 = _0x55938d(_0x58132b).find("h5.elementor-post__title > a").attr("href");
      const _0x227928 = _0x55938d(_0x58132b).find(".elementor-post__thumbnail img").attr("src");
      if (_0x3c98a9 && _0x4f6c46 && _0x227928) {
        _0x2a128a.push({
          'title': _0x3c98a9,
          'episodeLink': _0x4f6c46,
          'imgUrl': _0x227928
        });
      }
    });
    if (_0x2a128a.length === 0x0) {
      return await _0x2e05d8("No results found for: " + _0x234c71);
    }
    let _0x159726 = "📺 Search Results for *" + _0x234c71 + ":*\n\n";
    _0x2a128a.forEach((_0x43023e, _0x261b1f) => {
      _0x159726 += '*' + (_0x261b1f + 0x1) + ".* " + _0x43023e.title + "\n🔗 Link: " + _0x43023e.episodeLink + "\n\n";
    });
    const _0x390294 = await _0x29f25e.sendMessage(_0x16270b, {
      'text': _0x159726
    }, {
      'quoted': _0x23f4fe
    });
    const _0x1c3498 = _0x390294.key.id;
    _0x29f25e.ev.on("messages.upsert", async _0x42363d => {
      const _0x9a9db9 = _0x42363d.messages[0x0];
      if (!_0x9a9db9.message) {
        return;
      }
      const _0x19512a = _0x9a9db9.message.conversation || _0x9a9db9.message.extendedTextMessage?.["text"];
      const _0x44c1ea = _0x9a9db9.key.remoteJid;
      const _0x1eb2ca = _0x9a9db9.message.extendedTextMessage && _0x9a9db9.message.extendedTextMessage.contextInfo.stanzaId === _0x1c3498;
      if (_0x1eb2ca) {
        const _0x1fc120 = parseInt(_0x19512a.trim());
        if (!isNaN(_0x1fc120) && _0x1fc120 > 0x0 && _0x1fc120 <= _0x2a128a.length) {
          const _0x339cc7 = _0x2a128a[_0x1fc120 - 0x1];
          const _0x49062b = await axios.get(_0x339cc7.episodeLink);
          const _0x4ae66c = cheerio.load(_0x49062b.data);
          const _0x50c0f3 = _0x4ae66c("a.dlm-buttons-button").attr("href");
          if (_0x50c0f3) {
            await _0x29f25e.sendMessage(_0x44c1ea, {
              'image': {
                'url': _0x339cc7.imgUrl
              },
              'caption': "🎬 *" + _0x339cc7.title + "*\n🔗 Link: " + _0x339cc7.episodeLink + "\n⬇️ Download will follow."
            }, {
              'quoted': _0x9a9db9
            });
            const _0xede861 = path.join(__dirname, "downloaded_episode.zip");
            const _0x568fbb = fs.createWriteStream(_0xede861);
            const _0x296eaf = await axios({
              'url': _0x50c0f3,
              'method': "GET",
              'responseType': "stream"
            });
            _0x296eaf.data.pipe(_0x568fbb);
            _0x568fbb.on("finish", async () => {
              await _0x29f25e.sendMessage(_0x44c1ea, {
                'document': {
                  'url': _0xede861
                },
                'mimetype': 'application/zip',
                'fileName': _0x339cc7.title + ".zip",
                'caption': '*' + _0x339cc7.title + "*\n\n> Lααɾα-ᴍᴅ ✻"
              }, {
                'quoted': _0x9a9db9
              });
              fs.unlinkSync(_0xede861);
            });
            _0x568fbb.on("error", _0x5e5593 => {
              console.error("Error downloading ZIP file:", _0x5e5593);
              _0x2e05d8("*Error downloading the episode ZIP file.*");
            });
          } else {
            await _0x2e05d8("*Download link not found for the selected episode.*");
          }
        } else {
          await _0x2e05d8("*Invalid selection. Please choose a valid number.*");
        }
      }
    });
  } catch (_0x13a142) {
    console.error(_0x13a142);
    await _0x2e05d8("*An error occurred while scraping the data.*");
  }
});
cmd({
  'pattern': "ginisisila",
  'react': '📑',
  'category': 'download',
  'desc': "ginisisilacartoon.net",
  'filename': __filename
}, async (_0x2193c1, _0x46b55a, _0x1da9d5, {
  from: _0x49af42,
  q: _0x269b23,
  isDev: _0x11a405,
  reply: _0x5bc5f9
}) => {
  try {
    if (!_0x269b23) {
      return await _0x5bc5f9("*Please provide a search query! (e.g., Garfield)*");
    }
    const _0x47bcff = "https://ginisisilacartoon.net/search.php?q=" + encodeURIComponent(_0x269b23);
    const _0x942373 = await axios.get(_0x47bcff);
    const _0x8a6b01 = cheerio.load(_0x942373.data);
    let _0x4981e5 = [];
    _0x8a6b01("div.inner-video-cell").each((_0x401c60, _0x3494b2) => {
      const _0x556af6 = _0x8a6b01(_0x3494b2).find("div.video-title > a").attr('title');
      const _0x3356b4 = _0x8a6b01(_0x3494b2).find("div.posted-time").text().trim();
      const _0x124102 = _0x8a6b01(_0x3494b2).find("div.video-title > a").attr("href");
      const _0x10a7c3 = _0x8a6b01(_0x3494b2).find("div.inner-video-thumb-wrapper img").attr('src');
      if (_0x556af6 && _0x124102) {
        _0x4981e5.push({
          'title': _0x556af6,
          'postedTime': _0x3356b4,
          'episodeLink': 'https://ginisisilacartoon.net/' + _0x124102,
          'imageUrl': _0x10a7c3
        });
      }
    });
    if (_0x4981e5.length === 0x0) {
      return await _0x5bc5f9("No results found for: " + _0x269b23);
    }
    let _0x243034 = "📺 Search Results for *" + _0x269b23 + ":*\n\n";
    _0x4981e5.forEach((_0xb47ad9, _0x566538) => {
      _0x243034 += '*' + (_0x566538 + 0x1) + ".* " + _0xb47ad9.title + "\n🗓️ Posted: " + _0xb47ad9.postedTime + "\n🔗 Link: " + _0xb47ad9.episodeLink + "\n\n";
    });
    const _0x338e95 = await _0x2193c1.sendMessage(_0x49af42, {
      'text': _0x243034
    }, {
      'quoted': _0x1da9d5
    });
    const _0x10da7c = _0x338e95.key.id;
    _0x2193c1.ev.on("messages.upsert", async _0x391edd => {
      const _0x50c272 = _0x391edd.messages[0x0];
      if (!_0x50c272.message) {
        return;
      }
      const _0x18f109 = _0x50c272.message.conversation || _0x50c272.message.extendedTextMessage?.["text"];
      const _0x51f5e6 = _0x50c272.key.remoteJid;
      const _0x45542b = _0x50c272.message.extendedTextMessage && _0x50c272.message.extendedTextMessage.contextInfo.stanzaId === _0x10da7c;
      if (_0x45542b) {
        const _0x134e52 = parseInt(_0x18f109.trim());
        if (!isNaN(_0x134e52) && _0x134e52 > 0x0 && _0x134e52 <= _0x4981e5.length) {
          const _0x5ad7ef = _0x4981e5[_0x134e52 - 0x1];
          const _0x1165ac = "*🪄 ɴᴀᴍᴇ:-* " + _0x5ad7ef.title + "\n⏳ *ᴅᴀᴛᴇ:-* " + _0x5ad7ef.postedTime + "\n📎 *ᴇᴘɪꜱᴏᴅᴇ ʟɪɴᴋ*:- " + _0x5ad7ef.episodeLink + "\n\n☘ *We are uploading the Movie/Episode you requested.*";
          const _0x283018 = {
            'image': {
              'url': _0x5ad7ef.imageUrl
            },
            'caption': _0x1165ac
          };
          await _0x2193c1.sendMessage(_0x51f5e6, _0x283018, {
            'quoted': _0x50c272
          });
          const _0x3888e9 = await axios.get(_0x5ad7ef.episodeLink);
          const _0x517e63 = cheerio.load(_0x3888e9.data);
          const _0xecfa53 = _0x517e63("div#player-holder iframe").attr("src");
          if (_0xecfa53) {
            const _0x3e5b86 = "https://api.fgmods.xyz/api/downloader/gdrive?url=" + _0xecfa53 + "&apikey=mnp3grlZ";
            try {
              const _0x53c0cc = await axios.get(_0x3e5b86);
              const _0x13e7a7 = _0x53c0cc.data.result.downloadUrl;
              if (_0x13e7a7) {
                await _0x2193c1.sendMessage(_0x51f5e6, {
                  'document': {
                    'url': _0x13e7a7
                  },
                  'mimetype': "video/mp4",
                  'fileName': "MR Nadu | " + _0x5ad7ef.title + ".mp4",
                  'caption': _0x5ad7ef.title + " | *© ⎝⧹ NADU-MD ⧸⎠*"
                }, {
                  'quoted': _0x50c272
                });
              } else {
                await _0x5bc5f9("Failed to retrieve the download link for this episode.");
              }
            } catch (_0x228fee) {
              console.error("Error fetching the download link:", _0x228fee);
              await _0x5bc5f9("An error occurred while trying to fetch the download link.");
            }
          } else {
            await _0x5bc5f9("No downloadable link found for this episode.");
          }
        } else {
          await _0x5bc5f9("Please reply with a valid number from the list.");
        }
      }
    });
  } catch (_0x285e41) {
    _0x5bc5f9("*Error occurred while scraping!*");
    console.error(_0x285e41);
  }
});
cmd({
  'pattern': "apk",
  'desc': "Download apk.",
  'category': "download",
  'filename': __filename
}, async (_0x34e5dd, _0x17467d, _0x43d4c5, {
  from: _0x23d582,
  quoted: _0x134ddc,
  body: _0x4fc311,
  isCmd: _0x410690,
  command: _0x5084aa,
  args: _0x3080f8,
  q: _0x30273e,
  isGroup: _0x43bf4c,
  sender: _0xbfe55b,
  senderNumber: _0x1ee891,
  botNumber2: _0x26b044,
  botNumber: _0x2f596a,
  pushname: _0x2d68d2,
  isMe: _0x5c6a0e,
  isOwner: _0x1d1336,
  groupMetadata: _0x3b2e64,
  groupName: _0x3fd919,
  participants: _0x18345b,
  groupAdmins: _0x1ab021,
  isBotAdmins: _0xb86864,
  isAdmins: _0x1215c0,
  reply: _0x1f8220
}) => {
  try {
    await _0x43d4c5.react('⬇');
    const _0x22a92f = 'http://ws75.aptoide.com/api/7/apps/search/query=' + _0x30273e + "/limit=1";
    const _0x4fde7e = await axios.get(_0x22a92f);
    const _0x10c997 = _0x4fde7e.data;
    let _0xd2bf2d = _0x10c997.datalist.list[0x0].size % 0xf4240;
    let _0x59ba6b = '.' + _0xd2bf2d;
    let _0x5ba56e = _0x10c997.datalist.list[0x0].size / 0xf4240;
    let _0x24e318 = _0x5ba56e - _0x59ba6b;
    let _0x5d8f45 = "╭━━━〔 *⎝⧹ 𝗠𝗘𝗧𝗛𝗨_𝗠𝗗 ⧸⎠* 〕━━━┈⊷\n┃▸╭───────────\n┃▸┃๏ *APK DOWNLOADER*\n┃▸└───────────···๏\n╰────────────────┈⊷\n╭━━━❐━⪼\n┇๏ *Name* - " + _0x10c997.datalist.list[0x0].name + " \n┇๏ *Size* - " + _0x24e318 + "MB \n┇๏ *Package* - " + _0x10c997.datalist.list[0x0]['package'] + " \n┇๏ *Updated On* - " + _0x10c997.datalist.list[0x0].updated + " \n┇๏ *Developer* - " + _0x10c997.datalist.list[0x0].developer.name + " \n╰━━━❐━⪼\n> *© ⎝⧹ 𝗠𝗘𝗧𝗛𝗨_𝗠𝗗 ⧸⎠ ♡*";
    await _0x43d4c5.react('⬆');
    await _0x34e5dd.sendMessage(_0x23d582, {
      'document': {
        'url': _0x10c997.datalist.list[0x0].file.path_alt
      },
      'fileName': _0x10c997.datalist.list[0x0].name,
      'mimetype': "application/vnd.android.package-archive",
      'caption': _0x5d8f45
    }, {
      'quoted': _0x17467d
    });
    await _0x43d4c5.react('✅');
  } catch (_0x472ce9) {
    console.log(_0x472ce9);
    _0x1f8220('' + _0x472ce9);
  }
});
const {
  sinhalaSub
} = require("mrnima-moviedl");
cmd({
  'pattern': "sinhalasub",
  'alias': ['movie'],
  'react': '📑',
  'category': "download",
  'desc': "Search movies on sinhalasub and get download links",
  'filename': __filename
}, async (_0x57388a, _0x25908f, _0x5a7bbb, {
  from: _0x5f00ab,
  q: _0x522a3c,
  reply: _0x371d5f
}) => {
  try {
    if (!_0x522a3c) {
      return await _0x371d5f("*Please provide a search query! (e.g., Deadpool)*");
    }
    var _0x24d368 = await sinhalaSub();
    const _0x5c5824 = await _0x24d368.search(_0x522a3c);
    const _0x5959f9 = _0x5c5824.result.slice(0x0, 0xa);
    if (!_0x5959f9 || _0x5959f9.length === 0x0) {
      return await _0x371d5f("No results found for: " + _0x522a3c);
    }
    let _0x5a71c6 = "📽️ *Search Results for* \"" + _0x522a3c + "\":\n\n";
    _0x5959f9.forEach((_0x203df6, _0x1152d7) => {
      _0x5a71c6 += '*' + (_0x1152d7 + 0x1) + ".* " + _0x203df6.title + "\n🔗 Link: " + _0x203df6.link + "\n\n";
    });
    const _0x3469d1 = await _0x57388a.sendMessage(_0x5f00ab, {
      'text': _0x5a71c6
    }, {
      'quoted': _0x5a7bbb
    });
    const _0x2c39e3 = _0x3469d1.key.id;
    _0x57388a.ev.on('messages.upsert', async _0xf4885f => {
      const _0x5703e1 = _0xf4885f.messages[0x0];
      if (!_0x5703e1.message) {
        return;
      }
      const _0x1508b9 = _0x5703e1.message.conversation || _0x5703e1.message.extendedTextMessage?.["text"];
      const _0x55d809 = _0x5703e1.message.extendedTextMessage && _0x5703e1.message.extendedTextMessage.contextInfo.stanzaId === _0x2c39e3;
      if (_0x55d809) {
        const _0x3df263 = parseInt(_0x1508b9.trim());
        if (!isNaN(_0x3df263) && _0x3df263 > 0x0 && _0x3df263 <= _0x5959f9.length) {
          const _0xa22e01 = _0x5959f9[_0x3df263 - 0x1];
          const _0x51f8f0 = 'https://api-site-2.vercel.app/api/sinhalasub/movie?url=' + encodeURIComponent(_0xa22e01.link);
          try {
            const _0x64ea0c = await axios.get(_0x51f8f0);
            const _0x5469b6 = _0x64ea0c.data.result;
            const _0x291aac = _0x5469b6.dl_links || [];
            if (_0x291aac.length === 0x0) {
              return await _0x371d5f("No PixelDrain links found.");
            }
            let _0x4ccef6 = "🎥 *" + _0x5469b6.title + "*\n\n";
            _0x4ccef6 += "*Available PixelDrain Download Links:*\n";
            _0x291aac.forEach((_0x66c253, _0x299595) => {
              _0x4ccef6 += '*' + (_0x299595 + 0x1) + ".* " + _0x66c253.quality + " - " + _0x66c253.size + "\n🔗 Link: " + _0x66c253.link + "\n\n";
            });
            const _0xb3a0bf = await _0x57388a.sendMessage(_0x5f00ab, {
              'text': _0x4ccef6
            }, {
              'quoted': _0x5703e1
            });
            const _0x50fb94 = _0xb3a0bf.key.id;
            _0x57388a.ev.on("messages.upsert", async _0x59cf50 => {
              const _0x267b62 = _0x59cf50.messages[0x0];
              if (!_0x267b62.message) {
                return;
              }
              const _0x2dcf80 = _0x267b62.message.conversation || _0x267b62.message.extendedTextMessage?.["text"];
              const _0x2a3361 = _0x267b62.message.extendedTextMessage && _0x267b62.message.extendedTextMessage.contextInfo.stanzaId === _0x50fb94;
              if (_0x2a3361) {
                const _0x48bb68 = parseInt(_0x2dcf80.trim());
                if (!isNaN(_0x48bb68) && _0x48bb68 > 0x0 && _0x48bb68 <= _0x291aac.length) {
                  const _0x21b2a8 = _0x291aac[_0x48bb68 - 0x1];
                  const _0x207ee5 = _0x21b2a8.link.split('/').pop();
                  await _0x57388a.sendMessage(_0x5f00ab, {
                    'react': {
                      'text': '⬇️',
                      'key': _0x5a7bbb.key
                    }
                  });
                  const _0x56e5a4 = "https://pixeldrain.com/api/file/" + _0x207ee5;
                  await _0x57388a.sendMessage(_0x5f00ab, {
                    'react': {
                      'text': '⬆',
                      'key': _0x5a7bbb.key
                    }
                  });
                  await _0x57388a.sendMessage(_0x5f00ab, {
                    'document': {
                      'url': _0x56e5a4
                    },
                    'mimetype': "video/mp4",
                    'fileName': _0x5469b6.title + " - " + _0x21b2a8.quality + ".mp4",
                    'caption': _0x5469b6.title + "\nQuality: " + _0x21b2a8.quality + "\nPowered by SinhalaSub",
                    'contextInfo': {
                      'mentionedJid': [],
                      'externalAdReply': {
                        'title': _0x5469b6.title,
                        'body': "⎝⧹ 𝗠𝗘𝗧𝗛𝗨_𝗠𝗗 ⧸⎠",
                        'mediaType': 0x1,
                        'sourceUrl': _0xa22e01.link,
                        'thumbnailUrl': _0x5469b6.image
                      }
                    }
                  }, {
                    'quoted': _0x267b62
                  });
                  await _0x57388a.sendMessage(_0x5f00ab, {
                    'react': {
                      'text': '✅',
                      'key': _0x5a7bbb.key
                    }
                  });
                } else {
                  await _0x371d5f("Invalid selection. Please reply with a valid number.");
                }
              }
            });
          } catch (_0x105a5c) {
            console.error("Error fetching movie details:", _0x105a5c);
            await _0x371d5f("An error occurred while fetching movie details. Please try again.");
          }
        } else {
          await _0x371d5f("Invalid selection. Please reply with a valid number.");
        }
      }
    });
  } catch (_0x29d828) {
    console.error("Error during search:", _0x29d828);
    _0x371d5f("*An error occurred while searching!*");
  }
});
