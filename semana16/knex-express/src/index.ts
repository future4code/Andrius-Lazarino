import knex from "knex";
import dotenv from "dotenv";
import express, {Request, Response} from "express";
import { AddressInfo } from "net";

dotenv.config();

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

const getActorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
         SELECT * FROM Actor WHERE id = '${id}'
  `)
    console.log(result[0][0])
    return result[0][0]
}
// getActorById("001")

const getTotalGender = async (gender:string): Promise<any> => {
    const result = await connection.raw(`
        SELECT * FROM Actor WHERE gender = '${gender}'
    `)
    console.log(result[0])
    return result[0]
}
// getTotalGender("male")

const updateSalary = async (salary:number, id:string): Promise<any> => {
    const result = await connection('Actor')
        .where('id','=',id)
        .update({
            'salary': salary
        })
}
//updateSalary(333,'004')

const deleteActor = async (id:string): Promise<any> => {
    const result = await connection('Actor')
        .where('id','=',id)
        .del()
}
// deleteActor('001')

const averageGender = async (gender:string): Promise<any> => {
    const result = await connection('Actor')
        .where('gender','=',gender)
        .avg('salary as average')
    console.log(result[0].average)
}
// averageGender('female')


const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});

app.get("/actor/:id", async (req: Request, res: Response) => {
    try {

        const id = req.params.id;
        const actor = await getActorById(id);

        res.status(200).send(actor)
    } catch (err) {
        res.status(400).send({
            message: err.message,
        });
    }
});

app.get("/actor", async (req: Request, res: Response) => {
    try {
        const gender = req.query.gender
        const result = await connection('Actor')
            .where('gender', '=', gender as string)
            .count()

        console.log(result[0])
        res.status(200).send(result[0])
    }
    catch (err) {
        res.status(400).send({
            message: err.message
        })
    }
})

const createActor = async (id:string,name:string,salary:number,date:Date,gender:string): Promise<any> => {
    console.log("Entro aq")
    console.log(date)

    const result = await connection('Actor')
        .insert({
            id: id,
            name: name,
            salary: salary,
            birth_date: date,
            gender: gender
        })

}
app.put("/actor", async (req: Request, res: Response) => {
    try {
        createActor(
            req.body.id,
            req.body.name,
            req.body.salary,
            new Date(req.body.dateOfBirth),
            req.body.gender
        )
        res.status(200).send();
    }
    catch (err) {
        res.status(400).send({
            message: err.message
        })
    }
})

app.post("/actor", async (req: Request, res: Response) => {
    try {
        await updateSalary(req.body.salary as number, req.body.id as string)
        res.status(200).send()
    }
    catch (err) {
        res.status(400).send({
            message: err.message
        })
    }
})

app.delete("/actor/:id", async (req: Request, res: Response) => {
    try {
        await deleteActor(req.params.id as string)
        res.status(200).send()
    }
    catch (err) {
        res.status(400).send({
            message: err.message
        })
    }
})

const createMovie =
    async (
        id:string,
        evaluation:number,
        name:string,
        playing_limit_date:Date,
        rating:number,
        release_date:Date,
        synopsis:string
        ): Promise<any> =>{
    const result = await connection("movies")
        .insert({
            id,
            evaluation,
            name,
            playing_limit_date,
            rating,
            release_date,
            synopsis
        })
    }

app.post("/movie", async (req: Request, res: Response) => {
    try{
        await createMovie(
            req.body.id,
            req.body.evaluation,
            req.body.name,
            req.body.playing_limit_date,
            req.body.rating,
            req.body.release_date,
            req.body.synopsis
        )
        res.status(200).send()
    }
    catch (err) {
        res.status(400).send({
            message: err.message
        })
    }
})

app.get("/movie/all", async (req: Request, res: Response) => {
    try{
        const result = await connection("movies")
            .limit(15)
        res.status(200).send(result)
    }
    catch (err) {
        res.status(400).send({
            message: err.message
        })
    }
})

app.get("/movie/search", async (req: Request, res: Response) => {
    try{
        const name = req.query.name
        console.log(name)
        const result = await connection("movies")
            .where('name','LIKE',`%${name}%`)
            .or
            .where('synopsis', 'LIKE', `%${name}%`)
        console.log("ueh")
        console.log(result)
        res.status(200).send(result)
    }
    catch (err) {
        res.status(400).send({
            message: err.message
        })
    }
})