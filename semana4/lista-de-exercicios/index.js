//Exercícios de interpretação de código ---------------------------------------------------------------------------------------------------

// 1. conversorDeMoeda(valorEmDolar) recebe como argumento um valor para converter o dollar em reais, na função ele le do usuário o valor
//da cotação que retorna multiplicado pelo valor do argumento

// 2. inverteDinheiro("Tesouro Direto", 200) recebe como argumento o tipo de investimento e o valor, dentro da função um switch case calcula com base
//no tipo de investimento. Valor impresso no console: 165; TIPO DE INVESTIMENTO INFOMADO INCORRETO!

// 3. Guarda os numeros pares e impares de uma váriavel em váriaveis diferentes, mas existe um problema as arrays estão declaradas como const oque vai resultar
//em erro

// 4. Compara os numeros para ver quem é o maior e menor da lista, valores impressos no console: -10; 1590




//Exercícios de lógica de Programação ------------------------------------------------------------------------------------------------------

// 1. "forEach" utilizado para percorrer a array para mostrar seus valores ou modificalos, com "map" criamos uma nova array com o mesmo tamanho mas
//com as propriedades selecionadas, com "filter" criamos um novo array de tamanho menor ou igual com elementos filtrados.
//logicaProgramaçãoExercicio1()

// 2. a. FALSE; b. TRUE; c. TRUE; d. FALSE; e. TRUE

// 3. falta ler os valores, quantidadeDeNumerosPares também declarado de forma errado deveria ser LET para permitir seu incremento, console imprimindo errado
// logicaProgramacaoExercicio3()

// // 4. 
// logicaProgramacaoExercicio4()

// // 5 .

// logicaProgramacaoExercicio5()




// //Exercícios de Funções ------------------------------------------------------------------------------------------------------

// // 1.
// funcaoExercicio1()

// // 2. 
// let funcaoExercicio2 = () =>{
//     alert("Hello Future4")
// }
// funcaoExercicio2()




//Exercícios de Objetos ------------------------------------------------------------------------------------------------------

// 1. Os arrays servem para guardar mais de um valor em apenas uma variável que são acessados por uma chave, os objetos são como variaveis mas que possuem atributos e métodos
//e são usados para representar algo ou um elemento

// // 2. 
// objetoExercicio2()

// // 3.
// objetoExercicio3()

// // 4.
// objetoExercicio4()




//Exercícios de Array ----------------------------------------------------------------------------------------------------------

// // 1.
// // a. 
// arrayExercicio1A()

// // b.
// arrayExercicio1B()

// // 2.
// // a.
// arrayExercicio2A()

// // b.
// arrayExercicio2B()

// // c.
// arrayExercicio2C()

// // 3.
// // a.
// arrayExercicio3A()

// // b.
// arrayExercicio3B()

// // 4.
// arrayExercicio4()

// // 5.
// arrayExercicio5()



function arrayExercicio5() {
    let contas = [
        { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
        { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
        { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
        { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
        { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
        { cliente: "Soter", saldoTotal: 1200, compras: [] }
    ]
    atualizaArray()

    function atualizaArray() {

        contas.forEach((elemento, index, array) => {
            switch (elemento.cliente) {
                case "João":
                    elemento.saldoTotal = 400
                    break;
                case "Paula":
                    elemento.saldoTotal = 6260
                    break;
                case "Pedro":
                    elemento.saldoTotal = -3340
                    break;
                case "Luciano":
                    elemento.saldoTotal = -1900
                    break;
                case "Artur":
                    elemento.saldoTotal = 1300
                    break;
                case "Soter":
                    elemento.saldoTotal = 1200
                    break;
            }
        })
        console.log(contas)
    }

}

function arrayExercicio4() {
    const consultas = [
        { nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
        { nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
        { nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
        { nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
    ]

    let array = []

    for (elemento of consultas) {
        let eleEla
        let sr
        if (elemento.genero === "masculino") {
            eleEla = "Lembrá-lo"
            sr = "Sr. "
        } else {
            eleEla = "Lembrá-la"
            sr = "Sra. "
        }

        if (elemento.cancelada === true) {

            array.push("Olá, " + sr + elemento.nome + ". Estamos enviando esta mensagem para " + eleEla + " da sua consulta no dia " + elemento.dataDaConsulta + ". Por favor acuse o recebimento deste email.")
        }
        else {
            array.push("Olá, " + sr + elemento.nome + ". Infelizmente, sua consulta marcada para o dia " + elemento.dataDaConsulta + " foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la")
        }
    }
    console.log(array)

}

function arrayExercicio3B() {
    const pessoas = [
        { nome: "Paula", idade: 12, altura: 1.8 },
        { nome: "João", idade: 20, altura: 1.3 },
        { nome: "Pedro", idade: 15, altura: 1.9 },
        { nome: "Luciano", idade: 22, altura: 1.8 },
        { nome: "Artur", idade: 10, altura: 1.2 },
        { nome: "Soter", idade: 70, altura: 1.9 }
    ]

    console.log(naoPermitidos())

    function naoPermitidos() {
        let permitidos = []
        for (elemento of pessoas) {
            if ((elemento.altura <= 1.5) || (elemento.idade <= 14) || (elemento.idade >= 60)) {
                permitidos.push(elemento)
            }
        }
        return permitidos
    }
}


function arrayExercicio3A() {
    const pessoas = [
        { nome: "Paula", idade: 12, altura: 1.8 },
        { nome: "João", idade: 20, altura: 1.3 },
        { nome: "Pedro", idade: 15, altura: 1.9 },
        { nome: "Luciano", idade: 22, altura: 1.8 },
        { nome: "Artur", idade: 10, altura: 1.2 },
        { nome: "Soter", idade: 70, altura: 1.9 }
    ]

    console.log(permitidos())

    function permitidos() {
        let permitidos = []
        for (elemento of pessoas) {
            if ((elemento.altura >= 1.5) && (elemento.idade >= 14) && (elemento.idade <= 60)) {
                permitidos.push(elemento)
            }
        }
        return permitidos
    }
}

function arrayExercicio2C() {
    const array = [1, 2, 3, 4, 5, 6]

    console.log(parImpar())

    function parImpar() {
        let arrayMult = []
        for (elemento of array) {
            if ((elemento % 2) === 0) {
                arrayMult.push(elemento + " é par")
            } else {
                arrayMult.push(elemento + " é impar")
            }
        }
        return arrayMult
    }
}

function arrayExercicio2B() {
    const array = [1, 2, 3, 4, 5, 6]

    console.log(multiplicado())

    function multiplicado() {
        let arrayMult = []
        for (elemento of array) {
            arrayMult.push(String(elemento * 3))
        }
        return arrayMult
    }
}

function arrayExercicio2A() {
    const array = [1, 2, 3, 4, 5, 6]

    console.log(multiplicado())

    function multiplicado() {
        let arrayMult = []
        for (elemento of array) {
            arrayMult.push(elemento * 2)
        }
        return arrayMult
    }
}

function arrayExercicio1B() {
    let array = [
        { nome: "Pedro", idade: 20 },
        { nome: "João", idade: 10 },
        { nome: "Paula", idade: 12 },
        { nome: "Artur", idade: 89 }
    ]

    console.log(novoArray())

    function novoArray() {
        let novoArray = []

        for (elemento of array) {
            if (elemento.idade < 20) {
                novoArray.push(elemento)
            }
        }
        return novoArray
    }
}


function arrayExercicio1A() {
    let array = [
        { nome: "Pedro", idade: 20 },
        { nome: "João", idade: 10 },
        { nome: "Paula", idade: 12 },
        { nome: "Artur", idade: 89 }
    ]

    console.log(novoArray())

    function novoArray() {
        let novoArray = []

        for (elemento of array) {
            if (elemento.idade >= 20) {
                novoArray.push(elemento)
            }
        }
        return novoArray
    }
}

function objetoExercicio4() {
    const pessoa = {
        nome: "Andrius",
        idade: 26,
        email: "andrius@andrius.com",
        endereco: "Avenida 96"
    }

    console.log("Nome: " + anonimizarPessoa().nome + " Idade: " + pessoa.idade + " email: " + pessoa.email + " endereco: " + pessoa.endereco)

    function anonimizarPessoa() {
        let pessoa2 = {
            ...pessoa,
            nome: "Anonimo"
        }
        return pessoa2
    }
}

function objetoExercicio3() {
    const objeto = {
        titulo: "Beasts of No Nation",
        ano: 2015,
        diretor: "Cary Fukunaga",
        ator: ["Amy Kaufman", "Riva Marker"]
    }
    console.log("Venha asssitir ao filme " + objeto.titulo + ", de " + objeto.ano + ", dirigido por " + objeto.diretor + " e estrelado por " + objeto.ator[0] + ", " + objeto.ator[1])
}

function objetoExercicio2() {

    criaRetangulo(10, 15)

    function criaRetangulo(lado1, lado2) {
        console.log("Largura: " + lado1 + " Altura: " + lado2 + " perímetro: " + (2 * (Number(lado1) + Number(lado2))) + " e área: " + (Number(lado1) + Number(lado2)))
    }
}


function funcaoExercicio1() {
    const array = [20, 22, 5, 3, 33, 10,75,89, 35, 40, 59]
    let primeiroMaior = array[0]
    let primeiroMenor = array[0]

    let segundoMaior
    let segundoMenor
    let i=0
    for (elemento of array) {
        if (elemento > primeiroMaior) {
            if(i>0){
                segundoMaior = primeiroMaior
            }
            primeiroMaior = elemento
        }
        if (elemento < primeiroMenor) {
            if(i>0){
                segundoMenor = primeiroMenor
            }
            primeiroMenor = elemento
        }
        i++
    }

    console.log("Segundo maior: " + segundoMaior)
    console.log("Segundo menor: " + segundoMenor)
}


function logicaProgramacaoExercicio5() {
    let numero1 = Number(prompt("Numero 1: "))
    let numero2 = Number(prompt("Numero 2: "))

    if (((numero1 % numero2) === 0) || ((numero2 % numero1) === 0)) {
        console.log("São divisíveis")
    }
    else {
        console.log("Não são divisíveis")
    }

    if (numero1 < numero2) {
        let aux
        aux = numero2
        numero2 = numero1
        numero1 = aux
        if (numero1 > 0) {
            console.log("Diferença entre eles: " + (numero1 - numero2))
        }
        else if (numero1 < 0) {
            console.log("Nao entrou")
            console.log("Diferença entre eles: " + (numero1 - numero2))
        }
    }
}


function logicaProgramacaoExercicio4() {
    const a = Number(prompt("Valor de a: "))
    const b = Number(prompt("Valor de b: "))
    const c = Number(prompt("Valor de c: "))

    if ((a === b) && (a === c)) {
        console.log("Esse triangulo é equilátero")
    }
    else if ((a === b) || (a === c) || (b === c)) {
        console.log("Esse triangulo é isósceles")
    }
    else {
        console.log("Esse triangulo é escaleno")
    }
}


function logicaProgramacaoExercicio3() {
    let valor = Number(prompt("Insira um valor: "))
    let quantidadeDeNumerosPares = 0
    let i = 0
    while (quantidadeDeNumerosPares !== valor) {
        if ((i % 2) === 0) {
            quantidadeDeNumerosPares++
            console.log(i + " ")
        }
        i++
    }

}
function logicaProgramaçãoExercicio1() {
    const array = [1, 5, 15, 45, 64, 78, 98, 154, 168]
    array.forEach((numero, index, array) => {
        console.log("Numero: " + numero)
    });
}

