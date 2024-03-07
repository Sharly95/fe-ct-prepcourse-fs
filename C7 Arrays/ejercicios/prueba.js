var valor = Math.round(Math.random() * 4);

const array = [1, 2, 3, 4, 5];

if(valor <= array.length - 1){
    console.log(array[valor]);
}


///          [1, 2, 3, 4, 5]



const array2 = [1, 2, 3, 4, 5];

if(array2.includes(1, 2, 3,)){
    console.log(true);
}else{
    console.log(false);
}
