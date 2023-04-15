// Assignment code here

// Generate random number
function randomNum(max) {
  return Math.floor(Math.random() * max);
}

function generatePassword() {
  var passLengthChoice = prompt(
    "How long would you like your password to be? (Choose between 8 and 128 characters."
  );

  var lowercaseChars = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var uppercaseChars = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var numericChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialChars = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "_",
    "+",
    "=",
    "{",
    "}",
    "[",
    "]",
    "|",
    "\\",
    ";",
    ":",
    "'",
    '"',
    ",",
    "<",
    ".",
    ">",
    "/",
    "?",
  ];

  var passwordChars = [];

  if (passLengthChoice >= 8 && passLengthChoice <= 128) {
    var lowercaseChoice = prompt(
      "Would you like lowercase characters in your password? Y or N."
    );

    if (lowercaseChoice === "Y" || lowercaseChoice === "y") {
      for (var i = 0; i < lowercaseChars.length; i++) {
        passwordChars.push(lowercaseChars[i]);
      }
    }

    var uppercaseChoice = prompt(
      "Would you like uppercase characters in your password? Y or N."
    );

    if (uppercaseChoice === "Y" || uppercaseChoice === "y") {
      for (var i = 0; i < uppercaseChars.length; i++) {
        passwordChars.push(uppercaseChars[i]);
      }
    }

    var numericChoice = prompt(
      "Would you like numeric characters in your password? Y or N."
    );

    if (numericChoice === "Y" || numericChoice === "y") {
      for (var i = 0; i < numericChars.length; i++) {
        passwordChars.push(numericChars[i]);
      }
    }

    var specialChoice = prompt(
      "Would you like special characters in your password? Y or N."
    );

    if (specialChoice === "Y" || specialChoice === "y") {
      for (var i = 0; i < specialChars.length; i++) {
        passwordChars.push(specialChars[i]);
      }
    }

    var generatedPasswordArray = [];

    for (var i = 0; i < passLengthChoice; i++) {
      randomValue = randomNum(passwordChars.length);

      generatedPasswordArray.push(passwordChars[randomValue]);
    }

    var generatedPassword = generatedPasswordArray.join("");

    if (generatedPassword == "") {
      alert("You must select at least 1 character type!");

      generatePassword();
    }
  } else {
    alert("Please choose between 8 and 128 characters!");
    generatePassword();
  }

  return generatedPassword;
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
