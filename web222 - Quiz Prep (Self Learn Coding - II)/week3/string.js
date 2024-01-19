// instantiating strings

var string1 = "this is a string"
var string2 = 'this is also a string'
var string3 = `look: ${string2}`
var unicode = "中文 español Deutsch English देवनागरी العربية português বাংলা русский 日本語 ਪੰਜਾਬੀ 한국어 தமிழ் עברית" // non-ASCII characters

var string4 = new String("this is also also a string!")
console.log(string4)
// console.log(typeof(string3))
// console.log(string1.length)


// password checker 
// var password = ""

// if (password) {
//     if (password.length < 8) {
//         console.log("PASSWORD ENTRY DENIED")
//     } else {
//         console.log("PASSWORD IS GOOD!")
//     }
// }



// if (password && password.length > 8) {
//     console.log("PASSWORD IS GOOD!")
// } else if (password.includes("password")) {
//     console.log("PASSWORD ENTRY DENIED - COMMON WORDS")
// } else {
//     console.log("PASSWORD ENTRY DENIED")
// }

// console.log(password.concat("123"))
// console.log(password + "123")

var password = "Seneca21231299381@"


if (!password || password.length < 8) {
    console.log("PASSWORD ENTRY DENIED")
} else if (password.startsWith("password") || password.endsWith("123")){
    console.log("PASSWORD ENTRY DENIED - COMMON WORDS")
} else if (password.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)){
    console.log("PASSWORD IS GOOD!")  
} else {
    console.log("PASSWORD ENTRY DENIED")
} 


var email = "suluxan.mohanraj@senecacollege.ca"

var index = email.indexOf("@")
var username = email.slice(0,index)
console.log(username.toLowerCase())

// console.log(email.split("@"))
// const groceries = 'chicken, eggs, lettuce, tomatoes, pizza dough';
// console.log(groceries.split(","))


var array = ["one", 2, "thr33", "4our"]
// var array = new Array(1,2,3,4)
console.log(array.length)

var empty = ["five"]
// empty[7] = 56
// console.log(empty)


// array.pop()
// console.log(array)

array.concat(empty)
console.log(array)


