import { Request, Response } from "express";

import UserService from "../services/user";

const login = async (req: Request, res: Response) => {
  try {
    const data = await UserService.login(req.body.email, req.body.password);

    res.cookie("refreshToken", data.refreshToken, {
      maxAge: +process.env.REFRESH_TOKEN_EXPIRES_IN * 1000,
      httpOnly: true,
    });

    return res.status(201).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

const logout = async (req: Request, res: Response) => {
  try {
    await UserService.logout(req.cookies.refreshToken);

    res.clearCookie("refreshToken");

    return res.send("Logout successful");
  } catch (error) {
    res.status(500).json(error);
  }
};

const refresh = async (req: Request, res: Response) => {
  try {
    const data = await UserService.refresh(req.cookies.refreshToken);

    res.cookie("refreshToken", data.refreshToken, {
      maxAge: +process.env.REFRESH_TOKEN_EXPIRES_IN * 1000,
      httpOnly: true,
    });

    return res.status(201).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

const register = async (req: Request, res: Response) => {
  try {
    const data = await UserService.register(req.body.email, req.body.password);

    res.cookie("refreshToken", data.refreshToken, {
      maxAge: +process.env.REFRESH_TOKEN_EXPIRES_IN * 1000,
      httpOnly: true,
    });

    return res.status(201).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

export { login, logout, refresh, register };
