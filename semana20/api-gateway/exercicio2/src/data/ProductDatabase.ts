import { BaseDataBase } from "./BaseDatabase";
import { Product } from "../model/product";


export class ProductDatabase extends BaseDataBase {
    protected tableName: string = "products";

      private toModel(dbModel?: any): Product | undefined {
        return (
          dbModel &&
          new Product(
            dbModel.id,
            dbModel.name,
            dbModel.photo,
            dbModel.price
          )
        );
      }

    public async createProduct(product: Product): Promise<void> {
        // console.log(product)
        await super.getConnection().raw(`
            INSERT INTO ${this.tableName} (id, name, photo, price)
            VALUES (
              '${product.getId()}',
              '${product.getName()}',
              '${product.getPhoto()}',
              '${product.getPrice()}'
            )`);
    }

    public async getProduct(id: string): Promise<Product> {
        let result = await super.getConnection().raw(`
            SELECT * FROM ${this.tableName} WHERE id = "${id}";`);
            result = result[0][0]
        return new Product(result.id, result.name, result.photo, result.price)
    }
}