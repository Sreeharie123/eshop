import { NextFunction, Request, Response } from "express";
import { userModel } from "../models/userShema";
import jwt from "jsonwebtoken";

export async function checkEmail(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const userEmail = await userModel.findOne({ email: req.body.email });
  if (userEmail) return res.status(500).json("Email is already exist");
  next();
}

export const verifyToken = (req: any, res: Response, next: NextFunction) => {
  const authHeader = req.headers.token as string;
  const jwtKey = process.env.JWT_KEY as string;
  if (authHeader) {
    jwt.verify(authHeader, jwtKey, (err, user: any) => {
      if (err) return res.status(500).json("Token is not valid");
      req.user = user;
      next();
    });
  }
};

export const verifyTokenAndAuthorization = (
  req: any,
  res: Response,
  next: NextFunction
) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(500).json("You are not authenticated");
    }
  });
};

export const verifyTokenAndAdmin = (
  req: any,
  res: Response,
  next: NextFunction
) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(500).json("you are not admin");
    }
  });
};
