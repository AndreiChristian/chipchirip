import { NextFunction, Request, Response, Router } from "express";
import { body } from "express-validator/";

const router = Router();

router.get(
  "/users",
  [body("email").isEmail().withMessage("Please enter a valid email.")],
  (req: Request, res: Response, next: NextFunction) => {}
);
