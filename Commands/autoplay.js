const { CommandInteraction, Client, MessageEmbed, VoiceChannel, Message } = require('discord.js');
const client = require('../main');

module.exports = {
    name: "autoplay",
    description: "Toggle autoplay on/off",

    /** 
     * @param {CommandInteraction} interaction 
     * @param {Client} client 
     */
    async execute (interaction, client) {
        const { options, member, guild, channel } = interaction;
        const VoiceChannel = member.voice.channel;
        const queue = await client.distube.getQueue(VoiceChannel);

        if (!queue)
        return interaction.reply({conent: "There is no queue."})

        const autoplay = queue.toggleAutoplay();
        interaction.reply(`Autoplay: \`${autoplay ? 'On' : 'Off'}\``)
    }
}