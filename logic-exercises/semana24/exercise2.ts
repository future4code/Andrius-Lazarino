function inverterNumber(numberInput: number): number {
    return Number(numberInput < 0 ?
        "-" + numberInput.toString()
            .split('').reverse().join('')
            .substring(0, numberInput.toString().length - 1) :
        numberInput.toString().split('').reverse().join(''))
}
console.log(inverterNumber(120))