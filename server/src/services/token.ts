import jwt from "jsonwebtoken";

import TokenModel from "../models/token";

class TokenService {
  async find(token: string) {
    return TokenModel.findOne({ token });
  }

  generate(payload: { email: string }) {
    const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET_KEY, {
      expiresIn: `${process.env.ACCESS_TOKEN_EXPIRES_IN}s`,
    });
    const refreshToken = jwt.sign(
      payload,
      process.env.REFRESH_TOKEN_SECRET_KEY,
      { expiresIn: `${process.env.REFRESH_TOKEN_EXPIRES_IN}s` }
    );
    return { accessToken, refreshToken };
  }

  verify(token: string, secretKey: string) {
    try {
      return jwt.verify(token, secretKey);
    } catch (error) {
      return null;
    }
  }

  async saveRefreshToken(email: string, refreshToken: string) {
    const data = await TokenModel.findOne({ email });

    if (data) {
      data.refreshToken = refreshToken;

      return data.save();
    }

    return await TokenModel.create({ email, refreshToken });
  }

  async removeRefreshToken(refreshToken: string) {
    return TokenModel.deleteOne({ refreshToken });
  }
}

export default new TokenService();
