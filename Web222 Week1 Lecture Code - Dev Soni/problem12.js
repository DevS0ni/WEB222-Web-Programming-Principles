/*******************************************************************
* Copyright         : 2022 Dev Soni
* File Name         : problem11.js
* Description       : This file covers the Problem - 11 of Week 1, the concepts of WEB222 course from Seneca College.
*                    
* Revision History  :
* Date		     Author 			Comments
* ------------------------------------------------------------------
* 05/09/2022     Dev Soni  	        Created.
*
/******************************************************************/

// [12.] Write a function is2xx(status) which takes a status code status 
// (e.g., 200) and returns true if the status code is a valid 2xx code.

function is200(status) {
    return status >= 200 && status <= 299;
  }
  
  console.log("200:", is200(200),"\n299:", is200(299),"\n100:", is200(100),"\n250:", is200(250));