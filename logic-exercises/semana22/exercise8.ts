
console.log(challenge([14, 78, 90], 10))
function challenge(array, num) {
    let result = []
    for (
        let i = array[0] < num ? array[array.length - 1]+1 : num;
        i <= (array[0] > num ? array[0]-1 : num);
        i++
    ) {
        result.push(i)
    }
    return array[0]<result[result.length-1]?[...array, ...result]:[...result, ...array]
}
