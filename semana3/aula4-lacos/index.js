// EXERCÍCIO 1
// A cada repetição está somando a variavel "sum" com a "i" a variavel "sum"
// resultado: 105

// EXERCÍCIO 2
// a. Acrescenta um elemento na array
// b. [10, 15, 25, 30]
// c. 3: [12, 15, 18, 21, 27, 30]
//    4: [12]

// // EXERCÍCIO 3
// // a.
// const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let maior = array[0]
// let menor = array[0]

// for (let elemento of array){
//     if (elemento > maior){
//         maior = elemento
//     }
//     if (elemento < menor){
//         menor = elemento
//     }
// }
// console.log("O maior número é ", maior, " e o menor é  ", menor)

// // b.
// const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let arrayNovo = []
// for (let elemento of array){
//     arrayNovo.push(elemento/10)
// }
// console.log(arrayNovo)

// // c.
// const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let arrayNovo = []
// for (let elemento of array){
//     if ((elemento%2)%2===0){
//         arrayNovo.push(elemento)
//     }
// }
// console.log(arrayNovo)

// // d.
// const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let arrayNovo = []
// for (let i = 0; i<array.length; i++){
//     arrayNovo.push("O elemento do índex "+ i + " é " + array[i])
//     console.log(arrayNovo[i])
// }

// DESAFIO 1
// 0
// 00
// 000
// 0000

// // DESAFIO 2

// const numero = Number(prompt("Insira um numero [player1]: "))
// let escolha
// let tentativas = 0
// console.log("Vamos jogar!")
// while (numero !== escolha){
//     tentativas++
//     escolha = Number(prompt("Adivinhe o número [player2]: "))
//     if (numero === escolha){
//         console.log("O numero chutado foi: ", escolha)
//         console.log("Acertou!!")
//         console.log("O número de tentativas foi: ", tentativas)
//     }
//     else if(escolha > numero){
//         console.log("O numero chutado foi: ", escolha)
//         console.log("Errrrrrrrou, é menor")
//     }
//     else{
//         console.log("O numero chutado foi: ", escolha)
//         console.log("Errrrrrrrou, é maior")
//     }
// }

// // DESAFIO 3

// let numero = 0
// while (numero === 0){
//     numero = Math.floor(Math.random() * 101)
// }
// let escolha
// let tentativas = 0
// console.log("Vamos jogar!")
// while (numero !== escolha){
//     tentativas++
//     escolha = Number(prompt("Adivinhe o número: "))
//     if (numero === escolha){
//         console.log("O numero chutado foi: ", escolha)
//         console.log("Acertou!!")
//         console.log("O número de tentativas foi: ", tentativas)
//     }
//     else if(escolha > numero){
//         console.log("O numero chutado foi: ", escolha)
//         console.log("Errrrrrrrou, é menor")
//     }
//     else{
//         console.log("O numero chutado foi: ", escolha)
//         console.log("Errrrrrrrou, é maior")
//     }
// }