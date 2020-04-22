type post = {
    texto: string,
    autor: string
}

const posts: post[]=[
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
]

const autor: string = "Andrius"

console.log(retornaPosts(posts,autor))

function retornaPosts(posts:post[],autor:string):post[] {
    return posts.filter(post=>{return post.autor===autor})
}