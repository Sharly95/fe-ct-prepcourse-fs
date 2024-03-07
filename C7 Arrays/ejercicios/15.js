function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:

  /*
  tengo que recorrerlo todo y saber donde estoy parado, tengo
   que usar un for
  1 var para el indice (k)
  */if(array == ''){
    return 0;
  }
  let k = 0;
  for(let i = 0; i < array.length; i++){
    if(array[k] < array[i]){
      k = i;
    }
  }
  return k;
}

module.exports = encontrarIndiceMayor;
