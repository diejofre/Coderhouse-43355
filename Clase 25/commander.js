import { Command } from "commander";

const program = new Command();

program
.option("-d, --debug", "output extra debugging", false)
.option("-port <port>", "specify port", 8080)
.option("--mode <mode>", "specify mode", "development")
.requiredOption("-u, --username <username>", "specify username", "admin")
.option("-l, --letters <letters...>", "specify letters")

program.parse()

console.log("Options: ", program.opts().port)
console.log("Remaining arguments: ", program.args)
