/*******************************************************************
* Copyright         : 2022 Dev Soni
* File Name         : problem5.js
* Description       : This file covers the Problem - 5 of Week 1, the concepts of WEB222 course from Seneca College.
*                    
* Revision History  :
* Date		     Author 			Comments
* ------------------------------------------------------------------
* 05/09/2022     Dev Soni  	        Created.
*
/******************************************************************/


// [5.] Convert byte1 to a String using .toString(), and console.log() the result. 
//      What happens if you use toString(2) or toString(16) instead?

var byte1 = Math.floor(Math.random()*256);

console.log(byte1.toString()); // STRING

console.log(byte1.toString(2));  // BINARY (BASE(2))

console.log(byte1.toString(16)); // HEXADECIMAL (BASE(16))