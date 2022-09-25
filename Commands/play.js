import { CommandInteraction, Client, MessageEmbed, VoiceChannel } from 'discord.js';
import client from '../main';

export const name = 'play';
export const description = "Play a song on VoiceChannel";
export const options = [{ name: "query", description: "Provide a name or URL.", type: "STRING", required: true }];
export const aliases = ['p'];
export
    /**
     * @param {CommandInteraction} interaction
     * @param {Client} client
     */
    async function execute(interaction, client) {
    const { options, member, guild, channel } = interaction;
    const VoiceChannel = member.voice.channel;

    if (!VoiceChannel)
        return interaction.reply({ content: "You must be in a voice channel to use this command.", ephemeral: true });

    if (guild.me.voice.channelId && VoiceChannel.id !== guild.me.voice.channelId)
        return interaction.reply({ ccontent: `I'm already playing music in <#${guild.me.voice.channelId}>.`, ephemeral: true });


    try {
        client.distube.play(VoiceChannel, options.getString("query"), { textChannel: channel, member: member });
        return interaction.reply({ content: "Request recived." });
    } catch (e) {
        const errorEmbed = new MessageEmbed()
            .setColor("RED")
            .setDescription(`Alert: ${e}`);
        return interaction.reply({ embeds: [errorEmbed] });
    }
}