module.exports.run = async(client, msg, args) => {

    if (!args[0]) return msg.reply("Please tag someone to hack!")

    const victim = msg.mentions.members.first()

    const commonWords = [
        "cat",
        "dog",
        "meme",
        "porn",
        "hentai",
        "bonk",
        "lol"
    ]

    const emails = [
        "@gaymail.com",
        "@gmail.com",
        "@developdeck.nl",
        "@lol.xyz",
        "@hello.hello"
    ]

    const ips = [
        "0.0.0.0.0",
        "172.24.54.21",
        "92.48.43.67.26",
        "84.76.84.23.45"
    ]

    const commonWord = commonWords[Math.floor(Math.random() * commonWords.length)]

    const email = emails[Math.floor(Math.random() * emails.length)]

    msg.reply(`Hacking ${victim.user.username} now...`).then(m => {
        setTimeout(() => {
            m.edit(`Finding common words...`).then(me => {
                setTimeout(() => {
                    me.edit(`Most common word: ${commonWord}`).then(mes => {
                        setTimeout(() => {
                            mes.edit(`Hacking email address...`).then(mess => {
                                setTimeout(() => {
                                    mess.edit(`Email address: ${victim.user.username}${email}.`).then(messa => {
                                        setTimeout(() => {
                                            messa.edit(`Finished hacking! I sent you a dm with the info!`)

                                            msg.author.send(`${victim.user.username} Hack info: \n\nMost common word: ${commonWord}\n\nEmail: ${victim.user.username}${email} \n\nIp address: ${ips[Math.floor(Math.random() * ips.length)]}`).catch(error => {
                                                console.log(error)
                                                msg.reply(`I couldn't send you an dm!`)
                                            })
                                        }, 2000);
                                    })
                                }, 2000);
                            })
                        }, 2000);
                    })
                }, 2000);
            })
        }, 2000);
    })

}

module.exports.help = {
    name: "hack",
    aliases: ["hock", "hacker"]
}