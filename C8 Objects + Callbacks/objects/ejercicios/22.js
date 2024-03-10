   // La función recibe dos argumentos "str1" y "str2" que son strings.
   // Determina si los dos strings son anagramas.

   // Devuelve true de ser así, sino retorna false.
   // IMPORTANTE: Un anagrama es una palabra que se forma
   // con las mismas letras que otra, pero en orden diferente.
   // Tu código:
function esAnagrama(str1, str2) {
   if(str1.length == str2.length){
      for(let i = 0; i < str1.length; i++){
         str2 = str2.replace(str1[i], "");
      }
      if(str2 == ''){
         return true;
      }else{
         return false;
      }
   }
   return false;
}
module.exports = esAnagrama;
