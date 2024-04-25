function invertirTexto(texto) {
   // La función recibe un argumento "texto" que es un string.
   // Tu objetivo es invertir el string y devolver el string invertido.
   // Tu código:
   var res = '';
   var long = texto.length-1;
   while(long >= 0){
      res += texto[long];
      long --;
   }
   return res; 
}

module.exports = invertirTexto;