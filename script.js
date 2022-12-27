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
  var customSentence = '';
  //// finding whether true or false - If True, add the corresponding string to selectionsResults - if False, add empty string. (maybe find more research to add nothing.)
  var Upper = confirm('Would you like Uppercased Letters in your PASSWORD?');
  if (Upper === true) {
    Upper = alphaU;
  } else {
    Upper = '';
    alert('Uppercased Letter will not be added');
  }
  console.log(Upper)
 //////////////
  
  var Lower = confirm('Would you like Lowercased Letters in your PASSWORD?');
  if(Lower === true) {
    Lower = alphaL;
  } else {
    Lower = '';
    alert('Lowercased Letter will not be added');
  }
  console.log(Lower)
/////////////////////

var NumBers = confirm('Would you like numbers in your PASSWORD?');
if(NumBers === true) {
  NumBers = numbers;
} else {
  NumBers = '';
  alert('Numbers will not be added');
}
console.log(NumBers)
////////////////////

var eSpecial= confirm('Would you like Special Characters in your PASSWORD?');
if(eSpecial === true) {
  eSpecial = specialCharacters;
} else {
  eSpecial = '';
  alert('Special Characters will not be added');
}
console.log(eSpecial);
///////////////////////////////////////////////////

//////// parseInt to change prompt property from string to number.
var lengthPassword = parseInt(prompt('How many character would you like in your PASSWORD? (Please use any NUMBER between 8 - 128)'));
console.log("The lenght of the password is: " + lengthPassword);



////////////////////////////

var selectionsResults = Upper + Lower +NumBers + eSpecial;
var arrayOfResults = [Upper, Lower, NumBers, eSpecial]; 
var arrayLength = arrayOfResults.length //4
var randomSelectionResults = selectionsResults[Math.floor(Math.random() * selectionsResults.length)]; //created a random letter or character based on selectionResults

//// Possibly will use these for result prompting window, for later.
// arrayOfResults[0] = "Uppercased Letters\n";
// arrayOfResults[1] = "Lowercased Letters\n";
// arrayOfResults[2] = "Numbers\n";
// arrayOfResults[3] = "Special Characters";
///// Test Consoles
console.log(selectionsResults);
console.log(arrayOfResults);
console.log(randomSelectionResults);

while (customSentence.length < lengthPassword) {
  var randomItem = selectionsResults[Math.floor(Math.random() * selectionsResults.length)];
  // console.log(randomItem)
  // var randomChar = selectionsResults[randomItem];
  // console.log(randomChar)
  customSentence+= randomItem
}
return customSentence;

console.log(customSentence);
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

/////////////// adding
// if array has empty string, don't add to final prompt. 
for(var j = 0; j < arrayOfResults.length; j++) {

  if(arrayOfResults[j] === "") {
    return;
  };
  console.log('Would you like to have: ')

}


/// generate password
// for (var j = 0; j < lengthPassword; j++) {
  
//   randomSelectionResults;
  
// } 

// console.log(customSentence);
};