const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const ErrorHandler = require("../common/error-handler");
const apiRouter = require("./routes");

const startServer = () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(morgan("combined"));

  app.use("/api/v1", apiRouter(express.Router));

  app.get("/", (_, res) => {
    res.status(200).json({
      data: {
        message: "hi there! kindly use the required base url",
      },
    });
  });

  app.use(ErrorHandler);

  return app;
};

module.exports = startServer;
