
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Generator Function
function getPassword(){
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var lowercase = "abcdefghijklmnopqrstuvwxyz"
  var number = "0123456789"
  var specialchar = "!@#$%^&*()-=+<>?/|':[]{}"
  var random = "";
  var key ="";

  //Criteria Choices
  var keyLength = confirm("Please choose from the following criteria for your password:.");
  var uppercase = confirm("Your password will include uppercase letters. To accept click ok to decline click cancel.");
  var lowercase = confirm("Your password will include lowercase letters. To accept click ok to decline click cancel.");    
  var numbers = confirm("Your password will include numbers. To accept click ok to decline click cancel.");
  var symbols = confirm("Your password will include special characters. To accept click ok to decline click cancel.");
  var keyLength = prompt(
      "Please select a password length. Passwords must be 8 to 28 characters.");
    





}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
