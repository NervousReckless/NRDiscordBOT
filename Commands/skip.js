const { CommandInteraction, Client, MessageEmbed, VoiceChannel } = require('discord.js');
const client = require('../main');

module.exports = {
    name: "skip",
    description: "Skips currently playing song.",
    
    /** 
     * @param {CommandInteraction} interaction 
     * @param {Client} client 
     */
    async execute (interaction, client) {
        const { options, member, guild, channel } = interaction;
        const VoiceChannel = member.voice.channel;
        const queue = await client.distube.getQueue(VoiceChannel);

        if(!queue)
        return interaction.reply({content: "There is no queue."});

        if(queue.songs == 1 )
        return interaction.reply({content: "There is no next position in queue."});

        await queue.skip(VoiceChannel);
        return interaction.reply({content: "song has been skipped."})
    } 
}