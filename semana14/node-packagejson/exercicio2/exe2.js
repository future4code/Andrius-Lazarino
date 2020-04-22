const arquivo = String(process.argv[2]);
const tarefa = `\n${String(process.argv[3])}`;
const fs = require("fs");

try {
    fs.appendFileSync(arquivo, tarefa, "utf8")
    console.log("Tarefa criada com sucesso!")
}catch(error){
    console.error(error)
}

