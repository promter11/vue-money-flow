import { Request, Response } from "express";

import UserService from "../services/user";

class AuthController {
  async me(req: Request, res: Response) {
    try {
      const data = await UserService.me(req.cookies.refreshToken);

      res.status(201).json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async login(req: Request, res: Response) {
    try {
      const data = await UserService.login(req.body.email, req.body.password);

      res.cookie("refreshToken", data.refreshToken, {
        maxAge: +process.env.REFRESH_TOKEN_EXPIRES_IN * 1000,
        httpOnly: true,
      });

      res.status(201).json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async logout(req: Request, res: Response) {
    try {
      await UserService.logout(req.cookies.refreshToken);

      res.clearCookie("refreshToken");

      res.send("Logout successful");
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async refresh(req: Request, res: Response) {
    try {
      const data = await UserService.refresh(req.cookies.refreshToken);

      res.cookie("refreshToken", data.refreshToken, {
        maxAge: +process.env.REFRESH_TOKEN_EXPIRES_IN * 1000,
        httpOnly: true,
      });

      res.status(201).json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async register(req: Request, res: Response) {
    try {
      const data = await UserService.register(
        req.body.email,
        req.body.password
      );

      res.cookie("refreshToken", data.refreshToken, {
        maxAge: +process.env.REFRESH_TOKEN_EXPIRES_IN * 1000,
        httpOnly: true,
      });

      res.status(201).json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new AuthController();
