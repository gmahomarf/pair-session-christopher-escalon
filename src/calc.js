module.exports = class Calculator
{
    Add(numbers)
    {
        if(numbers === '')
            return 0;
        const numberArray = numbers.split(',');
        const sum = parseInt(numberArray[0]) + parseInt(numberArray[1] || '0');
        return sum;
    }
}