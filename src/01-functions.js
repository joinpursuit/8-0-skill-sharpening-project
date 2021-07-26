/**
 * alwaysTrue()
 * ---------------------
 * Always returns the value `true`.
 * HINT: What data type do we want to return here? boolean (e.g. true or false)
 * @returns {boolean}
 *
 * EXAMPLE:
 *  alwaysTrue();
 *  //> true
 */
function alwaysTrue() {
  // 1. Default Value and output
  return true
}

//console.log(alwaysTrue())

/*// NOTES: (MDN) 
To return a value other than the default, 
a function must have a return statement that specifies the value to return. 
A function without a return statement will return a default value. 
In alwaysTrue, the default value is false
*/

/**
 * greet()
 * ---------------------
 * Greets the person by name.
 * HINT: Look at the example closely. 
 * Capitalization, spacing, spelling, and punctuation count! Note the period at the end 
 * @param {string} name
 * @returns {string}
 *
 * EXAMPLE:
 *  greet("Ian");
 *  //> "Hello, Ian."
 */
function greet(name) {
  // 1. Default Value and output (avoid comparing against undefined with strict quality operator, i.e. === undefined)
  if (!name) {
    return null
  } else if (typeof name !== "string") {
    return "Error! Input data as a string"
  }
  return "Hello, " + name + "." 
}


//console.log(greet())

/**
 * add()
 * ---------------------
 * Adds two numbers together and returns the sum.
 * HINT: If we are adding two numbers, how many parameters do we need? Need to input two numbers 
 * @param {number} a
 * @param {number} b
 * @returns {number}
 *
 * EXAMPLE:
 *  add(10, 20);
 *  //> 30
 */
function add(a, b) {
  // 1. Default value and output
  // Another way to test number of parameters - function.length
  if (!a && !b) {
    return null
  } else if (typeof a !== 'number' || typeof b !== 'number') {
    return "Error! Input two numbers"
  }
  return a + b
}


 //console.log(add(2))

/**
 * multiply()
 * ---------------------
 * Multiplies the two numbers together and returns the product.
 * HINT: How is this similar to add()? How is it different? Needs two numbers as inputs. Multiplying two numbers
 * @param {number} a
 * @param {number} b
 * @returns {number}
 *
 * EXAMPLE:
 *  multiply(2, 5);
 *  //> 10
 */
function multiply(a, b) {
  // 1. Default Value and Output
  if (!a && !b) {
    return null
  } else if (typeof a !== 'number' || typeof b !== 'number') {
    return "Error! Input two numbers"
  }

  return a * b
}


// console.log(multiply())

/**
 * average()
 * ---------------------
 * Returns the average of two numbers. You can get the average by adding up all numbers and then dividing by how many numbers were added.
 *
 * NOTE: The sum of all numbers will always be even.
 * HINT: How is this problem similar to add()? How is it different? It uses the fixed number of parameters in the function body
 * HINT: Use parentheses () to control the order of operations:
 * 6 + 4 / 2 = 8 but (6 + 4) / 2 = 5. Why is this? PEMDAS
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
  // 1. Default Value and Output
  // Why doesn't average.length === 0 work here. 
  //If there are no parameters, it shouldn't move to next if case
  let sumTotal = 0
  if (!a && !b) {
    return null
  } else if (typeof a !== 'number' || typeof b !== 'number') {
    return "Error! Input two numbers"
  } else if (a && b) {
    //a = 1
    //b = 1
    // use !! to convert to Boolean (e.g. !!value is the same as Boolean(value))
    //then add to get the number of parameters that exist
    sumTotal = !!a + !!b

  }
  // Use functionname.length vs hardcode - 
  // It's a way to use the number of function parameters (vs. arguments passed - arguments.length) 
  return (a+b) / sumTotal
}


//console.log(average(6, 1))

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
  // 1. Default Value and Output
  let sumTotal = 0
  if (!a && !b && !c) {
    return null
  } else if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number") {
    return "Error! Input three numbers"
  } else if (a && b && c) {
    sumTotal = !!a + !!b + !!c

  }
  return (a + b + c) / sumTotal
}

//console.log(averageThree(2, 1, 6))

/**
 * compareTypes()
 * ---------------------
 * Returns `true` if `a` and `b` are of the same type. Otherwise, returns `false`. You can check for types with the `typeof` operator.
 * @param {*} a
 * @param {*} b
 * @returns {boolean}
 *
 * HINT: What JavaScript function returns the data type of something? typeof()
 * 
 * EXAMPLE:
 *  compareTypes("left", "right");
 *  //> true
 *
 *  compareTypes("left", 10);
 *  //> false
 */
function compareTypes(a, b) {
  // 1. Default value and output
  if (!a && !b) {
    return null
    // Edge case if only one argument is passed 
  // } else if (!a || !b) {
  //   return "Error! Two inputs required"
  }
  return (typeof(a) === typeof(b))
}


// console.log(compareTypes())
// console.log(compareTypes('left', 10))

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
  // 1. Default value and output
  if (!a) {
    return null
  } else if (typeof a !== 'number') {
    return "Error! Input a number"
  }
  return a * -1
}


//console.log(flipSign('10'))
//console.log(flipSign(10))

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
 * What is the simplest way to combine two strings? Addition 
 * 
 * EXAMPLE:
 *  joinStringsWithSpaces("left", "right", "up", "down", "away");
 *  //> "left right up down away"
 */
function joinStringsWithSpaces(a, b, c, d, e) {
  // 1. Default value and output
  if (!a && !b && !c && !d && !e) {
    return null
  } else if (typeof a !== 'string' || typeof b !== 'string' || typeof c !== 'string' || typeof d !== 'string' || typeof e !== 'string') {
    return "Error! Input five strings"
  }
  return a + ' ' + b + ' ' + c + ' ' + d + ' ' +  e
}


//console.log(joinStringsWithSpaces("right", "up", "down", "away"))

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
  // 1. Default value and output
  if (!a) {
    return null
  } else if (typeof a !== 'string') {
    return "Error! Input a string"
  }
  return a[0] + a[a.length-1]
}


//console.log(getFirstAndLastCharacter("upwards"))

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
