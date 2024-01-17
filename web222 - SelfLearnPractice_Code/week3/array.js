var myArray = ["first",1,2]
// var myObject = {index0: "first", }
console.log(myArray[0])

var lastItem = myArray.pop()
console.log(myArray)
console.log(lastItem)

myArray.push(lastItem)
console.log(myArray)

var newArray = myArray.concat(["last", "very last"])
console.log(newArray)

if (newArray.includes(3)) {
    console.log("yeah it does!")
} else {
    console.log("no it does not!")
}






for(let i = 0; i < newArray.length; i++) {
    console.log(newArray[i])
}

newArray.forEach(function(element,i) {
    console.log(i, element)
})

var string1 = "hello"
string1.forEach()