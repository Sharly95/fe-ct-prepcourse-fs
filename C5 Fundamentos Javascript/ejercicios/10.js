  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:


  // FECHA ES UN OBJETO!!"!!!!!"
function esFechaValida(fecha) {


// Si se pasa por parametro eso
if(fecha == "Invalid Date") return false

// Comprobamos si es una fecha valida
// instanceof, si fecha es instancia de Date
if( fecha instanceof Date ) return true
else return false



}


module.exports = esFechaValida;
