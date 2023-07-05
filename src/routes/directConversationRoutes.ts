import { Router } from "express";

const router = Router();

router.post("/conversations");

router.get("/conversations/:conversationsId");

router.get("/conversations/user/:conversationsId");

export default router;
