// Assignment Code
var generateBtn = document.querySelector("#generate");

//for each criteria declined, corresponding characters are removed.
function generatePassword() {
  var answer = "N";
  var upAnswer = "N";
  var numAnswer = "N";
  var specAnswer = "N";

  while (answer == "N" && upAnswer == "N" && numAnswer == "N" && specAnswer == "N"){
    var passLength = window.prompt("Please enter a digit password length between 8 and 128 characters: ");
    if (passLength === null) {
      return "Password Generation Cancelled";
    }
    passLength = parseInt(passLength);
    while(true) {
      if (passLength === null) {
        return "Password Generation Cancelled";
      } 
      if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
        passLength = window.prompt("Invalid Password length, please re-enter a valid length(8-128) in digits: ");
      }
      else {
        break;
      }    
    }
  //Checks if user wants to use lowercase letters 
    var lowerCase = window.prompt("Would you like to use lowercase letters?(Y/N): ");
    if (lowerCase === null) {
      return "Password Generation Cancelled";
    }
    var answer = lowerCase.toUpperCase();
    while(true){
      if (answer != "Y" && answer != "N") {
  
        lowerCase = window.prompt("Please enter 'Y' or 'y' for yes and 'N' or 'n' for no: ");
        if (lowerCase === null) {
          return "Password Generation Cancelled";
        }
        answer = lowerCase.toUpperCase();
      }
      else {
        break;
      }
    }
  //Checks if user wants to use uppercase letters 
    var upperCase = window.prompt("Would you like to use uppercase letters?(Y/N): ");
    if (upperCase === null) {
      return "Password Generation Cancelled";
    }
    var upAnswer = upperCase.toUpperCase();
    while(true){
      if (upAnswer != "Y" && upAnswer != "N") {
  
        upperCase = window.prompt("Please enter 'Y' or 'y' for yes and 'N' or 'n' for no: ");
        if (upperCase === null) {
          return "Password Generation Cancelled";
        }
        upAnswer = upperCase.toUpperCase();
      }
      else {
        break;
      }
    }
  //Checks if the user wants to use numbers
    var numbers = window.prompt("Would you like to use numbers?(Y/N): ");
    if (numbers === null) {
      return "Password Generation Cancelled";
    }
    var numAnswer = numbers.toUpperCase();
    while(true){
      if (numAnswer != "Y" && numAnswer != "N") {
  
        numbers = window.prompt("Please enter 'Y' or 'y' for yes and 'N' or 'n' for no: ");
        if (numbers === null) {
          return "Password Generation Cancelled";
        }
        numAnswer = numbers.toUpperCase();
      }
      else {
        break;
      }
    }
  //Checks if the user wants to use special characters
    var specialChar = window.prompt("Would you like to use special characters?(Y/N): ");
    if (specialChar === null) {
      return "Password Generation Cancelled";
    }
    var specAnswer = specialChar.toUpperCase();
    while(true){
      if (specAnswer != "Y" && specAnswer != "N") {
  
        specialChar = window.prompt("Please enter 'Y' or 'y' for yes and 'N' or 'n' for no: ");
        if (specialChar === null) {
          return "Password Generation Cancelled";
        }
        specAnswer = specialChar.toUpperCase();
      }
      else { 
        break;
      }
    }
    //Sets parameters for password generation from user input
  
    while(true) {
      var allCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789! \"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
      if (answer == "N") {
        allCharacters = allCharacters.replace("abcdefghijklmnopqrstuvwxyz", "");
        console.log(allCharacters);
      }
      if (upAnswer == "N") {
        allCharacters = allCharacters.replace("ABCDEFGHIJKLMNOPQRSTUVWXYZ", "");
        console.log(allCharacters);
      }
      if (numAnswer == "N") {
        allCharacters = allCharacters.replace("0123456789", "");
        console.log(allCharacters);
      }
      if (specAnswer == "N") {
        allCharacters = allCharacters.replace("! \"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~", "");
        console.log(allCharacters);  
      }
      break;
    }
  
    
  //function which concatinates new value to end of array to make password longer
    function chooseRandom (array) {
      var num = 0;
      var pass = "";
      var newArr = [];
  //for each in passLength, generate random input based on user input from variables   
      while (num < passLength) {
        pass = array[Math.floor(Math.random()*array.length)];
        newArr.push(pass);
        num++;    
      }
      return newArr;  
    }
  //convert string to array for adding elements to array later
    var characterArray = allCharacters.split("");
    if (answer == "N" && upAnswer == "N" && numAnswer == "N" && specAnswer == "N") {
      confirm("Please select at least on character type");
    }    
    else {
      console.log(typeof(chooseRandom(characterArray)));
  //chooseRandom returns an object, so it was necessary to convert to string
  //to remove quotation marks, commas, and brackets
      finalArr = Array.from(chooseRandom(characterArray));
      finalPass = JSON.stringify(finalArr);
      console.log(typeof(finalPass));
      return finalPass.replace(/"/g, "").replace(/,/g, "").replace("[", "").replace("]","");
    }
  }   
}




// Write password to the #password input  
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  
  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
/*please choose a length between 8 and 128 DONE
would you like to use lowercase? DONE
would you like to use uppercase? DONE
would you like to use numbers? DONE
would you like to use special characters(ex: !, *)? DONE
*/

//Remove elements from array to remove commas, change to string DONE
//print above string DONE
//TODO
//Require one character type



// Adds elements to end of an array. Takes in at least one parameter
//array.push("item");


