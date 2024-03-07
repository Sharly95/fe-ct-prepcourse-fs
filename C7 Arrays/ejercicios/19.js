function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0.
  // Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:

  const argArray = Array.from(arguments);


  if(argArray == ''){
    return 0;
  }else if(argArray.length == 1){
    return argArray[0];
  };
  let producto = 1;
  argArray.forEach(element => {
      producto = producto * element;
  });

  return producto;
}

//module.exports = multiplicarArgumentos();
module.exports = multiplicarArgumentos;
