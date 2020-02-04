var expect = chai.expect;
var assert = chai.assert;

describe("Test función calificarPelicula()", function() {
  it("calificarPelicula test con rating '10'", function(){
    var resultado = calificarPelicula({rating: "10"});
    var esperado = "buena"
    expect(resultado).to.equal(esperado);
  });

  it("calificarPelicula test con rating '7'", function(){
    var resultado = calificarPelicula({rating: "7"});
    var esperado = "normal"
    expect(resultado).to.equal(esperado);
  });

  it("calificarPelicula test con rating '2'", function(){
    var resultado = calificarPelicula({rating: "2"});
    var esperado = "mala"
    expect(resultado).to.equal(esperado);
  });

  it("calificarPelicula test con rating '1....1'", function(){
    var resultado = calificarPelicula({rating: "1.....1"});
    var esperado = "mala";
    expect(resultado).to.equal(esperado);
  });

  it("calificarPelicula test con rating ''", function(){
    var resultado = calificarPelicula({rating: ""});
    assert.equal(resultado, null);
  });

  it("calificarPelicula test con rating 'asdawda'", function(){
    var resultado = calificarPelicula({rating : "asdawda"});
    expect(resultado).to.equal(null);
  });
});


describe("Test función validarSiEsNuevaPelicula()", function(){
  it('validarSiEsNuevaPelicula({year: "2019"})', function(){
    var resultado = validarSiEsNuevaPelicula({year : "2019"});
    expect(resultado).to.equal(true);
  });

  it('validarSiEsNuevaPelicula({year: "2018"})', function(){
    var resultado = validarSiEsNuevaPelicula({year : "2018"});
    expect(resultado).to.equal(true);
  });

  it('validarSiEsNuevaPelicula({year: "1998"})', function(){
    var resultado = validarSiEsNuevaPelicula({year : "1998"});
    expect(resultado).to.equal(false);
  });

  it('validarSiEsNuevaPelicula({year: "2021"})', function(){
    var resultado = validarSiEsNuevaPelicula({year : "2021"});
    expect(resultado).to.equal(null);
  });

  it('validarSiEsNuevaPelicula({year: "asdwad"})', function(){
    var resultado = validarSiEsNuevaPelicula({year : "2021"});
    expect(resultado).to.equal(null);
  });

  it('validarSiEsNuevaPelicula({year: "2019dasd"})', function(){
    var resultado = validarSiEsNuevaPelicula({year : "2019dasd"});
    expect(resultado).to.equal(null);
  });
});


describe("Test función ComprobarDatosObligatorios()", function(){
/* /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(:[0-9]+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/ */
  it("Campo imagen tiene un formato url", function(){
    var movie = {
      img: "zgB9CCTDlXRv50Z70ZI4elJtNEk.jpg",
      rating: "10",
      title: "movie_name",
      year: "1995",
      tags: [{name: "tag_name"},],
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    };
    var resultado = comprobarDatosObligatorios(movie);      
    assert.equal(resultado, false);
  });

  it("Title debe tener un lenght de dos caracteres o mas", function(){
    var movie = {
      img: "https://image.tmdb.org/t/p/w185/lIv1QinFqz4dlp5U4lQ6HaiskOZ.jpg ",
      rating: "8.4",
      title: "W",
      year: "2014",
      tags: [ {name: "Music"}, {name: "Drama"} ],
      description: "Under the direction of a ruthless instructor, a talented young drummer begins to pursue perfection at any cost, even his humanity."
    };
    var resultado = comprobarDatosObligatorios(movie);
    assert.equal(resultado, false);
  });
  
  it("Year es un string que solo debe contener numeros", function(){
    var movie = {
      img: "https://image.tmdb.org/t/p/w185/lIv1QinFqz4dlp5U4lQ6HaiskOZ.jpg ",
      rating: "8.4",
      title: "Whiplash",
      year: 2014,
      tags: [ {name: "Music"}, {name: "Drama"} ],
      description: "Under the direction of a ruthless instructor, a talented young drummer begins to pursue perfection at any cost, even his humanity."
    };
    var resultado = comprobarDatosObligatorios(movie);
    assert.equal(resultado, false);
  });

  it("Rating es un string que debe contener numeros de punto flotante o enteros", function(){
    var movie = {
      img: "https://image.tmdb.org/t/p/w185/lIv1QinFqz4dlp5U4lQ6HaiskOZ.jpg ",
      rating: 8.4,
      title: "Whiplash",
      year: "2014",
      tags: [ {name: "Music"}, {name: "Drama"}],
      description: "Under the direction of a ruthless instructor, a talented young drummer begins to pursue perfection at any cost, even his humanity."
    };
    var resultado = comprobarDatosObligatorios(movie);
    assert.equal(resultado, false);
  });

  it("Tags es un array", function(){
    var movie = {
      img: "https://image.tmdb.org/t/p/w185/zgB9CCTDlXRv50Z70ZI4elJtNEk.jpg",
      rating: "10",
      title: "Whiplash",
      year: "1995",
      tags: {name: "tag_name"},
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    };
    var resultado = comprobarDatosObligatorios(movie);
    assert.equal(resultado, false);
  });

  it("Description es un string ", function(){
    var movie = {
      img: "https://image.tmdb.org/t/p/w185/zgB9CCTDlXRv50Z70ZI4elJtNEk.jpg",
      rating: "10",
      title: "Whiplash",
      year: "1995",
      tags: [{name: "Music"}, {name: "Drama"} ],
      description: 12
    };
    var resultado = comprobarDatosObligatorios(movie);
    assert.equal(resultado, false);
  });

  it("Description debe tener un lenght de al menos 50 caracteres", function(){
    var resultado = comprobarDatosObligatorios(
      {
        img: "https://image.tmdb.org/t/p/w185/zgB9CCTDlXRv50Z70ZI4elJtNEk.jpg",
        rating: "10",
        title: "Whiplash",
        year: "1995",
        tags: [{name: "Music"}, {name: "Drama"}],
        description: "Lorem",
      });
      assert.equal(resultado, false);
  });
});


describe("Test función formatearMovieTagsToString()", function(){
/*Esta funcion debe formatear los tags de la pelicula para devolver un string donde estos tags estan separados por una ",". La funcion hace un return de un string con el formato "tag1, tag2,tag3".*/
 it('Prueba 1- tags: [{name: "tag1"}, {name: "tag2"}, {name: "tag3"}] return "tag1, tag2, tag3"', function(){
   var movie = {
     tags: [{name: "tag1"}, {name: "tag2"}, {name: "tag3"}]
   }
   var resultado = formatearMovieTagsToString(movie);
   var esperado = "tag1, tag2, tag3";
   assert.equal(resultado, esperado );   
 });

 it('Prueba 2- tags: [{name: "tag1"}, {name: "tag2"}] return "tag1, tag2"', function(){
   var movie = { 
     tags: [{name: "tag1"}, {name: "tag2"}]
    };
   var resultado = formatearMovieTagsToString(movie);  
   var esperado = "tag1, tag2";
   assert.equal(resultado, esperado);
 });

 it("Prueba 3-  tags: [{name: 'tag1'}] return 'tag1'", function(){
   var movie = { 
     tags: [{name: "tag1"}]
   };
   var resultado = formatearMovieTagsToString(movie);
   var esperado = "tag1";
   assert.equal(resultado, esperado);
 });

 it('Prueba 4- tags: [{names: "tag1"}, {names: "tag2"}, {names: "tag3"}] return null', function(){
   var movie = { 
     tags: [{names: "tag1"}, {names: "tag2"}, {names: "tag3"}]
   };
   var resultado = formatearMovieTagsToString(movie);
   assert.equal(resultado, null);
 });

 it('Prueba 5- tags: ["tag1"] return null', function(){
   var movie = { 
     tags: ["tag1"]
   };
   var resultado = formatearMovieTagsToString(movie);
   assert.deepEqual(resultado, null);   
 });
});



