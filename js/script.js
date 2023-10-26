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




