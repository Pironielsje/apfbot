const db = require("quick.db")

module.exports.run = async(client, msg, args) => {

    const target = msg.mentions.members.first()

    if (!target || !args[0]) return msg.reply("Tag a user please")

    const targetId = target.user.id || msg.guild.members.cache.get(args[0])

    if (!targetId) msg.reply('I couldn\'t find that person')

    if (!db.get(`${targetId}_money_${msg.guild.id}`) || db.get(`${targetId}_money_${msg.guild.id}`) <= 0) {
        return msg.reply("That user doesn't have any money!")
    } else {
        db.delete(`${targetId}_money_${msg.guild.id}`)
        msg.reply(`I've reset <@${targetId}>'s money!`)
    }

}

module.exports.help = {
    name: "resetmoney",
    aliases: ["rm", "moneytozero"]
}