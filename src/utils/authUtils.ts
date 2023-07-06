import { sign } from "jsonwebtoken";
import { compareSync, hashSync } from "bcryptjs";

export const generateToken = (userId: number) => {
  return sign({ id: userId }, process.env.JWT_KEY!, {
    expiresIn: 86400,
  });
};

export const hashPassword = (password: string) => {
  return hashSync(password, 10);
};

export const comparePassword = (
  passwordInput: string,
  hashedPassword: string
) => {
  return compareSync(passwordInput, hashedPassword);
};
