const { MessageEmbed } = require("discord.js")

module.exports.run = async(client, msg, args) => {
    const reply = new MessageEmbed()
        .setTitle("Want the youtube?")
        .setColor("RED")
        .setDescription("Don't be shy click the link!")
        .setFooter(`Requested by: ${msg.author.username}`, msg.author.displayAvatarURL())
        .setTimestamp()
        .setURL("https://youtube.com/channel/UCIMHpk-Lit572ylJkMBDBKw")

    msg.reply({ embeds: [reply] })
}

module.exports.help = {
    name: "youtube",
    aliases: ["yt"]
}