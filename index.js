'use strict';

const bootstrap = require('./app/infrastructure/config/bootstrap');
const createServer = require('./app/infrastructure/server/server');

// Start the server
const start = async () => {

    try {
        const config = await bootstrap.init();

        const server = await createServer(config);

        console.log('Server running');
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

start();
