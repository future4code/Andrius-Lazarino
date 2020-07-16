// EXERCÍCIO A
console.log("Exercício A")
console.log(exerciseA("Testando a funcao"))

function exerciseA(frase: string): any {
    return {
        quantidade: frase.length - 1,
        primeiro: frase[0],
        ultimo: frase[frase.length - 1]
    }
}

// EXERCÍCIO B
console.log("Exercício B")
console.log(exerciseB("Testando a funcao"))

function exerciseB(frase: string): any {
    let array = []
    for (let i = 0; i < frase.length; i++) {
        array.push(frase[i])
    }
    return array
}