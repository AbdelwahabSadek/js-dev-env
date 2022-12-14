
// eslint-disable-next-line import/named
import { generate, extend } from "json-schema-faker";
import { schema } from "./mockDataSchema";
import fs from "fs";
import chalk from "chalk";

 /* eslint-disable no-console */

extend("faker", () => require("faker"));
const json = JSON.stringify(generate(schema));

fs.writeFileSync("./src/api/db.json", json, function (err){
  if(err){
    return console.log(chalk.red(err));
  } else{
    console.log(chalk.green("Mock data generated"))
  }
});
