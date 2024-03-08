function invocarMetodo(objeto, metodo) {
  // El parámetro "metodo" es un string que coincide con el nombre de una propiedad del objeto recibido.
  // Esta propiedad contiene una función en su interior. 
  // Debes invocarla/ejecutarla.
  // NOTA: no necesitas retornar nada.
  // Tu código:

  objeto[metodo]();           // Ejecutar una funcion, que tambien es una propiedad de un objeto
}

module.exports = invocarMetodo;
