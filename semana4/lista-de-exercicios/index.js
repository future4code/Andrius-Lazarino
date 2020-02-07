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
// logicaProgramaçãoExercicio3()


function logicaProgramaçãoExercicio3() {
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