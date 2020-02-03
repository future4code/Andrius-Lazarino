// EXERCÍCIO 1

// a. Não tera nenhum resultado porque só executa o primeiro for uma vez enquanto o "i" vale 0

// b. [0,1,0,1,2,3]

// c. [0,1,0,1,2,3,0,1,2,3,4,5]

// EXERCÍCIO 2

// a. 0; 2; unidefined

// b. Si funcionaria da mesma forma porque a comparação vai ser a mesma e será acessado pelo endereço

// EXERCÍCIO 3
// soma e multiplica todos os valores da array, somarEMultiplicar()

// // EXERCÍCIO 4

// // a.
// const idadeCachorro = Number(prompt("Digite a idade do cachorro: "))
// function calculaIdadeCachorro(idadeCachorro){
//     return idadeCachorro * 7
// }
// console.log("Anos humanos do cachorro: " + calculaIdadeCachorro(idadeCachorro) + " anos")

// // b.
// function dadosCompletos(nome,idade,endereco,estuda){
//     let estudante = "Não sou"
//     if (estuda){
//         estudante = "Sou"
//     }
//     return "Eu sou "+nome+", tenho "+idade+" anos, moro em "+endereco+" e "+estudante+" estudante."
// }
// const nome = prompt("Digite o nome: ")
// const idade = Number(prompt("Digite a idade: "))
// const endereco = prompt("Digite o endereco")
// const estudante = Number(prompt("Digite 1 para estudante e 0 para não estudante"))
// console.log(dadosCompletos(nome,idade,endereco,estudante))

// // EXERCÍCIO 5

// function retornaSerculo(ano) {
//     let seculo
//     if (Number(ano) < 100) {
//         seculo = 1
//     }
//     else if (Number(ano) < 1000) {
//         seculo = (Number(ano[0]) + 1)
//     }
//     else if (((Number(ano) < 2000) && (ano[2]==="0" && ano[3]==="0")) || Number(ano) === 2000){
//         seculo = Number(ano[0]+ano[1])
//     }
//     else if ((ano[0] === "1")) {
//         seculo = (Number(ano[0] + ano[1]) + 1)
//     }
//     else {
//         seculo = Number(ano[0] + "1")
//     }
//     switch (seculo) {
//         case 1:
//             return "I"
//         case 2:
//             return "II"
//         case 3:
//             return "III"
//         case 4:
//             return "IV"
//         case 5:
//             return "V"
//         case 6:
//             return "VI"
//         case 7:
//             return "VII"
//         case 8:
//             return "VIII"
//         case 9:
//             return "IX"
//         case 10:
//             return "X"
//         case 11:
//             return "XI"
//         case 12:
//             return "XII"
//         case 13:
//             return "XIII"
//         case 14:
//             return "XIV"
//         case 15:
//             return "XV"
//         case 16:
//             return "XVI"
//         case 17:
//             return "XVII"
//         case 18:
//             return "XVIII"
//         case 19:
//             return "XIX"
//         case 20:
//             return "XX"
//         case 21:
//             return "XXI"
//     }
// }
// const ano = prompt("Entre com o ano: ")
// console.log("O ano " + ano + " pertence ao século " + retornaSerculo(ano))


// // EXERCÍCIO 6

// // a.
// const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

// function quantidadeElementos(array){
//     return array.length
// }

// console.log("Quantidade de elementos: " + quantidadeElementos(array))


// // b.
// function verificaPar(numero){
//     if ((numero%2)===0){
//         return true
//     }
//     else{
//         return false
//     }
// }
// const numero = prompt("Digite um numero: ")
// console.log("É par: " + verificaPar(numero))


// // c.
// function quantidadePares(array){
//     let quantidade = 0
//     for (i=0;i<5;i++){
//         if ((array[i]%2)===0){
//             quantidade++
//         }
//     }
//     return quantidade
// }

// let array = []
// for (i=0; i<5; i++){
//     array.push(Number(prompt("Insira o valor da posição "+ i +":")))
// }
// console.log("Quantidade de pares: "+ quantidadePares(array))


// // d.
// function verificaPar(numero){
//     if ((numero%2)===0){
//         return true
//     }
//     else{
//         return false
//     }
// }

// function quantidadePares(array){
//     let quantidade = 0
//     for (i=0;i<5;i++){
//         if (verificaPar(array[i])===true){
//             quantidade++
//         }
//     }
//     return quantidade
// }

// let array = []
// for (i=0; i<5; i++){
//     array.push(Number(prompt("Insira o valor da posição "+ i +":")))
// }
// console.log("Quantidade de pares: "+ quantidadePares(array))
