function sobre(){
	document.getElementById("cores").style.backgroundColor="red";
	document.getElementById("log").innerHTML +="sobre a div / cor:vermelha <br>"
}


function parabaixo(){
	document.getElementById("cores").style.backgroundColor="blue";
	document.getElementById("log").innerHTML +="clicando na div / cor:azul <br>"
}

function movendo(){
	document.getElementById("cores").style.backgroundColor="green";
	document.getElementById("log").innerHTML +="movendo sobre a div / cor:verde <br>"
}

function saindo(){
	document.getElementById("cores").style.backgroundColor="yellow";
	document.getElementById("log").innerHTML +="saindo da div / cor:amarelo <br>"
}

function paracima(){
	document.getElementById("cores").style.backgroundColor="pink";
	document.getElementById("log").innerHTML +="soltando o mouse na div / cor:rosa <br>"
}

function calculaIMC(){
	
		document.getElementById("peso").style.borderColor="white";
	document.getElementById("peso").style.backgroundColor="white";
		document.getElementById("altura").style.borderColor="white";
	document.getElementById("altura").style.backgroundColor="white";

	if (document.getElementById("peso").value=="") {
	alert("Preencha o peso");
	document.getElementById("peso").style.borderColor="red";
	document.getElementById("peso").style.backgroundColor="ffe5e5";
	document.getElementById("peso").focus();
	return false;
	}
	
	if (document.getElementById("altura").value=="") {
	alert("Preencha a altura");
	document.getElementById("altura").style.borderColor="red";
	document.getElementById("altura").style.backgroundColor="pink";
	document.getElementById("altura").focus();
	return false;
	}

	var peso=parseFloat(document.getElementById("peso").value);
	var altura=parseFloat(document.getElementById("altura").value);
	var resultado= peso/(altura*altura);
	alert("seu Imc é: "+resultado);	
	return true;
}


function maiuscula(){
	var letra = document.getElementById("texto").value;
	letra = letra.toUpperCase();
	document.getElementById("texto").value=letra;

}



