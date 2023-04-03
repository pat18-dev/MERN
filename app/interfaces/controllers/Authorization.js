'use strict';

const Errors = require('./errors');
const Authorization = require('../../application/use_cases/Authorization');

module.exports = {

  async getAccessToken(request) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const grantType = request.payload['grant_type'];
    const email = request.payload['username'];
    const password = request.payload['password'];

    if (!grantType || grantType !== 'password') {
      return Errors.badRequest('Invalid authentication strategy');
    }

    // Treatment
    try {
      const accessToken = await Authorization.getAccessToken(email, password, serviceLocator);

      // Output
      return accessToken;
    } catch (err) {
      return Errors.unauthorized('Bad credentials');
    }
  },

  verifyAccessToken(request, h) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const authorizationHeader = request.headers.authorization;
    if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
      throw Errors.badRequest('Missing or wrong Authorization request header', 'oauth');
    }
    const accessToken = authorizationHeader.replace(/Bearer/gi, '').replace(/ /g, '');

    // Treatment
    try {
      const { uid } = Authorization.verifyAccessToken(accessToken, serviceLocator);

      // Output
      return h.authenticated({
        credentials: { uid },
        artifacts: { accessToken: accessToken }
      });
    } catch (err) {
      return Errors.unauthorized('Bad credentials');
    }
  },

};