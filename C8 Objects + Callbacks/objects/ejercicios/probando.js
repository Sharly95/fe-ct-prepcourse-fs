//El metodo sort puede ser usado convenientemente
// con function expressions (y closures)

const numbers = [4, 2, 5, 1, 3];
numbers.sort(function (a, b) {
  return b - a;
});
console.log(numbers);


/*************************************
 * 
 * Los objectos pueden ser 
 * ordenados por el valor de "una" de sus propiedades.
 */

const items = [
    { name: "Edward", value: 21 },
    { name: "Sharpe", value: 37 },
    { name: "And", value: 45 },
    { name: "The", value: -12 },
    { name: "Magnetic", value: 13 },
    { name: "Zeros", value: 37 },
  ];
  // Esto ordena todo el Vector
  // Yo solo tengo que pasarle las expresiones correctas
  //nota: puede dar resultados inconsistentes
  items.sort(function (a, b) {
    if (a.name > b.name) {
      return 1; //a es mayor que b según criterio de ordenamiento
    }
    if (a.name < b.name) {
      return -1;    //a es menor que b según criterio de ordenamiento
    }else{
      return 0;      // a deben ser iguales b
    }              
  });
