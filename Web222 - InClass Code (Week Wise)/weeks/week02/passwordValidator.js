function checkPassword(input) 
{ 
var passw=  /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*-+{}]).{8,32}$/;
if(input.match(passw)) 
{ 
    return true;
}
else
{ 
    return false;
}
}

console.log(checkPassword("Dev3012200323$"));
console.log(checkPassword("Dev343433$"));