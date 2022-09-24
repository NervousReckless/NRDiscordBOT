const { default: SpotifyPlugin } = require("@distube/spotify");
const { Client, Collection } = require("discord.js");
const { DisTube } = require("distube");
require('dotenv').config();

const client = new Client({
  intents: ["GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGES", "GUILD_VOICE_STATES"],
  partials: ["MESSAGE", "CHANNEL", "REACTION"]
});

client.commands = new Collection();

client.distube = new DisTube(client, {
    emitNewSongOnly: true,
    leaveOnFinish: false,
    emitAddListWhenCreatingQueue: false,
    plugins: [new SpotifyPlugin()]
});
module.exports = client;

require("./Handlers/Events")(client);
require("./Handlers/Commands")(client);


client.login(process.env.DISCORD_TOKEN);
