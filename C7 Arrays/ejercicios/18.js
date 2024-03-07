function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest
  // y devuelve el promedio de las notas.
  // Tu código:

  if(resultadosTest == []){
    return 0;
  }
  let total = resultadosTest.length;
  var suma = 0;
  // Como tengo que recorrer todo el vector, puedo usar foreach
  resultadosTest.forEach(element => {
    suma += element;
  });
  return suma / total;

}

module.exports = promedioResultadosTest;
