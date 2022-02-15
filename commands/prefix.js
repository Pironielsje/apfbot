const db = require('quick.db')

module.exports.run = async(client, msg, args) => {

    if (!args[0]) return msg.reply(`Please give me a prefix to change it to!`)

    db.set(`${msg.guild.id}_prefix`, args[0])

    msg.reply(`I've changed the prefix to: **${args[0]}**`)

}

module.exports.help = {
    name: "prefix",
    aliases: ["setprefix", "p"]
}