function esMayorDeEdad(fechaNacimiento) {
  // La función recibe un argumento "fechaNacimiento" correspondiente a la fecha
  // de nacimiento de una persona.
  // Determina si esta persona es mayor de edad (tiene 18 años o más).
  // Devuelve true si lo es, caso contrario, retorna false.
  // PISTA: Investiga el método getFullYear() de la clase Date para obtener el año actual.
  // Tu código:

  // 1 lo que se pasa por parametro es un objeto

  const fechaActual = new Date();
  if((fechaActual.getFullYear() - fechaNacimiento.getFullYear() >= 18) &&
      fechaNacimiento.getFullYear() < fechaActual.getFullYear()){
      return true;
  }

  return false;
}


//const fechaNacimiento = new Date("2010-01-01");
//console.log(esMayorDeEdad(fechaNacimiento));
module.exports = esMayorDeEdad;