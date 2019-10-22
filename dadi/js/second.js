//Gioco dei dadi, chi fa di più vince;

var playerOne1, playerOne2, sommaPlayerOne, playerTwo1, playerTwo2, sommaPlayerTwo

playerOne1 = Math.floor(Math.random() * 6) + 1;
playerOne2 = Math.floor(Math.random() * 6) + 1;

sommaPlayerOne = (playerOne1 + playerOne2);

console.log(sommaPlayerOne);


playerTwo1 = Math.floor(Math.random() * 6) + 1;
playerTwo2 = Math.floor(Math.random() * 6) + 1;

sommaPlayerTwo = (playerTwo1 + playerTwo2);
console.log(sommaPlayerTwo);


if(sommaPlayerOne > sommaPlayerTwo) {
    document.getElementById("risultato").innerHTML = "Giocatore 1 ha vinto";

 //console.log("ha vinto il giocatore 1");
 
} else if (sommaPlayerOne == sommaPlayerTwo){

    document.getElementById("risultato").innerHTML = "pareggio!";
    //console.log("risultato pari");
} else {
    document.getElementById("risultato").innerHTML = "Giocatore 2 ha vinto";
    //console.log("ha vinto il giocatore 2");
}

document.getElementById("giocata1").innerHTML = sommaPlayerOne;
document.getElementById("giocata2").innerHTML = sommaPlayerTwo;