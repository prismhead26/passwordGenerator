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

//Criteria prompts for password to generate
var lowercaseConfirm = confirm("Your password should have a lowercase letter! Click OK to Continue");
if (lowercaseConfirm) {
    userChoice = userChoice.concat(lowercaseABC);
}
var uppercaseConfirm = confirm("Your password should have an uppercase letter! Click OK to Continue");
if (uppercaseConfirm) {
    userChoice = userChoice.concat(uppercaseABC);
}
var symbolsConfirm = confirm("Your password should have a symbol! Click OK to Continue");
if (symbolsConfirm) {
    userChoice = userChoice.concat(specialSymbols);
}
var numbersConfirm = confirm("Your password should have a number! Click OK to Continue");
if (numbersConfirm) {
    userChoice = userChoice.concat(numeric);
}
console.log("userChoiceConditional: " + userChoice);


if (!lowercaseABC && !uppercaseABC && !specialSymbols && !numeric) {
    return "error";
}


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