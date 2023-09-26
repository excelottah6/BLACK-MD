/*
 *
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : BLACK-MD
 * @author : SalmaytOfficial <https://github.com/Salmanytofficial>
 * @description : XLICON , A Multi-functional whatsapp bot.
 * @version 0.0.6
 *
 */

const {cmd} = require('../lib')
const PastebinAPI = require("pastebin-js");
pastebin = new PastebinAPI("EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL");
cmd({
        pattern: "pastebin",
        desc: "To check ping",
        category: "extra",
        filename: __filename,
    },
    async(Void, citel) => {
        if(!citel.quoted) return citel.reply('Please quote any text to get link.')
        let data = await pastebin.createPaste(citel.quoted.text, "BLACK-Pastebin")
        citel.reply('_Here is your link._\n'+data)
    }
);


 




const { cmd } = require('../lib'); 

cmd({
    pattern: "sendaza",
    desc: "Send a custom message",
    category: 'General',
    use: '<send Your message here>', 
    filename: __filename,
}, 
async (Void, citel, match) => {
    const userMessage = match[1];
    if (userMessage) {
        await citel.reply(userMessage);
    } else {
        
        await citel.reply('Usage: send Your message here');
    }
});

