// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
var password = document.getElementById('password');


//GLOBAL SCOPE
var alphaL = "abcdefghijklmnopqrstuvwxyz";
var alphaU = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var specialCharacters = " !#$%&'()*+,-./:;<=>?@^_`{|}~[]";

// FUNCTION START 
function generatePassword() {

  //// finding whether true or false - If True, add the corresponding string to selectionsResults - if False, add empty string. (maybe find more research to add nothing.)
  var Upper = confirm('Would you like Uppercased Letters in your PASSWORD?');
  if (Upper === true) {
    Upper = alphaU;
  } else {
    Upper = '';
  }
  console.log(Upper)
 //////////////
  
  var Lower = confirm('Would you like Lowercased Letters in your PASSWORD?');
  if(Lower === true) {
    Lower = alphaL;
  } else {
    Lower = '';
  }
  console.log(Lower)
/////////////////////

var NumBers = confirm('Would you like numbers in your PASSWORD?');
if(NumBers === true) {
  NumBers = numbers;
} else {
  NumBers = '';
}
console.log(NumBers)
////////////////////

var eSpecial= confirm('Would you like Special Characters in your PASSWORD?');
if(eSpecial === true) {
  eSpecial = specialCharacters;
} else {
  eSpecial = '';
}
console.log(eSpecial);
///////////////////////////////////////////////////

//////// parseInt to change prompt property from string to number.
var lengthPassword = parseInt(prompt('How many character would you like in your PASSWORD? (Please use any NUMBER between 8 - 128)'));
console.log("The lenght of the password is: " + lengthPassword);



////////////////////////////

var selectionsResults = Upper + Lower +NumBers + eSpecial;
var arrayOfResults = [Upper, Lower, NumBers, eSpecial];
console.log(selectionsResults);
console.log(arrayOfResults);


/// edge cases: not using a number and setting a number between 8 and 128
if (isNaN(lengthPassword) ) {
  alert('Please enter a Number')
}else if (lengthPassword < 8 || lengthPassword > 128) {
  alert('Please pick a number between 8 and 128')
};


//edge case: for not selecting any options
for (var i = 0; i < arrayOfResults.length; i++) {
  
  if(arrayOfResults[i] === '') {
    alert('Nothing was chosen. Please try again!');
    return;
  } else {
    return;
  }
};


var randomSelectionResults = selectionsResults[Math.floor(Math.random() * selectionsResults.length)]; 
console.log(randomSelectionResults);
// for (var j = 0; i < lengthPassword; j++) {
//   var customSentence = "naughty";
//   customSentence[i].join(randomSelectionResults);
//   return customSentence;
// } 



/// Updating the user with their choices
//////////
// var finalCheck = prompt('')
// if(selectionsResults = Upper === true && Lower === true && NumBers === true && eSpecial === true) {
//   alert('Uppercased Letters \n Lowercased Letters \n Numbers \n Special Characters?')
// } else if (Upper === true && Lower === true && NumBers === true && eSpecial !== true) {
//   alert('////// placeholder')
// }




////variable of all the true statements, all in string form
// var uniquePassword= '';
// var selectionsResults = Upper + Lower +NumBers + eSpecial.toString();

//password string = randomselectionresult * the lengthPassword

// for (var i = 0; i < lengthPassword; i++) {
//   var passwordString = '';
//   passwordString.concat(randomSelectionResults);
  
// }



  // return passwordString;

};