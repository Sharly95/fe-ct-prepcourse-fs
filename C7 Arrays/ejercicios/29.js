function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un
  // array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:
  if(numeros == ''){
    return null;
  }
  let ok = false;
  let act = numeros;
  let ant = act[0];
  for(let i = 1; i < act.length; i++){
    if(ant != act[i]-1 ){
      return ant + 1;
    }
    ant = act[i];
  }
  return null;
}

module.exports = encontrarNumeroFaltante;