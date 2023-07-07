import { NextFunction, Request, Response } from "express";
import { DirectConversation } from "../models/DirectConversations";
import { db } from "../db";

// router.post("/conversations");

export const postConversation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { user_1, user_2 } = req.body as DirectConversation;

  const queryText = `INSERT INTO direct_conversations (user1_id, user2_id)
    VALUES ($1, $2) RETURNING *`;

  const queryValues = [user_1, user_2];

  const { rows } = await db.query(queryText, queryValues);

  if (rows.length === 0) {
    res.status(401).json({ err: "Could not create new conversation" });
  }

  res.status(200).json(rows);

  try {
  } catch (err) {
    console.error(err);
    res.json(400).json({ err });
  }
};

// router.get("/conversations/:userId");
export const getAllUserConversations = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const queryText = `
    SELECT d.id,
    u1.username as user_1,
    u2.username as user_2,
    u1.id as user_1_id,
    u2.id as user_2_id
    FROM direct_conversations as d
    JOIN users as u1 ON d.user1_id = u1.id
    JOIN users as u2 ON d.user2_id = u2.id
    WHERE d.user1_id = $1 OR d.user2_id = $1`;

  const queryValues: any[] = [req.params.userId];

  try {
    const { rows } = await db.query(queryText, queryValues);

    if (rows.length === 0) {
      throw new Error("could not get conversations for the user");
    }

    res.status(200).json(rows);
  } catch (err) {
    res.status(401).json({ err: "Could not fetch conversations" });

    console.error(err);
  }
};

// router.get("/conversations/:conversationsId");

export const getOneConversation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { conversationsId } = req.params;

  const queryText = `SELECT * FROM messages WHERE conversation_id = $1 ORDER BY created_at DESC`;

  const queryValues: any[] = [conversationsId];

  try {
    const { rows } = await db.query(queryText, queryValues);

    if (rows.length === 0) {
      res.status(401).json({ err: "Could not fetch messages" });
    }

    res.status(200).json(rows);
  } catch (err) {
    console.error(err);
  }
};
