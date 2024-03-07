const multiplicarArgumentos = require('../ejercicios/19');


test('Debe retornar el producto de los argumentos', function () {
   const product = multiplicarArgumentos(5, 5);
   const product2 = multiplicarArgumentos();
   const product3 = multiplicarArgumentos(3, 3, 3, 3);
   const product4 = multiplicarArgumentos(1);
   const product5 = multiplicarArgumentos(10, 0, 10);
   expect(product).toBe(25);
   expect(product2).toBe(0);
   expect(product3).toBe(81);
   expect(product4).toBe(1);
   expect(product5).toBe(0);
});


/*
test('Debe retornar el producto de los argumentos', function () {
   expect(multiplicarArgumentos(5, 5)).toBe(25);
   expect(multiplicarArgumentos()).toBe(0);
   expect(multiplicarArgumentos(3, 3, 3, 3)).toBe(81);
   expect(multiplicarArgumentos(1)).toBe(1);
   expect(multiplicarArgumentos(10, 0, 10)).toBe(0);
});

*/