// EXERCÍCIO A
console.log("Exercício A")
console.log(exerciseA(6))
console.log()
console.log("Exercício B")
console.log(exerciseB(0))

function exerciseA(num: number): number | null {
    let result: number|null = num
    if (num > 1) {
        for (let i = num-1; i>0; i--){
            result = result * i
        }
    }
    else{
         result = null
    }
    return result
}

function exerciseB(num: number): number | null {
    let result: number|null = num
    if (num > 1) {
        for (let i = num-1; i>0; i--){
            result = result * i
        }
    }
    else if (num === 1 || num === 0){
         result = 1
    }
    else {
        result = null
    }
    return result
}