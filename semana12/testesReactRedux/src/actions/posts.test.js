import { setPost } from "./posts"

describe("Posts Action-Creators", () => {
    test("Create post", () => {
        const mockPost = {
            comments: [{
                userVoteDirection: 0,
                id: "1S0z4Luxj0W3mPRtVKc6",
                votesCount: 2,
                text: "O feijão queimou! ",
                username: "fulano",
                createdAt: 1585857620331,
            }],
            userVoteDirection: 0,
            id: "0COaXIBbosGCvdIMNv9Y",
            text: "E ele morreu!",
            username: "SeiLa",
            createdAt: 1585748516971,
            title: "Atirei o pau no gato!",
            votesCount: 5,
            commentsCount: 15,
        }
        const mockedAction = setPost(mockPost)

        console.log(mockedAction.payload.post)
        // expect(mockedAction.type).toEqual("SET_POST")
        // expect(mockedAction.data.text).toBeDefined()
        expect(mockedAction.payload.post).toEqual(mockPost)
    })
})