import express from "express";
import { UserController } from "../controller/UserController";

export const userRouter = express.Router();

// userRouter.post("/signup", new UserController().signup);
userRouter.post("/signup/listener", new UserController().signupListener);
userRouter.post("/signup/admin", new UserController().signupAdmin)
userRouter.post("/signup/band", new UserController().signupBand)
userRouter.post("/login", new UserController().login);
