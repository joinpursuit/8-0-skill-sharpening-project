/**
 * shoutForLoop()
 * ---------------------
 * Takes in an array and returns a new array, adding "!" to each string.
 *
 * NOTE: You must use a `for` loop.
 *
 * @param {string[]} array
 * @returns {string[]}
 *
 * EXAMPLE:
 *  shoutForLoop([ "A", "Very", "Happy", "Array" ]);
 *  //> [ "A!", "Very!", "Happy!", "Array!" ];
 */
function shoutForLoop(array) {
  //declare result array as empty string, set to empty array
  let result = [];
  //declare for loop to iterate through array
  for (let currentWord of array){
    //inside loop, push the currentWord + "!" to the the back of our result array
    result.push(currentWord + "!");
  }
  //after loop, return result
  return result;
}

/**
 * shoutWhileLoop()
 * ---------------------
 * Takes in an array and returns a new array, adding "!" to each string.
 *
 * NOTE: You must use a `while` loop.
 *
 * @param {string[]} array
 * @returns {string[]}
 *
 * EXAMPLE:
 *  shoutWhileLoop([ "A", "Very", "Happy", "Array" ]);
 *  //> [ "A!", "Very!", "Happy!", "Array!" ];
 */
function shoutWhileLoop(array) {
  //declare variable to accumulate to, set to empty array
  let result = [];
  //in loop, declare our index value, start at 0
  let i = 0;
  //declare loop, only stops when completely through the array index
  while (i < array.length){
    //declare currentWord variable 4 clarity
    currentWord = array[i];
    //push currentWord to our result array, but add a "!"
    result.push(currentWord + "!");
    //increment our index by 1
    i++;
  }
  //after looping, return our result
  return result;
}

/**
 * shoutForOfLoop()
 * ---------------------
 * Takes in an array and returns a new array, adding "!" to each string.
 *
 * NOTE: You must use a `for...of` loop.
 *
 * @param {string[]} array
 * @returns {string[]}
 *
 * EXAMPLE:
 *  shoutForOfLoop([ "A", "Very", "Happy", "Array" ]);
 *  //> [ "A!", "Very!", "Happy!", "Array!" ];
 */
function shoutForOfLoop(array) {
  //declare result array as empty string, set to empty array
  let result = [];
  //declare for loop to iterate through array
  for (let currentWord of array){
    //inside loop, push the currentWord + "!" to the the back of our result array
    result.push(currentWord + "!");
  }
  //after loop, return result
  return result;
}

/**
 * sumArray()
 * ---------------------
 * Returns the sum of all values in the array.
 * @param {number[]} array
 * @returns {number}
 *
 * EXAMPLE:
 *  sumArray([ 10, 0, 10, 11 ]);
 *  //> 31
 */
function sumArray(array) {
  //declare variable to iterate to, set to our first number
  //make the result be 0 if the array is empty
  let result = array[0] || 0;
  //declare loop to iterate through array, starting at index 1
  for (let i = 1; i < array.length; i++){
    //create variable for clarity
    let currentNumber = array[i];
    //add the current number to our total
    result += currentNumber;
  }
  //after loop, return result
  return result;
}

/**
 * oddArray()
 * ---------------------
 * Returns a new array of only the odd numbers from the original array.
 * @param {number[]} array
 * @returns {array}
 *
 * EXAMPLE:
 *  oddArray([ 11, 15, 20, 22, 37 ]);
 *  //> [ 11, 15, 37 ]
 */
function oddArray(array) {
  //declare resultvariable to accumulate to
  let result = [];
  //declare loop to iterate through the array
  for (let currentNumber of array){
    //in loop, check if number is odd
    if (currentNumber % 2 !== 0){
      //if it is, push it into our array
      result.push(currentNumber);
    }
  }
  //after loop, return result
  return result;
}

/**
 * evenArray()
 * ---------------------
 * Returns a new array of only the even numbers from the original array.
 * @param {number[]} array
 * @returns {array}
 *
 * EXAMPLE:
 *  evenArray([ 11, 15, 20, 22, 37 ]);
 *  //> [ 20, 22 ]
 */
function evenArray(array) {
  //declare resultvariable to accumulate to
  let result = [];
  //declare loop to iterate through the array
  for (let currentNumber of array){
    //in loop, check if number is even
    if (currentNumber % 2 === 0){
      //if it is, push it into our array
      result.push(currentNumber);
    }
  }
  //after loop, return result
  return result;
}

/**
 * findSmallest()
 * ---------------------
 * Returns the smallest number from the array.
 * @param {number[]} array
 * @returns {number}
 *
 * EXAMPLE:
 *  findSmallest([ 0, 11, -2, 5 ]);
 *  //> -2
 */
function findSmallest(array) {
  //declare variable to accumulate to, set to our first elenent, make it 0 if empty array
  let smallest = array[0] || 0;
  //declare loop to iterate through array, start at second element
  for (let i = 0; i < array.length; i++){
    //declare variable for clarity
    let currentNumber = array[i];
    //in loop, check if current number is less than current smallest
    if (currentNumber < smallest){
      // if it is, make it our new smallest
      smallest = currentNumber;
    }
  }
  //after loop, return smallest number
  return smallest;
}

/**
 * findLargest()
 * ---------------------
 * Returns the largest number from the array.
 * @param {number[]} array
 * @returns {number}
 *
 * EXAMPLE:
 *  findLargest([ 0, 11, -2, 5 ]);
 *  //> 11
 */
function findLargest(array) {
  //declare variable to accumulate to, set to our first elenent, make it 0 if empty array
  let largest = array[0] || 0;
  //declare loop to iterate through array, start at second element
  for (let i = 0; i < array.length; i++){
    //declare variable for clarity
    let currentNumber = array[i];
    //in loop, check if current number is greater than current largest
    if (currentNumber > largest){
      // if it is, make it our new smallest
      largest = currentNumber;
    }
  }
  //after loop, return largest number
  return largest;
}

/**
 * findEqual()
 * ---------------------
 * Returns whether or not the `selected` value can be found in the array.
 * @param {number[]} array
 * @param {number} selected
 * @returns {number}
 *
 * EXAMPLE:
 *  findEqual([ 0, 11, -2, 5 ], 11);
 *  //> true
 *
 *  findEqual([ 0, 11, -2, 5 ], 9);
 *  //> false
 */
function findEqual(array, selected) {
  //declare default variable, set to false
  let result = false;
  //create loop to iterate through array
  for (let currentNumber of array){
    //in loop, check if the current number is the selected number
    if (currentNumber === selected){
      //if it is, make our result true
      result = true;
    }
  }
  //after loop, return result
  return result;
}

/**
 * removeDuplicates()
 * ---------------------
 * Returns a new array like the original array except there are no duplicates. The numbers in the array should be ordered similarly.
 *
 * HINT: The `.includes()` method could help here.
 *
 * @param {number[]} array
 * @returns {number[]}
 *
 * EXAMPLE:
 *  removeDuplicates([ 1, 11, 2, 3, 4, 4, 2, 11, 9 ]);
 *  //> [ 1, 11, 2, 3, 4, 9 ]
 */

function removeDuplicates(array) {
  //declare variable to accumulate to, let value be em[ty array;
  let result = [];
  //create loop to iterate through array
  for (let currentNumber of array){
    //inside loop, check if our new array DOESNT includes the value of our current number
    if (!result.includes(currentNumber)){
      //if it doesn't, push it into our array
      result.push(currentNumber);
    }
  }
  //after loop, return result
  return result;
}

// Do not change any code below this line.
module.exports = {
  shoutForLoop,
  shoutWhileLoop,
  shoutForOfLoop,
  sumArray,
  oddArray,
  evenArray,
  findSmallest,
  findLargest,
  findEqual,
  removeDuplicates,
};
