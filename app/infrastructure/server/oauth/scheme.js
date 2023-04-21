"use strict";

const AuthorizationController = require("../../../interfaces/controllers/Authorization");

module.exports = () => {
  return {
    authenticate: AuthorizationController.verifyAccessToken,
  };
};
