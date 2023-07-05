import { Router } from "express";
import { body } from "express-validator/";

const router = Router();

router.get("/users");

router.post("/users")

router.get("users/:id");

router.delete("users/:id");

router.patch("users/:id");


