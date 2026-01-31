const { sum, multiply, subtract } = require('./main');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('subtracts 5 - 3 to equal 2', () => {
    expect(subtract(5, 3)).toBe(2);
});

test('multiplies 4 * 3 to equal 12', () => {
    expect(multiply(4, 3)).toBe(12);
});

