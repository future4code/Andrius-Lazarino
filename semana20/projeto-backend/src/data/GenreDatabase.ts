import { BaseDataBase } from "./BaseDatabase";
import { User, UserType, numberToBoolean, booleanToString } from "../model/User";
import { Genre } from "../model/Genre";

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

  public async createGenre(genre: Genre): Promise<void> {
    await super.getConnection().raw(`
        INSERT INTO ${this.tableName} (id, name)
        VALUES (
          '${genre.getId()}',
          '${genre.getName()}'
        )`);
  }

//   public async getUsers(type: UserType): Promise<User[]> {
//     const result = await super.getConnection().raw(`
//        SELECT * FROM ${this.tableName} WHERE type = "${type}";
//     `)
//     return result[0].map(user => {
//       return new User(
//         user.id,
//         user.name,
//         user.email,
//         user.nickname,
//         user.password,
//         user.type,
//         user.description,
//         numberToBoolean(user.status)
//         // this.stringToBoolean(user.status)
//       )
//     })
//   }
  
}
