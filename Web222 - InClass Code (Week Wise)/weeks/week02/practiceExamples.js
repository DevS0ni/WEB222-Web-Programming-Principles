// Function 1 : Area of a circle : 

function area(radius){
        return Math.PI * radius * radius;
}

console.log("Area of the circle  : " + area(2).toFixed(4));


// Function 2 : Celsius to Fahrenheit : 

function CelsiusConverter(celsius){ 
    Fahrenheit = celsius * (9/5 + 32);
    var Answer = Fahrenheit + ' F';
    return Answer;
}

console.log("The value in Fahrenheit : " + CelsiusConverter(5));

// Function 3 : Fahrenheit to Celsius and Celsius to Fahrenheit Convertor with Type specified : 

function convertor(value, type){
    if(type === 'C' || type === 'c'){
        Fahrenheit = value * (9/5 ) + 32;
        var Answer = Fahrenheit + ' F';
    }

    else if(type === 'F' || type === 'f'){
        Celsius = 5 * (value - 32)/9;
        var Answer = Celsius.toFixed(2) + ' C';
    }

    else{
        console.log('ERROR : You must specify the correct type...\n Try Again..\n');
    }

    return Answer;
}

console.log("The value of Fahrenheit : " + convertor(0, 'C'));
console.log("The value of Celsius : " + convertor(0, 'F'));

// Function 3 : Printing the member of an array which is more than 50 and also less than 50 : 
function isUnder(){
        for(var i=0; i < arguments.length; i++){
        if(arguments[i]<50){
            console.log("Less than 50 : "+ arguments[i]);
        }
        else{
            return console.log("More than 50 : " + arguments[i]);
        }
     }

}

console.log(isUnder(1,2,3,4,56));

