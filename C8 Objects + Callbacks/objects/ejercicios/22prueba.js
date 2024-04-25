// La función recibe dos argumentos "str1" y "str2" que son strings.
   // Determina si los dos strings son anagramas.
   // Devuelve true de ser así, sino retorna false.
   // IMPORTANTE: Un anagrama es una palabra que se forma
   // con las mismas letras que otra, pero en orden diferente.
   // Tu código:
function esAnagrama(str1, str2) {
   let a1 = str1.toLowerCase().split('').sort();
   let a2 = str2.toLowerCase().split('').sort();
   if(a1.length == a2.length){
        for(let i = 0; i < a1.length ; i++){
            if(!a2.includes(a1[i])){
                return false;
            }
    }
   }else{
        return false
   }
   return true;
   

   // map raduce includes filter devuelve un arreglo segun una condicion
}


console.log(esAnagrama('hola', 'alohX'))