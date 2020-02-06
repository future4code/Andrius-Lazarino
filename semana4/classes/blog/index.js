
class Post {
    constructor(titulo, autor, conteudo, imagem) {
        this.titulo = titulo
        this.autor = autor
        this.conteudo = conteudo
        this.imagem = imagem
    }
}
let post = []


function criar() {
    const titulo = document.getElementById("titulo")
    const autor = document.getElementById("autor")
    const conteudo = document.getElementById("conteudo")
    const imagem = document.getElementById("imagem")
    post.push(new Post(titulo.value, autor.value, conteudo.value, imagem.value))
    console.log(post)
    console.log(post.length)
    console.log(post[1])
    if ((titulo.value === "") || (autor.value === "") || (conteudo.value === "")) {
        alert("Título, autor e conteúdo são campos obrigatórios!")
    }
    else {
        inserirPost(post)
    }
    titulo.value = ""
    autor.value = ""
    conteudo.value = ""
    imagem.value = ""
}
function inserirPost(post) {
    const tamanho = post.length-1
    let postSection = document.getElementsByTagName("section")
    if (post[tamanho].imagem === "") {
        console.log("entrou aqui")
        postSection[0].innerHTML += "<p>" + "<h3>" + post[tamanho].titulo + "</h3>" + "<p class='texto'>" + post[tamanho].conteudo + "</p>" + "<p>Escrito por: " + post[tamanho].autor + "</p>" + "</p>"
    }
    else {
        postSection[0].innerHTML += "<p>" + "<h3>" + post[tamanho].titulo + "</h3>" + "<p class='texto'>" + post[tamanho].conteudo + "</p>" + "<p><img src='" + post[tamanho].imagem + "'></p>" + "<p>Escrito por: " + post[tamanho].autor + "</p>" + "</p>"
    }
}