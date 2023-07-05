import { NextFunction, Request, Response } from "express";

export const corsMiddleware = (req: Request, res: Response, next: NextFunction) => {
  res.setHeader("Access-Controll-Allow-Origin", "*");
  res.setHeader(
    "Access-Controll-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Controll-Allow-Headers", "Content-Type, Authorization");

  next();
};
