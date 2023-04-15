// Assignment code here

// Generate random number
function randomNum(max) {
  return Math.floor(Math.random() * max);
}

function generatePassword() {
  var passLengthChoice = prompt("How long would you like your password to be? (Choose between 8 and 128 characters.");
  if (passLengthChoice > 7 || passLengthChoice < 129) {

  } else {
    alert("Please choose between 8 and 128 characters!")
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
