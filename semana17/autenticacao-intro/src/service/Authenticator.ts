import * as jwt from "jsonwebtoken"

export class Authenticator {
    private static EXPIRE_IN = "1min"

    public generateToken(input:AuthenticationData):string {
        const token = jwt.sign(
            {
                id: input.id
            },
            process.env.JWT_KEY as string,
            {
                expiresIn: Authenticator.EXPIRE_IN
            }
        )
        return token
    }

    public getData(token:string): AuthenticationData {
        const payload = jwt.verify(token, process.env.JWT_KEY) as any
        const result = {
            id: payload.id
        }
        return result
    }
}

interface AuthenticationData {
    id: string;
}