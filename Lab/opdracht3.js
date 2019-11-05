function questions(name, age){
    if (name === "stop" || age === "stop"){
    	document.write("Applicatie stopt");
    }
    else {
    	document.write("Hallo " + name + ", je leeftijd is " + age + " jaar. <br>")
    	questions(prompt("Vul uw naam in."), prompt("Vul uw leeftijd in."));
    }
}

questions(prompt("Vul uw naam in."), prompt("Vul uw leeftijd in."));


