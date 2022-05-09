import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).send();
  }

  jwt.verify(
    authHeader.split(" ")[1],
    process.env.ACCESS_TOKEN_SECRET_KEY as string,
    (err) => {
      if (err) {
        return res.status(403).send();
      }

      next();
    }
  );
};

export { authenticateJWT };
