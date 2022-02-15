const { MessageEmbed } = require("discord.js")

module.exports.run = async(client, msg, args) => {

    let totalSeconds = (client.uptime / 1000);
    let days = Math.floor(totalSeconds / 86400);
    totalSeconds %= 86400;
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60)

    const botInfo = new MessageEmbed()
        .setTitle("Bot Info")
        .setColor("RANDOM")
        .setFields({ name: "Owner", value: `<@920383046279102595>` }, { name: "Guilds", value: `${client.guilds.cache.size} guilds` }, { name: "Users", value: `${client.users.cache.size} users` }, { name: "Uptime", value: `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds` })
        .setFooter(`Requested by: ${msg.author.username}`, msg.author.displayAvatarURL())
        .setTimestamp()

    msg.reply({ embeds: [botInfo] })

}

module.exports.help = {
    name: "botinfo",
    aliases: ["bi", "binfo"]
}