let nombre = 'hello world'

for (let i = 0; i < nombre.length; i++) {
    console.log(nombre[i]);
    
}


let cadena = "roma";
let cadena2 = 'amor';

cadena2 = cadena2.replace(cadena[1], '');
console.log(cadena2);

// ///////////////
let str1 = "hola";
let str2 = 'aloh';

if(str1.length == str2.length){
       for(let i = 0; i < str1.length; i++){
            console.log(str2)
            str2 = str2.replace(str1[i], "");
        }
        if(str2 == ''){
            console.log('true')
        }else
            console.log('false')
}
