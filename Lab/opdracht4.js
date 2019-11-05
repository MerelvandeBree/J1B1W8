function tafels(amount){
	if (amount >= 1 && amount <= 10){
		for (var a = 1; a <= amount; a++){
			for (var i = 1; i <= 10; i++){
				var uitkomst = i * a;
				document.write(i + " x " + a + " = " + uitkomst + "<br>");
			}
			document.write("<br>");
		}
	}
	else {
		alert ("Het getal moet tussen de 1 en 10 zijn.");
		tafels(prompt("Hoeveel tafels wil je berekenen?"));
	}
}

tafels(prompt("Hoeveel tafels wil je berekenen?"));