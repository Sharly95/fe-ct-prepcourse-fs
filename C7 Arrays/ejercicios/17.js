function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:

  if(arrayOfNums == []){
    return 0;
  }
  //nota: como tengo que recorrer todos, puedo usar un foreach
  let suma = 0;
  arrayOfNums.forEach(element => {
      suma += element;
  });
  return suma;
}

module.exports = agregarNumeros;
