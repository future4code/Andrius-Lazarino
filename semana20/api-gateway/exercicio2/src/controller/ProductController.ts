import { Request, Response } from "express";
import { ProductBusiness } from "../business/ProductBusiness";
import { IdGenerator } from "../services/idGenerator";
import { ProductDatabase } from "../data/ProductDatabase";
export class ProductController {
  private static productBusiness = new ProductBusiness(
    new ProductDatabase(),
    new IdGenerator()
  );

  async signupProduct(req: Request, res: Response) {
    try {
      await ProductController.productBusiness.signupProduct(
          req.body.name,
          req.body.photo,
          req.body.price
      )
      res.status(200).send({message: `Produto [${req.body.name}] criado com sucesso!`});
    } catch (err) {
      res.status(err.errorCode || 400).send({ message: err.message });
    }
  }

  async getProduct(req: Request, res: Response) {
      try{
          const result = await ProductController.productBusiness.getProduct(req.query.id as string)

          res.status(200).send(result)
      } catch(err) {
          res.status(err.errorCode || 400).send({message: err.message})
      }
  }
}
