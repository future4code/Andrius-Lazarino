var posts = [
    {
        texto: "Texto1",
        autor: "Andrius"
    },
    {
        texto: "Texto2",
        autor: "Andrius2"
    },
    {
        texto: "Texto3",
        autor: "Andrius"
    },
    {
        texto: "Texto4",
        autor: "Andrius4"
    },
    {
        texto: "Texto5",
        autor: "Andrius5"
    },
];
var autor = "Andrius";
console.log(retornaPosts(posts, autor));
function retornaPosts(posts, autor) {
    return posts.filter(function (post) { return post.autor === autor; });
}
