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
while (confirm("Quer iniciar uma nova rodada?")) {
   //valor das cartas a partir de [2]
   let usuario = [0, "", comprarCarta(), comprarCarta()]
   let computador = [0, "", comprarCarta(), comprarCarta()]

   while ((usuario[1].valor + usuario[2].valor) == 22) {
      usuario = [0, "", comprarCarta(), comprarCarta()]
   }//Cartas sorteadas novamente enquanto valor foi 22
   usuario[0] = (usuario[2].valor + usuario[3].valor)

   while ((computador[2].valor + computador[3].valor) == 22) {
      computador = [0, "", comprarCarta(), comprarCarta()]
   }//Cartas sorteadas novamente enquanto valor foi 22
   computador[0] = (computador[2].valor + computador[3].valor)

   usuario[1] = (usuario[2].texto + " " + usuario[3].texto)
   computador[1] = (computador[2].texto + " " + computador[3].texto)
   console.log("computador iniciando: " + computador[1])
   let jogadas
   while (usuario[0] < 21 && confirm("Suas cartas são " + usuario[1] + ". A carta revelada do computador é " + computador[3].texto + "\n Deseja comprar mais carta?")) {
      let novaCarta = comprarCarta()
      usuario[1] += " " + novaCarta.texto
      usuario[0] += novaCarta.valor
   }

   while ((computador[0] <= usuario[0]) && computador[0] < 21) {
      let novaCarta = comprarCarta()
      computador[1] += " " + novaCarta.texto
      computador[0] += novaCarta.valor
      console.log("Valor de computador: ", computador[0])
   }

   if ((usuario[0] > computador[0]) && usuario[0] <= 21) {
      ganhador = "O usuário ganhou!"
   }
   else if ((usuario[0] < computador[0]) && computador[0] <= 21) {
      ganhador = "O computador ganhou!"
   }
   else {
      ganhador = "Empate!"
   }
   alert("Suas cartas são " + usuario[1] + ". Sua pontuação é " + usuario[0] + "\n As cartas do computador são " + computador[1] + ". A pontuação do computador é " + computador[0] + ".\n" + ganhador)
}
alert("O jogo acabou")