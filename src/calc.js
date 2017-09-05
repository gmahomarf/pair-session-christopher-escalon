module.exports = class Calculator
{
    Add(numbers)
    {
        if(numbers === '')
            return 0;
        const numberArray = numbers.split(',');
        const sum = numberArray.reduce( (a, b) => parseInt(a) + parseInt(b) );
        return sum;
    }
}