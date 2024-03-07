
var texto = 'No subas, abusón';
//var texto = 'ooo';
// Normalizar el texto para eliminar acentos
texto = texto.normalize("NFD").replace(/[\u0300-\u036f-/,]/g, ""); //Expresion regular
// Quitar los espacios en blanco
texto = texto.replace(/\s+/g, ""); //Expresion regular
// Convertir el texto a minúsculas
texto = texto.toLowerCase();

var resultado1 = '';
var resultado2 = '';
var longitud = Math.max((texto.length) - 1);
   
for (let i = 0; i <= longitud ; i++) {
         resultado1 += texto[i];
         resultado2 += texto[longitud - i];
         if(resultado1[i] !== resultado2[i]){
            console.log('puto');
         }
         
   }


console.log(resultado1);
/*
console.log(resultado2);
*/