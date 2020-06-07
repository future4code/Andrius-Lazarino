import express from "express";
import { GenreController } from "../controller/GenreController";

export const genreRouter = express.Router();

// userRouter.post("/signup", new UserController().signup);
genreRouter.post("/signup", new GenreController().signupGenre);