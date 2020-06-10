

export const handler = async (event: any) => {
    return `numero1 + numero2 = ${event.num1, event.num2}`
}

const main = async () => {
    const result = await handler({})
    console.log(result)
}

main()
