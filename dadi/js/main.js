//Gioco dei dadi, chi fa di più vince;

var playerOne = Math.floor(Math.random() * 6) + 1;

console.log(playerOne);


var playerTwo = Math.floor(Math.random() * 6) + 1;

console.log(playerTwo);

if(playerOne > playerTwo) {
 console.log("ha vinto il giocatore 1");
 
} else if (playerOne == playerTwo){
    console.log("risultato pari");
} else {
    console.log("ha vinto il giocatore 2");
}

document.getElementById("giocata1").innerHTML = playerOne;