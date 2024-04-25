    // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
    // La diferencia es que cada palabra estará escrita al inverso.
    // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
    // Tu código:

function asAmirror(frase) {  
    let vf = frase.split(' ');
    let resultado = []

    for(let i = 0; i<vf.length; i++){
      let elemento = vf[i].split('');
      for(let j = 0; i<elemento.length; j++){
          resultado.unshift(elemento[i]);
      }
      resultado += ' ';
    }
  
    console.log(resultado);
    console.log('hola');
}
console.log('hola');
console.log(asAmirror("The Henry Challenge is close!"));