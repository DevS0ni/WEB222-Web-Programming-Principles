var colors = [ "Red", "Green", "Blue", "Yellow", "White"]; // Array of colors...
function f(e){
    console.log(e);
}


console.log('------------------------');

colors.forEach(f); // Will print each elements of the array.


console.log('------------------------');

colors.forEach(function(e){   // Calling an anonymous function, saves the work without defining the function.
    console.log(e);     
});

console.log('------------------------');

colors.forEach((e)=>console.log(e));

console.log('------------------------');

var nums = [5,3,4,6];

var nums2 = [];

nums.forEach(function(e){
    e+=10;
    nums2.push(e);
});

console.log(nums);  // ---> Displaying only the elements without any modification.

console.log(nums2);  // ---> Incremented values...

console.log('------------------------');

var nums3 = nums.map(function (e){
    return e+=10;
});

console.log(nums3);


console.log('------------------------');

var nums4 = nums.map(e=>e+=10);

console.log(nums4)


console.log('------------------------');

//Exercises :

function log(s){
    for(let i=0; i<s.length; i++){
        console.log(s[i]);
    }
}

log(['Red', 'Blue', '68']);   /// Can be done with forEach...


console.log('------------------------');

var history=[]; // Initialising the NULL array... 

function addItemToHistory(item){
    history.push(item);      // It adds the passed arguments at the end of the array.
}

addItemToHistory('Apples');
addItemToHistory('Bananas');  // Passing the arguments.

console.log(history);

console.log('------------------------');


var arr=[];
function buildArray(s1, s2){
    for(let i=s1; i<=s2; i++){
        arr.push(i);
    }
    return arr;
}

console.log(buildArray(5,10));

console.log('------------------------');

var arr = [ 1, 2, 3, 4 ];

let addDollars = arr.map((item) => {
    return '$' + item;
});

console.log(addDollars);

