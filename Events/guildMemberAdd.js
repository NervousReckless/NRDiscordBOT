import { MessageEmbed, WebhookClient, GuildMember } from "discord.js";

export const name = "guildMemberAdd";
export function execute(member) {

    const { user, guild } = member;

    const Welcomer = new WebhookClient({
        id: "973264410871209994",
        token: "Ydxw0F4BEXcv30ETdkTy0KyhkpUjo3lGrfKrijTLI6SwDdHNosyCrh--r3OhmHKPyK4u"
    });

    const Welcome = new MessageEmbed()
        .setColor("AQUA")
        .setAuthor(user.tag, user.avatarURL({ dynamic: true, size: 512 }))
        .setThumbnail(user.avatarURL({ dynamic: true, size: 512 }))
        .setDescription(`Welcome ${member} to the **${guild.name}**!\n
        Account Created: <t:${parseInt(user.createdTimestamp / 1000)}:R>\nLatest Member Count: **${guild.memberCount}**`)
        .setFooter(`ID: ${user.id}`);

    Welcomer.send({ embeds: [Welcome] });
}