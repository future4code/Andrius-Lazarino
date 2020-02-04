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