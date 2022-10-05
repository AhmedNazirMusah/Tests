const Calculator = require('./calculator')

describe('testing various calculator funtions', () => {
    const calc = new Calculator(20,10)

    test('should be adding', () => {
        expect((calc.add(20,10))).toEqual(30)
    });

    test('should be subtracting', () => {
        expect((calc.subtract(20, 10))).toEqual(10)
    });

    test('should be multiplying', () => {
        expect((calc.multiply(20, 10))).toEqual(200)
    });

    test('should be dividing', () => {
        expect((calc.divide(20,10))).toBe(2)
    });

})