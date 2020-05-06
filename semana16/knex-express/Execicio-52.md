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