import { Router } from "express";

const router = Router();

// Groups:

// POST /groups: Create a new group
// GET /groups/:id: Get a group's details along with its members and messages
// POST /groups/:id/members: Add a new member to a group
// DELETE /groups/:id/members/:userId: Remove a member from a group

export default router
