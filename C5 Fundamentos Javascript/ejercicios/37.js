// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function redondearNumero(num) {
   // Redondea "num" al entero más próximo y retórnalo.
   // Tu código:
   return 'El numero mas proximo de ' + num + ' es: ' + Math.round(num);
}

module.exports = redondearNumero((Math.random() * 100));
