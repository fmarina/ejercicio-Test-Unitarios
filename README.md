# Tests - Practicas

Crea los tests unitarios para las funciones:

- `calificarPelicula()`
- `validarSiEsNuevaPelicula()`
- `comprobarDatosObligatorios()`
- `formatearMovieTagsToString()`
- `crearPeliculaenHtmlConJquery()`

### funcion calificarPelicula:

Esta funcion debe calificar a una pelicula como buena, normal o mala en base a su campo rating. Debe hacer un return de un "string" con la palabra _buena_, si la pelicula tiene un rating de _8.5_ o superior. _normal_ si tiene un rating entre _6 y 8.5_. _mala_ si tiene un rating inferior a _6_.

#### Validaciones:

- `calificarPelicula({rating: "10"})` debe retornar: `"buena"`
- `calificarPelicula({rating: "7"})` debe retornar: `"normal"`
- `calificarPelicula({rating: "2"})` debe retornar: `"mala"`
- `calificarPelicula({rating: "1....1"})` debe retornar: `null`
- `calificarPelicula({rating: ""})` debe retornar: `null`
- `calificarPelicula({rating: "asdawda"})` debe retornar: `null`

### funcion validarSiEsNuevaPelicula:

Esta funcion debe validar si la pelicula ingresada por parametro es "nueva" o no. Para que la pelicula se considere "nueva" su campo "year" debe estar dentro de los 3 ultimos (2020, 2019 o 2018). La funcion debe retornar _true_ si esta validacion se cumple o _false_ en el caso contrario.

#### Validaciones:

- `validarSiEsNuevaPelicula({year: "2019"})` debe retornar: `true`
- `validarSiEsNuevaPelicula({year: "2018"})` debe retornar: `true`
- `validarSiEsNuevaPelicula({year: "1998"})` debe retornar: `false`
- `validarSiEsNuevaPelicula({year: "2021"})` debe retornar: `null`
- `validarSiEsNuevaPelicula({year: "asdwad"})` debe retornar: `null`
- `validarSiEsNuevaPelicula({year: "2019dasd"})` debe retornar: `null`

### funcion comprobarDatosObligatorios:

Esta funcion valida que el objeto "pelicula" tenga todos los datos necesario/obligatorios en el formato esperado que require el resto de las funciones. La funcion devolvera `true` si la pelicula tiene todos los campos requeridos o `false` si no es asi. Los datos obligatorios son:

- el campo `img` es un `string` con el formato url (tip: https://www.regextester.com/94502)
- el campo `title` es un `string` que debe tener un lenght de al menos dos caracteres.
- el campo `year` es un `string` que solo debe contener numeros.
- el campo `rating` es un `string` que solo debe contener numeros de puto flotante o enteros.
- el campo `tags` es un `array` que contiene uno o varios `objetos` con el formato: `{ name: "tag_name" }`
- el campo `description` es un `string` que debe tener un lenght de al menos 50 caracteres.

#### Validaciones:

Crea las validaciones que creas necesarias para esta funcionalidad.

- `comprobarDatosObligatorios({img: "https://image.tmdb.org/t/p/w185/zgB9CCTDlXRv50Z70ZI4elJtNEk.jpg",rating: "10",title: "movie_name",year: "1995",tags: [{name: "tag_name"},],description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit'})` debe retornar: `true`
- `comprobarDatosObligatorios({img: "https://image.tmdb.org/t/p/w185/zgB9CCTDlXRv50Z70ZI4elJtNEk.jpg",rating: 10,title: "movie_name",year: "1995",tags: [{name: "tag_name"},],description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit'})` debe retornar: `false`
- `comprobarDatosObligatorios({img: "https://image.tmdb.org/t/p/w185/zgB9CCTDlXRv50Z70ZI4elJtNEk.jpg",rating: "10",title: "movie_name",year: 1995,tags: [{name: "tag_name"},],description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit'})` debe retornar: `false`
- `comprobarDatosObligatorios({img: "https://image.tmdb.org/t/p/w185/zgB9CCTDlXRv50Z70ZI4elJtNEk.jpg",rating: "10",title: "movie_name",year: "1995",tags: ["tag_name"],description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit'})` debe retornar: `false`
- `comprobarDatosObligatorios({img: "https://image.tmdb.org/t/p/w185/zgB9CCTDlXRv50Z70ZI4elJtNEk.jpg",rating: "10",title: "movie_name",year: "1995",tags: [{name: "tag_name"},],description:'Lorem ipsum dolor sit amet'})` debe retornar: `false`
- `comprobarDatosObligatorios({img: "https://image.tmdb.org/t/p/w185/zgB9CCTDlXRv50Z70ZI4elJtNEk.jpg",rating: "10",title: "m",year: "1995",tags: [{name: "tag_name"},],description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit'})` debe retornar: `false`
- `comprobarDatosObligatorios({img: "zgB9CCTDlXRv50Z70ZI4elJtNEk.jpg",rating: "10",title: "movie_name",year: "1995",tags: [{name: "tag_name"},],description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit'})` debe retornar: `false`

### funcion formatearMovieTagsToString:

Esta funcion debe formatear los tags de la pelicula para devolver un string donde estos tags estan separados por una ",". La funcion hace un return de un string con el formato "tag1, tag2, tag3".

#### Validaciones:

Crea las validaciones que creas necesarias para esta funcionalidad.

- `formatearMovieTagsToString({ tags: [{name: "tag1"}, {name: "tag2"}, {name: "tag3"}]})` debe retornar: `"tag1, tag2, tag3"`
- `formatearMovieTagsToString({ tags: [{name: "tag1"}, {name: "tag2"}]})` debe retornar: `"tag1, tag2,"`
- `formatearMovieTagsToString({ tags: [{name: "tag1"}]})` debe retornar: `"tag1"`
- `formatearMovieTagsToString({ tags: [{names: "tag1"}, {names: "tag2"}, {names: "tag3"}]})` debe retornar: `null`
- `formatearMovieTagsToString({ tags: ["tag1"]})` debe retornar: `null`

### funcion crearPeliculaenHtmlConJquery:

Esta funcion debe formatear la informacion de la pelicula para renderizarla posteriormente con jquery. Debe devolver un string con la siguiente estructura:

```
<li class="movie">
  <img class="movie__image" src="movie_img" alt="" />
  <div class="movie__summary">
    <div>
      <h2 class="movie__title">movie_title</h2>
      <span class="year">(movie_year)</span>
    </div>
    <div>
      <img
        class="movie__star"
        src="https://img.icons8.com/plasticine/2x/star--v1.png"
        alt=""
      /><span class="movie__rate">movie_rating</span
      ><span class="genre"> movie_tags + '</span>
    </div>
    <p class="movie__description">movie_description</p>
  </div>
</li>
```

#### Validaciones:

Crea las validaciones que creas necesarias para esta funcionalidad.
