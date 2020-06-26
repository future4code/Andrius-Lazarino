export function verifyMissingNumber(inputArray:number[]){
    let lowestNumber = inputArray[0]
    for (const i of inputArray){
        i<lowestNumber && (lowestNumber=i)
    }
    for (let i = lowestNumber; i<Infinity; i++){
        if (inputArray.indexOf(i)<0){
            return i
        }
    }
}
console.log(verifyMissingNumber([2,4,3,7,6,8,9,10,12,12]))
