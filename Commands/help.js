import { MessageEmbed, Message } from "discord.js";


export const name = "help";
export const description = "Shows all available commands.";
export function execute(Interaction) {

    const helper = new MessageEmbed()
        .setTitle("Commands")
        .setColor("GREEN")
        .setDescription(`📄   /help - Shows all commands.\n
        📢   /emit - Emitt member join or left communicate from this server.\n
        🏓   /ping - Response with Pong!\n
        🧹   /clear - Clear selected amount of messages from chanel.\n
        📩   /suggest - Creates vote or event \n
        ▶️   /music play - play music from url or search from name\n
        📶   /music volume - set music volume to selected %\n
        🔣   /music settings - shows music commands as pause, resume etc`);


    Interaction.reply({ embeds: [helper] });
}