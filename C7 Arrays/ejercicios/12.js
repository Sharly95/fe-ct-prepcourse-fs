function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  return array.map(function (x) {
      return x.toUpperCase();
  });
}

module.exports = convertirStringAMayusculas;
