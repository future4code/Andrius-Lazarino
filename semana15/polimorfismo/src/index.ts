// Exercício 1
// A. Foi possivel imprimir todas as propriedades porque quando não pe definido se é priivada automaticamente é public.

// Exercício 2
// A. Cannot create an instance of an abstract class.
// B. Precisa criar uma outra classe que se estende da classe abstrata para usá-la

// Exercício 3
// A. Precisa criar uma outra classe que se estende da classe abstrata para usá-la.
// B. Porque possui uma função que retorna um valor e em uma interface tudo é abstrato.
// C. Porque ela é uma classe que serve de modelo ou base para outras classes e sozinha não consegue fazer quase nada.

import {Client} from "./Client"
import {Residence} from "./Residence";
import {Commerce} from "./Commerce";
import {Industry} from "./Industry";

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

const residence = new Residence(2,"99333")
const commerce =  new Commerce(6,"33999")
const industry = new Industry(9,"93399")

console.log(residence.getCep())
console.log(commerce.getCep())
console.log(industry.getCep()
)