function calcularIMC() {
	var peso = parseFloat(document.getElementById("peso").value);
	var altura = parseFloat(document.getElementById("altura").value) / 100; // Converter para metros
  
	if (isNaN(peso) || isNaN(altura)) {
	  document.getElementById("result").innerHTML = "Por favor, insira valores numéricos válidos.";
	  return;
	}
  
	var imc = peso / (altura * altura);
  
	var resultadoTexto;
  
	if (imc < 18.5) {
	  resultadoTexto = "Você está muito magro. Procure se alimentar!";
	} else if (imc < 25.0) {
	  resultadoTexto = "Parabéns! Você está no peso ideal!";
	} else if (imc < 30.0) {
	  resultadoTexto = "Tá na hora de fazer uma dieta!";
	} else if (imc > 35.0 && imc <= 39.9){
	  resultadoTexto = "Está faltando a academia, sem vergonha?"; 
	} else {
		resultadoTexto = "Você está muito acima do peso! Pare de comer bacon, desgraça!";
	}
  
	document.getElementById("resultado").innerHTML = "Seu IMC é: " + imc.toFixed(2) + "<br>" + resultadoTexto;

	mostrarElemento();	

	function mostrarElemento() {
		var elemento = document.getElementById("resultado");
		elemento.style.display = "block";
	  }
  }
  