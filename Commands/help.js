const { MessageEmbed, Message } = require("discord.js");


module.exports = {
    name: "help",
    description: "Shows all available commands.",
    
    execute( Interaction ) {

        const helper = new MessageEmbed()
        .setTitle("Commands")
        .setColor("GREEN")
        .setDescription(`๐   /help - Shows all commands.\n
        ๐ข   /emit - Emitt member join or left communicate from this server.\n
        ๐   /ping - Response with Pong!\n
        ๐งน   /clear - Clear selected amount of messages from chanel.\n
        ๐ฉ   /suggest - Creates vote or event \n
        โถ๏ธ   /music play - play music from url or search from name\n
        ๐ถ   /music volume - set music volume to selected %\n
        ๐ฃ   /music settings - shows music commands as pause, resume etc`)
    

        Interaction.reply({embeds: [helper]})
    }    
}