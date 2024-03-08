function eliminarPropiedad(objeto, propiedad) {
  // El parámetro "propiedad" es una propiedad del objeto que recibes.
  // Debes eliminarla del objeto y retornarlo finalmente.
  // Tu código:

  // Eliminar la propiedad de un objeto
  delete objeto[propiedad];
  
  return objeto;
}

module.exports = eliminarPropiedad;
