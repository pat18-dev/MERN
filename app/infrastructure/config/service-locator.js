"use strict";

const JwtAccessTokenManager = require("../security/JwtAccessTokenManager");

function buildBeans() {
  const beans = {
    accessTokenManager: new JwtAccessTokenManager(),
    userSerializer: new UserSerializer(),
  };
  // const UserRepositoryMongo = require('../repositories/MongoRepository');
  // beans.Respository = new MongoRepository()
  return beans;
}

module.exports = buildBeans();
