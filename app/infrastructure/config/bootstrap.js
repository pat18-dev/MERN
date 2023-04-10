"use strict";

const constants = require("./constants");
const environment = require("./environment");

module.exports = {
  async init() {
    const config = {
      uri: environment.uri,
      port: constants.PORT,
    };

    return config;
  },
};
