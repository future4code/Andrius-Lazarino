import { UserDatabase } from "../data/UserDatabase";
import { User, UserType } from "../model/User";
import { IdGenerator } from "../services/idGenerator";
import { HashGenerator } from "../services/hashGenerator";
import { TokenGenerator } from "../services/tokenGenerator";
import { NotFoundError } from "../errors/NotFoundError";
import { InvalidParameterError } from "../errors/InvalidParameterError";
import { GenericError } from "../errors/GenericError";

export class UserBusiness {
  constructor(
    private userDatabase: UserDatabase,
    private hashGenerator: HashGenerator,
    private tokenGenerator: TokenGenerator,
    private idGenerator: IdGenerator
  ) { }

  // public async signup(
  //   name: string,
  //   email: string,
  //   password: string,
  //   role: string
  // ) {
  //   if (!name || !email || !password || !role) {
  //     throw new InvalidParameterError("Missing input");
  //   }

  //   if (email.indexOf("@") === -1) {
  //     throw new InvalidParameterError("Invalid email");
  //   }

  //   if (password.length < 6) {
  //     throw new InvalidParameterError("Invalid password");
  //   }

  //   const id = this.idGenerator.generate();
  //   const cryptedPassword = await this.hashGenerator.hash(password);

  //   await this.userDatabase.createUser(
  //     new User(id, name, email, cryptedPassword, stringToUserRole(role))
  //   );

  //   const accessToken = this.tokenGenerator.generate({
  //     id,
  //     role,
  //   });
  //   return { accessToken };
  // }

  public async signupListener(
    name: string,
    email: string,
    nickname: string,
    password: string
  ) {
    if (!name || !email || !nickname || !password) {
      throw new InvalidParameterError("Missing input");
    }

    if (email.indexOf("@") === -1) {
      throw new InvalidParameterError("Invalid email");
    }

    if (password.length < 6) {
      throw new InvalidParameterError("Invalid password");
    }

    const id = this.idGenerator.generate();
    const cryptedPassword = await this.hashGenerator.hash(password);

    await this.userDatabase.createUser(
      new User(id, name, email, nickname, cryptedPassword, UserType.FREE)
    );

    const accessToken = this.tokenGenerator.generate({
      id
    });
    return { accessToken };
  }

  public async signupAdmin(
    name: string,
    email: string,
    nickname: string,
    password: string,
    authorization: string
  ) {

    if (this.tokenGenerator.verify(authorization).type !== UserType.ADMIN) {
      throw new GenericError("Você não é um usuário administrador")
    }

    if (!name || !email || !nickname || !password) {
      throw new InvalidParameterError("Missing input");
    }

    if (email.indexOf("@") === -1) {
      throw new InvalidParameterError("Invalid email");
    }

    if (password.length < 10) {
      throw new InvalidParameterError("Invalid password");
    }

    const id = this.idGenerator.generate();
    const cryptedPassword = await this.hashGenerator.hash(password);

    await this.userDatabase.createUser(
      new User(id, name, email, nickname, cryptedPassword, UserType.ADMIN)
    );

    const accessToken = this.tokenGenerator.generate({
      id,
      type: UserType.ADMIN
    });
    return { accessToken };
  }

  public async login(email: string, password: string) {
    if (!email || !password) {
      throw new InvalidParameterError("Missing input");
    }

    const user = await this.userDatabase.getUserByEmail(email);

    if (!user) {
      throw new NotFoundError("User not found");
    }

    const isPasswordCorrect = await this.hashGenerator.compareHash(
      password,
      user.getPassword()
    );

    if (!isPasswordCorrect) {
      throw new InvalidParameterError("Invalid password");
    }

    let type = UserType.FREE

    if (user.getType() === UserType.ADMIN) {
      type = UserType.ADMIN
    }

    const accessToken = this.tokenGenerator.generate({
      id: user.getId(),
      type
    });

    return { accessToken };
  }
}
