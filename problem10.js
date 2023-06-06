/*******************************************************************
* Copyright         : 2022 Dev Soni
* File Name         : problem10.js
* Description       : This file covers the Problem - 10 of Week 1, the concepts of WEB222 course from Seneca College.
*                    
* Revision History  :
* Date		     Author 			Comments
* ------------------------------------------------------------------
* 05/09/2022     Dev Soni  	        Created.
*
/******************************************************************/

// [10.] Write an If statement that checks to see if your statusCode is a 4xx client error. 
//       HINT: use the <, >, >=, and/or <= operators to test the value

var statusCode = 418;

if(statusCode >= 400 && statusCode <= 499){
    console.log("The Status Code " + `${statusCode}` + " is a client error");
}
else{
    console.log("The Status Code" + `${statusCode}`+ " is a client error");
}