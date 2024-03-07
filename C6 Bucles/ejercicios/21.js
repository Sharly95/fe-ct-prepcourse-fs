function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  if(numero == 1){
    return true;
  }else if(numero <= 0){
    return false
  }
  let aux = 1;
  let i = 1;
  while(aux <= numero){
    if(aux == numero){
      return true;
    }else{
      aux = aux * 2;
    }
  }
  return false;
}
module.exports = esPotenciaDeDos;
