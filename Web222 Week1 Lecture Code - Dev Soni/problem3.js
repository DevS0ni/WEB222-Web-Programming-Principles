/*******************************************************************
* Copyright         : 2022 Dev Soni
* File Name         : problem3.js
* Description       : This file covers the Problem - 3 of Week 1, the concepts of WEB222 course from Seneca College.
*                    
* Revision History  :
* Date		     Author 			Comments
* ------------------------------------------------------------------
* 05/09/2022     Dev Soni  	        Created.
*
/******************************************************************/

// [3.] Create a variable isNotSeneca and assign it the inverse boolean value of isSeneca. 
// HINT: if isSeneca is true, isNotSeneca should be false.

var label = "senecacollege";
var tld = "ca";
var domainName = label + "." + tld;

var isSeneca = (domainName === "senecacollege.ca") ? true : false;

var isNotSeneca = !isSeneca;

console.log(isNotSeneca);