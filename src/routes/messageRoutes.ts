import { Router } from "express";
import { postMessage } from "../controllers/messageControllers";

const router = Router();

router.post("/messages", postMessage);

export default router;
