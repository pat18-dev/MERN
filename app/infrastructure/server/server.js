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
    require("./oauth"),
    require("../../interfaces/routes/hello"),
    require("../../interfaces/routes/private"),
  ]);

  server.app.serviceLocator = require("../../infrastructure/config/service-locator");
  return server;
};

module.exports = createServer;

// const routes = [
//     {
//       method: 'GET',
//       path: '/',
//       handler: (req, res) => res.send('Hello, world!'),
//     },
//     {
//       method: 'POST',
//       path: '/api/users',
//       handler: (req, res) => {
//         // Handle POST request to create a new user
//       },
//     },
//     // Add more routes here
//   ];

//   // Register the routes using the middleware function
//   app.use(registerRoutes(routes));
