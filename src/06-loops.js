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
  // output: return the sum of range between `min` and `max`

  // problem: How do I get the range between `min` and `max`
  // solution: 1. loop: let i = min, set condition so i stops at max , increment by one

  // declare a variable `sumOfRange` and assign it min
  let sumOfRange = 0
  // loop through numbers between `min++` and `max` (inclusive)
  for (let i = min; i <= max; i++) {
    // reassign sumOfRange using += to 
    sumOfRange += i
  }
  // return sumOfRange
  return sumOfRange
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
  // output: return an aray of numbers in descending order of only the odd numbers between `max` and `min`

  // problem: How are we going to filter out the odd numbers between `max` and `min`
  // solution: 1. loop 2. If the number is odd push it to arr 

  // declare a variable `cacheArr` and assign it an empty arr
  let cacheArr = []
  // loop through numbers starting from `max` all the way down to `min` 
  for (let i = max; i >= min; i--) {
    // if the number is odd
    if (i % 2) {
      // `push` the odd numbers into `cacheArr`
      cacheArr.push(i)
    }
  }
  // return cacheArr
  return cacheArr
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
  // output: return an array of numbers in increasing order skipping every other number starting from `min` 

  // problem: How would you create a loop to skip every other number?
  // solution: for i loop and change the increment 

  // declare a variable `cacheArr` and assign it an empty arr
  let cacheArr = []
  // loop through numbers starting from `min` and ending at `max`
  for (let i = min; i <= max; i += 2) {
    // push the number into `cacheArr`
    cacheArr.push(i)
  }
  // return cacheArr
  return cacheArr
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
  // output: return true if the `target` valie exists in the `array`

  // declare a variable `arrayIndex` assign it 0
  let i = 0
  // loop through the array
  while (i < array.length) {
    // if the target value is equal to one of the element in the array
    if (target === array[i]) {
      // return true
      return true
    }
    i++
  }
  // otherwise return false
  return false
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
  // ouput: return true if the target value exists in the `array`

  // for loop and iterate through `array`
  for (let i = 0; i < array.length; i++) {
    // if target value is strictly equal to one of the element in the array
    if (target === array[i]) {
      // return true
      return true
    }
  }
  // otherwise return false
  return false
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
  // output: return the number of times the `target` value occurs in the `array`

  // declare a variable count and assign it 0
  let count = 0
  // loop through array
  for (let i = 0; i < array.length; i++) {
    // if the target value is equal to on of the element in the array
    if (target === array[i]) {
      // reassign the count up by one
      count++
    }
  }
  // return count
  return count
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
  // output: returns index number if `target` value is found in the array otherwise return -1

  // loop through array
  for (let i = 0; i < array.length; i++) {
    // if the target value is strinctly equal to the dirst index in the array
    if (target === array[i]) {
      // return index at which target value is found
      return i
    }
  }
  // otherwise return -1
  return -1
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
  // output: return the index number if the target value is found otherwise return -1

  // loop through array
  for (let i = array.length - 1; i >= 0; i-- ) {
    // if the target value is found   
    if (target === array[i]) {
      // return the index of the array
      return i
    }
  }
  // otherwise return -1
  return -1
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
  // output: return the product of element and it's index in a new array of numbers 

  // problem: How do you multiply the element and the index and push it in a new array
  // solution: 1. loop 2. artmetic operator 3. empty array to push the product into as an element

  // declare a `cacheArr` and assign it an empty arr
  let cacheArr = []
  // loop through `array`
  for (let i = 0; i < array.length; i++) { 
    // push the product of element multiplied by it's index into cache arr
    cacheArr.push(array[i] * i)
  }
  // return cacheArr
  return cacheArr
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
  // output: return a new array with the sum of the element and index up until THAT POINT

  // edge case for empty array
  if (array.length === 0) {
    // return empty array
    return []
  }
  // declare a variable `cacheArr` and assign it the first element in the `array`
  let cacheArr = [array[0]]
  // loop through `array`
  for (let i = 1; i < array.length; i++) {
      cacheArr.push(cacheArr[cacheArr.length -1] + array[i])
  }
    //return cacheArr
    return cacheArr
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
