// Assignment Code
var generateBtn = document.querySelector("#generate");

var userChoice = "";

alert("Welcome to my password generator!")
function generatePassword() {

var lowercaseABC = "abcdefghijklmnopqrstuvwxyz";
//var uppercaseABC = lowercaseABC.toUpperCase;
var uppercaseABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
var specialSymbols = "!\"#$%&()*+,-./:;<=>?@[\]^_`{|}~";

//password variables for allowable password characters
var passwordLength = prompt("Your password should have a character length of atleast 8 and no more than 128!");
if (passwordLength < 8 || passwordLength > 128) {
    alert("Incorrect password length! Try again.");
    var passwordLength = prompt("Your password should have a character length of atleast 8 and no more than 128!");
}
console.log(passwordLength);


// // Criteria prompts for password to generate
// var lowercaseConfirm = confirm("Your password should have a lowercase letter! Click OK to Continue");
// if (lowercaseConfirm) {
//     userChoice = userChoice.concat(lowercaseABC);
// }
// var uppercaseConfirm = confirm("Your password should have an uppercase letter! Click OK to Continue");
// if (uppercaseConfirm) {
//     userChoice = userChoice.concat(uppercaseABC);
// }
// var symbolsConfirm = confirm("Your password should have a symbol! Click OK to Continue");
// if (symbolsConfirm) {
//     userChoice = userChoice.concat(specialSymbols);
// }
// var numbersConfirm = confirm("Your password should have a number! Click OK to Continue");
// if (numbersConfirm) {
//     userChoice = userChoice.concat(numeric);
// }
// console.log("userChoiceConditional: " + userChoice);

let lowercaseConfirm = confirm("Your password should have a lowercase letter! Click OK to Continue") ? userChoice = userChoice.concat(lowercaseABC) : delete userChoice.lowercaseABC;
let uppercaseConfirm = confirm("Your password should have an uppercase letter! Click OK to Continue") ? userChoice = userChoice.concat(uppercaseABC): delete userChoice.uppercaseABC;
let symbolsConfirm = confirm("Your password should have a symbol! Click OK to Continue") ? userChoice = userChoice.concat(specialSymbols): delete userChoice.specialSymbols;
let numbersConfirm = confirm("Your password should have a number! Click OK to Continue") ? userChoice = userChoice.concat(numeric): delete userChoice.numeric
if (!lowercaseConfirm && !uppercaseConfirm && !symbolsConfirm && !numbersConfirm) {
    alert("Must choose atleast one criteria!");
    generatePassword();
}
if (!userChoice) {
    alert("Must choose atleast one criteria!");
    generatePassword();
}

console.log("userChoiceConditional: " + userChoice);
// function chainToSwitch(val) {                // 1 cancel & 3 trues && 3 canels 1 true : working
//     var answer = "";
//     switch(val) {
//         case lowercaseConfirm:
//             answer = userChoice = userChoice.concat(lowercaseABC);
//             break;
//         case uppercaseConfirm:
//             answer = userChoice = userChoice.concat(uppercaseABC);
//             break;
//         case symbolsConfirm:
//             answer = userChoice = userChoice.concat(specialSymbols);
//             break;
//         case numbersConfirm:
//             answer = userChoice = userChoice.concat(numeric);
//             break;
//         default:
//             answer = userChoice - userChoice[val];
//     }
// }
// chainToSwitch(lowercaseConfirm);
// chainToSwitch(uppercaseConfirm);
// chainToSwitch(symbolsConfirm);
// chainToSwitch(lowercaseConfirm);
// chainToSwitch(uppercaseConfirm);
// chainToSwitch(symbolsConfirm);
// chainToSwitch(numbersConfirm);
// console.log("userChoiceConditional: " + userChoice);

/// attempted to use check sign. ignore (lowercaseConfirm).... doesn't pass through each argument since 1st is true
// //(lowercaseConfirm) => userChoice = userChoice.concat(lowercaseABC);
// function checkSign(lowercaseConfirm, uppercaseConfirm, symbolsConfirm, numbersConfirm) {
//     return lowercaseConfirm ? userChoice = userChoice.concat(lowercaseABC) &&
//     uppercaseConfirm ? userChoice = userChoice.concat(uppercaseABC) &&
//     symbolsConfirm ? userChoice = userChoice.concat(specialSymbols) &&
//     numbersConfirm ? userChoice = userChoice.concat(numeric):null
// }
// checkSign(lowercaseConfirm, uppercaseConfirm, symbolsConfirm, numbersConfirm);
// console.log(checkSign(lowercaseConfirm, uppercaseConfirm, numbersConfirm));
// console.log("userChoiceConditional: " + userChoice);



    let passwordEnd = "";
    for (let i = 0; i < passwordLength; i++) {
        let char = Math.floor(Math.random() * userChoice.length);
        passwordEnd += userChoice.charAt(char);

      //  var random = userChoice[char];
      //  passwordEnd = passwordEnd.concat(random);

    }
    return passwordEnd;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);