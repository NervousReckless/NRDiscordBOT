const { Discord, MessageEmbed, CommandInteraction } = require("discord.js");
const randomPuppy = require('random-puppy');

module.exports = {
    name: "meme",
    description: "Send a random memes",
    aliases: [],

    async execute(interaction, client) {
    const subReddits = ["meme", "me_irl", "dankmeme"]
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];
    const img = await randomPuppy(random);

    const embed = new MessageEmbed()
    .setColor("YELLOW")
    .setImage(img)
    .setTitle(`From /r/${random}`)
    .setURL(`http://reddit.com/${random}`)

    interaction.reply({embeds: [embed]})
    }
}
