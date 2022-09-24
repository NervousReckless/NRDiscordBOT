const { CommandInteraction, Client, MessageEmbed, VoiceChannel } = require('discord.js');
const client = require('../main');

module.exports = {
    name: "volume",
    description: "Change volume.",
    options: [{ name: "query", description: "Provide a number.", type: "STRING", required: true}],
    
    /** 
     * @param {CommandInteraction} interaction 
     * @param {Client} client 
     */
    async execute (interaction, client) {
        const { options, member, guild, channel } = interaction;
        const VoiceChannel = member.voice.channel;
        const queue = await client.distube.getQueue(VoiceChannel);
        var volume = parseInt(options.getString("query"))

        if(volume > 100)
        volume = 100

        if(!queue)
        return interaction.reply({content: "There is no queue."});

        if(isNaN(volume))
        return interaction.reply({content: "Please select correct number."})

        await queue.setVolume(volume, options.getString("query"));
        return interaction.reply({content: `Volume has been changed to ${volume}%.`})
    }
}