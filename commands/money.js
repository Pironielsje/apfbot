const db = require("quick.db")

module.exports.run = async(client, msg, args) => {
        if (!db.get(`${msg.author.id}_money_${msg.guild.id}`) || db.get(`${msg.author.id}_money_${msg.guild.id}`) <= 0) {
            msg.reply(`You don't have any money`)
        } else {
            msg.reply(`You have $${db.get(`${msg.author.id}_money_${msg.guild.id}`)}`)
    }
}

module.exports.help = {
    name: "money",
    aliases: ["balance"]
}