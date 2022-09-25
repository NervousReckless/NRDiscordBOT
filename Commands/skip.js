import { CommandInteraction, Client, MessageEmbed, VoiceChannel } from 'discord.js';
import client from '../main';

export const name = "skip";
export const description = "Skips currently playing song.";
export
    /**
     * @param {CommandInteraction} interaction
     * @param {Client} client
     */
    async function execute(interaction, client) {
    const { options, member, guild, channel } = interaction;
    const VoiceChannel = member.voice.channel;
    const queue = await client.distube.getQueue(VoiceChannel);

    if (!queue)
        return interaction.reply({ content: "There is no queue." });

    if (queue.songs == 1)
        return interaction.reply({ content: "There is no next position in queue." });

    await queue.skip(VoiceChannel);
    return interaction.reply({ content: "song has been skipped." });
}