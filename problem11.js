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

// [11.] Write a switch statement that checks your statusCode for all possible 1xx information responses. 
//       In each case, you should console.log() the response text associated with the status code, or "unknown information response" if the status code is not known.

var statusCode = 418;

switch(statusCode) {
    case 100:
      console.log('Continue');
      break;
    case 101:
      console.log('Switching Protocol');
      break;
    case 102:
      console.log('Processing (WebDAV)');
      break;
    case 103:
      console.log('Early Hints');
      break;
    default:
      console.log('unknown information response');
      break;
  }