import { NextFunction, Request, Response, Router } from "express";
import { body } from "express-validator/";

import { getAllUsers, getOneUser } from "../controllers/userControllers";

const router = Router();

router.get("/users", getAllUsers);

router.post("/users");

router.get("/users/:userId", getOneUser);

router.delete("/users/:id");

router.patch("/users/:id");

export default router;
