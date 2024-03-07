/*
EL METODO SORT DE VECTORES, UTILIZA EXPRESIONES
POR ESO ES COMPLICADO DE ENTENDERLO
*/

function sort(key, list ){
    
    return list.sort((a, b) =>{
        // Verificamos si ambos objetos tienen la propiedad key
        if(a.hasOwnProperty(key) && a.hasOwnProperty(key)){
            // Ordenar de forma descendiente basado en la propiedad key
            return b[key] - a[key];
        }else{
            // Si uno de los objetos no tiene la propiedad key, colocarlo al final
            if  ( a.hasOwnProperty(key)){
                return -1;      // Colocar 'a' antes de 'b'
            }else if( b.hasOwnProperty(key)){
                return 1;       // Colocar 'b' antes de 'a'
            }else{
                return 0;       // Mantener el orden 
            }
        }
    })
}


// Principal
const resultado = sort("a", [{ a: 1, b: 3 }, { a: 3, b: 2 }, { a: 2, b: 40 }]);
console.log(resultado);


// ASDASDASDrecorremos el v y a cada elementos le aplicamos sort/
