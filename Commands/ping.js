import { CommandInteraction } from "discord.js";

export const name = "ping";
export const description = "Ping";
export const permission = "ADMINISTRATOR";
export function execute(interaction) {
    interaction.reply({ content: "Pong!" });
}