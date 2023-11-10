/*******************************************************************
* Copyright         : 2022 Dev Soni
* File Name         : problem8.js
* Description       : This file covers the Problem - 8 of Week 1, the concepts of WEB222 course from Seneca College.
*                    
* Revision History  :
* Date		     Author 			Comments
* ------------------------------------------------------------------
* 05/09/2022     Dev Soni  	        Created.
*
/******************************************************************/

// [8.] Create a variable ipBinary that contains the binary representation of the ipInt value. 
//      HINT: use .toString(2) to display the number with 1 and 0 only.


var byte1 = 192;
var byte2 = 168;
var byte3 = 8;
var byte4 = 0;
var ipInt = (byte1 << 24) + (byte2 << 16) + (byte3 << 8) + (byte4);

let ipBinary = ipInt.toString(2);

console.log(ipBinary);