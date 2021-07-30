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

  while (min <= max) {
    total += min;
    min ++;
  }
  return total;
}

/**
 * rangeOdd()
 * ---------------------
 * Takes in range (inclusive) and returns an array in 
 * decreasing order of only the odd numbers in that range.
 * @param {number} min
 * @param {number} max
 * @returns {number[]}
 *
 * EXAMPLE:
 *  rangeOdd(10, 15);
 *  //> [ 15, 13, 11 ]
 */
function rangeOdd(min, max) {
  // create an empty array []
  let arr = [];

  // iterate WHILE min is less than or equal to max
  while (min <= max) {
    // IF number is odd (use %)
    if (min % 2) {
      // add number to the beginning of the array
      arr.unshift(min);
    }
    // increment min (min++)
    min++;
  }
  // return array
  return arr;
}

/**
 * rangeEveryOther()
 * ---------------------
 * Takes in range (inclusive) and returns an array in increasing order 
 * of only every other element. Start by including the first number.
 * @param {number} min
 * @param {number} max
 * @returns {number[]}
 *
 * EXAMPLE:
 *  rangeEveryOther(11, 18);
 *  //> [ 11, 13, 15, 17 ]
 */
function rangeEveryOther(min, max) {
  // declare a variable, assign it an empty array []
  let everyOtherArr = [];
  // iterate WHILE min is less than or equal to max
  while (min <= max) {
    // push min into an empty array
    everyOtherArr.push(min)
    // min increments by 2 (every other)
    min += 2;
  }
  // return modfied array
  return everyOtherArr;
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
  let i = 0;

  while (i < array.length) {
    if (array[i] === target) {
      return true;
    }
    i++
  }
  return false;
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
  // iterate through the ARRAY: FOR loop
  // initialize at 0th index, until i[ndex] is less than ARRAY length, icrement [i]
  for (let i = 0; i < array.length; i++) {
      // shorten array[i]
      const eachElement = array[i];
      // IF ARRAY has TARGET
      if (eachElement === target) {
        // RETURN true;
        return true;
    }
  }
  return false;
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
  // declare and assign targetCount to 0;
  let targetCount = 0;
  // iterate through the ARRAY: FOR OF
  for (const eachElement of array) {
    // IF when eachElement is equal to TARGET
    if (eachElement === target) {
      // re-assign targetCount by incrementing it
      targetCount++;
    }
  }
  // return modified targetCount
  return targetCount;
}

/**
 * firstIndexFound()
 * ---------------------
 * Returns the first index that the `target` is found at in the array. 
 * If the `target` is not found, it should return `-1`.
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
  let defaultVal = -1;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return defaultVal = i;
    }
  }
  return defaultVal;
}

/**
 * lastIndexFound()
 * ---------------------
 * Returns the last index that the `target` is found at in the array. 
 * If the `target` is not found, it should return `-1`.
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
  let defaultVal = -1;
  // let last = array[array.length - 1];

  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      defaultVal = i;
    }
  }
  return defaultVal;
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
  let newArr = [];

  for (let i = 0; i < array.length; i++) {
    newArr.push(array[i] * i);
  }
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
  let newArr = [];
  let sum = 0;

  for (const eachNumber of array) {
    sum += eachNumber;
    newArr.push(sum)
  }
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
