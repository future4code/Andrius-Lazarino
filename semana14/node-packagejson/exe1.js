const operacao = String(process.argv[2]).toUpperCase()
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);

switch (operacao){
    case "ADD":{
        console.log("Respota", num1+num2)
        break;
    }
    case "SUB":{
        console.log("Respota", num1-num2)
        break;
    }
    case "MULT":{
        console.log("Respota", num1*num2)
        break;
    }
    case "DIV":{
        console.log("Respota", num1/num2)
        break;
    }
    default:{
        console.log("Operação invalida")
        break;
    }
}