const { CommandInteraction, Client, MessageEmbed, VoiceChannel } = require('discord.js');
const client = require('../main');

module.exports = {
    name: 'stop',
    description: "Stops a song",
    /** 
     * @param {CommandInteraction} interaction 
     * @param {Client} client 
     */
    async execute(interaction, client) {
    const { options, member, guild, channel } = interaction;
    const VoiceChannel = member.voice.channel;
    const queue = await client.distube.getQueue(VoiceChannel);

    if(!queue)
    return interaction.reply({content: "There is no queue."});
    
    await queue.stop(VoiceChannel);
    return interaction.reply({content: "Music has beed stopped."})
    }
  }