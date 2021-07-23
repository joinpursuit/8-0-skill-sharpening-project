/**
 * alwaysTrue()
 * ---------------------
 * Always returns the value `true`.
 * HINT: What data type do we want to return here?
 * @returns {boolean}
 *
 * EXAMPLE:
 *  alwaysTrue();
 *  //> true
 */
function alwaysTrue() {
  return true;
}

/**
 * greet()
 * ---------------------
 * Greets the person by name.
 * HINT: Look at the example closely. 
 * Capitalization, spacing, spelling, and punctuation count!
 * @param {string} name
 * @returns {string}
 *
 * EXAMPLE:
 *  greet("Ian");
 *  //> "Hello, Ian."
 */
function greet(name) {
  // input: name is a string
  // output: return a string 'Hello, Name'

  
  // problem: a greeting with caps, space and capital letter for first name
  // solution: 1. string copy into an array 2. string concatenation 3. add the rest of the name
  // variable: declare a variable to make a string copy into an array
  const strCopy = name.split();
  // first letter needs to be accessed in the string arr and be capitalized
  // add all the other letters need to the first letter
  const firstName = strCopy[0][0].toUpperCase() + strCopy[0].slice(1)

  // return the variable with the full name
  return `Hello, ${firstName}.`;
}

/**
 * add()
 * ---------------------
 * Adds two numbers together and returns the sum.
 * HINT: If we are adding two numbers, how many parameters do we need?
 * @param {number} a
 * @param {number} b
 * @returns {number}
 *
 * EXAMPLE:
 *  add(10, 20);
 *  //> 30
 */
function add(a, b) {
  // input: a and b are numbers
  // output: return a number that adds a and b

  return a + b
}

/**
 * multiply()
 * ---------------------
 * Multiplies the two numbers together and returns the product.
 * HINT: How is this similar to add()? How is it different?
 * @param {number} a
 * @param {number} b
 * @returns {number}
 *
 * EXAMPLE:
 *  multiply(2, 5);
 *  //> 10
 */
function multiply(a ,b) {
  // input: a and b are numbers
  // output: return the product of a and b

  return a * b
}

/**
 * average()
 * ---------------------
 * Returns the average of two numbers. You can get the average by adding up all numbers and then dividing by how many numbers were added.
 *
 * NOTE: The sum of all numbers will always be even.
 * HINT: How is this problem similar to add()? How is it different?
 * HINT: Use parentheses () to control the order of operations:
 * 6 + 4 / 2 = 8 but (6 + 4) / 2 = 5. Why is this?
 *
 * @param {number} a
 * @param {number} b
 * @returns {number}
 *
 * EXAMPLE:
 *  average(10, 6);
 *  //> 8 // 10 + 6 = 16; 16/2 = 8;
 */
function average(a ,b) {
  // input: a and b are numbers
  // output: return the average of the two numbers

  return (a + b) / 2
}

/**
 * averageThree()
 * ---------------------
 * Returns the average of three numbers. You can get the average by adding up all numbers and then dividing by how many numbers were added.
 *
 * NOTE: The sum of all numbers will always be even.
 * HINT: How is this problem similar to average()? How is it different?
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {number}
 *
 * EXAMPLE:
 *  averageThree(10, 11, 19);
 *  //> 10 // 10 + 11 + 19 = 30; 30 / 3 = 10;
 */
function averageThree(a , b, c) {
  // input: a, b and c are numbers
  // output: return a number that returns the average of the three numbers

  return (a + b + c) / 3
}

/**
 * compareTypes()
 * ---------------------
 * Returns `true` if `a` and `b` are of the same type. Otherwise, returns `false`. You can check for types with the `typeof` operator.
 * @param {*} a
 * @param {*} b
 * @returns {boolean}
 *
 * HINT: What JavaScript function returns the data type of something?
 * 
 * EXAMPLE:
 *  compareTypes("left", "right");
 *  //> true
 *
 *  compareTypes("left", 10);
 *  //> false
 */
function compareTypes(a , b) {
  // input: a and b are astericks --> symbol
  // return true if a and b are the same data type or return false if a and b are not the same data type

  // if a and b are the same data type
  if (typeof a === typeof b) {
    // return true
    return true
  }
  // otherwise return false if a and b are not the same data type
  return false
}

/**
 * flipSign()
 * ---------------------
 * Returns the negative of a positive integer, or the positive of a negative integer.
 * @param {number} a
 * @returns {number}
 *
 * HINT: Using pencil and paper, how would you make a positive number look negative?
 * How could you apply this to a variable?
 * 
 * EXAMPLE:
 *  flipSign(-10);
 *  //> 10
 *
 *  flipSign(50);
 *  //> -50
 */
function flipSign(a) {
  // input: a is a number
  // output: return the negative `number` if the `number` is a positive integer or 
  //         return the positive `number` if the `number` is a negative integer

  // if the number is a positive integer
  if (a > 0) {
    // return a negative `number`
    return - a

    // if the `number` is a negative integer
  } else if (a < 0) {
    // return a positive `number`
    return -a

    // edge case if 0
  } else {
    // return `0 is a neutral number`
    return '0 is a neutral number.'
  }
}

/**
 * joinStringsWithSpaces()
 * ---------------------
 * Joins together all inputted strings into a single string, separated by spaces.
 * @param {string} a
 * @param {string} b
 * @param {string} c
 * @param {string} d
 * @param {string} e
 * @returns {string}
 *
 * HINT: You DON'T need fancy methods like `split()` and `join()` to do this.
 * What is the simplest way to combine two strings?
 * 
 * EXAMPLE:
 *  joinStringsWithSpaces("left", "right", "up", "down", "away");
 *  //> "left right up down away"
 */
function joinStringsWithSpaces(a, b, c, d, e) {
  // input: a, b, c, d and e are strings
  // output: return a concatenated string

  // problem: what is the simplest way to combine two strings?
  // solution: string concatenation
  // variable: declare the variable called string thread 
  const space = ' '
  const stringThread = a + space + b + space + c + space + d + space + e

  // return the concatenated string
  return stringThread
}

/**
 * getFirstAndLastCharacter()
 * ---------------------
 * Returns the first and last character of a larger string as a single string.
 *
 * NOTE: The inputted string will always have a length of 2 or greater.
 * HINT: How can you find the nth character of any string?
 * How can find out how long a string is? How will this help you solve this problem?
 * @param {string} a
 * @returns {string}
 *
 * EXAMPLE:
 *  getFirstAndLastCharacter("upwards");
 *  //> "us"
 */
function getFirstAndLastCharacter(a) {
  // input: a is string
  // output: returns a string with the first and last character of string a

  // problem: How can you find the nth character of any string?
  // solution: 1. String concatenation 2. string.prototype.charAt()
  // return the first and last letter of the string using string concatenation
  return a.charAt(0) + a.charAt(a.length - 1)
}

// Do not change the code below.
module.exports = {
  alwaysTrue,
  greet,
  add,
  multiply,
  average,
  averageThree,
  compareTypes,
  flipSign,
  joinStringsWithSpaces,
  getFirstAndLastCharacter,
};
