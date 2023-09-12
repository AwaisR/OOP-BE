const Server = require("./server");
const { config } = require("./src/config");

const server = new Server(config.get("db.host"));
server.run(config.get("port"));