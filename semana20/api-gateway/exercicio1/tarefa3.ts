const checkCharacter = (text: string, character: string) => {
    console.log(text)
    let quantidadeTraco: number = 0
    for (let i = 0; i < text.length; i++) {
        text[i]===character?quantidadeTraco++:false
    }
    if (quantidadeTraco !== 1) {
        throw new Error()
    }
}

export const handler = async (event: any) => {
    try {
        const cep = event.cep as string
        checkCharacter(cep, "-")
        if (cep.length < 8) {
            throw new Error()
        }
        return {
            statusCode: 200,
            body: JSON.stringify({
                boolean: true
            })
        }

    } catch (err) {
        return {
            statusCode: 400,
            body: JSON.stringify({
                message: err.message,
                boolean: false
            })
        }
    }
}

const main = async () => {
    const result = await handler({})
    console.log(result)
}

main()
