var Calculator = require('../src/calc');
var assert = require('chai').assert;

var calc = new Calculator();

describe('Calculator', function() {
    it('Test no numbers', function() {
        assert.equal(calc.Add(''), 0);
    });

    it('test one number', () => {
        assert.equal(calc.Add('5'), 5);
    })

    it('Test two numbers', function() {
        assert.equal(calc.Add('1,2'), 3);
    })

    it('Test unknown amount of numbers', () => {
        const numbers = [];
        const amount = Math.floor(Math.random() * 20) + 1;
        for (let i = 0; i < amount; i++) {
            let number = Math.floor(Math.random() * 20) + 1;
            numbers.push(number)
        }

        const expectedSum = numbers.reduce((sum, num) => sum + num, 0);
        const args = numbers.join(',');
        assert.equal(calc.Add(args), expectedSum);
    });
})