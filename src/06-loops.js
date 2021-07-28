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
    for (let i = min; i <= max; i++) {
      total = total + i
    }
  return total;
}
// console.log(rangeSum(3, 7));

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
  let rangeOddArray = [];
    for (let i = max; i >= min; i--) {
      if (i % 2 === 1 ) {
      rangeOddArray.push(i);
      }
    }
return rangeOddArray;
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
  let everyOtherArray = [];
    for (let i = min; i <= max; i++) {
      everyOtherArray.push(i);
      i++;
    }
  return everyOtherArray;
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

//determines if the value exists - look through the array
//let n = the 0 index
//let n be less than the index length
//determine how to find a a value without using include
//if the value in n is equal to target then return true
function containsWhileLoop(array , target) {
  let n = 0;
  let arrayLength = array.length;
    while (n < arrayLength) {
      let value = array[n];
      if (value === target) {
      return true
      }
      if (value !== target) {
      n++
       }
    }
  return false
}

// console.log(containsWhileLoop([ "left", "up", "right" ], "below"));
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
  for(let i = 0; i < array.length; i++) {
    let loopArrayIndex = array[i];
    if (loopArrayIndex === target) {
      return true;
    }
  }
  return false;
}

// console.log(containsForLoop([ 5, 2, 4 ], 4));

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
  let countingTarget = 0;
  for (const element of array) {
    if (element === target) {
    countingTarget++;
    }
  }
  return countingTarget;
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
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1
}
// console.log(firstIndexFound([ "left", "right", "left" ], "up"));


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

//look through an array and return the index - i loop
// but what if i want to loop through an array backwards? - i loop backwards
function lastIndexFound(array, target) {
  for (let i = array.length; i >= 0; i--) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1
}
// console.log(lastIndexFound([ "left", "right", "left" ], "up"));

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

//push an element * its into an array
//need an i loop to grab the index
function timesIndex(array) {
  let timesArray = [];
  for (let i = 0; i < array.length; i++) {
    timesArray.push(i * array[i]); 
  }
  return timesArray;
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
 *  //> [ 5, 5 + 2, 7 + 9 ]
 *  //> [ 5, 7, 16 ]
 */
//declare a new array and return a new array
// take each index value and add to it, push that value to the array
// push the current index + value at -1 index 
function cumulativeSum(array) {
  let cumulativeSumArray = [];
    for (i = 0; i < array.length; i++) {
      let elementAtIndexOfArray = array[i];
      let elementAtPreviousIndexOfArray = cumulativeSumArray[i-1];
        if (i === 0) {
          cumulativeSumArray.push(elementAtIndexOfArray);
        }
        if (i !== 0) {
        indexTotal = elementAtIndexOfArray + elementAtPreviousIndexOfArray
        cumulativeSumArray.push(indexTotal);
        }  
    }    
  return cumulativeSumArray;
}
console.log(cumulativeSum([ 2, 2, 2 ]));

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
