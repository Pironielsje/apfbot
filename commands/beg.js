const db = require('quick.db')

module.exports.run = async(client, msg, args) => {

    const moneyGivers = [
        "Taylor Swift",
        "Michael Jackson's Ghost",
        "Some Random Hobo",
        "Your Crush",
        "Nobody?",
        "Your Teacher"
    ]

    const giver = moneyGivers[Math.floor(Math.random() * moneyGivers.length)]

    const moneyAmount = Math.floor(Math.random() * 1001)

    if (!db.get(`${msg.author.id}_money_${msg.guild.id}`)) {
        db.set(`${msg.author.id}_money_${msg.guild.id}`, moneyAmount)
        msg.reply(`You got $${moneyAmount} from ${giver}`)
    } else {
        db.add(`${msg.author.id}_money_${msg.guild.id}`, moneyAmount)
        msg.reply(`You got $${moneyAmount} from ${giver}`)
    }

}

module.exports.help = {
    name: "beg",
    aliases: ["beggar"]
}