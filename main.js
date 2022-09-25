import { default as SpotifyPlugin } from "@distube/spotify";
import { Client, Collection } from "discord.js";
import { DisTube } from "distube";
import dotenv from 'dotenv'
dotenv.config();

const client = new Client({
  intents: ["GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGES", "GUILD_VOICE_STATES"],
  partials: ["MESSAGE", "CHANNEL", "REACTION"]
});

client.commands = new Collection();

client.distube = new DisTube(client, {
    emitNewSongOnly: true,
    leaveOnFinish: true,
    emitAddListWhenCreatingQueue: false,
    plugins: [new SpotifyPlugin()]
});
export default client;

require("./Handlers/Events").default(client);
require("./Handlers/Commands").default(client);


client.login(process.env.DISCORD_TOKEN);
