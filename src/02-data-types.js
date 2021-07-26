/**
* getLengthOfString()
* ---------------------
* Returns the length of a string.
* @param {string} str
* @returns {number}
*
* EXAMPLE:
*  getLengthOfString("down");
*  //> 4
*/
function getLengthOfString(str) {
  let stringlength = str.length;
  return stringlength
}
  
/**
* convertToNumber()
* ---------------------
* Converts the inputted value into a number.
* @param {*} val
* @returns {number}
*
* EXAMPLE:
*  convertToNumber("111");
*  //> 111
*/
function convertToNumber(val) {
 let entry = val;
 let convert = Number(entry); // Number(), parseInt, parseFloat,
 return convert;
}

 /**
* convertToString()
* ---------------------
* Converts the inputted value into a string.
* The value is guaranteed to NOT be null or undefined.
* @param {*} val
* @returns {string}
*
* EXAMPLE:
*  convertToString(99);
*  //> "99"
*/
function convertToString(val) {
 let num = val;
 let convert = num.toString(); //.to
 return convert;
  }
 
/**
* convertToShoutingText()
* ---------------------
* Converts the inputted text into all uppercase characters.
* @param {string} text
* @returns {string}
*
* EXAMPLE:
*  convertToShoutingText("Hello There");
*  //> "HELLO THERE"
*/
function convertToShoutingText(text) {
 let enter = text;
 let shout = enter.toUpperCase();
 return shout;  
 }
 
/**
* convertToWhisperText()
* ---------------------
* Converts the inputted text into all lowercase characters.
* @param {string} text
* @returns {string}
*
* EXAMPLE:
*  convertToWhisperText("Hello There");
*  //> "hello there"
*/
function convertToWhisperText(text) {
  let input = text;
  let whisper = input.toLowerCase();
  return whisper;
}
 
/**
* checkIfCharacterIsInString()
* ---------------------
* Checks if the given `character` appears in the `text`.
* @param {string} text
* @param {string} character
* @returns {boolean}
*
* EXAMPLE:
*  checkIfCharacterIsInString("hello there", "e");
*  //> true
*
*  checkIfCharacterIsInString("hello there", "a");
*  //> false
*/
 
function checkIfCharacterIsInString(text, character) {
  let statement = false;
  if (text.includes(character)){
    return true
  } 
  return statement;
}
 
/**
* isEven()
* ---------------------
* Returns `true` if the number given is even. Otherwise, returns false.
* @param {number} num
* @returns {boolean}
*
* EXAMPLE:
*  isEven(10);
*  //> true
*
*  isEven(11);
*  //> false
*/
function isEven(num) {
let number = num;
x = false
//if number is even return true // else return false //
if(number % 2 === 0){
  x = true;
  return x;
  }  
return false;
}

 
/**
* isOdd()
* ---------------------
* Returns `true` if the number given is odd. Otherwise, returns `false`.
* @param {number} num
* @returns {boolean}
*
* EXAMPLE:
*  isOdd(10);
*  //> false
*
*  isOdd(11);
*  //> true
*/
function isOdd(num) {
  if(num % 2 === 1){
    x  = true;
    return x;
    }  
return false;
}
 
/**
* isTruthy()
* ---------------------
* Returns `true` if the value given is a truthy value. Otherwise, returns `false`.
* @param {*} val
* @returns {boolean}
* 
* what are truthy values ?
* EXAMPLE:
*  isTruthy(10);
*  //> true
*
*  isTruthy(null);
*  //> false
*/

function isTruthy(val) {
let condition = true;
  if(val){
   condition = true;
   return condition;
} else if (!val){
   condition = false;
   return condition;
}
}
 
/**
* isFalsy()
* ---------------------
* Returns `true` if the value given is a falsy value. Otherwise, returns `false`.
* @param {*} val
* @returns {boolean}
*
* EXAMPLE:
*  isFalsy(undefined);
*  //> true
*
*  isFalsy(" ");
*  //> false
*/
function isFalsy(val) {
 let condition = false; 
  if(!val){
   condition = true;
   return condition;
 }else if(val){
   condition = false;
   return condition
 }
}
 
// Do not change the code below.
 module.exports = {
   getLengthOfString,
   convertToNumber,
   convertToString,
   convertToShoutingText,
   convertToWhisperText,
   checkIfCharacterIsInString,
   isEven,
   isOdd,
   isTruthy,
   isFalsy,
 };