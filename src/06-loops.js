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
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += min; //0 + 3, 
    min++
  }
  return sum
}

rangeSum(5, 10)


//store the number
//add to previous number


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
  let decendingArray = [];

  while (max >= min) {
    if (max % 2 !== 0)
      decendingArray.push(max)
    max--;
  }
  return decendingArray;
}

rangeOdd(10, 6)

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
  let everyOtherArr = [];

  while (min <= max) {
    everyOtherArr.push(min);
    min += 2;
  }
  return everyOtherArr
}

rangeEveryOther(10, 16)

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
  //Always set a boolean accumulator to false 
  let isTarget = false;
  //We arte checking whether a target exist in the array which means we are checkind indexes
  let arrayIndexToCheck = 0;
//While loops are built off of a condition - in this case whether the index is less than length of the array
  while (arrayIndexToCheck < array.length) {
  //check to see if the index we are checking is equal to the target
    if (array[index] === isTarget) {
      isTarget = true;
    } else {
      isTarget = false;
    }
    //we need to increment and move up the indexes
    arrayIndextoCheck++;
  }
  return isTarget
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
  //always begin with "false" when itnitalizing the accumulator
  let doesLoopHaveTarget = false;
  //init for loop
  for (let i = 0; i < array.length; i++) {
    //if the index of the loop is equal to the target, it is true
    if (array[i] === target) {
      doesLoopHaveTarget = true;
    }
  }
  return doesLoopHaveTarget;
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
  //initlize the accumulator - returning a number
  targetCounter = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      targetCounter++;
    }
  }
  return targetCounter;
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
//simply loop along array length to check each index
  for (let i = 0; i < array.length; i++) {
    //if array index equals target return the index
    if (array[i] === target) return i
  }
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
  for (let i = array.length; i > 0; i--) {
    if (array[i] === target) return i
  }
  return -1;
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
  let multipliyArray = [];
  for (let i = 0; i < array.length; i++) {
    multipliyArray.push(array[i] * i);
  }
  return multipliyArray;
}

/**
 * cumulativeSum()
 * ---------------------
 * Returns a new array where **each element** is the cumulative sum in the array, up until that point.
 * @param {number[]} array
 * @returns {number[]}
 *
 * EXAMPLE:
 *  cumulativeSum([ 5, 2, 9 ]);
 *  //> [ 5, 5 + 2, 5 + 2 + 9 ]
 *  //> [ 5, 7, 16 ]
 */

//cumulative: increasing by sucessive additions
function cumulativeSum(array) {
  //intialize accumulator - array
  let sumArray = [];
  //**"element = index"
  let cumSum = array[i]
  for (let i = 0; i < array.length; i++) {
    sumArray.push(sumArray);
    sumArray += array[i + 1]
  }
  return sumArray
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
