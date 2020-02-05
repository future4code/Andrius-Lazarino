
class Post {
    constructor(titulo, autor, conteudo){
        this.titulo = titulo
        this.autor = autor
        this.conteudo = conteudo
    }
}

function criar() {
    const titulo = document.getElementById("titulo")
    const autor = document.getElementById("autor")
    const conteudo = document.getElementById("conteudo")
    const novoPost = new Post(titulo.value, autor.value, conteudo.value)
    console.log(novoPost)
}