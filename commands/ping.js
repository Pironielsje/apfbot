const { MessageEmbed } = require("discord.js")

module.exports.run = async(client, msg, args) => {

    const ping = new MessageEmbed()
        .setTitle("Pong 🏓")
        .setDescription(`Latency: ${msg.createdTimestamp - msg.createdTimestamp}ms. \nApi Latency: ${Math.floor(Math.round(client.ws.ping))}ms.`)
        .setColor("RANDOM")
        .setFooter(`Requested by: ${msg.author.username}`, msg.author.displayAvatarURL())
        .setTimestamp()

    msg.reply(`Pinging`).then(msg => {
        msg.edit({ embeds: [ping] })
    })

}

module.exports.help = {
    name: "ping",
    aliases: ["p", "pong", "pingpong"]
}