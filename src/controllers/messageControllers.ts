import { NextFunction, Request, Response } from "express";
import { Message } from "../models/Message";
import { db } from "../db";

export const postMessage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const queryText = `INSERT INTO messages (
      sender_id,
      conversation_id,
      group_id,
      content
  )
  VALUES (
      $1,
      $2,
      $3,
      $4
  ) RETURNING *`;

  const { content, conversation_id, sender_id, group_id } = req.body as Message;

  console.table({ content, conversation_id, sender_id, group_id });

  const queryValues = [sender_id, conversation_id, group_id, content];

  try {
    const { rows } = await db.query(queryText, queryValues);

    if (rows.length === 0) {
      throw new Error("Could not post the message");
    }

    res.status(200).json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(400).json({ err });
  }
};
