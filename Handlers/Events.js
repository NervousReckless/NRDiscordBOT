import { Events } from "../Validation/EventNames";
import { promisify } from "util";
import { glob } from "glob";
import Ascii from "ascii-table";

const PG = promisify(glob);

export default async (client) => {
    const Table = new Ascii("Events Loaded");

    (await PG(`${process.cwd().replace(/\\/g, '/')}/Events/*.js`)).map(async (file) => {
        const event = require(file);

        if(!Events.includes(event.name) || !event.name) {
            const L = file.split("/");
            await Table.addRow(`${event.name || "MISSING"}`, `❌ Event name either invalid or missing: ${L[7] + `/` + L[8]}`);
            return;
        }

        if(event.once) {
            client.once(event.name, (...args) => event.execute(... args, client));
        } else {
            client.on(event.name, (...args) => event.execute(... args, client));
        };

        await Table.addRow(event.name, "✔️  SUCCESFULL")      
    });
   // console.log(Table.getRows)
    console.log(Table.toString());
}