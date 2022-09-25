import { Client } from "discord.js"
// const mongoose = require("mongoose");
// const { Database } = require("../../config.json");

export const name = "ready"
export const once = true
export function execute(client) {

    console.log("Im online!")
    client.user.setActivity("Czikita!", { type: "WATCHING" })

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
