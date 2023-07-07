import { NextFunction, Request, Response } from "express";
import {
  comparePassword,
  generateToken,
  hashPassword,
} from "../utils/authUtils";
import { db } from "../db";
import { User } from "../models/User";

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username, password, email }: User = req.body as User;

  const hashedPassword = hashPassword(password!);

  const newUserQuery = `INSERT INTO users (username, password, email, created_at) VALUES ($1, $2, $3, NOW()) RETURNING id, username, email, created_at`;
  const values = [username, hashedPassword, email];

  try {
    const { rows } = await db.query(newUserQuery, values);
    const user = rows[0];

    console.log(user);

    const token = generateToken(user.id!);

    res.status(200).send({ auth: true, token: token, user: user });
  } catch (err) {
    console.error(err);
    res.status(500).send("There was a problem registering the user.");
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {

  console.log("loggin in")

  const { email, password, username } = req.body;

  const findUserQuery = `SELECT * FROM users WHERE email = $1`;
  const values = [email];

  try {
    const { rows } = await db.query(findUserQuery, values);

    if (rows.length === 0) {
      return res.status(404).send("No user found.");
    }

    const isPasswordValid = comparePassword(password, rows[0].password);

    if (!isPasswordValid) {
      return res.status(401).send({ auth: false, token: true });
    }

    const token = generateToken(rows[0].id);

    res.status(200).json({ auth: true, token: token, user: rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error on the server.");
  }
};
