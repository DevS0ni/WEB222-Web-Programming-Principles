var seneca = {studentID: 89008899}
var senecaCard = {studentName: "Suluxan Mohanraj"}
var senecaBalance = {studentBalance: -90.04}


var senecaObject = {
    studentID: 89008899,
    studentName: "Suluxan Mohanraj",
    studentBalance: -90.04
}

console.log(senecaObject.studentBalance)

var menu = {
    breakfast: ['eggs', 'toast', 'banana', 'coffee'],
    lunch: ['salad', 'chicken', 'apple', 'milk'],
    dinner: ['salmon', 'rice', 'green beans']
};

console.log(menu.breakfast)
console.log(menu['breakfast'])
//  example loop 
// for (var i = 0; i < menu.breakfast.length...)


var balance = {}
balance.funds = -90.04
balance.topUp = new Date()
console.log(balance)
balance.funds = 90
console.log(balance)


var senecaCard = {
    studentID: 89008899,
    studentName: "Suluxan Mohanraj",
    studentBalance: -90.04,
    transactions: {
        2022: {
            jan: [2.00, 1.00, 7.00],
            feb: [5.00, 4.00, 5.00, 7.00]
        }
    },
    getBalance: function() {
        return this.studentBalance
    },
    updateBalance: function(change) {
        if(change < 0) {
            this.studentBalance - change
        } else {
            this.studentBalance + change 
        }
    }
}

senecaCard.getBalance()

function StudentCardPrint(name, studentID) {
    this.studentName = name
    this.studentID = studentID
    this.balance = 0 
    this.transactions = {}
    this.getBalance = function() {
        return this.balance
    }
    this.updateBalance = function(change) {
        if(change < 0) {
            this.balance - change
        } else {
            this.balance + change 
        }
    }
}

// StudentCardPrint.prototype.getName = function() {
//     return this.studentName
// }



var smStudentCard = new StudentCardPrint("Suluxan Mohanraj", 23899284)
var jsStudentCard = new StudentCardPrint("Jon Snow", 23899284)


console.log(smStudentCard.prototype.getName)
// console.log(smStudentCard.getBalance())

// class StudentCardClass...
// var student = new StudentCardClass("Suluxan Mohanraj")