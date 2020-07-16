import { verifyMissingNumber } from "../semana22/exercise14"

test("Search missing number", () => {
  const arrayMock1 = [2,6,3,4,5,8,9,11,10,13,12]
  const arrayMock2 = [1,2,3,4,5,7,8,9,10,11,12]
  const arrayMock3 = [8,12,11,10,1,2,3,4,5,7,6]

  expect(verifyMissingNumber(arrayMock1)).toBe(7)
  expect(verifyMissingNumber(arrayMock2)).toBe(6)
  expect(verifyMissingNumber(arrayMock3)).toBe(9)
})

test("Search missing number 2", () => {
    const arrayMock1 = []
    const arrayMock2 = []
    const arrayMock3 = []
    for (let i = 3; i<=100;i++){
        i!==66 && arrayMock1.push(i)
    }
    for (let i = 3; i<=100;i++){
        i!==33 && arrayMock2.push(i)
    }
    for (let i = 3; i<=100;i++){
        i!==12 && arrayMock3.push(i)
    }
    expect(verifyMissingNumber(arrayMock1)).toBe(66)
    expect(verifyMissingNumber(arrayMock2)).toBe(33)
    expect(verifyMissingNumber(arrayMock3)).toBe(12)
  })