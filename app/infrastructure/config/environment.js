'use strict';

require('dotenv').config();

module.exports = (() => {
    const environment = {
        uri:  process.env.MONGO_URI ||'mongo://'
    };
    return environment;
})();