const convict = require("convict");
require("dotenv").config();

//application  environmental
const config = convict({
  env: {
    doc: "Node Environment",
    format: ["production", "development"],
    default: process.env.NODE_ENV,
    env: "NODE_ENV",
  },
  port: {
    doc: "The application port.",
    format: Number,
    default: process.env.PORT,
    env: "PORT",
  },
  db: {
    host: {
      doc: "Database Connection",
      format: String,
      default: process.env.DATABASE_CONNECTION,
      env: "DATABASE_CONNECTION",
    },
  },
});

config.validate({ allowed: "strict" });

module.exports = config;