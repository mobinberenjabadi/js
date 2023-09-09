class Calculate{
    constructor(num1,num2)
    {
        this.num1 = this.convertToNumber(num1)
        this.num2 = this.convertToNumber(num2)
    }
    JamTwoNumber()
    {
        console.log(this.num1 + this.num2)

    }

    MenhaTwoNumber()
    {
        console.log(this.num1 - this.num2)
    }
    ZarbTwoNumber()
    {
        console.log(this.num1 * this.num2)
    }
    TaghsimTwoNumber()
    {
        console.log(this.num1 / this.num2)
    }

    convertToNumber(number)
    {
        if (number == '' || number == null)
            return 0
        if (typeof number == 'number')
            return number
        number = parseInt(number)

        if (typeof number == 'number' && number != NaN)
            return number
        return 0
    }
}
var calc = new Calculate(20,30)
calc.JamTwoNumber()
calc.MenhaTwoNumber()
calc.ZarbTwoNumber()
calc.TaghsimTwoNumber()