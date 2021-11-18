// GAME DADI

// genero il numero del giocatore
let playerNumber = Math.floor(Math.random() * 6) + 1 ;
console.log('player:', playerNumber);

// genero il numero del computer
let computerNumber = Math.floor(Math.random() * 6) + 1 ;
console.log('computer', computerNumber);

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

// output

const gameMessage = `il tuo numero è ${playerNumber} mentre il numero del computer è ${computerNumber}`;
