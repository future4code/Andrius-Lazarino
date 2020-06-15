

export const handler = async () => {
    return "Olá mundo, sou uma mensagem da AWS"
}

const main = async () => {
    const result = await handler()
    console.log(result)
}

main()
