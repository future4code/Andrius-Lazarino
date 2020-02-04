// let nome = "Andrius"
// let sobrenome = "Lazarino"
// console.log(sobrenome.length)
// let nomecompleto = nome+" "+sobrenome
// console.log ("nomecompleto")
// console.log ("tem tamanho de "+nomecompleto.length)


// let soma=3+4
// console.log("soma:" + soma)
// soma= (3*5)/2
// console.log("segunda soma:" +soma)
// soma= (4-5)*-1
// console.log("terceira soma:" +soma)
// soma= 234%5
// console.log("quarta soma: "+soma)


// let variavel = [1,2,3,4,5,6]
// console.log("primeiro " +variavel[0] + "terceiro " + variavel[2]+ "ultimo " + variavel[5])

// let bool1 = true
// let bool2 = false
// let bool3 = true

// console.log((bool1||bool2)&&bool2||bool1)
// console.log((bool2||bool3)&&bool3||bool2)
// console.log((bool1||bool3)&&bool3||bool1)
// console.log(bool1||bool2||bool3)
// const nome = prompt("Qual o seu nome?")
// let suasInformacoes = "Seu nome é: " + nome

// const ano = prompt("Qual o ano do seu nascimento")
// const idade = 2019 - Number(ano)

// suasInformacoes += ". Você terá " + idade + "anos no fim deste ano."
// console.log(suasInformacoes)

// console.log("1:" + (numero1===numero2))
// console.log("1:" + (numero1!==numero2))
// console.log("1:" + (numero1>numero2))
// console.log("1:" + (numero1<numero2))
// if (numero1===numero2){
//     console.log("1: é igual")
// }
// if (numero1<numero2){
//     console.log(numero1, " menor que ", numero2)
// }
// if (numero1>numero2){
//     console.log(numero1, " maior que ", numero2)
// }
// if (numero1===numero2){
//     console.log("1: é igual")
// }
// else if(numero1<numero2){
//     console.log(numero1, " menor que ", numero2)
// }
// else{
//     console.log(numero1, " maior que ", numero2)
// }

// let numero1 = prompt("numero1: ")
// let numero2= prompt("numero2: ")
// switch (estado) {
//     case "sp":
//         console.log("paulista")
//         break;
//     case "ms":
//         console.log("sul matogrossense")
//         break;
//     case "rj":
//         console.log("carioca")
//         break;
//     case "ms":
//         console.log("matogrossense")
//         break;
//     case "ac":
//         console.log("acreano")
//         break;
//     default:
//         console.log("Estado não encontrado")
// }
/*
const ensinomedio = prompt("Informe sim ou não, Concluiu o ensino medio? ")
const idade = Number(prompt("Quantos anos? "))
const cursando = prompt("cursando outra faculdade?")

if ((ensinomedio==="sim")&&(idade>=18)&&(cursando==="nao")){
    console.log("você pode cursar essa faculdade")
}
else{
    console.log("Você não pode cursar essa faculdade")
}*/
// console.log("Oi!")
// function minhaFuncao(quantidade) {
//     for (let i = 1; i <= quantidade; i++) {
//         console.log(i*2)
//     }
// }
// minhaFuncao(5)

// let array = [1,3,6,9,12]

// function imprime (numero){
//     console.log(numero)
// }

// for (i=0;i<5;i++){
//     imprime(i)
// }

// let numero = function(valor){
//     return ((valor%2)===0)
// }

// if (numero(5)){
//     console.log("É par")
// }
// else{
//     console.log("Impar")
// }







// const botao =  document.getElementById("meu-botao")
// console.log(botao)

// const container = document.getElementById("main-container")

// container.innerHTML += "BBBBBBBBb"

// const input = document.getElementById("meu-input")
// console.log(input.value)

// const container = document.getElementById("main-container")
// for (i=0;i<5;i++){
//     container.innerHTML += "<font color = 'blue'>Texto qualquer</font>"
// }

// const divs = document.getElementsByClassName("main")
// console.log(divs[0])

// const divs = document.getElementsByTagName("div")

// console.log(divs)

// const divAmarela = document.querySelector(".main-container, .texto-amarelo")// pode ser aplicado todos os comandos de filhos do css

// console.log(divAmarela)

// function insereParagrafo() {
//     const container = document.getElementById("main-container")


//     container.innerHTML += "<p>aaaaaaaaa</p>"
// }

// function posicionar() {
//     console.log("Estou em cima do botão")
// }

// let contador = 0
// function contaClick() {
//     contador++
//     console.log("Cliques até agora: " + contador)
// }


function criarTarefa() {
    const tarefa = document.getElementById("tarefa")
    const seletor = document.getElementsByTagName("input")
    if (tarefa.value === "" || tarefa.value === "Digite a tarefa") {
        alert("Digite uma tarefa")
    }
    else {
        let achou = false
        for (i = 1; i < 8; i++) {
            if (seletor[i].checked === true) {

                let diaDaSemana = document.getElementById("dia-" + i)
                diaDaSemana.innerHTML += "<li>" + tarefa.value + "</li>"
                tarefa.value = ""
                achou = true
            }
        }
        if (!achou){
            alert("Selecione o dia")
        }
    }

}
function apagaTexto() {
    document.getElementById("tarefa").value = ""
}
function mostraTexto() {
    document.getElementById("tarefa").value = "Digite a tarefa"
}