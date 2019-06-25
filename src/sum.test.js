const Suma = require('./sum');

var suma = new Suma();
test('add 1 + 2', () => {
    expect(suma.sum(1, 2)).toBe(3);
})