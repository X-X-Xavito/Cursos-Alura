var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var tdAltura = paciente.querySelector(".info-altura");
var tdIMC = paciente.querySelector(".info-imc");

var peso = tdPeso.textContent;
var altura = tdAltura.textContent;


var pesoValido = true;
var alturaValida = true;


var pacientes = document.querySelectorAll(".paciente");

for( i = 0; i < pacientes.length; i++ ){
 
	var paciente = pacientes[i];

	var tdPeso = paciente.querySelector(".info-peso");
	var tdAltura = paciente.querySelector(".info-altura");
	var tdIMC = paciente.querySelector(".info-imc");

	var peso = tdPeso.textContent;
	var altura = tdAltura.textContent;


	var pesoValido = true;
	var alturaValida = true;


	if (peso <= 0 || peso >= 300){
	    pesoValido = false;
	    console.log("Peso inválido");
	    tdIMC.textContent = "Peso Inválido!"
	    paciente.classList.add("paciente-invalido");


	}

	if(altura <= 0 || altura >= 3.00){
	    alturaValida = false;
	    console.log("Altura inválida");
	    tdIMC.textContent = "Altura Inválida";
	    paciente.classList.add("paciente-invalido");


	}

	if(alturaValida && pesoValido){
	    var imc = peso / (altura*altura);
	    tdIMC.textContent = imc.toFixed(2);

	} 

}


