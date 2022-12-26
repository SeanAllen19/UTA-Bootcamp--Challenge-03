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
var everyOption = [alphaL,alphaU,numbers,specialCharacters].toString('');


// FUNCTION START 
function generatePassword() {

  //// finding wether true or false - If True, add the corresponding array to selectionsResults - if False, add empty string. (maybe find more research to add nothing.)
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

var eSpecial= confirm('Would you lkke Special Characters in your PASSWORD?');
if(eSpecial) {
  eSpecial = specialCharacters;
} else {
  eSpecial = '';
}
console.log(eSpecial);


////variable of all the true statements, all in string form
var uniquePassword= '';
var selectionsResults = [Upper,Lower,NumBers,eSpecial].toString();
console.log(selectionsResults);




  //must return a string value that is the password
  //promt user to choose num between 8 -128
    // var to save length

    //validate user num
  //confirm user for upper, lower, special chars, or nums
  // 4 vars to save true or false to included characters
  // vars that include all user options of each catergory. array of strings for each?
  // var array of letters w/ toupper and tolower?
  //if user says yes t include that cat choose random elements from the array
    //how to decide how many elements to choose from each array
    // maybe make a array with each one .concat
  //validate that one catagory was chose 



  // return passwordString;

};