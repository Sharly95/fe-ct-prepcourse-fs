   // Esta función debe combinar de forma alternada cada caracter de cada string.
   // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
   // Los strings pueden tener cualquier tamaño.
   // EJEMPLOS
   // combine("abc", "", "123") == "a1b2c3"
   // combine("abc", "12345", "") == "a1b2c345"
   // combine("abc", "12345", "67") == "a16b27c345"

function combine(str1, str2, str3) {
   //****************************************************************** */
   //Con Math.max, Obtenemos! el valor del string que tiene mayor caracteres.
   var resultado = '';
   var limite = Math.max(str1.length, str2.length, str3.length);

   for (let i = 0; i < limite; i++) {
      if(i <= (str1.length) - 1){
         resultado += str1[i];
      }
      if(i <= (str2.length) - 1){
         resultado += str2[i];
      }
      if(i <= (str3.length) - 1){
         resultado += str3[i];
      }
   }
   return resultado;
}
module.exports = combine;