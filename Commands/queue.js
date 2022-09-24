const { CommandInteraction, Client, MessageEmbed, VoiceChannel } = require('discord.js');
const client = require('../main');

module.exports = {
    name: "queue",
    description: "Shows current play list.",
    
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

        return interaction.reply({embeds: [new MessageEmbed()
            .setColor("PURPLE")
            .setDescription(`${queue.songs.map(
                (song, id) => `\n**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``)}`
                )]});
    }
}