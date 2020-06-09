
// EXERCÍCIO A
console.log("Exercício A")
console.log(exerciseA([3,6,9,12,19,23]))

function exerciseA(array:number[]):exerciseAType{
    let soma = 0;
    let multiplicacao = array[0];

    for (const number of array){
        soma += number
    }

    for (const number of array){
        multiplicacao *= number
    }

    return {
        soma: soma,
        quantidade: array.length,
        multiplicacao: multiplicacao
    }
}

type exerciseAType = {
    soma:number,
    quantidade: number,
    multiplicacao: number
}


// EXERCÍCIO B
console.log("Exercício B")
console.log(exerciseB([3,6,9,12,19,23]))

function exerciseB(array:number[]):exerciseBType{
    let maior = array[0];
    let menor = array[0];

    for (const number of array){
        number > maior ? maior = number : false
    }

    for (const number of array){
        number < menor ? menor = number : false
    }

    return {
        maior: maior,
        menor: menor
    }
}

type exerciseBType = {
    maior:number,
    menor: number
}