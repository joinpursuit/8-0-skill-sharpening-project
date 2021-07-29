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
  let total = 0;
  let current = min;
  while (current <= max) {
    total += current;
    current++;
  }
  return total;
}

/**
 * rangeOdd()
 * ---------------------
 * Takes in range (inclusive) and returns an array in decreasing order of only the odd numbers in that range.
 * @param {number} min
 * @param {number} max
 * @returns {number[]
 *
 * EXAMPLE:
 *  rangeOdd(10, 15);
 *  //> [ 15, 13, 11 ]
 */
function rangeOdd(min, max) {
  let arr = [];
  for (let i = max; i > min - 1; i--) {
    if (i % 2 !== 0) {
      arr.push(i);
    }
  }
  return arr;
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
  const arr = [];
  for (let i = min; i < max + 1; i += 2) {
    arr.push(i);
  }
  return arr;
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
  let result = false;
  let i = 0;
  while (i < array.length) {
    if (array[i] === target) {
      result = true;
    }
    i++;
  }
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
  let result = false;
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] === target) {
      result = true;
    }
  }
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
  let result = 0;
  for (let arr of array) {
    if (arr === target) {
      result++;
    }
  }
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
  for (let i = 0; i < array.length; i++) {
    //in loop, declare current element var
    let current = array[i];
    //check if current element is our target
    if (current === target) {
      //if it is, let our result i
      result = i;
      //we're only looking for the first, so we can break the loop
      break;
    }
  }
  //outside of the loop, return our result
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
  for (let i = 0; i < array.length; i++) {
    //in loop, declare current element var
    let current = array[i];
    //check if current element is our target
    if (current === target) {
      //if it is, let our result i
      result = i;
    }
  }
  //outside of the loop, return our result
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
  //declare a var and assing it an empty array
  let newArr = [];
  //decalre a for i loop
  for (let i = 0; i < array.length; i++) {
    //create var to hold array[i]
    let arr = array[i];
    //push the arr into the loop times the index
    newArr.push(arr * i);
  }
  //outside of the loop return the var
  return newArr;
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
  //declare a var, assign it an empty arr
  let newArr = [];
  //result var, assign it 0
  let result = 0;
  //for i loop
  for (let i = 0; i < array.length; i++) {
    //creat a var to hold array[i]
    let arr = array[i];
    //result var so we can add the arr to it
    result = result + arr;
    //push the result into the first var
    newArr.push(result);
  }
  //return original var outside of loop
  return newArr;
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
