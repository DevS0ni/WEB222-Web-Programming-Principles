/*******************************************************************
* Copyright         : 2022 Dev Soni
* File Name         : week1.js (WEEK 1 - SOURCE CODE)
* Description       : This file covers the week1 concepts of WEB222 course from Seneca College.
*                    
* Revision History  :
* Date		     Author 			Comments
* ------------------------------------------------------------------
* 05/09/2022     Dev Soni  	        Created.
*
/******************************************************************/

// (1.) Comments in JScript

// This is a single line comment. (NOTE: the space between the // and first letter.)

/*
 This is a multi-line comment,
 and can be as long as you need.
 */

// (2.) Variable Declaration in JScript

var DeveloperName; // Always use Camel Case while denoting variables.
var originalName = "Dev Soni"; // Initiating the variable.

// Referring to and using syntax:
DeveloperName = "Infernalkin"; // Assigning value to the variable.
console.log(originalName, "-", DeveloperName); // Printing the values.

// Leaking a global (variable) without var
var a = 6;      // GOOD: a is declared with var
b = 7;          // BAD: b is used without declaration, and is now a global

// (3.) Simple program creation in JavaScript, playing with Types in JavaScript

var pi = 3.14159; // pi is a Number 
var rad = 4.2; // radius is a Number
var area; // area is (currently) undefined

area = pi * rad * rad; // calculate area from radius

console.log("Area = " + area + "\n"); // print area to the console

// -------------------------------OR-------------------------------------------

// Using Math.PI, rewritting the same program.

var areaUsingMathPI = Math.PI * rad * rad; // calculate area from radius

console.log("Area (Using Math.PI) = ", areaUsingMathPI); // print area to the console

// (4.) JavaScript is dynamic, and variables can change value and type at runtime...

var x;             // undefined
x = 5;             // 5, Number
x++;               // 6, Number
x--;               // 5, Number
x += 3;            // 8, Number
x = "Value=" + x;  // "Value=8", String
x = !!x;           // true, Boolean
x = null;          // null

// (5.) A JavaScript expression is any code (e.g., literals, variables, operators, and expressions) that evaluates to a single value. 
//      The value may be a Number, String, an Object, or a logical value.

var div = 4 /2;                           // arithmetic expression
var notDiv = !(4 / 2);                    // logical expression evaluates to false
var concatenateStr = "14 " + "/" + "2";   // string, evaluates to "4 / 2"
var foo = function() { return 4 / 2;};    // function expression, foo can now be called via the () operator
var fooVar = foo();                       // foo() evaluates to 4/2, or the Number 2

// (6.) JavaScript Flow of execution

/**
 * 1. Sequence example: each statement is executed one after the other
 **/
var operand1 = 3;
var operand2 = 6;
var summation = operand1 + operand2;


/**
 * 2. Conditional examples: a decision is made based on the evaluation of an expression,
 * and a code path (or branch) taken.
 **/
var grade;
var mark = 82;

if (mark >= 90) {
    grade = 'A+';
} else if (mark >= 80) {
    grade = 'A';
} else if (mark >= 70) {
    grade = 'B';
} else if (mark >= 60) {
    grade = 'C';
} else if (mark >= 50) {
    grade = 'D';
} else { 
    grade='F';
}

switch(grade) {
    case 'A+':
        // do these steps if grade is A+
        break;
    case 'A':
        // do these steps if grade is A
        break;
    case 'B':
        // do these steps if grade is B
        break;
    case 'C':
        // do these steps if grade is C
        break;
    case 'D':
        // do these steps if grade is D
        break;
    default:
        // do these steps in any other case
        break;
}


/**
 * 3. Looping example: a set of statements are repeated
 **/

var total = 0;
for(var i = 1; i < 11; i++) {
    total += i;
    console.log("Index Number - ", i, ", ",  "Total: ", total);
}


/**
 * 4. Transfer example: a set of statements are repeated
 **/

function add(x, y) {        // declaring the add function
    if(!y) {                // check if the b argument exists/has a value
        return x;           // if not, simply return the value of argument a
    }
    return x + y;           // otherwise, return the two arguments added together
}

var total;
total = add(64);            // invoking the add function with a single argument
total = add(total, 92);     // invoking the add function with two arguments
