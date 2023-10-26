// PALINDROMA

/**
 * Data una parola restituire "palindroma" se è palindroma, altrimenti "non palindroma" 
 * @param {string} wordToTest parola da analizzare
 * @returns {string} 
 */
function palindromaControl(wordToTest) {
    let result = "";
    let i = 0;
    while (i < wordToTest.length - 1) {
        if (wordToTest[i] !== wordToTest[wordToTest.length - 1 - i]) {

            return result = "La parola non è PALINDROMA!";
        }
        i++
    }
    return result = "La parola è PALINDROMA!";

}



// console.log(palindromaControl("anna"));

const userWord = prompt("Inserisci una parola:");
const userWordResult = palindromaControl(userWord);
alert(userWordResult)


// PARI e DISPARI

/**
 * Generiamo un numero casuale per il pc (da 1 a 5), l'utente sceglie un numero (da 1 a 5) e dichiara pari o dispari, sommmiamo i 2 numeri e dichiariamo chi ha vinto.
 * @param {number} userNumber numero da sommare al numero del pc.
 * @returns {string}
 */

// Somma Numeri

function sommaNumeri(firstNumber, secondNumber) {
    let result = "Dispari";
    if((firstNumber + secondNumber) % 2 === 0) {
        result = "Pari";
    } 
    return result
}

// Numero Random 
function rndNumber(min, max) {
    const rndNumber = Math.floor(Math.random() * (max - min)) + min;
    return rndNumber;
}

const scelta = prompt("Scegli Pari o Dispari");
const userNumber = parseInt(prompt("inserisci un nummero da 1 a 5:"));
const cpuNumber = rndNumber(1,5);
const resultSomma = sommaNumeri(userNumber, cpuNumber);

if (sommaNumeri = scelta){
    alert("Hai Vinto!")
} else {
    alert("Hai Perso!")
}


console.log("Numero user", userNumber);
console.log("Numero cpu", cpuNumber);
console.log(resultSomma);