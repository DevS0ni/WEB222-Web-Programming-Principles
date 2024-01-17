// Comment - Documenting the code. This is my first JavaScript code.
console.log('Hello World !');

let NAme = 'Dev';
console.log(NAme);  

/*
** Variables Regulations **
Cannot be a reserved Keyword.
Should be meaningful
Cannot start with a number (1name)
Are case-sensitive
Cannot contain a space or hyphen (-)
*/

// PRIMITIVE-TYPES : 
let firstName = 'Dev';
let  lastName = 'Soni';  // String Literal
// let age = 30; // Number Literal
let isApproved = false; // Boolen Literal
let Name = undefined;
let selectedColor = null;

let person = { 
    name : 'Dev',
    age : 30
};

// Dot Notation 
person.name = 'Dev Soni';
console.log(person.name);

// Bracket Notation 
let selection = 'name';
person[selection] = 'Mary';

console.log(person.name);

 const interestRate = 0.3;

// interestRate = 1;

console.log(interestRate);

let selectedColors = ['red','green'];

selectedColors[2] = 1;
console.log(selectedColors.length);

// Performing a task...
function greet(name, lastName){
    console.log('Hello' + ' ' + name + ', ' + lastName + '!');
}

// Calculating a task or a given problem...
function square(number){
    return number * number;
}

greet('Dev', 'Soni');
let number = square(2);  // square(2);

console.log(number); // there are two function calls here... console.log(square(2));