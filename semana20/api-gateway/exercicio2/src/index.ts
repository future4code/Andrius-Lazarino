import express from "express";
import {ProductRouter} from "./router/ProductRouter"

const app = express();

app.use(express.json());

app.use("/", ProductRouter)

export default app;
