function saludo(idioma) {
  // Retornar un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!".
  // Si "idioma" es "mandarin", devuelve "Ni Hao!".
  // Si "idioma" es "ingles", devuelve "Hello!".
  // Si "idioma" no es ninguno de los anteriores o es `undefined`, devuelve "Hola!".
  // Tu código:
  


  if(idioma != 'aleman' && idioma != 'mandarin' && idioma != 'ingles' || idioma == 'undefined'){
    return "Hola!";
  }
  var minIdioma = idioma.toLowerCase();

  if(minIdioma == "aleman"){
    return 'Guten Tag!';
  }else if(minIdioma == "mandarin"){
    return 'Ni Hao!';
  }else if(minIdioma == 'ingles'){
    return 'Hello!';
  }
}

module.exports = saludo;
