// Assignment Code
var generateBtn = document.querySelector("#generate");
 
var uppercaseletters="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
var lowercaseletters="abcdefghijklmnopqrstuvwxyz".split("")
var digit="0123456789".split("")
var special="~`!@#$%^&*()-_+={[}]|\:;'<,>.?/".split("")



function generatePassword() {
  var length= prompt("What is the length of the password (Password must me 8-128 character)?")
  length=parseInt(length)
  console.log(length) 
  var uppercase=false
  var lowercase=false
  var specialCharacters=false
  var numbers=false
  var password= ""
  var userchoice= ""

if (length >= 8 && length <=128){
       uppercase=confirm("Do you want an uppercase?")
       lowercase=confirm("Do you want a lowercase")
       specialCharacters=confirm("Do you want special characters?")
       numbers=confirm("Do you want numbers?")


       var indexuppercase= Math.floor(Math.random()*uppercaseletters.length)
       if (uppercase){
          password=password+uppercaseletters[indexuppercase]
          userchoice=userchoice+uppercaseletters.join("")   
       }
       var indexlowercase= Math.floor(Math.random()*lowercaseletters.length)
       if (lowercase){
         password=password+lowercaseletters[indexlowercase]
         userchoice=userchoice+lowercaseletters.join("")
       }
       var indexdigit= Math.floor(Math.random()*digit.length)
       if (numbers){
        password=password+digit[indexdigit]
        userchoice=userchoice+digit.join("")
       }
       var indexspecial= Math.floor(Math.random()*special.length)
       if (specialCharacters){
         password=password+special[indexspecial]
         userchoice=userchoice+special.join("")
       }

       console.log(password)
       userchoice=userchoice.split("")
       console.log(length-password.length)
       var size=length-password.length
       for (var i=0; i<(size); i++){
           var indexuserchoice=Math.floor(Math.random()*userchoice.length )
           password=password+userchoice[indexuserchoice]
       }
      console.log(password)
} else {
  alert ("invalid entry")
}


  


  return password
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
