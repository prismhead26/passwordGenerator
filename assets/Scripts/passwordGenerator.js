// Assignment Code
var generateBtn = document.querySelector("#generate");

alert("Welcome to my password generator!");

function generatePassword() {
    var userChoice = "";
    var lowercaseABC = "abcdefghijklmnopqrstuvwxyz";
//var uppercaseABC = lowercaseABC.toUpperCase; might work if userChoice = []; ...push() replaces concat()
    var uppercaseABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numeric = "0123456789";
    var specialSymbols = "!\"#$%&()*+,-./:;<=>?@[\]^_`{|}~";

    //password variables for allowable password characters
    var passwordLength = prompt("Your password should have a character length of atleast 8 and no more than 128!");
    if (passwordLength < 8 || passwordLength > 128) {
        alert("Incorrect password length! Try again.");
        var passwordLength = prompt("Your password should have a character length of atleast 8 and no more than 128!");
    }
    //Issue: this ternary operator function below creates an undefined pass.length ... used if - statement  above instead
    // var passwordLength = (passwordLength < 8 || passwordLength > 128) ? (alert("Incorrect password length! Try again."), prompt("Your password should have a character length of atleast 8 and no more than 128!")):
    console.log("passwordLength: " + passwordLength);

    // prompts for password to generate
    let lowercaseConfirm = confirm("Your password should have a lowercase letter! Click OK to Continue") ? userChoice = userChoice.concat(lowercaseABC) : delete userChoice.lowercaseABC;
    let uppercaseConfirm = confirm("Your password should have an uppercase letter! Click OK to Continue") ? userChoice = userChoice.concat(uppercaseABC): delete userChoice.uppercaseABC;
    let symbolsConfirm = confirm("Your password should have a symbol! Click OK to Continue") ? userChoice = userChoice.concat(specialSymbols): delete userChoice.specialSymbols;
    let numbersConfirm = confirm("Your password should have a number! Click OK to Continue") ? userChoice = userChoice.concat(numeric): delete userChoice.numeric;

    // no Criteria function
    if ((!lowercaseConfirm && !uppercaseConfirm && !symbolsConfirm && !numbersConfirm) || !userChoice) {
        alert("Must choose atleast one criteria!");
        generatePassword();
    }
    // (!lowercaseConfirm && !uppercaseConfirm && !symbolsConfirm && !numbersConfirm) || (!userChoice) ? (alert("Must choose atleast one criteria!"), generatePassword()): userChoice;

    console.log("userChoiceConditional: " + userChoice);
    console.log(passwordLength);
    let passwordEnd = "";
    for (let i = 0; i < passwordLength; i++) {
        let char = Math.floor(Math.random() * userChoice.length);
        passwordEnd += userChoice.charAt(char);

      //  var random = userChoice[char];
      //  passwordEnd = passwordEnd.concat(random);

    }
    // return (passwordEnd , location.reload());
    return passwordEnd;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);