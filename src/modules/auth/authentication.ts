import jwt, { Secret } from "jsonwebtoken";

import { NextFunction, Request, Response } from "express";

// Authentication Users
const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(
      token,
      process.env.JWT_SECRET as Secret,
      (err: any, user: any) => {
        if (err) {
          return res.send(403);
        }
        req.user = user;
        next();
      }
    );
  } else {
    res.sendStatus(401);
  }
};

const authorizeAdmin = (req: Request, res: Response, next: NextFunction) => {
  if (req.user.role !== "admin") {
    return res
      .status(403)
      .json({ success: false, message: "Access forbidden: Admins only" });
  }
  next();
};

const authorizeCustomer = (req: Request, res: Response, next: NextFunction) => {
  if (req.user.role !== "customer") {
    return res
      .status(403)
      .json({ success: false, message: "Access forbidden: Customer only" });
  }
  next();
};
export const AuthService = {
  authenticateJWT,
  authorizeAdmin,
  authorizeCustomer,
};
