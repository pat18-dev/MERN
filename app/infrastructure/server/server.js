'use strict';

const express = require('express');

const createServer = async (config) => {
    const server = express();
    server.use(express.json());
    server.listen(config.port)

    // Register custom plugins
    await server.register([
        require('./oauth'),
        require('../../interfaces/routes/hello'),
        require('../../interfaces/routes/private'),
    ]);

    server.app.serviceLocator = require('../../infrastructure/config/service-locator');
    return server;
};

module.exports = createServer;