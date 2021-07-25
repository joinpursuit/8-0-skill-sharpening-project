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
  //this will ALWAYS return true
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
// decalre a varand assign it "Hello,"
let greeting = "Hello, "
  //return the var + name
  return greeting + name + '.';
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
//set a var assign it to just add a and b
let addedNums = a + b
  //return the var
  return addedNums
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
// declare a var assign it a * b
let mulipliedNums = a * b
  //return the var
  return mulipliedNums 
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
//decalre a var, assign it (a + b)/ 2
let averageTwoNum = (a + b)/ 2
  // return the var 
  return averageTwoNum
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
//declare a var, assign it to add all three in () then / by 3
let averageThreeNum = (a + b + c)/3
  //return the var
  return averageThreeNum
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
//if a and b are the same type then...
if( typeof a === typeof b ){
  // return true
  return true
}
//if theyre not...
else if( typeof a !== typeof b ) {
  //return false 
  return false
}
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
//decalre a var, assign it to make the pos a neg a neg a pos
//(if you multpily by -1 a neg will become a pos and a pos will become a neg)
let negOne = a * -1
  //return the var 
  return negOne
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
//declare a var and just add all the params with + ' ' in between them
let spaceString = a + ' ' + b + ' ' + c + ' ' + d + ' ' + e
  //return the var
  return spaceString
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
//declare a var and assign it to pull the first character of the string and hte last char of a string
let beginAndEndChar = a.charAt(0) + a.slice(-1)
  //return the var 
  return beginAndEndChar
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
