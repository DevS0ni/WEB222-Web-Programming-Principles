// ROLLING A DICE CODE GAME (Math function) :-
console.log("ROLLING A DICE CODE GAME :-");
console.log("===========================");

function roll(side){
   return (Math.floor(Math.random() * side));

}
var side = prompt("Specify the number of sides : ",6);
roll(side);