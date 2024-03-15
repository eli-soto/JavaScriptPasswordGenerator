
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
    
// If not return length not valid
if (keyLength < 8 || keyLength > 128 || isNaN(keyLength)) {
  alert("Your password did not satisfy the length criteria. Please try again.");        
  return;

// Other Possible Choices 
} else {

  if (uppercase) {random += uppercase;}
  if (lowercase) {random += lowercase;}
  if (numbers) {random += number;}
  if (symbols) {random += specialchar;}
}

// Generator loop
for (i = 0; i < keyLength; i++) {

  // Password generated
          key += random[Math.floor(Math.random() * random.length)]
      }
      return(key);

}

//Write password to the #password input. The text box area where the newly generated password will appear.
var passwordText = document.querySelector("#password");
function writePassword(key) {
if (password.length === 0) {
    return;
}
passwordText.value = key;
}

// Add event listener to generate button. This is a Call To Action (CTA button)
generateBtn.addEventListener("click", function () { writePassword(getPassword()) });
