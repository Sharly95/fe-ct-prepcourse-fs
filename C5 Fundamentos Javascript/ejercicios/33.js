function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:
  if( numero == 2){
    return true;
  }

  if((numero % 2 === 0)){
    return false;
  }else if(numero % Math.sqrt(numero) != undefined){
        }if (numero % Math.sqrt(numero) === 0){
            return false;
  }
  return true;
}
module.exports = esNumeroPrimo(1);

