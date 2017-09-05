var Calculator = require('../src/calc');
var assert = require('chai').assert;

var calc = new Calculator();

describe('Calculator', function() {
    it('Test no numbers', function() {
        assert.equal(calc.Add(''), 0);
    });
})