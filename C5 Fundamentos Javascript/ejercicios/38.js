// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba y retórnalo.
  // Tu código:
  return 'Redondeo hacia arriba: ' + num + 'es: ' + Math.ceil(num);
}

module.exports = redondearHaciaArriba(Math.random() * 100);