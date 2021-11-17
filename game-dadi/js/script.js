// GAME DADI

// genero il numero del giocatore
let playerNumber = Math.floor(Math.random() * 10) + 1 ;
console.log(playerNumber)

// genero il numero del computer
let computerNumber = Math.floor(Math.random() * 10) + 1 ;
console.log(computerNumber)

// confronto il numero del giocatore e del computer e stabilisco chi ha vinto
if (playerNumber > computerNumber){
    alert('bravo player, HAI VINTO!')
} 
else if (playerNumber < computerNumber){   
    alert('mi dispiace player, HAI PERSO!');
}
else {
    alert('questo è un pareggio, nessuno dei due ha vinto...');
}