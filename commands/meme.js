const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js')
const redditfetch = require('reddit-fetch')

module.exports.run = async(client, msg, args) => {

    redditfetch({
        subreddit: "memes" || "dankmemes",
        sort: 'hot',
        allowCrossPost: true,
        allowModPost: false,
        allowNSFW: false,
        allowVideo: true
    }).then(post => {
        const reply = new MessageEmbed()
            .setTitle(post.title)
            .setColor("RANDOM")
            .setImage(post.url)
            .setFooter(`👍: ${post.ups} 💬: ${post.num_comments}  Requested by: ${msg.author.username}`, msg.author.displayAvatarURL())

        const msgRow = new MessageActionRow()
            .addComponents(
                new MessageButton()
                .setCustomId("nextmeme")
                .setLabel("Next Meme")
                .setStyle("DANGER")
            )

        msg.reply({ embeds: [reply], components: [msgRow] })
    })

}

module.exports.help = {
    name: "meme",
    aliases: ["memz"]
}