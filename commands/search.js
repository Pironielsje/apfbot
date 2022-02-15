const db = require("quick.db")

module.exports.run = async(client, msg, args) => {

    const places = [
        "the air",
        "the attic",
        "the grass",
        "nothing?",
        "the web",
        "discord's databases"
    ]

    const place = places[Math.floor(Math.random() * places.length)]

    const randInt = Math.floor(Math.random() * 501)

    msg.reply("Searching.").then(m => {
        setTimeout(() => {
            m.edit("Searching..").then(me => {
                setTimeout(() => {
                    me.edit("Searching...").then(mes => {
                        setTimeout(() => {
                            mes.edit(`You've searched ${place} and got ${randInt}`)
                            if (!db.get(`${msg.author.id}_money_${msg.guild.id}`)) {
                                db.set(`${msg.author.id}_money_${msg.guild.id}`, randInt)
                            } else {
                                db.add(`${msg.author.id}_money_${msg.guild.id}`, randInt)
                            }
                        }, 500);
                    })
                }, 500)
            })
        }, 500);
    })

}

module.exports.help = {
    name: "search",
    aliases: ["srch"]
}