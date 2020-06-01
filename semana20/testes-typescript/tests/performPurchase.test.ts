import { User, performPurchase } from "../src/performPurchase"

test("Testing balance greater than value",()=>{
    const user: User ={
        name: "Andrius",
        balance: 333
    }

    const result = performPurchase(user, 33)

    expect(result).toEqual({
        ...user,
        balance:300
    })
})

test("Testing balance equal than value",()=>{
    const user: User ={
        name: "Andrius",
        balance: 333
    }

    const result = performPurchase(user, 333)

    expect(result).toEqual({
        ...user,
        balance:0
    })
})

test("Testing balance less than value",()=>{
    const user: User ={
        name: "Andrius",
        balance: 333
    }

    const result = performPurchase(user, 336)

    expect(result).toEqual(undefined)
})