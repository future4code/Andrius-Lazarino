// EXERCÍCIO A
console.log("Exercício A")
console.log(exerciseA("escola", "Escola"))

function exerciseA(frase1: string, frase2: string): any {
    return frase1===frase2
}

// EXERCÍCIO B
console.log("Exercício B")
console.log(exerciseB("escola", "Escola"))

function exerciseB(frase1: string, frase2: string): any {
    return frase1.toUpperCase===frase2.toUpperCase
}