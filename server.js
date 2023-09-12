const express = require('express');
const cors = require("cors")
var bodyParser = require('body-parser');
const { Database, config } = require('./src/config')
const routes = require('./src/routes/app.routes')

class Server extends Database {
  constructor(dbconnectionString) {
    super(dbconnectionString)
    this.app = express();
    this.setup()
  }

  async setup() {
    this.app.use(express.json());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(cors());
    this.app.use("/", routes);
    await this.connect(config.get('db.host'));
  }

  run(port) {
    this.server = this.app.listen(port, () => {
      console.log(`🚀 server running on port ${port}`);
    });
  }
}

module.exports = Server