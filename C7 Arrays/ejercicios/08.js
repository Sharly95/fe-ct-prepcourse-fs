function encontrarElemento(num, array) {
   // Busca el número pasado por argumento dentro del array.
   // Si lo encuentras debes retornar el INDICE en el que se encuentra dentro del array.
   // Si no se encuentra, retorna -1.
   // Tu código:
   for(let i = 0; i <= (array.length)-1; i++){
      if(array[i] == num){
         return i;
      }
   }
   return -1;
}

//var array = ['1','2','3'];

module.exports = encontrarElemento;
