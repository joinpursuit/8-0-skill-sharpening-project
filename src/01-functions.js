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
  //return naem
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
  //return string, including namme
  return `Hello, ${name}.`;
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
  //return number a plus number b
  return a + b;
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
function multiply(a, b) {
  //return the number a multiplied by number b
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
function average(a, b) {
  //return the sum of the 2 numbers, divided by 2
  return (a + b) / 2;
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
function averageThree(a, b, c) {
  // return the sum of all 3 nubers, and divide by 3
  return (a + b + c) / 3;
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
function compareTypes(a, b) {
  //return if the type of a === the type of b
  return typeof a === typeof b;
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
  //return the given number * -1 to flip the sign
  return a * -1;
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
  //Concatenate the parameters, seperated by spaces and return it
  return a + " " + b + " " + c + " " + d + " " + e
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
  //access the first and last # using bracket notation, concatenate, and return them
  return a[0] + a[a.length - 1];
  
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
