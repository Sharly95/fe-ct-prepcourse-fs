function esVerdadero(valor) {
  // Si "valor" es verdadero, retorna "Soy verdadero".
  // Caso contrario, retorna "Soy falso".
  // Tu código:
  if(valor == true){
      return 'Soy verdadero';
  }else{
    return 'Soy falso';
  }
}

module.exports = esVerdadero(false);


//******************************************************************************* */
// con switch

function esVerdaderoConSwitch(valor){
  switch (valor){
    case true:
      return 'Soy verdadero';
      break;
    case false:
      return 'Soy falso';
      break;
    default:
      return ('Ingrese un dato valido');
      break;
  }
}

module.exports = esVerdaderoConSwitch;
