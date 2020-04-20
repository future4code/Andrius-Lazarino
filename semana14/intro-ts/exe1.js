var num1 = 3;
var num2 = 9;
console.log("soma: " + soma(num1, num2));
console.log("subtração: " + subtracao(num1, num2));
console.log("multiplicação: " + multiplicacao(num1, num2));
console.log("numero maior: " + maiorNumero(num1, num2));
function soma(numero1, numero2) {
    return numero1 + numero2;
}
function subtracao(numero1, numero2) {
    return numero1 - numero2;
}
function multiplicacao(numero1, numero2) {
    return numero1 * numero2;
}
function maiorNumero(numero1, numero2) {
    return numero1 > numero2 ? numero1 : numero2;
}
