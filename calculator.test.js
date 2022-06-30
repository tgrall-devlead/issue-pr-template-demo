const calculator = require('./calculator');

// test for add function
test('add function test', () => {
    expect(calculator.add(1, 2)).toBe(3);
    expect(calculator.add(2, 2)).toBe(4);
    expect(calculator.add(3, 2)).toBe(5);
});


// test for sub function
test('sub function test', () => {
    expect(calculator.sub(1, 2)).toBe(-1);
    expect(calculator.sub(2, 2)).toBe(0);
    expect(calculator.sub(3, 2)).toBe(1);
});
