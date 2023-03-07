/* 
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21 
*/

console.log("Operativo");

const pwdFinal = 21;
console.log(pwdFinal, typeof pwdFinal);

const userName = prompt("Inserisci il tuo Nome:");
const userLastName = prompt("Inserisci il tuo Cognome:");
const userColor = prompt("Inserisci il tuo colore preferito:");

document.getElementById("pwd-string").innerHTML = "La tua nuova e totalmente insicura password è: " + userName + userLastName + userColor + pwdFinal;