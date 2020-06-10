import { BaseDataBase } from "./BaseDatabase";


export class GenreDatabase extends BaseDataBase {
  protected tableName: string = "SpotenuGenre";

  private toModel(dbModel?: any): Genre | undefined {
    return (
      dbModel &&
      new Genre(
        dbModel.id,
        dbModel.name
      )
    );
  }

  public async createProduct(genre: Genre): Promise<void> {
    // await super.getConnection().raw(`
    //     INSERT INTO ${this.tableName} (id, name)
    //     VALUES (
    //       '${genre.getId()}',
    //       '${genre.getName()}'
    //     )`);
  }
}