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
//  function getLengthOfString(str) {
//   return str.length;
// }
// // another way to do:
// // using arrow function
const getLengthOfString = str => str.length;

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
// function convertToNumber(val) {
//   return Number(val);
// }
const convertToNumber = val => Number(val);

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
// function convertToString(val) {
//   return String(val);
// }
const convertToString = val => String(val);

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
// function convertToShoutingText(text) {
//   return text.toUpperCase();
// }
const convertToShoutingText = text => text.toUpperCase();

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
// function convertToWhisperText(text) {
//   return text.toLowerCase();
// }
const convertToWhisperText = text => text.toLowerCase();

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
// function checkIfCharacterIsInString(text, character) {
//   let result = false;
//   if (text.includes(character)) {
//     result = true;
//   } 
//   return result;
// }
// // another way to do:
// // using ternary operator
function checkIfCharacterIsInString(text, character) {
  let result = text.includes(character) ? true: false;
  return result;
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
// function isEven(num) {
//   let result = false;
//   if (num % 2 === 0) {
//     result = true;
//   }
//   return result;
// }
function isEven(num) {
  let result = (num % 2 === 0) ? true: false;
  return result;
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
// function isOdd(num) {
//   let result = false;
//   if (num % 2 === 1) {
//     result = true;
//   }
//   return result;
// }
function isOdd(num) {
  let result = (num % 2 === 1) ? true: false;
  return result;
}

/**
 * isTruthy()
 * ---------------------
 * Returns `true` if the value given is a truthy value. Otherwise, returns `false`.
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
// function isTruthy(val) {
//   let result = false;
//   if (val) {
//     result = true;
//   }
//   return result;
// }
// // using arrow funtion and ternary operator
// // don't need to declare a new variable
// // return is implied on the arraw function
const isTruthy = val => val? true: false;

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
// function isFalsy(val) {
//   let result = false;
//   if (!val) {
//     result = true;
//   }
//   return result;
// }
const isFalsy = val => !val ? true: false;

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