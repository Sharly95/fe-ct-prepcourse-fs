function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  const arrayResultado = [];
  let contador = 0;

  if(array == ''){
    return 0;
  };

  array.forEach(element => {
      if(element == "Marzo" || element == "Noviembre" || element == "Enero"){
        contador++;
        arrayResultado.push(element);
      }
  });
 
  if(contador == 3){
    return arrayResultado;
  };
  return "No se encontraron los meses pedidos";
};

//const array = ['Hola', "carlos", "Enero"];
//module.exports = mesesDelAño(['Marzo', 'Enero', 'Julio', 'Noviembre']);
module.exports = mesesDelAño;

