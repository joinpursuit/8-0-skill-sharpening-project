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
// This function will return the length of a string
// Create a method that finds the length of a string
// .length
// return that method
return str.length;


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
  // This function converts inputted value into a number
  // Create a variable that holds the method that takes value and makes it a number
  let number = parseInt(val);
  // return method
  return number;
  
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
// This function converts a value into a string 
// Declare a variable that holds the method used to conver a value into a string
let newString = val.toString();
// return variable
return newString;

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
// This function converts text to uppercase
// Declare a variable that holds the uppercase text
let newText = text.toUpperCase();
// return that variable
return newText;

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
// This function convers text to all lowercase 
// Declare a variable that holds the lowercase text
let newText = text.toLowerCase();
// Return variable
return newText;

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
// This function checks whether words are in the provided text
// Create an if statement that checks if character is present in text
if (text.includes(character)) {
  // return true
  return true;
  // Create an else if statement if character is not present in text
} else if (text || !character) {
  // return false
  return false;
  
}


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
// This functions checks to see if a number is even or odd
// Create an if statement that finds whether number is even
if (num % 2 === 0) {
  // return true
  return true;
  // Create an else statment that returns if the number is odd
} else {
  // return false
  return false;
}


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
  // This function returns true if the number is odd/ returns false if even

  // Create an if statement if the number is odd
  if (num % 2 == !0) {
   // return true
    return true;
    // Create an else statement that returns false if number is even
  } else {
    return false;
  }
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
function isTruthy(val) {
  // This function determins whether a value is truthy 
  // Create an if statement if the value is truthy 
  if (!!val) {
    // return true
    return true;
    // Create an else statement if the value isn't truthy
  } else {
    //return false
    return false;
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
// This function checks if a value is truthy 
// Create an if statement that checks if a value is falsey
if (!val) {
  return true;
} else {
  return false;
}
// return true
// Create an else statement that checks if the value is truthy 
// return false
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
