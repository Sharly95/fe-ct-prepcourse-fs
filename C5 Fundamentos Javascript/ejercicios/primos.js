    // La función recibe un argumento "numero".
    // Determina si este corresponde a un número primo.
    // De ser así, retorna true.

    // De lo contrario, retorna false.
    // IMPORTANTE: Recuerda que un número primo es aquel que
    // solo es divisible por sí mismo y por 1.
    // Tu código:
function esNumeroPrimo(num) {
    if((num === 2) && (num > 1)){
        return true;
    }
    // Buscamos que no sea primo
    for(let i = 2; i <= Math.sqrt(num); i++){
        if((num % i) == 0 ){
            return false;
        }
    }
    return true;
}

console.log(esNumeroPrimo(121))
