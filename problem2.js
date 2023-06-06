/*******************************************************************
* Copyright         : 2022 Dev Soni
* File Name         : problem2.js
* Description       : This file covers the Problem - 2 of Week 1, the concepts of WEB222 course from Seneca College.
*                    
* Revision History  :
* Date		     Author 			Comments
* ------------------------------------------------------------------
* 05/09/2022     Dev Soni  	        Created.
*
/******************************************************************/

// [2.] Create a variable isSeneca and assign it a boolean value (true or false) depending on whether or not domainName is equal to "senecacollege.ca". 
//      HINT: use === and don’t write true or false directly.

var label = "senecacollege";
var tld = "ca";
var domainName = label + "." + tld;

var isSeneca = (domainName === "senecacollege.ca") ? true : false;

console.log(isSeneca);