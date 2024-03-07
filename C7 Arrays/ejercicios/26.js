function encontrarPrimerMultiploDeN(n, secuencia) {
  // La función recibe un numero "n" y un array de números "secuencia" como argumentos.
  // Devuelve el primer múltiplo de n
  // que encuentres en la secuencia de números.
  // Usa un break para detener el bucle una vez halles el múltiplo.
  // Tu código:
  if(secuencia == ''){
    return undefined;
  }
  let cont = 0;
  while(secuencia){
    if((secuencia[cont] % n) == 0) break;
    cont++;
  }
  return secuencia[cont];
}

//module.exports = encontrarPrimerMultiploDeN(7, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
module.exports = encontrarPrimerMultiploDeN;

// n = 2
// secuentic= 1,2,3,4,5,6,7
// como saber si un numero es multiplo=?