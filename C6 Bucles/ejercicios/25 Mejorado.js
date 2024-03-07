function esPalindromo(string) {
   // La función recibe un argumento "string".
   // Verifica si este string es palíndromo o no.
   // Retorna true si lo es, caso contrario, retorna false.
   // IMPORTANTE: Un palíndromo es una palabra o frase
   // que se lee igual hacia adelante que hacia atrás.
   // Tu código:

   var texto = string;
   // Normalizar el texto para eliminar acentos
    texto = texto.normalize("NFD").replace(/[\u0300-\u036f-/,]/g, ""); //Expresion regular
    // Quitar los espacios en blanco
    texto = texto.replace(/\s+/g, ""); //Expresion regular
    // Convertir el texto a minúsculas
    texto = texto.toLowerCase();

   let resultado1 = '';
   let resultado2 = '';
   var longitud = Math.max((texto.length) - 1);
   
   for (let i = 0; i <= longitud ; i++) {
         resultado1 += texto[i];
         resultado2 += texto[longitud - i];
         if(resultado1 != resultado2){
            console.log('todo mal');
            return false;
         }
   }
   if(resultado1 == resultado2){
      console.log('todo bien');
      return true;
   }
}

module.exports = esPalindromo;

// ('No subas, abusón')


