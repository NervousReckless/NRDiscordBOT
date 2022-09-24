const { CommandInteraction, Client, MessageEmbed } = require("discord.js");


module.exports = {
    name: "interactionCreate",
    /**
     * 
     * @param {CommandInteraction} interaction
     * @param {Client} client
     */
    async execute(interaction, client) {
        if(interaction.isCommand()) {
            const command = client.commands.get(interaction.commandName);
            if(!command) return interaction.reply({embeds: [
                new MessageEmbed()
                .setColor("RED")
                .setDescription("An error occured while running this command.")
            ]}) && client.commands.delete(interaction.commandName);
            
            if (command.permissions && !interaction.member.permissions.has(command.permissions)) {
                return interaction.reply({ content: `You do not have permission to use: \"${interaction.commandName}".`, ephemeral: true })
            }

            command.execute(interaction, client)
        }
    }
}