import { CommandInteraction, Client, MessageEmbed, VoiceChannel } from 'discord.js';
import client from '../main';

export const name = "queue";
export const description = "Shows current play list.";
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

    return interaction.reply({
        embeds: [new MessageEmbed()
            .setColor("PURPLE")
            .setDescription(`${queue.songs.map(
                (song, id) => `\n**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``)}`
            )]
    });
}