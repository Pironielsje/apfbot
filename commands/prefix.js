const mongoose = require('mongoose')
const commandPrefixSchema = require('../models/command-prefix')

module.exports.run = async(client, msg, args) => {

    if (!args[0]) return msg.reply(`Please give me a prefix to change it to!`)

    if(!msg.member.permissions.has("ADMINISTRATOR")) msg.reply(`You have to be administrator to use this!`)


        try {
            await commandPrefixSchema.findOneAndUpdate({
                _id: msg.guild.id
            }, {
                _id: msg.guild.id,
                prefix: args[0]
            }, {
                upsert: true
            })
        } finally {
            mongoose.connection.close()
        }

    msg.reply(`I've changed the prefix to: **${args[0]}**`)

}

module.exports.help = {
    name: "prefix",
    aliases: ["setprefix", "p"]
}