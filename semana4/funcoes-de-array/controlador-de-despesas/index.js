let listaDespesas = []
const despesasDetalhadas = document.getElementById("despesasDetalhadas")
const extratos = document.getElementById("extrato")
limparFiltro()
function cadastrar() {
    const valor = document.getElementById("valor")
    const tipoDespesa = document.getElementById("tipoDespesa")
    let tipo
    switch (tipoDespesa.value) {
        case 'despesacasa':
            tipo = "Despesa da Casa"
            console
            break;
        case 'despesafesta':
            tipo = "Despesa de festas"
            break;
        case 'despesaviagem':
            tipo = "Despesa de Viagem"
            break;
        case 'despesaalimentacao':
            tipo = "Despesa da Alimentação"
            break;
        case 'despesatransporte':
            tipo = "Despesa de transporte"
            break;
    }
    const descricao = document.getElementById("descricao")


    if ((valor.value !== "") && (descricao.value !== "")) {
        const instancia = new Despesa(valor.value, tipo, descricao.value)
        listaDespesas.push(instancia)

        //LIMPA CAMPOS
        valor.value = ""
        tipoDespesa.value = ""
        descricao.value = ""
        limparFiltro()
        extrato()
    }
    else {
        alert("valor, tipo de despesa e descrição são campos obrigatorios")
    }
}
function extrato() {
    extratos.innerHTML = ""
    mostrarDespesas(extratos)
    extratos.innerHTML += "<h3>Total: " + calculo() + "</h3>"
}
function calculo() {
    let total = 0
    for (elemento of listaDespesas) {
        total += Number(elemento.valor)
    }
    return total
}

function limparFiltro() {
    const filtroTipoDespesa = document.getElementById("filtroTipoDespesa")
    const valorMinimo = document.getElementById("valorMinimo")
    const valorMaximo = document.getElementById("valorMaximo")
    filtroTipoDespesa.value = ""
    valorMaximo.value = ""
    valorMinimo.value = ""
    despesasDetalhadas.innerHTML = ""
    mostrarDespesas(despesasDetalhadas)
}

function mostrarDespesas(despesas) {
    for (elemento of listaDespesas) {
        despesas.innerHTML += "<p>Valor: " + elemento.valor + "</p><p>Tipo: " + elemento.tipoDespesa + "</p><p>Descrição: " + elemento.descricao + "</p>"
        despesas.innerHTML += "-------------------------------------"
    }
}

function filtrar() {
    const despesasDetalhadas = document.getElementById("despesasDetalhadas")
    despesasDetalhadas.innerHTML = ""
    const filtroTipoDespesa = document.getElementById("filtroTipoDespesa")
    const valorMinimo = document.getElementById("valorMinimo")
    const valorMaximo = document.getElementById("valorMaximo")
    if ((filtroTipoDespesa.value !== "") && (valorMinimo.value !== "") && (valorMaximo.value !== "")) {
        const filtroListaDespesas = listaDespesas.filter((lista, index, array) => {
            return (lista.valor >= valorMinimo.value) && (lista.valor <= valorMaximo.value) && (lista.tipoDespesa === filtroTipoDespesa.value)
        })
        
        for (elemento of filtroListaDespesas) {
            despesasDetalhadas.innerHTML += "<p>Valor: " + elemento.valor + "</p><p>Tipo: " + elemento.tipoDespesa + "</p><p>Descrição: " + elemento.descricao + "</p>"
        }
    }
    else {
        alert("Todos os campos do filtro são obrigatorios")
    }
}

class Despesa {
    constructor(valor, tipoDespesa, descricao) {
        this.valor = valor
        this.tipoDespesa = tipoDespesa
        this.descricao = descricao
    }

}