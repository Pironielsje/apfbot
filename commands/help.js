const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js")

module.exports.run = async(client, msg, args) => {

    const reply = new MessageEmbed()
        .setTitle(`Help`)
        .setColor("RANDOM")
        .setFields({ name: "Main", value: "Click the buttons to switch to all other commands" })
        .setFooter(`Requested by: ${msg.author.username}`, msg.author.displayAvatarURL())

    const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setCustomId("information")
            .setLabel("📜 Information")
            .setStyle("PRIMARY")
        )

    msg.reply({ embeds: [reply], components: [row] })

}

module.exports.help = {
    name: "help",
    aliases: ["h", "helpme", "commands"]
}