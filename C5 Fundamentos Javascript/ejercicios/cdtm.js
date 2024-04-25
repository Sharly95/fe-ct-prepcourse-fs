let arrayString = fecha.split('-');
const year = parseInt(arrayString[0]);
const month = parseInt(arrayString[1]);
const day = parseInt(arrayString[2]);
// Armo el objeto Date() y averiguo si los formatos son validos
let fechaOb = new Date(year, month-1, day);
// Valido las fechas
if((fechaOb.getFullYear() == year) && ((fechaOb.getDay()-1) === day) && fechaOb.getMonth()+1  === month){
    return true;
}else{
  return false;
}