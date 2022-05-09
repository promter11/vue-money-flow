import { Request, Response } from "express";
import jwt from "jsonwebtoken";

import UserModel from "../models/user";

const refreshTokens = new Set();

const login = async (req: Request, res: Response) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email });

    if (!user) {
      return res.status(404).send("User does not exist");
    }

    if (req.body.password !== user.password) {
      return res.status(422).send("Incorrect password");
    }

    const accessToken = jwt.sign(
      { iat: Date.now(), email: user.email },
      process.env.ACCESS_TOKEN_SECRET_KEY as string
    );
    const refreshToken = jwt.sign(
      { iat: Date.now(), email: user.email },
      process.env.ACCESS_TOKEN_SECRET_KEY as string,
      { expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN }
    );

    refreshTokens.add(refreshToken);

    res.status(201).json({ accessToken, refreshToken });
  } catch (error) {
    res.status(500).json(error);
  }
};

const logout = async (req: Request, res: Response) => {
  refreshTokens.delete(req.body.token);

  res.send("Logout successful");
};

const token = (req: Request, res: Response) => {
  try {
    const { token }: { token: string } = req.body;

    if (!token) {
      return res.status(401).send();
    }

    if (!refreshTokens.has(token)) {
      return res.status(403).send();
    }

    jwt.verify(
      token,
      process.env.REFRESH_TOKEN_SECRET_KEY as string,
      (err, user: any) => {
        if (err) {
          return res.status(403).send();
        }

        res.status(201).json({
          accessToken: jwt.sign(
            { iat: Date.now(), email: user.email },
            process.env.ACCESS_TOKEN_SECRET_KEY as string,
            { expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN }
          ),
        });
      }
    );
  } catch (error) {
    res.status(500).json(error);
  }
};

const register = async (req: Request, res: Response) => {
  try {
    const user = new UserModel(req.body);

    await user.save();

    res.status(201).json({
      accessToken: jwt.sign(
        { iat: Date.now(), email: user.email },
        process.env.ACCESS_TOKEN_SECRET_KEY as string,
        { expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN }
      ),
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export { login, logout, token, register };
