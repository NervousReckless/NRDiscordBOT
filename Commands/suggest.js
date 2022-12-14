const { CommandInteraction, MessageEmbed } = require("discord.js")

module.exports = {
    name: "suggest",
    description: "Create a suggestion",
    options: [
        {
            name: "type",
            description: "Select the type.",
            required: true,
            type: "STRING",
            choices: [
                {
                    name: "Vote",
                    value: "Vote"
                },
                {
                    name: "Event",
                    value: "Event"
                },
            ]
        },
        {
            name: "name",
            description: "Provide a name for your vote",
            type: "STRING",
            required: true
        },
        {
            name: "description",
            description: "Describe the vote",
            type: "STRING",
            required: true
        },
    ],
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction) {
        const { options } = interaction;

        const type = options.getString("type");
        const name = options.getString("name");
        const desc = options.getString("description");

        const Response = new MessageEmbed()
        .setColor("AQUA")
        .setDescription(`${interaction.member} has suggested a ${type}.`)
        .addField("Name", `${name}`, true)
        .addField("description", `${desc}`, true)
        const message = await interaction.reply({embeds: [Response], fetchReply: true})
        message.react("<:Yes:973603578423947375> ")
        message.react("<:win11_erro_icon:973603297636278292>")
    }
}