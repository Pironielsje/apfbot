const db = require('quick.db')

module.exports.run = async(client, msg, args) => {

    const target = msg.mentions.members.first()

    if (!target || !args[0]) return msg.reply("Tag a user please")

    const num = args[1]

    if (!num) msg.reply("Please give a number")

    if (!parseInt(num)) return msg.reply("That isn't a number!")

    const targetId = target.user.id || msg.guild.members.cache.get(args[0])

    if (!targetId) msg.reply('I couldn\'t find that person')

    if (!db.get(`${targetId}_money_${msg.guild.id}`)) {
        db.set(`${targetId}_money_${msg.guild.id}`, num)
        msg.reply(`I've added ${num} to <@${targetId}>'s bank account!`)
    } else {
        db.add(`${targetId}_money_${msg.guild.id}`, num)
        msg.reply(`I've added ${num} to <@${targetId}>'s money!`)
    }

}

module.exports.help = {
    name: "addmoney",
    aliases: ["am"]
}