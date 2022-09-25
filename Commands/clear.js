import { CommandInteraction, MessageEmbed } from 'discord.js';

export const name = "clear";
export const description = "Deletes a specified number of messages from ch";
export const permission = "MANAGE_MESSAGES";
export const options = [
    {
        name: "amount",
        description: "Select the amount of messages to delete",
        type: "NUMBER",
        required: true
    },
    {
        name: "target",
        description: "Select user that messages u want to delete",
        type: "USER",
        required: false
    }
];
export
    /**
     *
     * @param {CommandInteraction} interaction
     */
    async function execute(interaction) {
    const { channel, options } = interaction;

    const Amount = options.getNumber("amount");
    const Target = options.getMember("target");

    const Messages = await channel.messages.fetch();

    const Response = new MessageEmbed()
        .setColor("LUMINOUS_VIVID_PINK");

    if (Amount > 100 || Amount <= 0) {
        Response.setDescription(`Amount cannot exceed 100, and cannot be under 1.`);
        return interaction.reply({ embeds: [Response] });
    }

    if (Target) {
        let i = 0;
        const filtered = [];
        (await Messages).filter((m) => {
            if (m.author.id === Target.id && Amount > i) {
                filtered.push(m);
                i++;
            }
        });

        await channel.bulkDelete(filtered, true).then(messages => {
            Response.setDescription(`Cleared ${messages.size} from ${Target}`);
            interaction.reply({ embeds: [Response] });
        });
    } else {
        await channel.bulkDelete(Amount, true).then(messages => {
            Response.setDescription(`Cleared ${messages.size} from this channel`);
            interaction.reply({ embeds: [Response] });
        });
    }
}