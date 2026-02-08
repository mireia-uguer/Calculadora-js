const sumar = require('../src/suma');

test('suma 10 + 20 debería ser 30', () => {
    expect(sumar(10, 20)).toBe(30);
});

test('suma -1 + 1 debería ser 0', () => {
    expect(sumar(-1, 1)).toBe(0);
});

test('suma 0 + 0 debería ser 0', () => {
    expect(sumar(0, 0)).toBe(0);
});