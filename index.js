const { Client, Intents, Collection, MessageEmbed } = require('discord.js')
const fs = require('fs')
const db = require('quick.db')
const redditfetch = require('reddit-fetch')
const mongoose = require('mongoose')

const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
})

client.commands = new Collection()
client.aliases = new Collection()

const cmdFiles = fs.readdirSync('./commands').filter(file => file.endsWith(".js"))

for (const file of cmdFiles) {
    const command = require(`./commands/${file}`)

    client.commands.set(command.help.name, command)

    for (const alias of command.help.aliases) {
        client.aliases.set(alias, command)
    }

    console.log(`${file} loaded`)

}

mongoose.connect(process.env.MONGODBSRV, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log(`Connected to database!`)
}).catch((error) => {
    console.log(console.log(error))
})

client.once('ready', () => {
    console.log("Ready")
    client.user.setActivity("At school 🙄")
})

client.on("messageCreate", async(msg) => {

    if (msg.author.bot) return

    let prefix = db.get(`${msg.guild.id}_prefix`);

    let defautprefix = process.env.DEFPREFIX

    if (prefix === null) prefix = defautprefix

    if (!msg.content.startsWith(prefix)) return

    const msgArray = msg.content.split(" ")

    const command = msgArray[0]

    const args = msgArray.slice(1)

    const cmdData = client.commands.get(command.slice(prefix.length)) || client.aliases.get(command.slice(prefix.length))

    if (!cmdData) return

    try {
        cmdData.run(client, msg, args)
    } catch (error) {
        console.log(error)
        msg.reply("Something went wrong.")
    }

})

client.on("interactionCreate", async(interaction) => {
        if (interaction.customId === "nextmeme" && interaction.isButton) {
            redditfetch({
                subreddit: "memes" || "dankmemes",
                sort: "hot",
                allowCrossPost: true,
                allowModPost: false,
                allowNSFW: false,
                allowVideo: true
            }).then(post => {
                const meme = new MessageEmbed()
                    .setTitle(post.title)
                    .setColor("RANDOM")
                    .setImage(post.url)
                    .setFooter(`👍: ${post.ups} 💬: ${post.num_comments}  Requested by: ${interaction.user.username}`, interaction.user.displayAvatarURL())

                interaction.message.edit({ embeds: [meme] })
                interaction.reply({ content: "I've edited the meme", ephemeral: true })
            })
        }

        if(interaction.customId === "information" && interaction.isButton) {
            const infoHelp = new MessageEmbed()
                .setTitle("📜 Information")
                .setColor("RANDOM")
                .setFields(
                    {name: "help", value: "**Shows the help embed** [aliases: \"h, helpme, commands\"]"},
                    {name: "botinfo", value: "**Returns the info of the bot** [aliases: \"bi, binfo\"]"},
                    {name: "ping", value: "**Shows the ping** [aliases: \"pong, p, pingpong\"]"},
                    {name: "youtube", value: "**Shows the youtube channel of the creator** [aliases: \"yt\"]"}
                )
                .setFooter(`Requested by: ${interaction.user.username}`, interaction.user.displayAvatarURL())
                .setTimestamp()

            interaction.message.edit({embeds: [infoHelp]})
            interaction.reply({content: "Need more help? Contact the dev: Niels#8069", ephemeral: true})
        }
})

client.login(process.env.TOKEN)