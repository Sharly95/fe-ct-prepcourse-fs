/*
Esta solucion es buena, por que el objeto Date() 
ya tiene los valores de parametros de los dias y meses validos

*/


function esFechaValida(fecha) {
// Expresión regular para verificar el formato "YYYY-MM-DD"
var regex = /^\d{4}-\d{2}-\d{2}$/;
    
// Verificar si la fecha cumple con el formato
if (!regex.test(fecha)) {
    return false; // Formato incorrecto
}

// Verificar si la fecha es válida con el objeto Date
var partesFecha = fecha.split("-");
var anio = parseInt(partesFecha[0]);
var mes = parseInt(partesFecha[1]) - 1; // Restamos 1 al mes porque en JavaScript los meses van de 0 a 11
var dia = parseInt(partesFecha[2]);

var fechaObj = new Date(anio, mes, dia);
if (isNaN(fechaObj.getTime())) {
    return false; // Fecha inválida
}

// Verificar si la fecha es igual a la fecha original (puede haber discrepancias, como febrero 30)
if (fechaObj.getFullYear() !== anio || fechaObj.getMonth() !== mes || fechaObj.getDate() !== dia) {
    return false; // Fecha inválida (por ejemplo, febrero 30)
}

// Si la fecha pasa todas las validaciones, es válida
return true;


}

console.log(esFechaValida('2000-12-03'));
console.log(esFechaValida('2000-99-03'));     // Esto lo comprobamos facilmente con el objeto Date();