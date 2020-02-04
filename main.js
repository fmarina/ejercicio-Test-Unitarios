function calificarPelicula(movie) {
  if(isNaN(parseFloat(movie.rating))){
    return null;
  }
  if(parseFloat(movie.rating) >= 8.5) {
    return "buena";
  } else if (parseFloat(movie.rating) >= 6) {
    return "normal";
  } else {
    return "mala";
  } 
}

function crearPeliculaenHtmlConJquery(movie) {
  return (
    '<li class="movie"><img class="movie__image" src="' +
    movie.img +
    '" alt=""><div class="movie__summary"><div><h2 class="movie__title">' +
    movie.title +
    '</h2><span class="year">(' +
    movie.year +
    ')</span></div><div><img class="movie__star" src="https://img.icons8.com/plasticine/2x/star--v1.png" alt=""><span class="movie__rate">' +
    movie.rating +
    '</span><span class="genre"> ' +
    movie.tags[0].name +
    '</span></div><p class="movie__description">' +
    movie.description +
    "</p></div></li>"
  );
}

function formatearMovieTagsToString(movie) {
  if (typeof movie.tags[0] === 'object' && movie.tags[0].hasOwnProperty('name')){
    let tagsformateadas = "";
    for (let index = 0; index < movie.tags.length; index++){
      const element = movie.tags[index];
      if (index === 0){
        tagsformateadas = element.name;
      }
      else{
        tagsformateadas += ", " + element.name;
      }
    }
    return tagsformateadas;
  }
  else{
    return null
  } 
}

function validarSiEsNuevaPelicula(movie){
  var fecha = new Date().getFullYear();
  if(movie.year > fecha || isNaN(movie.year)){
    return null
  }
  if (movie.year > 2017) {
    return true;
  } else {
    return false;
  }
}

function comprobarDatosObligatorios(movie) {
  if (movie.title.length < 2 && typeof movie.title !== "string"){
    return false;
  }
  else if (typeof movie.img !== "string") {
    return false;
  }
  else if(movie.img !== /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/)
  {
    return false;
  }
  else if (typeof movie.rating !== "string" && /^[0-9]+$/.test(movie.rating)) {
    return false;
  }
  else if (typeof movie.year !== "string" && /^[0-9]+$/.test(movie.year)) {
    return false;
  }
  else if (!Array.isArray(movie.tags)) {
    return false;
  }
  else if (movie.description.length < 50 || typeof movie.description !== "string") {
    return false;
  }
  return true;  
}

