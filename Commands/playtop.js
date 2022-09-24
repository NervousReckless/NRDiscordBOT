const { CommandInteraction, Client, MessageEmbed, VoiceChannel } = require('discord.js');
const client = require('../main');

module.exports = {
    name: 'playtop',
    description: "Set this song next to play in queue.",
    options: [{ name: "query", description: "Provide a name or URL.", type: "STRING", required: true}],
    /** 
     * @param {CommandInteraction} interaction 
     * @param {Client} client 
     */
    async execute(interaction, client) {
    const { options, member, guild, channel } = interaction;
    const VoiceChannel = member.voice.channel;

    if(!VoiceChannel)
    return interaction.reply({content: "You must be in a voice channel to use thuis command.", ephemeral: true});

    if(guild.me.voice.channelId && VoiceChannel.id !== guild.me.voice.channelId)
    return interaction.reply({ccontent: `I'm already playing music in <#${guild.me.voice.channelId}>.`, ephemeral: true});
    
    
    client.distube.play( VoiceChannel, options.getString("query"), { textChannel: channel, member: member, position: 1});
        return interaction.reply({content: "Request recived."});
    }
  }