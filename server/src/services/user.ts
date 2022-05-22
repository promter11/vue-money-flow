import bcrypt from "bcrypt";

import UserModel from "../models/user";
import TokenService from "../services/token";

class UserService {
  async login(email: string, password: string) {
    const user = await UserModel.findOne({ email });

    if (!user) {
      throw new Error("User with this email address does not exist");
    }

    if (!(await bcrypt.compare(password, user.password))) {
      throw new Error("Incorrect password");
    }

    const tokens = TokenService.generate({ email });
    await TokenService.saveRefreshToken(email, tokens.refreshToken);

    return tokens;
  }

  async logout(refreshToken: string) {
    if (!refreshToken) {
      throw new Error("User is not authorized");
    }

    return await TokenService.removeRefreshToken(refreshToken);
  }

  async refresh(refreshToken: string) {
    if (!refreshToken) {
      throw new Error("User is not authorized");
    }

    const data = await TokenService.find(refreshToken);

    if (
      !(await TokenService.validate(
        data.refreshToken,
        process.env.REFRESH_TOKEN_SECRET_KEY
      ))
    ) {
      throw new Error("User is not authorized");
    }

    const tokens = TokenService.generate({ email: data.email });
    await TokenService.saveRefreshToken(data.email, tokens.refreshToken);

    return tokens;
  }

  async register(email: string, password: string) {
    if (await UserModel.findOne({ email })) {
      throw new Error("User with this email address already exists");
    }

    await UserModel.create({
      email,
      password: await bcrypt.hash(password ?? "", 3),
    });

    const tokens = TokenService.generate({ email });
    await TokenService.saveRefreshToken(email, tokens.refreshToken);

    return tokens;
  }
}

export default new UserService();
