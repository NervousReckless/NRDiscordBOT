import { CommandInteraction, Client, MessageEmbed, VoiceChannel, Message } from 'discord.js';
import client from '../main';

export const name = "autoplay";
export const description = "Toggle autoplay on/off";
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
        return interaction.reply({ conent: "There is no queue." });

    const autoplay = queue.toggleAutoplay();
    interaction.reply(`Autoplay: \`${autoplay ? 'On' : 'Off'}\``);
}