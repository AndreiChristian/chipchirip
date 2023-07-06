import { Router } from "express";
import { login, register } from "../controllers/authControllers";

const router = Router();

router.post("/auth/register", register);

router.post("/auth/login", login);

router.get("/auth/me");

export default router;
