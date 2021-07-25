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
  // This function will always return true;
  // return true
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
  // This function greets person by name 
  // Create a variable and assign it to 'Hello'
  // return a string that greets person by name
  let greet = 'Hello';
  return greet + ',' + ' ' + name + '.';


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
// This function adds two numbers (a & b) - > will return the sum
// Create a variable that holds the total of a + b
// Create a statement that adds a and b together
let total = a + b
// Return the total 
  return total;


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
  // This function multiplies two numbers together
  // Create a variable that holds the total of both numbers multiplied together
  let total = a * b;
  // return the variable
  return total;
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
  // This function returns the average of all numbers
  // Create a variable that adds all numbers
  let total = a + b;
  // Create a variable that divides the total by the amount of numbers
  let average = total / 2;
  // return variable
  return average;

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
// Finds the average of all three numbers
// Create a variable that stores all numbers added
let total = a + b + c
// Create a variable that holds the average
let average = total / 3
// return variable
return average;


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
// This functions finds if a & b are the same type 
  // Create an if statement to find if a & b are the same type
  if (typeof a === typeof b) {
    return true;
  } else {
    return false;
  }
// return true
// If not the same type return false


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
// Function returns a negative if the number is positive/ positive if the number is negative
// Create a variable and assign it to 0
let num = 0
// Create an if statement that makes a poitive number negative
if (a < num) {
  return Math.abs(a);
  // Creates an else statement that makes a negative number positive
} else if (a) {
  return Math.abs(a) * -1;
}
// return value for each if statement

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
// Join all strings into one single string
// Create a return statement that joins all strings together
 return a + ' ' + b + ' ' + c + ' ' + d + ' ' + e;
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
  // Function returns the first and last character of a string
  // Create a variable that holds the first letter of the string
  let firstLetter = a.slice(0, 1);
  // Create a variable that holds the last letter of the string
  let lastLetter = a.slice(-1);
  // Create a variable that holds both the first and last letter
  let newString = firstLetter + lastLetter
  // return the variable
  return newString;
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
