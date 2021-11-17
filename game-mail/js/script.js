// GAME MAIL

// fare una lista [array] con un paio di mail
const mailParticipants = ['gianni.rossi@gmail.com', 'giovanni.bianchi@gmail.com', 'mario.verdi@gmail.com', 'elisabetta.1976gmail.com'];

// chiedere all'utente la mail
let userMail = prompt('Gentile cliente inserisca quì la sua mail');

// creo la variabile flag
let verifiedMail = false;

// confrontare se la mail richiesta è presente nella lista iniziale

for ( let i = 0; i < mailParticipants.length; i++ ){

    let totalMail = mailParticipants[i];
    
    if (totalMail === userMail){
        verifiedMail = true;
    }
}

// stampo il messaggio se può o meno accedere al file
if (verifiedMail){
    alert('Perfetto!, puoi accedere al file !')
}
else{
    alert('mi dispaice, ma non puoi accedere al file')
}