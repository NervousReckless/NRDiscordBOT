import { Discord, MessageEmbed, CommandInteraction } from "discord.js";
import randomPuppy from 'random-puppy';

export const name = "meme";
export const description = "Send a random memes";
export const aliases = [];
export async function execute(interaction, client) {
    const subReddits = ["meme", "me_irl", "dankmeme"];
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];
    const img = await randomPuppy(random);

    const embed = new MessageEmbed()
        .setColor("YELLOW")
        .setImage(img)
        .setTitle(`From /r/${random}`)
        .setURL(`http://reddit.com/${random}`);

    interaction.reply({ embeds: [embed] });
}
