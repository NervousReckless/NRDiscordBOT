import { CommandInteraction, Client, MessageEmbed, VoiceChannel } from 'discord.js';
import client from "../main";

export const name = "fbi";
export const description = "plays fbi meme music on voice channel";
export
    /**
     * @param {CommandInteraction} interaction
     * @param {Client} client
     */
    async function execute(interaction, client) {
    const { options, member, guild, channel } = interaction;
    const VoiceChannel = member.voice.channel;

    if (!VoiceChannel)
        return interaction.reply({ content: "You must be in a voice channel to use thuis command.", ephemeral: true });

    if (guild.me.voice.channelId && VoiceChannel.id !== guild.me.voice.channelId)
        return interaction.reply({ ccontent: `I'm already playing music in <#${guild.me.voice.channelId}>.`, ephemeral: true });

    client.distube.play(VoiceChannel, ("https://www.youtube.com/watch?v=KQXzXyuRtQA"), { textChannel: channel, member: member });
    return interaction.reply({ content: "Request recived." });


    // client.distube.play( VoiceChannel, options.getString("https://www.youtube.com/watch?v=GxM3wstBcD4&ab_channel=Trendnation"), { textChannel: channel, member: member });
    //        return interaction.reply({content: "Request recived."});
}