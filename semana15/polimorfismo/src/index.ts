// Exercício 1
// A. Foi possivel imprimir todas as propriedades porque quando não pe definido se é priivada automaticamente é public.

// Exercício 2
// A. Cannot create an instance of an abstract class.
// B. Precisa criar uma outra classe que se estende da classe abstrata para usala


import {Client} from "./Client"
import {Place} from "./Place"

const objeto:Client = {
    name: "Andrius",
    registrationNumber: 1,
    consumedEnergy: 3,

    calculateBill(): number {
        return 2;
    }
}
// console.log(objeto.name)
// console.log(objeto.registrationNumber)
// console.log(objeto.consumedEnergy)
// console.log(objeto.calculateBill())