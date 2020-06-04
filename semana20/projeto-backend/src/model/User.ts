import { InvalidParameterError } from "../errors/InvalidParameterError";

export class User {
  constructor(
    private id: string,
    private name: string,
    private email: string,
    private nickname: string,
    private password: string,
    private type: UserType
  ) {}

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getEmail(): string {
    return this.email;
  }

  public getNickname(): string {
    return this.nickname;
  }

  public getPassword(): string {
    return this.password;
  }

  public getType(): UserType {
    return this.type;
  }
}

// export const stringToUserType= (input: string): UserType => {
//   switch (input) {
//     case "NORMAL":
//       return UserType.NORMAL;
//     case "ADMIN":
//       return UserType.ADMIN;
//     default:
//       throw new InvalidParameterError("Invalid user role");
//   }
// };

export enum UserType {
  BAND = "BAND",
  PAYING = "PAYING",
  FREE = "FREE",
  ADMIN = "ADMIN"
}
