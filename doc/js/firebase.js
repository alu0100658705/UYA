var config = {
    apiKey: "AIzaSyBRwkE7Lj0K_nU11r2wfa9Hy3jfikBUnxQ",
    authDomain: "uya-g2.firebaseapp.com",
    databaseURL: "https://uya-g2.firebaseio.com",
    projectId: "uya-g2",
    storageBucket: "uya-g2.appspot.com",
    messagingSenderId: "98345995388"
  };
  firebase.initializeApp(config);
  
  function iniciar(){
    const Correo = document.getElementById('correo');
    const txtpass = document.getElementById('txtpass');
    const email = Correo.value;
    const password = txtpass.value;
        
    firebase.auth().signInWithEmailAndPassword(email, password).then(function(){
        location = 'index.html'
    }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
    });
  };

  function registro(){
    const Correo = document.getElementById('correo');
    const txtpass = document.getElementById('txtpass');
    const email = Correo.value;
    const password = txtpass.value;

    firebase.auth().createUserWithEmailAndPassword(email, password).then(function() {
        var ini = '<a href="javascript:void(0);" onclick="iniciar();" class="btn-registro">Iniciar Sesión</a>'
        document.getElementById('mensaje_r').innerHTML = "<h5>Usuario creado con éxito<h5>";
        document.getElementById('mensaje_r').innerHTML = ini; 
    }).catch(function(error) {
        document.getElementById('mensaje_r').innerHTML = error;
    });
  };
 

  firebase.auth().onAuthStateChanged(function(user) {
    if (user != null) {
      var email = '<strong class="largersize">' + user.email + '</strong>';
      var mensaje = '<h5> Añadir un libro al catálogo:</h5>';
      var b_cerrar = '<a href="javascript:void(0)" onclick="cerrar();"><strong class="largersize">Cerrar Sesión</strong></a>';
      var boton = '<a href="Formulario.html" class="btn-registro">Formulario</a>';
      document.getElementById('superior_ob1').innerHTML = email;
      document.getElementById('superior_ob2').innerHTML = b_cerrar;
      document.getElementById('boton_id').innerHTML = boton;
      document.getElementById('info_catalogo').innerHTML = mensaje;
    } else {
        var mensaje = '<h5>No puede añadir un libro si no está registrado</h5>';
        var b_regis = '<a href="Registro.html"><strong class="largersize">Registro</strong></a>';
        var b_ini = '<a href="Sesion.html"><strong class="largersize">Iniciar Sesión</strong></a>';
        document.getElementById('superior_ob1').innerHTML = b_regis;
        document.getElementById('superior_ob2').innerHTML = b_ini;
        document.getElementById('info_catalogo').innerHTML = mensaje;
    }
  });

  function cerrar(){
    firebase.auth().signOut().then(function() {
        console.log('User Logged Out!');
    }).catch(function(error) {
        console.log(error);
    });
  };

