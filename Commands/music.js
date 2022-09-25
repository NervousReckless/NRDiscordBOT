import { CommandInteraction, Client, MessageEmbed, VoiceChannel } from 'discord.js';
import client from '../main';

export const name = "music";
export const description = "Complete music system";
export const options = [
    {
        name: "play",
        description: "Play a song.",
        type: "SUB_COMMAND",
        options: [{ name: "query", description: "Provide a name or URL.", type: "STRING", required: true }]
    },
    {
        name: "voulme",
        description: "Alter the volume",
        type: "SUB_COMMAND",
        options: [{ name: "precent", description: "10 = 10%", type: "NUMBER", required: true }]
    },
    // {
    //     name: "playList",
    //     description: "Add a playlist",
    //     type: "SUB_COMMAND",
    //     options: [{ name: "query", description: "Provide a URL", type: "STRING", required: true}]
    // },
    {
        name: "settings",
        description: "Select an option.",
        type: "SUB_COMMAND",
        options: [{
            name: "options", description: "Select an option.", type: "STRING", required: true,
            choices: [
                { name: "queue", value: "queue" },
                { name: "skip", value: "skip" },
                { name: "pause", value: "pause" },
                { name: "resume", value: "resume" },
                { name: "stop", value: "stop" },
            ]
        }]
    }
];
export
    /**
     * @param {CommandInteraction} interaction
     * @param {Client} client
     */
    async function execute(interaction, client) {
    const { options, member, guild, channel } = interaction;
    const VoiceChannel = member.voice.channel;

    if (!VoiceChannel)
        return interaction.reply({ content: "You must be in a voice channel to use thuis command.", ephemeral: true });

    if (guild.me.voice.channelId && VoiceChannel.id !== guild.me.voice.channelId)
        return interaction.reply({ ccontent: `I'm already playing music in <#${guild.me.voice.channelId}>.`, ephemeral: true });

    try {
        switch (options.getSubcommand()) {
            case "play": {
                client.distube.play(VoiceChannel, options.getString("query"), { textChannel: channel, member: member });
                return interaction.reply({ content: "Request recived." });
            }
            // case "playList" : {
            //     client.distube.play( VoiceChannel, options.getString("query"), { textChannel: channel, member: member });
            //     return interaction.reply({content: "Request recived."});
            // }
            case "volume": {
                const Volume = options.getNumber("precent");
                if (Volume > 100 || Volume < 1)
                    return interaction.reply({ content: "You have to specify a number between 1 and 100." });

                //queue.setVolume(volume)
                client.distube.setVolume(VoiceChannel, Volume);
                return interaction.reply({ content: `Volume had been set to \`${Volume}%\`.` });
            }
            case "settings": {
                const queue = await client.distube.getQueue(VoiceChannel);

                if (!queue)
                    return interaction.reply({ content: "There is no queue." });

                switch (options.getString("options")) {
                    case "skip":
                        await queue.skip(VoiceChannel);
                        return interaction.reply({ content: "Song has been skipped." });
                    case "stop":
                        await queue.stop(VoiceChannel);
                        return interaction.reply({ content: "Music has been stopped." });
                    case "pause":
                        await queue.pause(VoiceChannel);
                        return interaction.reply({ content: "Music has been paused." });
                    case "resume":
                        await queue.resume(VoiceChannel);
                        return interaction.reply({ content: "Music has been resumed." });
                    case "queue":
                        return interaction.reply({
                            embeds: [new MessageEmbed()
                                .setColor("PURPLE")
                                .setDescription(`${queue.songs.map(
                                    (song, id) => `\n**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``)}`
                                )]
                        });
                }
                return;
            }
        }
    } catch (e) {
        const errorEmbed = new MessageEmbed()
            .setColor("RED")
            .setDescription(`Alert: ${e}`);
        return interaction.reply({ embeds: [errorEmbed] });
    }
}
