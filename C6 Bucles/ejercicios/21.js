function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  let aux = 2;
  while(aux <= numero){
    if(aux === numero) return true;
    aux = aux * 2;
    
  }
  return false;
}
module.exports = esPotenciaDeDos;
