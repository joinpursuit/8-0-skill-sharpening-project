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

//This function is to return true
function alwaysTrue() {

  //Returns true always when the method is invoked
return true;
}
//logs the returned value


/**
 * greet()
 * ---------------------
 * Greets the person by name.
 * HINT: Look at the example closely. 
 * Capitalization, spacing, spelling, and 
 * punctuation count!
 * @param {string} name
 * @returns {string}
 *
 * EXAMPLE:
 *  greet("Ian");
 *  //> "Hello, Ian."
 */

//Greets any name inputted
function greet(name) {

//Returns the string
 return `Hello, ${name}.`;
}


/**
 * add()
 * ---------------------
 * Adds two numbers together and returns the sum.
 * HINT: If we are adding two numbers, how many 
 * parameters do we need?
 * @param {number} a
 * @param {number} b
 * @returns {number}
 *
 * EXAMPLE:
 *  add(10, 20);
 *  //> 
 */
//Adds the value of a and b
function add(a, b) {

  //declaring and storing the summation of a and b
  let sum =  a + b;

  //Returns the sum
  return sum;
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
  //Calculates the product
  let product = a * b;
  return product;
}
//logs the returned value
console.log(multiply(5, 11))
/**
 * average()
 * ---------------------
 * Returns the average of two numbers. You can get the average 
 * by adding up all numbers and then dividing by how many numbers were added.
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
  //Calculates the average
  let sumAvg = (a + b) / 2
return sumAvg
}

/**
 * averageThree()
 * ---------------------
 * Returns the average of three numbers. You can get the 
 * average by adding up all numbers and then dividing by how many 
 * numbers were added.
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
  //Calculates the average
  let average = (a + b + c)/3
  return average
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

  //compares data types
if(typeof a === typeof b){
  return true
}
return false;

//return typeof a === typeof b
}

/**
 * flipSign()
 * ---------------------
 * Returns the negative of a positive integer, or the positive 
 * of a negative integer.
 * @param {number} a
 * @returns {number}
 *
 * HINT: Using pencil and paper, how would you make a positive 
 * number look negative?
 * How could you apply this to a variable?
 * 
 * EXAMPLE:
 *  flipSign(-10);
 *  //> 10
 *
 *  flipSign(50);
 *  //> -50
 */

//Gives negation of the number inputted
function flipSign(number) {

  //Edge case handling: if zero, only this code block runs
  if(number === 0){
    return 0;
  }
  let signFlip = number;
  //compares if the number inputted is a positive number
        if (signFlip > 0){
         //negates if the value is positive
          return signFlip * -1
        }
        //negates if the value is negative 
        return signFlip * -1
}
console.log(flipSign(-20))

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
//Combing strings using interpolation 
  return a +' '+ b +' '+ c +' '+ d +' '+ e

}
console.log(joinStringsWithSpaces("left", "right", "up", "down", "away"));
console.log(joinStringsWithSpaces("apple", "cherry", "grape", "blueberry", "pear"))
/**
 * getFirstAndLastCharacter()
 * ---------------------
 * Returns the first and last character of a larger string as a single string.
 *
 * NOTE: The inputted string will always have a length of 2 or greater.
 * HINT: How can you find the nth character of any string?
 * How can find out how long a string is? How will this help you 
 * solve this problem?
 * @param {string} a
 * @returns {string}
 *
 * EXAMPLE:
 *  getFirstAndLastCharacter("upwards");
 *  //> "us"
 */
function getFirstAndLastCharacter(a) {
  //Declare, initialize and copy first and last characters of a string 
let word = a[0].concat(a.slice(a.length-1))
return word
}
console.log(getFirstAndLastCharacter('all about functions'))
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
