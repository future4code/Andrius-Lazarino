import knex from "knex";
import dotenv from "dotenv";
import express, {Request, Response} from "express";
import { AddressInfo } from "net";
import moment from 'moment';

dotenv.config()

const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT || "3306"),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    },
});

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
})

const checkFields = (fieldVar: string, res: Response): void=>{
    if (
        fieldVar === "" ||
        fieldVar === " " ||
        fieldVar === undefined ||
        fieldVar === null
    ){
        res.status(400).send({
            message: "Params inválido"
        })
    }
}

const createUser = async (id:string, name:string, nickname:string, email:string, res: Response): Promise<any> => {
    console.log(`${id} ${name} ${nickname} ${email}`)
    checkFields(name, res)
    checkFields(nickname, res)
    checkFields(email, res)

    const result = await connection.raw(`
    INSERT INTO Users(id, name, nickname, email) VALUE ("${id}","${name}", "${nickname}", "${email}");
    `)
}

app.put("/user", async (req: Request, res: Response) => {
    try{
        createUser(
            Date.now().toString(),
            req.body.name as string,
            req.body.nickname as string,
            req.body.email as string,
            res
        )
        res.status(200).send()
    }
    catch (err){
        res.status(400).send({
            message: err.message
        })
    }
})

const getUserById = async (id:string, res: Response): Promise<any> => {
    checkFields(id, res)
    const result = await connection.raw(`
        SELECT * FROM Users WHERE id = "${id}";
    `)
    return result[0][0]
}

app.get("/user/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const user = await getUserById(id, res)
        user === undefined ? res.status(400).send({
            message: "Usuário não encontrado"
            }) : false
        res.status(200).send(user)
    }
    catch (err){
        res.status(400).send({
            message: err.message
        })
    }
})

const updateUser = async (id:string, name:string, nickname:string, res: Response): Promise<any> => {
    checkFields(id, res)
    checkFields(name, res)
    checkFields(nickname, res)
    const result = await connection.raw(`
        UPDATE Users SET name = "${name}", nickname = "${nickname}" WHERE id = "${id}";
    `)
}

app.post("/user/edit", async (req: Request, res: Response) =>{
    try {
        const id = req.body.id
        const name = req.body.name
        const nickname = req.body.nickname
        updateUser(id, name, nickname, res)
        res.status(200).send()
    }
    catch (err) {
        res.status(400).send({
            message: err.message
        })
    }
})

const createTask = async (
    id:string,
    title:string,
    description:string,
    limitDate:string,
    creatorUserId:string,
    res:Response)=>{
    // console.log(`${id}, ${title}, ${description}, ${limitDate}, ${creatorUserId}`)
    checkFields(id, res)
    checkFields(title, res)
    checkFields(description, res)
    checkFields(limitDate, res)
    checkFields(creatorUserId, res)
    const result = await connection.raw(`
        INSERT INTO Tasks(id ,title ,description , limit_date, creator_user_id)
        VALUE ("${id}", "${title}", "${description}", "${limitDate}", "${creatorUserId}");
    `)
}


app.put("/task", async (req: Request, res: Response) => {
    try{
        const id:string = Date.now().toString()
        const title:string = req.body.title
        const description:string = req.body.description
        const limitDate:string =  moment(req.body.limitDate,"DD/MM/YYYY").format("YYYY/MM/DD").toString()
        const creatorUserId = req.body.creatorUserId
        createTask(id, title, description, limitDate, creatorUserId, res)
        res.status(200).send()
    }
    catch (err) {
        res.status(400).send({
            message: err.message
        })
    }
})

// type Task = {
//     taskId:string,
//     title:string,
//     description:string,
//     limitDate:string,
//     status:number
//     creatorUserId:string,
//     creatorUserNickname:string
// }

const getTask = async(id:string, res:Response):Promise<any> => {
    checkFields(id, res)
    const result = await connection.raw(`
        SELECT t.id,
            t.title,
            t.description,
            t.limit_date,
            t.status,
            u.id as id_user,
            u.nickname
        FROM Tasks t
        JOIN Users u
        ON t.creator_user_id = u.id
        AND t.id = "${id}";
    `)

    // console.log(result[0].length)
    result[0].length === 0 ? res.status(400).send({message: "Nenhuma tarefa encontrada"}): false
    const resultConvert = {
        taskId: result[0][0].id,
        title: result[0][0].title,
        description: result[0][0].description,
        limitDate: moment(result[0][0].limit_date).format("DD/MM/YYYY"),// CONVERTER COM MOMENT
        status: result[0][0].status,
        creatorUserId: result[0][0].id_user,
        creatorUserNickname: result[0][0].nickname
    }
    // console.log(result[0][0])
    return resultConvert
}

app.get("/task/:id", async(req:Request,res:Response)=>{
    try{
        const id:string = req.params.id
        const task = await getTask(id, res)
        res.status(200).send(task)
    }
    catch (err) {
        res.status(400).send({
            message: err.message
        })
    }
})