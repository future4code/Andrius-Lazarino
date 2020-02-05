
class Post {
    constructor(titulo, autor, conteudo){
        this.titulo = titulo
        this.autor = autor
        this.conteudo = conteudo
    }
}
let post = []
function criar() {
    const titulo = document.getElementById("titulo")
    const autor = document.getElementById("autor")
    const conteudo = document.getElementById("conteudo")
    post.push(new Post(titulo.value, autor.value, conteudo.value))
    console.log(post)
    titulo.value = ""
    autor.value = ""
    conteudo.value = ""
}