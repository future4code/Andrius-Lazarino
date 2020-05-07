### Exercício 1
a) Utilizando o ```raw``` obtemos uma resposta crua e direta do mysql.

b)
```TypeScript
const getActorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
   `)
    console.log(result[0][0])
    return result[0][0]
}
```

c)
```TypeScript
const getTotalGender = async (gender:string): Promise<any> => {
    const result = await connection.raw(`
        SELECT * FROM Actor WHERE gender = '${gender}'
    `)
    console.log(result[0])
    return result[0]
}
```

### Exercício 2
a)
```TypeScript
const updateSalary = async (salary:number, id:string): Promise<any> => {
    const result = await connection('Actor')
        .where('id','=',id)
        .update({
             'salary': salary
        })
}
```

b)
```TypeScript
const deleteActor = async (id:string): Promise<any> => {
    const result = await connection('Actor')
        .where('id','=',id)
        .del()
}
```

c)
```TypeScript
const averageGender = async (gender:string): Promise<any> => {
    const result = await connection('Actor')
        .where('gender','=',gender)
        .avg('salary as average')
    console.log(result[0].average)
}
```

### Exercício 3
a) Porque está pegando o valor do parâmetro passado pelo endpoint

b) Retorna em um json o ator com o id de pathparam

c) 
```TypeScript
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
```

### Exercício 4
a)
```TypeScript
app.post("/Actor", async (req: Request, res: Response) => {
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
```

b)
```TypeScript
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
```

### Exercício 5
```TypeScrept
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
```

### Exercício 6
```TypeScript
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
```

# Exercício 7
```TypeScript
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
```