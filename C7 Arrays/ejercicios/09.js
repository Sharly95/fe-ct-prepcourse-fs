function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
   var indice = Math.round(Math.random() * 4); //Me da el indice
   if(array == ''){
      return undefined;
   }else if(array.length == 1){
      return array[0];
   }else if(indice <= array.length - 1){
      return array[indice];
   }
}

module.exports = obtenerElementoAleatorio;
