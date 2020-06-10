import { ProductDatabase } from "../data/ProductDatabase";
import { IdGenerator } from "../services/idGenerator";
import { Product } from "../model/product";

export class ProductBusiness {
  constructor(
    private productDatabase: ProductDatabase,
    private idGenerator: IdGenerator
  ) { }

  public async signupProduct(
    name: string,
    photo: string,
    price: number
  ) {

    const id = this.idGenerator.generate();

    await this.productDatabase.createProduct(
      new Product(id, name, photo, price)
    );
  }
  public async getProduct(id: string) {

    const result = await this.productDatabase.getProduct(id)
    return result
  }
}