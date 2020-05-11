import knex from "knex";

export class UserDatabase {
    private connection = knex({
        client: "mysql",
        connection: {
            host: process.env.DB_HOST,
            port: Number(process.env.DB_PORT || "3306"),
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
        },
    });

    private static TABLE_NAME:string = "userTableName"

    public async createUser(id:string, email:string, password:string): Promise<void> {
        await this.connection
            .insert({
                id,
                email,
                password
            })
            .into(UserDatabase.TABLE_NAME)
    }
}