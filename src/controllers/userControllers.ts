import { NextFunction, Request, Response } from "express";
import { db } from "../db";

export const getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {

  try {
    const { rows } = await db.query("SELECT id, username FROM users ", []);

    if (rows.length === 0) {
      throw new Error("Error finding the user with the respective id");
    }

    res.status(200).json(rows);
  } catch (err) {
    console.error(err);
    res.status(400).json({ err });
  }
};

export const getOneUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { userId } = req.params;
  try {
    const { rows } = await db.query(
      "SELECT id, username FROM users WHERE id = $1",
      [userId]
    );

    if (rows.length === 0) {
      throw new Error("Error finding the user with the respective id");
    }

    res.status(200).json(rows);
  } catch (err) {
    console.error(err);
    res.status(400).json({ err });
  }
};
