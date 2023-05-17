"use strict";

const express = require("express");
const cors = require("cors");

const createServer = async (config) => {
  const server = express();
  server.use(express.json());
  server.use(cors());
  server.listen(config.port);

  // Register custom plugins
  await server.registerRoutes([
    require("../../interfaces/routes/auth"),
    require("../../interfaces/routes/hello"),
    require("../../interfaces/routes/private"),
  ]);

  //server.app.serviceLocator = require("../../infrastructure/config/service-locator");
  return server;
};

module.exports = createServer;
