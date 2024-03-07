  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:



function esFechaValida(fecha) {
  if(fecha == '' || fecha == ' ' || fecha == null){
    return false;
  }

  let partes = (fecha).split('-');

    if((partes[0] >= '01' && partes[0] <= 31 )&&
      (partes[1] >= '01' && partes[1] <= 12 )&&
      (partes[2] >= '1900' && partes[2] <= 9999 )){
        return true;
    }

    return null;
}

module.exports = esFechaValida('3-09-1995');



