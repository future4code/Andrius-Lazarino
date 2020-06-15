import express from "express";
import { FileController } from "../controller/FileController";

export const fileRouter = express.Router();

fileRouter.put("/file/upload", new FileController().fileUpload);
