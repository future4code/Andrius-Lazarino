

function contarNumerosNegativos(inputArray: number[][]): number {
    let quantidade: number = 0
    for (const i1 of inputArray) {
        for(const i2 of i1){
            i2<0 && quantidade++
        }
    }
    return quantidade
}
console.log(contarNumerosNegativos([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]))