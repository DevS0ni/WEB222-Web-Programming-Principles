// defining a function in js

function helloWorld() {
    console.log("hello world!")

}

var hello = function() {
    console.log("hello")
}

// invoking or calling a function in js

function customText(inputText) {
    // console.log(arguments[1])
    // var newText = `${inputText} class`
    var newText = inputText + " class!"
    // return newText
}

helloWorld() 
var returnedText = customText("hello", "class")
console.log(returnedText)

var myInt = parseInt(6)
console.log(myInt)


var currentDate = new Date()

console.log(currentDate.getMonth())


const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);

const backToJson = JSON.stringify(obj)

console.log(json)
console.log(obj)
console.log(backToJson)




// var, let, const
// const 
const pi = 3.14
pi = 2 // not possible - assignment to a constant var error!

// var  = function scoped 
function sum(a) {
    if(a) {
        var tempVar = a 
    }
    tempVar
    var c = a * b 

}

//  let  = block scoped 


