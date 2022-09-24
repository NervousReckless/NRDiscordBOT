const { Client } = require("discord.js")
// const mongoose = require("mongoose");
// const { Database } = require("../../config.json");

module.exports = {
    name: "ready",
    once: true,
    /** 
     * @param { Client } client 
     */
    execute(client) {
        
        console.log("Im online!")
        client.user.setActivity("Czikita!", {type: "WATCHING"})

    //     if(!Database) return;
    //     mongoose.connect(Database,{
    //         useNewUrlParser: true,
    //         useUnifiedTopology: true,
    //     }).then(() => {
    //         console.log("Client is connected to Database")
    //     }).catch((err) => {
    //         console.log(err)
    //     });
     }
}
