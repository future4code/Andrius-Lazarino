//EXERCÍCIO 1
//O código realiza um teste para ver seu o numero é par e imprime "Passou no teste"
//  se o mesmo for e se não imprime "Não passou no teste"

//EXERCÍCIO 2
// a. Serve para mostrar o preço de uma fruta
// b. 2.25
// c. 24.55
// d. imprimiria o valor da pêra e também o default porque retirou o break ele continua comparando.

//EXERCÍCIO 3
//haverá um erro porque a variavel mensagem foi declarada dentro do if e o console.log está chamando ela fora
//portando o console.log está fora de escopo

// //EXERCICIO 4
// // a.
// let numero1 = Number(prompt("Digite o primeiro numero: "))
// let numero2 = Number(prompt("Digite o segundo numero: "))
// if (numero1 > numero2){
//     console.log("Ordem decrescente: ", numero1, " ", numero2)
// }
// else{
//     console.log("Ordem decrescente: ", numero2, " ", numero1)
// }
// //Se os dois numero forem iguais ele vai imprimir os dois seguidos

// // b.
// let numero1 = Number(prompt("Digite o primeiro numero: "))
// let numero2 = Number(prompt("Digite o segundo numero: "))
// let numero3 = Number(prompt("Digite o terceiro numero: "))
// if (numero1 > numero2 && numero1 > numero3 && numero2 > numero3){
//     console.log("Ordem decrescente: ", numero1, " ", numero2, " ",numero3)
// }
// else if (numero1> numero3 && numero1>numero2 && numero3>numero2){
//     console.log("Ordem decrescente: ", numero1, " ", numero3, " ",numero2)
// }
// else if(numero2 > numero1 && numero2>numero3 && numero1 > numero3){
//     console.log("Ordem decrescente: ", numero2, " ", numero1, " ", numero3)
// }
// else if (numero2> numero3 && numero2>numero1 && numero3>numero1){
//     console.log("Ordem decrescente: ", numero2, " ", numero3, " ",numero1)
// }
// else if (numero3> numero1 && numero3>numero2 && numero1>numero2){
//     console.log("Ordem decrescente: ", numero3, " ", numero1, " ",numero2)
// }
// else{
//     console.log("Ordem decrescente: ", numero3, " ", numero2, " ",numero1)
// }// se forem iguais continuam na mesma ordem

// // c.
// let numero1 = Number(prompt("Digite o primeiro numero: "))
// let numero2 = Number(prompt("Digite o segundo numero: "))
// let numero3 = Number(prompt("Digite o terceiro numero: "))
// if (numero1 > numero2 && numero1 > numero3 && numero2 > numero3){
//     console.log("Ordem decrescente: ", numero1, " ", numero2, " ",numero3)
// }
// else if (numero1> numero3 && numero1>numero2 && numero3>numero2){
//     console.log("Ordem decrescente: ", numero1, " ", numero3, " ",numero2)
// }
// else if(numero2 > numero1 && numero2>numero3 && numero1 > numero3){
//     console.log("Ordem decrescente: ", numero2, " ", numero1, " ", numero3)
// }
// else if (numero2> numero3 && numero2>numero1 && numero3>numero1){
//     console.log("Ordem decrescente: ", numero2, " ", numero3, " ",numero1)
// }
// else if (numero3> numero1 && numero3>numero2 && numero1>numero2){
//     console.log("Ordem decrescente: ", numero3, " ", numero1, " ",numero2)
// }
// else if (numero3> numero2 && numero3>numero1 && numero2>numero1){
//     console.log("Ordem decrescente: ", numero3, " ", numero2, " ",numero1)
// }
// else {
//     console.log("Digite numeros diferentes!")
// }


// //EXERCÍCIO 5
// // a. https://drive.google.com/file/d/1UyBRG7M9fhanC_EY7Gz8VbZZReix7oLa/view?usp=sharing
// // b.

// let condicao = prompt("Possui ossos?[s/n]: ")

// if (condicao === "s"){
//     condicao = prompt("Possui pelos?: ")
//     if(condicao === "s"){
//         condicao = prompt("É racional?: ")
//         if(condicao === "s"){
//             console.log("Humano")
//         }
//         else{
//             console.log("Mamifero não humano")
//         }
//     }
//     else{
//         condicao = prompt("É mamifero?: ")
//         if (condicao === "s"){
//             console.log("Invertebrado")
//         }
//         else{
//             condicao = prompt("Possui penas?: ")
//             if (condicao==="s"){
//                 console.log("Ave")
//             }
//             else{
//                 condicao = prompt("É terrestre?: ")
//                 if(condicao==="s"){
//                     condicao = prompt("Passa parte da vida em ambiente aquático?: ")
//                     if(condicao==="s"){
//                         console.log("Anfíbio")
//                     }
//                     else{
//                         console.log("Réptil")
//                     }
//                 }
//                 else{
//                     console.log("Peixe")
//                 }
//             }
//         }
        
//     }
// }
// else{
//     console.log("Invertebrado")
// }