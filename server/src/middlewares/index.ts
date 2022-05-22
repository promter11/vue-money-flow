import { NextFunction, Request, Response } from "express";

import TokenService from "../services/token";

const authenticate = (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;
    const accessToken = authHeader?.split(" ")[1];

    if (!authHeader || !accessToken) {
      return res.status(401).send("User is not authorized");
    }

    if (
      !TokenService.validate(accessToken, process.env.ACCESS_TOKEN_SECRET_KEY)
    ) {
      return res.status(401).send("User is not authorized");
    }

    next();
  } catch (error) {
    next(error);
  }
};

export { authenticate };
