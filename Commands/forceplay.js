const { CommandInteraction, Client, MessageEmbed, VoiceChannel } = require('discord.js');
const client = require('../main');

module.exports = {
    name: 'forceplay',
    description: "Force to play song.",
    options: [{ name: "query", description: "Provide a name or URL.", type: "STRING", required: true}],
    aliases: ['p'],
    /** 
     * @param {CommandInteraction} interaction 
     * @param {Client} client 
     */
    async execute(interaction, client) {
    const { options, member, guild, channel } = interaction;
    const VoiceChannel = member.voice.channel;

    if(!VoiceChannel)
    return interaction.reply({content: "You must be in a voice channel to use this command.", ephemeral: true});

    if(guild.me.voice.channelId && VoiceChannel.id !== guild.me.voice.channelId)
    return interaction.reply({ccontent: `I'm already playing music in <#${guild.me.voice.channelId}>.`, ephemeral: true});
    
    
    client.distube.play( VoiceChannel, options.getString("query"), { textChannel: channel, member: member, skip: true });
        return interaction.reply({content: "Request recived."});
    }
  }