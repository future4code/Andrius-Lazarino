// EXERCÍCIO A
console.log("Exercício A");
console.log(exerciseA([3, 6, 9, 12, 19, 23]));
function exerciseA(array) {
    var soma = 0;
    var multiplicacao = array[0];
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var number = array_1[_i];
        soma += number;
    }
    for (var _a = 0, array_2 = array; _a < array_2.length; _a++) {
        var number = array_2[_a];
        multiplicacao *= number;
    }
    return {
        soma: soma,
        quantidade: array.length,
        multiplicacao: multiplicacao
    };
}
// EXERCÍCIO B
console.log("Exercício B");
console.log(exerciseB([3, 6, 9, 12, 19, 23]));
function exerciseB(array) {
    var maior = array[0];
    var menor = array[0];
    for (var _i = 0, array_3 = array; _i < array_3.length; _i++) {
        var number = array_3[_i];
        number > maior ? maior = number : false;
    }
    for (var _a = 0, array_4 = array; _a < array_4.length; _a++) {
        var number = array_4[_a];
        number < menor ? menor = number : false;
    }
    return {
        maior: maior,
        menor: menor
    };
}
