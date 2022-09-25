import { CommandInteraction, Client } from "discord.js";

export const name = "emit";
export const description = "emitter";
export const permission = "ADMINISTRATOR";
export const options = [
    {
        name: "member",
        description: "Guild member Events,",
        type: "STRING",
        require: true,
        choices: [
            {
                name: "guildMemberAdd",
                value: "guildMemberAdd"
            },
            {
                name: "guildMemberRemove",
                value: "guildMemberRemove"
            }
        ]
    }
];
export function execute(interaction, client) {
    const choices = interaction.options.getString("member");

    switch (choices) {
        case "guildMemberAdd": {
            client.emit("guildMemberAdd", interaction.member);
            interaction.reply({ content: "Emitted.", ephemeral: true });
        }
            break;
        case "guildMemberRemove": {
            client.emit("guildMemberRemove", interaction.member);
            interaction.reply({ content: "Emitted.", ephemeral: true });
        }
            break;
    }
}