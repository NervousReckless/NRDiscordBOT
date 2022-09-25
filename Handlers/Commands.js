import { Perms } from "../Validation/Permission";
import { Client } from "discord.js";
import { promisify } from "util";
import { glob } from "glob";
import Ascii from "ascii-table";

const PG = promisify(glob);

/**
 * @param {Client} client
 */
export default async (client) => {
    const Table = new Ascii("Command Loaded");

    CommandsArray = [];

    (await PG(`${process.cwd().replace(/\\/g, '/')}/Commands/*.js`)).map(async (file) => {
        const command = require(file);

        if(!command.name)
        return Table.addRow(file.split("/")[8], "FAILED", "Missing a name.")

        if(!command.description)
        return Table.addRow(command.name, "Failed", "Missing a description")

        if(command.permission) {
            if(Perms.includes(command.permission))
            command.defaultPermission = false;
            else
            return Table.addRow(command.name, "Failed", "Permission is invalid")
        }

        client.commands.set(command.name, command);
        CommandsArray.push(command);

        await Table.addRow(command.name, "✔️  SUCCESSFUL");
    });

    console.log(Table.toString());

    // Permission check //

    client.on('ready', async () => {
        const mainGuild = await client.guilds.cache.get("876501167499255838");
        mainGuild.commands.set(CommandsArray);
    });

    // client.on("ready", async () => {
    //     const MainGuild = await client.guilds.cache.get("971783431899971644");

    //     MainGuild.commands.set(CommandsArray).then(async (command) => {
    //         const Roles = (commandName) => {
    //             const cmdPerms = CommandsArray.find((c) => c.name === commandName).permission;
    //             if(!cmdPerms) return null;

    //             return  MainGuild.roles.cache.filter((r) => r.permissions.has(cmdPerms));
    //         }

    //         const fullPermissions = command.reduce((accumulator, r) => {
    //             const roles = Roles(r.name);
    //             if(!roles) return accumulator;

    //             const permissions = roles.reduce((a, r) => {
    //                 return [...a, {id: r.id, type: "ROLE", permission: true}]
    //             }, [])

    //             return [...accumulator, {id: r.id, permissions}]
    //         }, [])

    //         await MainGuild.commands.permissions.set({ fullPermissions });
    //     });
    // });
}