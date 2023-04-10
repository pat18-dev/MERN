export class Authorization {
  constructor(repository) {
    this.Repository = repository;
  }

  async getAccessToken(userId, password) {
    const user = this.Repository.getByUserId(userId);
    if (!user || user.password !== password) {
      throw new Error("Bad credentials");
    }
    return accessTokenManager.generate({ uid: user.userId });
  }

  verifyAccessToken(accessToken, { accessTokenManager }) {
    const decoded = accessTokenManager.decode(accessToken);
    if (!decoded) {
      throw new Error("Invalid access token");
    }
    return { uid: decoded.uid };
  }
}
