/* Copyright (C) 2022 Sourav KL11.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Raganork MD - Sourav KL11
*/
const {find} = require('raganork-bot')
const {Module} = require('../main');
const s = require('../config');
const wk = s.MODE == 'public' ? false : true
Module({pattern: 'true ?(.*)', desc: 'Searches for number in truecaller!',use: 'search',fromMe: wk}, async (msg, query) => {
let user =  (message.mention || msg.reply_message?.jid || query[1])?.split("@")[0]
if (!user) return await msg.reply("_Need number/reply/mention_");
const trueCaller = async (num) => {try { var res = await find(num,'',msg.client.user.id) } catch { var res = false }; return res;}
for (let i = 0; i < 6; i++){
    var _result = await trueCaller(user.replace( /^\D| +/g, ''))
    if (i === 5 || _result === false) {
        return await msg.sendReply("_Error, try again!_")
    } else return await msg.sendReply(_result)
}
});
