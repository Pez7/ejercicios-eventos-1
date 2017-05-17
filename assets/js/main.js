window.onload=function(){
	alert("Página cargada.");
}

var boton=document.getElementById("demo");
boton.addEventListener("click", function(){
	document.getElementById("texto").innerHTML="¡HOLA MUNDO!";
});