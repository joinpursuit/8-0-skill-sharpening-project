/**
 * rangeSum()
 * ---------------------
 * Takes in range (inclusive) and returns the sum of all numbers in that range.
 * @param {number} min
 * @param {number} max
 * @returns {number}
 *
 * EXAMPLE:
 *  rangeSum(3, 7);
 *  //> 25
 *  (3 + 4 + 5 + 6 + 7 = 25)
 */
function rangeSum(min, max) {
  //create result variable to accumulate to, set it to our first number
  let result = min;
  //create i loop to iterate through all the numbers between min and max
  for (let i = min + 1; i <= max; i++){
    //in loop, add number to our total
    result += i
  }
  //out of loop, return our result
  return result;
}

/**
 * rangeOdd()
 * ---------------------
 * Takes in range (inclusive) and returns an array in decreasing order of only the odd numbers in that range.
 * @param {number} min
 * @param {number} max
 * @returns {number[]}
 *
 * EXAMPLE:
 *  rangeOdd(10, 15);
 *  //> [ 15, 13, 11 ]
 */
function rangeOdd(min, max) {
  //declare result variable to accumulate to, set to empty array
  let result = [];
  //declare an i loop to iterate through the numbers between min and max
  for (let i = min; i <= max; i++){
    //in loop, check if current number is odd
    if (i % 2 !== 0){
      //if so, add to the front of the array
      result.unshift(i)
    }
  }
  //after loop, return result
  return result;
}

/**
 * rangeEveryOther()
 * ---------------------
 * Takes in range (inclusive) and returns an array in increasing order of only every other element. Start by including the first number.
 * @param {number} min
 * @param {number} max
 * @returns {number[]}
 *
 * EXAMPLE:
 *  rangeEveryOther(11, 18);
 *  //> [ 11, 13, 15, 17 ]
 */
function rangeEveryOther(min, max) {
  //declare result variable to accumulate to
  let result = [];
  //declare a loop to go through the min and max, increment by 2
  for (let i = min; i <= max; i += 2){
    //in loop, push the numbers to the back of the array
    result.push(i);
  }
  //out of loop, return our result
  return result;
}

/**
 * containsWhileLoop()
 * ---------------------
 * Returns whether or not the `target` value exists in the array.
 *
 * NOTE: Must be written with a `while` loop.
 *
 * NOTE: Must NOT contain the `.includes()` method.
 *
 * @param {*[]} array
 * @param {number|string} target
 * @returns {boolean}
 *
 * EXAMPLE:
 *  containsWhileLoop([ 5, 2, 4 ], 4);
 *  //> true
 *
 *  containsWhileLoop([ "left", "up", "right" ], "down");
 *  //> false
 */
function containsWhileLoop(array, target) {
  //declare result variable, set it to false
  let result = false;
  //declare our index, starting at 0
  let i = 0;
  //declare our while loop, that will continue until i < the array's length
  while (i < array.length){
    //create a variable 4 clarity
    let currentElement = array[i];
    //in loop, check if the current element is the target we're looking 4
    if (currentElement === target){
      //if it is, declare result as true
      result = true;
    }
    //remember to manually increment!
    i++;
  }
  //after loop, return result
  return result;
}

/**
 * containsForLoop()
 * ---------------------
 * Returns whether or not the `target` value exists in the array.
 *
 * NOTE: Must be written with a `for` loop.
 *
 * NOTE: Must NOT contain the `.includes()` method.
 *
 * @param {*[]} array
 * @param {number|string} target
 * @returns {boolean}
 *
 * EXAMPLE:
 *  containsForLoop([ 5, 2, 4 ], 4);
 *  //> true
 *
 *  containsForLoop([ "left", "up", "right" ], "down");
 *  //> false
 */
function containsForLoop(array, target) {
  //declare result array, set to false
  let result = false;
  //declare for loop to iterate through our array
  for (let i = 0; i < array.length; i++){
    //inside array, create variable for clarity
    let currentElement = array[i];
    //check if the current element is the target we're looking for
    if (currentElement === target){
      //if it is, change result to true
      result = true;
    }
  }
  //out of loop, return our result
  return result;
}

/**
 * targetCount()
 * ---------------------
 * Returns how many times the `target` occurs in the array.
 * @param {*[]} array
 * @param {number|string} target
 * @returns {number}
 *
 * EXAMPLE:
 *  targetCount([ 10, 20, 10, 20, 30 ], 10);
 *  //> 2
 */
function targetCount(array, target) {
  //declare result variable to accumulate to, set to 0
  let result = 0;
  //declare loop to iterate through the array
  for (let currentElement of array){
    //in loop check if current element is our target
    if (currentElement === target){
      //if it is, add 1 to our result
      result += 1;
    }
  }
  //out of loop, return our result
  return result; 
}

/**
 * firstIndexFound()
 * ---------------------
 * Returns the first index that the `target` is found at in the array. If the `target` is not found, it should return `-1`.
 *
 * NOTE: You may NOT use the `.indexOf()` method.
 *
 * @param {*[]} array
 * @param {number|string} target
 * @returns {number}
 *
 * EXAMPLE:
 *  firstIndexFound([ "left", "right", "left" ], "left");
 *  //> 0
 *
 *  firstIndexFound([ "left", "right", "left" ], "up");
 *  //> -1
 */
function firstIndexFound(array, target) {
  //declare default variable, let it's value be -1
  let result = -1;
  //declare for i loop, to iterate through the array
  for (let i = 0; i < array.length; i++){
    //in loop, declare current element variable for clarity
    let currentElement = array[i];
    //check if current element is our target
    if (currentElement === target){
      //if it is, let our result i
      result = i;
      //we're only looking for the first, so we can break the loop
      break;
    }  
  }
  //after loop, return our result
  return result;
}

/**
 * lastIndexFound()
 * ---------------------
 * Returns the last index that the `target` is found at in the array. If the `target` is not found, it should return `-1`.
 *
 * NOTE: You may NOT use the `.indexOf()` method.
 *
 * @param {*[]} array
 * @param {number|string} target
 * @returns {number}
 *
 * EXAMPLE:
 *  lastIndexFound([ "left", "right", "left" ], "left");
 *  //> 2
 *
 *  lastIndexFound([ "left", "right", "left" ], "up");
 *  //> -1
 */
function lastIndexFound(array, target) {
  //declare default variable, let it's value be -1
  let result = -1;
  //declare for i loop, to iterate through the array
  for (let i = 0; i < array.length; i++){
    //in loop, declare current element variable for clarity
    let currentElement = array[i];
    //check if current element is our target
    if (currentElement === target){
      //if it is, let our result i
      result = i;
    }  
  }
  //after loop, return our result
  return result;
}

/**
 * timesIndex()
 * ---------------------
 * Returns a new array where each element has been multiplied by its index.
 * @param {number[]} elements
 * @returns {number[]}
 *
 * EXAMPLE:
 *  timesIndex([ 7, 10, 11 ]);
 *  //> [ 7 * 0, 10 * 1, 11 * 2 ]
 *  //> [ 0, 10, 22 ]
 */
function timesIndex(array) {
  //declare variable to accumulate to, set value to [];
  let result = [];
  //declate for loop, to iterate through the array
  for (let i = 0; i < array.length; i++){
    //inside loop, declare currentNumber for clarity
    let currentNumber = array[i];
    //.push the result of our currentNumber * it's index into our new array 
    result.push(currentNumber * i);
  }
  //after loop, return our result
  return result;
}

/**
 * cumulativeSum()
 * ---------------------
 * Returns a new array where each element is the cumulative sum in the array, up until that point.
 * @param {number[]} array
 * @returns {number[]}
 *
 * EXAMPLE:
 *  cumulativeSum([ 5, 2, 9 ]);
 *  //> [ 5, 5 + 2, 5 + 2 + 9 ]
 *  //> [ 5, 7, 16 ]
 */
function cumulativeSum(array) {
  //declare result variable, set to an empty array
  let result = [];
  //declare total value to accumulate to, set to 0;
  let total = 0;
  //create a loop to iterate through our array
  for (let currentNumber of array){
    //inside loop, add current number to current total
    total += currentNumber;
    //push the result to the back of our result array
    result.push(total);
  }
  //after loop, return result
  return result;
}

// Do not change anything below this line.
module.exports = {
  rangeSum,
  rangeOdd,
  rangeEveryOther,
  containsWhileLoop,
  containsForLoop,
  targetCount,
  firstIndexFound,
  lastIndexFound,
  timesIndex,
  cumulativeSum,
};
