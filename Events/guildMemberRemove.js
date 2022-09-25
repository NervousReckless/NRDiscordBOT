import { MessageEmbed, WebhookClient, GuildMember } from "discord.js";

export const name = "guildMemberRemove";
export function execute(member) {

    const { user, guild } = member;

    const Logger = new WebhookClient({
        id: "973264410871209994",
        token: "Ydxw0F4BEXcv30ETdkTy0KyhkpUjo3lGrfKrijTLI6SwDdHNosyCrh--r3OhmHKPyK4u"
    });

    const Welcome = new MessageEmbed()
        .setColor("RED")
        .setAuthor(user.tag, user.avatarURL({ dynamic: true, size: 512 }))
        .setThumbnail(user.avatarURL({ dynamic: true, size: 512 }))
        .setDescription(`${member} has left.\n
        Joined: <t:${parseInt(member.joinedTimestamp / 1000)}:R>\nLatest Member Count: **${guild.memberCount}**`)
        .setFooter(`ID: ${user.id}`);

    Logger.send({ embeds: [Welcome] });
}