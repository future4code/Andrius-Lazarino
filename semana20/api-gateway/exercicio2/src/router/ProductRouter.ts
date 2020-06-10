import express from "express";
import { ProductController } from "../controller/ProductController";

export const ProductRouter = express.Router();

ProductRouter.post("/signup", new ProductController().signupProduct);
ProductRouter.get("/product", new ProductController().getProduct)