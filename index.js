require("dotenv").config();
const startServer = require("./src/application/server");
const boostrapApplication = require("./src/db/mongod");

const app = startServer();
const PORT = 9091;

boostrapApplication(app, PORT);
