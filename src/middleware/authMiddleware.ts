import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.headers["x-access-token"]) {
    res.status(403).json({ auth: false, message: "No token provided" });
  }

  let token: string;

  if (Array.isArray(req.headers["x-access-token"])) {
    token = req.headers["x-access-token"][0];
  } else {
    token = req.headers["x-access-token"]!;
  }

  verify(token, process.env.JWT_KEY!, (err, decoded) => {
    if (err) {
      res
        .status(500)
        .json({ auth: false, message: "Failed to authenticate the user" });
    }

    next();
  });
};
