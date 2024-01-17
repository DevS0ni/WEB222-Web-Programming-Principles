var colors = [ "Red", "Green", "Blue", "Yellow", "White"]; // Array of colors...
function f(e){
    console.log(e);
}

colors.forEach(f); // Will print each elements of the array.

colors.forEach(function(){   // Calling an anonymous function, saves the work without defining the function.
    console.log(e);     
})