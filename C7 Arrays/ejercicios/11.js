function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:

  //USAMOS EL MOTEDO MAP
  return array.map(function (x) {
    return x*2;
  });

}

module.exports = duplicarElementos;

