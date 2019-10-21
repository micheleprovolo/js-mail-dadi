//Chiedi all’utente la sua email

var askName = prompt("Scrivi il tuo nome");

var lista = ["mario", "filippo", "lazio", "paco"];

console.log(lista);

var nome = "mario";

//controlla che sia nella lista di chi può accedere e stampa un messaggio appropriato

for (var i = 0; i < lista.lenght; i++){

    if(nome == lista[i]) {
    
    console.log("nome trovato", nome);
    
    }
}

