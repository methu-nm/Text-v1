const config = require('../config');
const { cmd, commands } = require('../command');
const {fetchJson} = require('../lib/functions');
const axios = require('axios');

// Store data for each user's temporary number
const tempNumberDataStore = {};

/**
 * Command for retrieving an OTP for a temporary number.
 */
cmd({
    pattern: "getotp",
    desc: "Retrieve the OTP for your temporary number.",
    react: "🔑",
    use: ".getotp",
    category: "others",
    filename: __filename
}, async (conn, mek, m, { from, sender, reply }) => {
    try {
        // Check if the user has a stored temporary number
        if (!tempNumberDataStore[sender] || !tempNumberDataStore[sender].number) {
            return await reply("You don't have a temporary number yet. Please generate one using *.tempnumber* first!");
        }

        // Retrieve the user's stored temporary number
        const tempNumber = tempNumberDataStore[sender].number;

        // Fetch the OTP for the temporary number from the API
        const response = await axios.get(`https://apitest1-f7dcf17bd59b.herokuapp.com/more/tempnumbercode?q=${tempNumber}`);
        const otpData = response.data;

        // Check if the API response contains OTP information
        if (!otpData || otpData.status !== "success") {
            return await reply("No OTP found for your temporary number yet. Please try again later.");
        }

        // Display the OTP to the user
        await conn.sendMessage(from, {
            text: `🔐 *TEMPORARY NUMBER OTP*\n\n*NUMBER* : ${tempNumber}\n*OTP* : ${otpData.otp}\n\nUse this OTP as needed.`
        }, { quoted: mek });
    } catch (e) {
        console.log(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } });
        return reply("An error occurred while retrieving the OTP. Please try again later.");
    }
});

/**
 * Command for generating a temporary number.
 */
cmd({
    pattern: "tempnumber",
    desc: "Create a temporary number to use with the OTP command.",
    react: "📱",
    use: ".tempnumber",
    category: "others",
    filename: __filename
}, async (conn, mek, m, { from, sender, reply }) => {
    try {
        // Check if the user already has a temporary number
        if (!tempNumberDataStore[sender]) {
            // Fetch a new temporary number from the API
            const response = await axios.get("https://apitest1-f7dcf17bd59b.herokuapp.com/more/tempnumber");
            const tempNumberData = response.data;

            // Validate API response
            if (!tempNumberData || !tempNumberData[0]) {
                return await reply("Failed to generate a temporary number. Please try again.");
            }

            // Store the temporary number for the user
            tempNumberDataStore[sender] = { number: tempNumberData[0] };
        }

        // Retrieve and display the stored temporary number
        const tempNumberInfo = tempNumberDataStore[sender];
        await conn.sendMessage(from, {
            text: `🌟 *TEMPORARY NUMBER*\n\n*NUMBER* : ${tempNumberInfo.number}\n\nUse this number to receive OTPs.`
        }, { quoted: mek });
    } catch (e) {
        console.log(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } });
        return reply("An error occurred while generating a temporary number. Please try again.");
    }
});
