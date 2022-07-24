import { NextFunction, Request, Response } from "express";

import TokenService from "../services/token";

const authenticate = (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;
    const accessToken = authHeader?.split(" ")[1];

    if (!authHeader || !accessToken) {
      return res.status(401).send("User is not authorized");
    }

    const user = TokenService.verify(
      accessToken,
      process.env.ACCESS_TOKEN_SECRET_KEY
    );

    if (!user) {
      return res.status(401).send("User is not authorized");
    }

    req.user = user;

    next();
  } catch (error) {
    next(error);
  }
};

export { authenticate };
