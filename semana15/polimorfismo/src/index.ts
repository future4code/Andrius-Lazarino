// Exercício 1
// A. Foi possivel imprimir todas as propriedades porque quando não pe definido se é priivada automaticamente é public.

// Exercício 2
// A. Cannot create an instance of an abstract class.
// B. Precisa criar uma outra classe que se estende da classe abstrata para usá-la

// Exercício 3
// A. Precisa criar uma outra classe que se estende da classe abstrata para usá-la.
// B. Porque possui uma função que retorna um valor e em uma interface tudo é abstrato.
// C. Porque ela é uma classe que serve de modelo ou base para outras classes e sozinha não consegue fazer quase nada.

// Exercício 4
// A. possui as propriedades: name, registrationNumber, consumedEnergy, cpf, residentsQuantity, cep para registrar um
//endereço e os metodos getCpf para retornar o cpf porque a propriedade é privada e calculateBill para calcular a energia

// Exercício 5
// A. As duas implementão a interface client
// B. A classe residentialClient tem propriedades diferentes para diferenciar um cliente normal de um comercial

// Exercício 6
// A. Deve implementar a classe industry porque possui propriedades e métodos diferentes
// B. Deve implementar a interface client porque ela obriga a classe colocar propriedades e métodos padrões para consumo
//de energia
// C. Porque nenhum dado precisa ser alterado


import {Client} from "./Client"
import {Residence} from "./Residence";
import {Commerce} from "./Commerce";
import {Industry} from "./Industry";
import {ClientManager} from "./ClientManager";

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

// console.log(residence.getCep())
// console.log(commerce.getCep())
// console.log(industry.getCep()

const clientManager = new ClientManager()

clientManager.registerClient(industry)