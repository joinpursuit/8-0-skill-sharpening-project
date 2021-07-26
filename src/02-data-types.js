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
  // 1. Default Value and Output
  if (!str) {
    return 0
  } else if (typeof str !== 'string') {
    return "Error! Input a string"
  }
  return str.length
}


//console.log(getLengthOfString("down"))

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
  //1. Default Value and Output 
  if (!val) {
    return null
  }

  return Number(val)
}


//console.log(convertToNumber("111"))

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
  //1. Default Value and Output
  if (!val) {
    return null
  }
  return String(val)
}

//console.log(convertToString(99))

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
  // 1. Default Value and Output
  if (!text) {
    return null
  } else if(typeof text !== "string") {
    return "Error! Input a string"
  }
  return text.toUpperCase()
}

//convertToShoutingText("Hello There")

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
  // 1. Default Value and Output
  if (!text) {
    return null
  } else if(typeof text !== "string") {
    return "Error! Input a string"
  }
  return text.toLowerCase()
}

//console.log(convertToWhisperText("Hello There"))

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
  // 1. Default Value and Output
  if (!text) {
    return null
  } else if(typeof text !== "string") {
    return "Error! Input a string"
  }

  let inString = false
  // 2. Define the loop
  for (let i = 0; i < text.length; i++) {
    // 3. Accumulate!
    const element = text[i]
    if (element === character) {
      inString = true
    }
  }
  return inString
}

//console.log(checkIfCharacterIsInString("hello there", "e"));
//console.log(checkIfCharacterIsInString("hello there", "a"))

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
  // 1. Default Value and Output
  if (!num) {
    return null
  } else if(typeof num !== "number") {
    return "Error! Input a number"
  }
  return num % 2 === 0
}

//console.log(isEven(10))
//console.log(isEven(11))

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
  // 1. Default Value and Output
  let oddNum = false
  if (!num) {
    return null
  } else if(typeof num !== "number") {
    return "Error! Input a number"
  } else if (num % 2 === 0) {
    return oddNum
  } else {
    oddNum = true
  }
  return oddNum
}

//console.log(isOdd(10))
//console.log(isOdd(11))

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
  // 1. Default Value and Output
  if (val) {
    return true
  }
  return false
}

//console.log(isTruthy(10))
//console.log(isTruthy(null))

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
  // 1. Default Value and Output
  if (!val) {
    return true
  }
  return false
}

//console.log(isFalsy(undefined))
//console.log(isFalsy(" "))

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
