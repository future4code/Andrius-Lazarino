

console.log(exerciseB([8, 3, 1]))

function exerciseB(array: number[]): number[] {
    let maior = array[0];
    let menor = array[0];
    let result = []

    for (const number of array) {
        number > maior ? maior = number : false
    }

    for (const number of array) {
        number < menor ? menor = number : false
    }

    for (let i = menor; i <= maior; i++) {
        result.push(i)
    }

    return result
}

