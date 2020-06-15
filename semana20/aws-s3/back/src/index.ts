import dotenv from "dotenv";
import express from "express";
import { fileRouter } from "./routes/FileRouter";
import cors from "cors"
import fileUpload from "express-fileupload";

dotenv.config();

const app = express();

app.use(cors())

app.use(express.json());

app.use(fileUpload())

app.use("/", fileRouter);

export default app