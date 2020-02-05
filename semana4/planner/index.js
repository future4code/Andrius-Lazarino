let totalTarefas = 0
function criarTarefa() {
    const tarefa = document.getElementById("tarefa")
    const seletor = document.getElementsByTagName("input")

    const horario = document.getElementsByTagName("option")

    if (tarefa.value === "" || tarefa.value === "Digite a tarefa") {
        alert("Digite uma tarefa")
    }
    else {
        let achou = false
        for (i = 1; i < 8; i++) {
            if (seletor[i].checked === true) {

                let diaDaSemana = document.getElementById("dia-" + i)
                let tarefaClick = "onclick = riscaTexto('tarefa" + totalTarefas + "')"
                let horas = 0
                for (i=0;i<24;i++) {
                    if (horario[i].selected){
                        horas = i
                    }
                }
                diaDaSemana.innerHTML += "<li><a "+ tarefaClick + " id = 'tarefa"+ totalTarefas + "'>" + tarefa.value +" - Ás " + horas +" horas"+ "</a></li>"
                totalTarefas ++
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
function riscaTexto(idRiscar) {
    let seleciona = document.getElementById(idRiscar)
    seleciona.innerHTML = "<strike>"+seleciona.textContent+"</strike>"
}
function limparTarefas(){
    const dias = ["SEGUNDA","TERÇA", "QUARTA", "QUINTA", "SEXTA", "SÁBADO", "DOMINGO"]
    for (i = 1; i < 8;i++){
        let limpar = document.getElementById("dia-" + i)
        limpar.innerHTML = "<h3>"+ dias[i-1] +"</h3><ul class='conteudo'></ul>"
    }
    totalTarefas = 0
}