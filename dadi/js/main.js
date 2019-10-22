//Gioco dei dadi, chi fa di più vince;

var playerOne = Math.floor(Math.random() * 6) + 1;

console.log(playerOne);


var playerTwo = Math.floor(Math.random() * 6) + 1;

console.log(playerTwo);


if(playerOne > playerTwo) {
    document.getElementById("risultato").innerHTML = "Giocatore 1 ha vinto";

 //console.log("ha vinto il giocatore 1");
 
} else if (playerOne == playerTwo){

    document.getElementById("risultato").innerHTML = "pareggio!";
    //console.log("risultato pari");
} else {
    document.getElementById("risultato").innerHTML = "Giocatore 2 ha vinto";
    //console.log("ha vinto il giocatore 2");
}

document.getElementById("giocata1").innerHTML = playerOne;
document.getElementById("giocata2").innerHTML = playerTwo;