/*******************************************************************
* Copyright         : 2022 Dev Soni
* File Name         : problem1.js
* Description       : This file covers the Problem - 1 of Week 1, the concepts of WEB222 course from Seneca College.
*                    
* Revision History  :
* Date		     Author 			Comments
* ------------------------------------------------------------------
* 05/09/2022     Dev Soni  	        Created.
*
/******************************************************************/


// [1.] Create a variable label and assign it the value "senecacollege". 
//      Create another variable tld and assign it "ca". 
//      Create a third variable domainName that combines label and tld to produce the value "senecacollege.ca".

var label = "senecacollege";
var tld = "ca";
var domainName = label + "." + tld;

console.log(domainName);