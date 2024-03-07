function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  var retultado = array.filter( (n) => n % 2 == 0);
  return retultado;
}

module.exports = filtrarNumerosPares;
