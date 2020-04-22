const array: number[] = [1,3,9,12,39,69,99]

console.log(lidarComDados(array))

type novosDados = {
    quantidade: number,
    impares: number,
    soma: number
}
function lidarComDados(array: number[]): novosDados {
    // const imparesTotal: number= 
    let soma:number = 0
    let impares:number = 0
    for (const pos of array){
        soma = soma + pos;
        (pos%2)!==0? impares++:false
    }
    return {
        quantidade: array.length,
        impares:impares,
        soma: soma
    }
}