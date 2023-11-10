/*******************************************************************
* Copyright         : 2022 Dev Soni
* File Name         : problem6.js
* Description       : This file covers the Problem - 6 of Week 1, the concepts of WEB222 course from Seneca College.
*                    
* Revision History  :
* Date		     Author 			Comments
* ------------------------------------------------------------------
* 05/09/2022     Dev Soni  	        Created.
*
/******************************************************************/

// [6.] Create a variable ipAddress and assign it the value of combining your four byteN variables together, separated by ".". 
//      For example: "192.168.2.1".

var byte1 = 192;
var byte2 = 168;
var byte3 = 0;
var byte4 = 1;

let ipAddress = `${byte1}.${byte2}.${byte3}.${byte4}`;

console.log(ipAddress);