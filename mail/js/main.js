//Chiedi all’utente la sua email

//var askEmail = prompt("Scrivi la tua mail");

var lista = ["mario", "filippo", "lazio", "paco"];

console.log(lista);

var nome = "luigi";

var found = false;

//controlla che sia nella lista di chi può accedere e stampa un messaggio appropriato

for (var i = 0; i < lista.length; i++){

    if(nome == lista[i]) {
    found = true;
    console.log(found, "trovato!");
    } 
    
}

if(found == true) {
    console.log("sei in lista");
} else {
    console.log("non sei in lista");
    
}
