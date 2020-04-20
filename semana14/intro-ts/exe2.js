var array = [1, 3, 9, 12, 39, 69, 99];
console.log(lidarComDados(array));
function lidarComDados(array) {
    // const imparesTotal: number= 
    var soma = 0;
    var impares = 0;
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var pos = array_1[_i];
        soma = soma + pos;
        (pos % 2) !== 0 ? impares++ : false;
    }
    return {
        quantidade: array.length,
        impares: impares,
        soma: soma
    };
}
