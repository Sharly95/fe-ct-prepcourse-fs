// La función recibe un argumento "string".
// Verifica si este string es palíndromo o no.
// Retorna true si lo es, caso contrario, retorna false.
// IMPORTANTE: Un palíndromo es una palabra o frase
// que se lee igual hacia adelante que hacia atrás.
// Tu código:
function esPalindromo(string) {
    const long = string.length -1;
    for(let i = 0; i<=long; i++){
        if(string[i] !== string[long-i]) return false;
    }
    return true;
}
console.log(esPalindromo('radar'));