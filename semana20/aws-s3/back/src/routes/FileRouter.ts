import express from "express";
import { UserController } from "../controller/FileController";

export const fileRouter = express.Router();

fileRouter.post("/file/upload", new UserController().signup);

// userRouter.post("/login", new UserController().login);

// userRouter.post("/add", new UserController().startNewFriendship);

// userRouter.delete("/delete", new UserController().deleteFriendship);