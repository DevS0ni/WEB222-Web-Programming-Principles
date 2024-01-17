function program(prog) {
    var school = "ICT";
    function student(name) {
        return "Student name: " + name + ", Program: " + prog + ", School of " + school;
    }
    return student;
}

var bsd_student = program("BSD"); // returns the inner function with an initial value
// The datatype has been assigned 
var cpa_student = program("CPA");  // Closure function - has access to the functions, in which it has been declared or defined...

var john = bsd_student("John Smith");  //Datatype has been assigned to a function is string type, because bsd_student returns function - student and student returns a string.
var dave = cpa_student("Dave Lee");
var dave2 = program("CPD")("Jr. Dave Lee");

console.log(john);
console.log(dave);
console.log(dave2);

console.log("================");

function increment(){
    var count = 0;
    return function(){
        return count+=1;
    }
}

var counter = increment(); // The name of the variable should be the same.
 
console.log("The value of counter1 : "+ counter());
console.log("The value of counter2 : "+ counter());
console.log("The value of counter3 : "+ counter());

console.log("============");

function adder(x){ 
    return function(y){
        return x+y;
    }
}

var add5 = adder(5)(3);
var add6 = adder(6)(1);

console.log(add5);
console.log(add6);

