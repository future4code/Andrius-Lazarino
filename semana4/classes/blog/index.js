
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
    //console.log(post)
    inserirPost(post)
    titulo.value = ""
    autor.value = ""
    conteudo.value = ""
}
console.log("DEBUG: "+document.getElementsByTagName("section"))
console.log(document.getElementsByTagName("section")[0])

function inserirPost(post) {
    let postSection = document.getElementsByTagName("section")
    console.log("debugs3: "+ post[length].titulo)
    postSection[0].innerHTML += "<p>" +"<h3>"+ post[length].titulo +"</h3>"+ post[length].conteudo + "<p>Escrito por: "+ post[length].autor+"</p>" + "</p>"
    
}