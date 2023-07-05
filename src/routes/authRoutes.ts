import { Router } from "express";

const router = Router();

router.post("/auth/register");

router.post("/auth/login");

router.get("/auth/me");
