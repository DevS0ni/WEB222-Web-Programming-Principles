// WEEK - 2 : User and System Defined Functions :--

console.log( "\nThe square of the given number (7) : " + square( 7 ));
// console.log("\nFunction assigned to a variable : " + squareFunction(3) );

function square( number ){   // The function can be declared anywhere in the script ! Before the function is invoked or after it is invoked in the program ! 
    return number * number;
}

console.log("\n+------------------------------------+");
console.log("----- Square of the given number -----");
console.log("+------------------------------------+");

let number = 5;
let notANumber;
console.log( "\nThe square of the given number (5) : " + square( number ) + "\n");
console.log( "\nThe square of the given number without any value asssigned to the variable : " + square( notANumber ) + "\n");  // undefined value.
console.log( "\nThe square of the given number () : " + square( 2,3 ) + "\n"); // Only 2 will be passed to the funciton.

var squareFunction = square;

console.log( "Type of : " + typeof(squareFunction));

console.log("\nFunction assigned to a variable : " + squareFunction(3) + "\n");

/*

Function is being changed to a variable! 

squareFunction = 6;

console,log(squareFunction(5));

*/

// Anonymous Function

var greetings = function(name){
    // console.log("Hello there, " + name+ ". How are you doing ? ");
    // return 'Hello ' + name;
    // return `Hello ` + name;
    // return "Hello " + name;
    return `Hello ${name}\n`;  // Only when the backtick is used ! 
};  // Semi - colons aren't mandatory for the Anonymous Functions.

console.log(greetings('Soni'));

// Function Expressions doesn't work, when the function is called before its declaration.

function summation ( num1 , num2 ){
    // return num1 + num2;
    return arguments[0] + arguments[1] + arguments[2];  // Argument array is used for the summation! 
}

console.log(summation ( 2, 2, 4, 5 ) );  // Other numbers will be ignored ! JavaScript creates the array of the arguments.

function summationWithNumbersForLoop(){
    var sum = 0;  // variable without var keyword is a global variable.

    for( let i= o; i < arguments.length; i++ ){
        sum+=arguments[i];
    }

    return sum;
}


// There is no blockscope in the JS, unlike C. Only local and global scope. ( if let is used - BlockScope)
