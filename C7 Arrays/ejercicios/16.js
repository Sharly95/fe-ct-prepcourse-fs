function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:

  if(array == []){
    return 0;
  }
  // un arreglo es un tipo objeto global
  var resultados = [];
  for(let i = 0; i < array.length; i++){
      resultados[i] = array[i] * i;
  };
  return resultados;
 }

module.exports = multiplicarElementosPorIndice;

