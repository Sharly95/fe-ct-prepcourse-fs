   // La función recibe dos argumentos "str1" y "str2" que son strings.
   // Determina si los dos strings son anagramas.
   // Devuelve true de ser así, sino retorna false.
   // IMPORTANTE: Un anagrama es una palabra que se forma
   // con las mismas letras que otra, pero en orden diferente.
   // Tu código:
function esAnagrama(str1, str2) {
   // 0- Convierto los strings a minuscula, para no tener conflico al ordenar con el sort
   str1 = str1.toLowerCase();
   str2 = str2.toLowerCase();
   // 1- Separo cada caracter y lo convierto a array
   // 1-2 Ordenar los arrays resultantes. Deberian quedarme los 2 iguales
   let v1 = str1.split('').sort();
   let v2 = str2.split('').sort();
   // Convierto los arrays nuevamente a strings y los comparo
   str1 = v1.join(', ');
   str2 = v2.join(', ');
   
   if(str1 == str2){
      return true
   }else{
      return false
   }
}
//module.exports = esAnagrama('Roma','amor');
module.exports = esAnagrama;
