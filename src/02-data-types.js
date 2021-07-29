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

//Counts string character
function getLengthOfString(str) {
  //Declare, initialize and find string count
  let number = str.length;

  //Return string count
  return number;
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
  //Converts string to number using Number()function. 
let  stringNumber = Number(val);

//Returns converted string
return stringNumber;
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
 //Converts string to number using toString()function. 

let numString = val.toString();
//Returns converted string
return numString;
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
  //Converts to upper case
let upperCase = text.toUpperCase()
//returns uppercase
return upperCase;
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
//converts to lowercase
let lowerCase = text.toLowerCase();
//Returns lowercase 
return lowerCase;
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

//Checks for a character in a string
function checkIfCharacterIsInString(text, character) {
let checkChar = text;
//Checks for a character
//if(checkChar.includes(character)){
  for (let char of text){
    if(char === character){
      return true; 
  }
}
return false;
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
return number % 2 === 0;
// //checks if even
// if(number % 2 === 0){
  
//   return true;
// }
// return false;
//Or: number % 2 === 0
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
  let number = num;

  // //checks if odd
  // if(number % 2 === 1){
  //   return true;
  // }
  // return false;
  //Or: return number % 2 === 1
  return isEven(num) === false
  }
 
/**
 * isTruthy()
 * ---------------------
 * Returns `true` if the value given is a truthy value. 
 * Otherwise, returns `false`.
 * @param {*} val
 * @returns {boolean}
 *
 * EXAMPLE:
 *  isTruthy(10);
 *  //> true
 *
 *  isTruthy(null);
 *  //> false
 */
function isTruthy(val) {

  //checks if truthy
  if(val){

    return true;
}
  return false;
   //return val === true;
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

  //Checks if falsy
  if(!val){
    return true;
}
  return false;
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
