module.exports.run = async(client, msg, args) => {

    const replies = [
        "yes",
        "absolutely",
        "HELL YES",
        "no",
        "prolly not",
        "Hell fuckin nah",
        "bro stfu u know the answer's no",
        "bro stfu u know the answer's yes"
    ]

    const rand = replies[Math.floor(Math.random() * replies.length)]

    if (!args[0]) return msg.reply("Please ask a question!")

    msg.reply("Lemme think").then(message => {
        setTimeout(() => {
            message.edit(`The answer is: ${rand}`)
        }, 1000);
    })

}

module.exports.help = {
    name: "8ball",
    aliases: ["8b", "eightball", "eigtb", "9baller"]
}