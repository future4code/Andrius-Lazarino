import { BaseDataBase } from "./BaseDatabase";
import { User, UserType, numberToBoolean, booleanToString } from "../model/User";

export class UserDatabase extends BaseDataBase {
  protected tableName: string = "SpotenuUsers";

  private toModel(dbModel?: any): User | undefined {
    // console.log(dbModel.status)
    // console.log(stringToBoolean(dbModel.status))
    return (
      dbModel &&
      new User(
        dbModel.id,
        dbModel.name,
        dbModel.email,
        dbModel.nickname,
        dbModel.password,
        dbModel.type,
        dbModel.description,
        numberToBoolean(dbModel.status)
      )
    );
  }

//   public async createUser(user: User): Promise<void> {
//     await super.getConnection().raw(`
//         INSERT INTO ${this.tableName} (id, name, email, nickname, description, status, password, type)
//         VALUES (
//           '${user.getId()}',
//           '${user.getName()}',
//           '${user.getEmail()}', 
//           '${user.getNickname()}',
//           '${user.getDescription()}', 
//           '${booleanToString(user.getStatus() as boolean)}', 
//           '${user.getPassword()}', 
//           '${user.getType()}'
//         )`);
//   }

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
