import express from "express";
import { GenreController } from "../controller/GenreController";

export const genreRouter = express.Router();

genreRouter.post("/signup", new GenreController().signupGenre);