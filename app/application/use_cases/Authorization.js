'use strict';

module.exports = {
  async getAccessToken(email, password, { userRepository, accessTokenManager }){
    const user = userRepository.getByEmail(email);

    if (!user || user.password !== password) {
      throw new Error('Bad credentials');
    }

    return accessTokenManager.generate({ uid: user.id });
  },

  verifyAccessToken(accessToken, { accessTokenManager }){
    const decoded = accessTokenManager.decode(accessToken);
    if (!decoded) {
      throw new Error('Invalid access token');
    }
    return { uid: decoded.uid };
  }
}