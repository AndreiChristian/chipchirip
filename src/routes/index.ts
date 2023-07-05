import { Router } from "express";

import userRouter from "./userRoutes";
import messageRouter from "./messageRoutes";
import groupRouter from "./groupRoutes";
import groupMemberRouter from "./groupMemberRoutes";
import directConversationRouter from "./directConversationRoutes";

const router = Router();

router.use(userRouter);
router.use(messageRouter);
router.use(groupRouter);
router.use(groupMemberRouter);
router.use(directConversationRouter);

export default router;
