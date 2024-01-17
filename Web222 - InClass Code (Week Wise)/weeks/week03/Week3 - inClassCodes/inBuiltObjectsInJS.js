// [1.] Built-In Objects in the JavaScript :--

// Global variables for the program.
var sr1 = "Dev";       
var lname = " Soni"; 
var city = "Toronto";
var fullName =  sr1.concat(lname);
var indexString = "WEB222 Course";
var Split = fullName.split(" ");
var sr1UpperCase = sr1.toUpperCase();
var sr1LowerCase = sr1.toLowerCase();

// The String Operations : 
console.log("The length of the string sr1 : " + sr1.length); // It calculates the length of the string.

console.log("Concatenation of the string : Hello " + sr1 + lname + "!"); // It concatenates the two strings mentioned! 

console.log("Concatenation of the string : Hello " + fullName + "!"); // It concatenates the two strings mentioned! 

console.log( "Sting - character position : " + city[0] + " "  + city.charAt(3) + " " + city.charCodeAt(0) ); // It returns the character position inside that of the string, charAtCode represents the UNICODE of the character.

console.log("Index of the String : " + indexString.indexOf('W')); // It operates from left -> right. More than one occurences in the string then the object will return the index of the first occurence.

console.log("Index of the String : " + indexString.lastIndexOf('E')); // It operates from right -> left. More than one occurences in the string then the object will return the index of the first occurence, in that direction.

console.log("Split the given String : " + Split[0]); // This method splits the function through the string specified and stores into a String Array.

console.log("Sub-String : " + city.substr(1,3)); // It gives out the sub-string from the parent String, gives out the entire String with the indexes specified.

console.log("Sub-String : " + city.substring(1,3)); // It gives out the sub-string from the parent String, gives out the entire String without the indexes specified.

console.log("UPPER CASE : " + sr1UpperCase); // It returns the String in UPPERCASE. We have to store the String in a variable, to update the String.

console.log("LOWER CASE : " + sr1LowerCase); // It returns the String in LOWERCASE. We have to store the String in a variable, to update the String.

String.prototype.greeting = function(){
    return "Hello " + this;
};

console.log(sr1.greeting()); // this keyword - for the string operations pointing to the string mentioned in the console.log();

// [2.] Regular Expression in JAVAScript.

/* 
LLINUX - Regular Expression : 
.
1.) + - one or more previous character.
2.) * - zero or more previous character.
3.) ? - zero or a one previous character

Modifiers : 

g - global
i - ignore Case Sensitivity
m - MultiLine

*/
var str = "abbbcaabb";
var reg = new RegExp("a+b");

console.log(reg);

var reg = /a+b+/gim;

console.log(reg);

console.log(/a+b+/.test(str)); // It will match the regular expression mentioned in the String str, and will return True or False.

console.log(/a+c+/.test(str)); // It will return False.

console.log(/c?/.test(str)); // It will return True.

console.log(/d?/.test(str)); // It will return True.