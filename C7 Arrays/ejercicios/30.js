function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:

  for(let i=0;i < numeros.length; i++){
    for(let k=0; k < numeros.length; k++){
        if(numeros[i] == numeros[k] && k != i){
          return numeros[i];
        }
    }
      
  }
  return undefined;
}

module.exports = encontrarElementoRepetido;