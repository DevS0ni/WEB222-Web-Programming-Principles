/*******************************************************************
* Copyright         : 2022 Dev Soni
* File Name         : problem7.js
* Description       : This file covers the Problem - 7 of Week 1, the concepts of WEB222 course from Seneca College.
*                    
* Revision History  :
* Date		     Author 			Comments
* ------------------------------------------------------------------
* 05/09/2022     Dev Soni  	        Created.
*
/******************************************************************/

// [7.] Create a variable ipInt and assign it the integer value of bit-shifting (<<) and adding your byteN variables. 
//      HINT: your ipInt will contain 32 bits, the first byte needs to be shifted 24 bit positions (<< 24) so it occupies 32-25, the second shifted 16, the third 8.

var byte1 = 192;
var byte2 = 168;
var byte3 = 8;
var byte4 = 0;
var ipInt = (byte1 << 24) + (byte2 << 16) + (byte3 << 8) + (byte4);

console.log(ipInt);

// We can also get each number back again like so:
console.log(
    (ipInt >> 24) & 0xFF, // 0xFF is 255 or 11111111
    (ipInt >> 16) & 0xFF,
    (ipInt >> 8) & 0xFF,
    ipInt & 0xFF
  );