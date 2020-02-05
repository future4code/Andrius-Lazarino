import comprarCarta from './naoMexer.js'
// NÃO REMOVA ESTA LINHA

/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

let ganhador
while(confirm("Quer iniciar uma nova rodada?")){
    let usuario = [comprarCarta(), comprarCarta()]
    usuario.push(usuario[0].valor + usuario[1].valor)
    let computador = [comprarCarta(), comprarCarta()]
    computador.push(computador[0].valor+computador[1].valor)
    console.log("Usuário - cartas: "+ usuario[0].texto + " " + usuario[1].texto + " - pontuação ", usuario[2])
    console.log("Computador - cartas: "+ computador[0].texto + " " + computador[1].texto + " - pontuação ", computador[2])
    if (usuario[2] > computador[2]){
       ganhador = "O usuário ganhou!"
    }
    else if(usuario[2] < computador[2]){
       ganhador = "O computador ganhou!"
    }
    else{ 
       ganhador = "Empate!"
    }
    console.log(ganhador)
}
console.log("O jogo acabou")