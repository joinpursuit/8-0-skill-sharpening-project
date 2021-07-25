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
  // RETURNs the LENGTH of a string as a NUMBER
  // work with or without storing the length in a variable (i.e. line 15)
  stringLength = str.length;
  return stringLength;
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
  // converts the parameter to a NUMBER
  // use either Number() or .toNumber()
  return Number(val);
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
  // RETURN modifed VAL by using String() method
  return String(val);
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
  // RETURN the parameter as UpperCased()
  return text.toUpperCase();
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
  // RETURN the parameter as LowerCased()
  return text.toLocaleLowerCase();
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
  // RETURN BOOLEAN if one parameter INCLUDEs the other
  return text.includes(character);
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
  // IF NUM is even 
  if (num % 2 === 0) {
    // return true
    return true;
    // else 
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
  // IF NUM is odd 
  if (num % 2 !== 0) {
    // return true
    return true;
    // else 
  } else {
    // return false
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
  // IF parameter is truthy 
  if (val) {
    // return true
    return true;
  // else
  } else {
    // return false
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
  // IF parameter is false 
  if (!val) {
    // return true
    return true;
  // else
  } else {
    // return false
    return false;
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
