
// // Exercícios de interpretação de código

// //EXERCICIO 1
// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2 && bool3
// console.log("a. ", resultado)
// //a. FALSE
// resultado = (bool2 || bool1) && !bool3
// console.log("b. ", resultado)
// //b. FALSE
// resultado = !resultado && (bool1 || bool1)
// console.log("c. ", resultado)
// //c. TRUE
// resultado = (resultado && (!bool1 || bool2)) && !bool3
// console.log("d. ", resultado)
// //d. FALSE
// console.log("e. ", typeof resultado)
// //e. BOOLEAN



// //EXERCICIO 2
// //a. Array é uma lista de elementos que pode ser identificado por um índice ou chave.

// //b. array[0]

// //c. array.lenght

// //d. 
// let array
// console.log('I. ', array)
// //I. UNDEFINED

// array = null
// console.log('II. ', array)
// //II. NULL

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('III. ', array.length)
// //III. 11

// let i = 0
// console.log('IV. ', array[i], " e ", array[i+1])
// //IV. IV. 3 e 4

// array[i+1] = 19
// const valor = array[i+6]
// console.log('V. ', array[i+1], " e ", valor)
// //V. 19 e 9

// i+=1
// array[i] = array[i-1]
// console.log('VI. ', array[i])
// //VI. 3

// i = array.length - 1
// array[i] = array[i-3]
// const resultadoC = array[i]%array[1]
// console.log('VII. ', resultadoC)
// //VII. 1




// // Exercícios de escrita de código

// // EXERCICIO 1
// //a.
// let calculo = ((77-32)*5) / 9 + 273.15
// console.log("a. " + calculo)//298.15

// //b.
// let calculo = (80*9)/5 + 32
// console.log("b." + calculo)//176K

// //c.
// let valor = 30
// let calculo = ((valor-32)*5) / 9 + 273.15
// console.log(calculo+"°F")//272.0388888888889°F
// calculo = (valor*9)/5 + 32
// console.log(calculo+"K")//86K

// //d.
// let valor = prompt("Digite o valor em graus Celsius: ")
// let calculo = ((valor-32)*5) / 9 + 273.15
// console.log(calculo+"°F")
// calculo = (valor*9)/5 + 32
// console.log(calculo+"K")


// // EXERCICIO 2

// let estado = prompt("Qual seu estado?")
// console.log("Resposta: " + estado)

// let cidade = prompt("Qual sua cidade?")
// console.log("Resposta: " + cidade)

// let rua = prompt("Qual o seu endereço?")
// console.log("Resposta: " + rua)

// let cor = prompt("Qual sua cor favorita?")
// console.log("Resposta: " + cor)

// let agua = prompt("Ja tomou agua hoje?")
// console.log("Resposta: "+ agua)


// // EXERCICIO 3
// //a.
// let calculo = 280 * 0.0git5
// console.log("Valor a ser pago: "+calculo+"R$")

// //b.
// let calculo = 280*0.05
// let desconto = calculo - (calculo*0.15)
// console.log("Valor a ser pago com desconto: "+desconto+"R$")