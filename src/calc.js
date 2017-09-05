module.exports = class Calculator
{
    Add(numbers)
    {
        if(numbers === '')
            return 0;
        return parseInt(numbers);
    }
}