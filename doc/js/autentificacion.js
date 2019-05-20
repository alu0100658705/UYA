window.onload = inicializar;
var formAutentificacion;

function inicializar(){
	formAutentificacion = document.getElementById("autentificacion");
	formAutentificacion.addEventListener("submit", autentificar, false);
}

function autentificar(event){
	event.preventDefault();
	var user = event.target.email.value;
	var pass = event.target.password.value;

	firebase.auth().signInWithEmailAndPassword(user,pass)
		.then(function(result){
			alert("Autentificación Correcta");
			window.location.href = "index.html";	
		})
		.catch(function(error){
			alert("El usuario no está autentificado en Firebase")
		});
}

