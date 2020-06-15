let isEmail = true
let reason:undefined|string = undefined

export const handler = async (event: any) => {
    const email:string = event.email as string
    checkCharacter(event.email, "@")
    checkCharacter(event.email, ".")

    return isEmail?{isEmail}:{isEmail,reason}
}

const checkCharacter = (email: string, character: string)=>{
    if (email.indexOf(character) === -1) {
        isEmail = false
        reason = `Não possui "${character}"`
      }
}

const main = async () => {
    const result = await handler({})
    console.log(result)
}

main()
