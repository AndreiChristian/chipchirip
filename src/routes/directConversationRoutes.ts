import { Router } from "express";
import { getAllUserConversations, getOneConversation, postConversation } from "../controllers/directConversationControllers";

const router = Router();

router.post("/conversations", postConversation);

router.get("/conversations/user/:userId", getAllUserConversations);

router.get("/conversations/:conversationsId", getOneConversation);


export default router;
