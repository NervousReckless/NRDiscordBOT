import { CommandInteraction, Client, MessageEmbed, VoiceChannel } from 'discord.js';
import client from '../main';

export const name = 'stop';
export const description = "Stops a song";
export
  /**
   * @param {CommandInteraction} interaction
   * @param {Client} client
   */
  async function execute(interaction, client) {
  const { options, member, guild, channel } = interaction;
  const VoiceChannel = member.voice.channel;
  const queue = await client.distube.getQueue(VoiceChannel);

  if (!queue)
    return interaction.reply({ content: "There is no queue." });

  await queue.stop(VoiceChannel);
  return interaction.reply({ content: "Music has beed stopped." });
}