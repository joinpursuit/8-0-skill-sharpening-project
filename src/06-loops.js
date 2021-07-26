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
  //1. Default value and output 
  let total = 0
  let range = max - min
  //2. Define the loop
  for (let i = 0; i <= range; i++) {
    //3. Accumulate
    total += min + i
  }
  return total
}

//console.log(rangeSum(3, 7))

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
  // 1. Default Value and output
  let newArray = []
  let range = max - min
  // 2. Define the loop 
  for (let i = 0; i <= range; i++) {
    //3. Accumulate
    let element = range[i]
    element = min + i
    if (element % 2 === 0) {
    } else {
      newArray.unshift(element)
    }
  }
  return newArray
}

//console.log(rangeOdd(10, 15))

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
  // 1. Default Value and Output
  let newArray = []
  let range = max - min
  // 2. Define the loop 
  for (let i = 0; i <= range; i++) {
    //3. Accumulate
    let element = range[i]
    element = min + i
    if (i % 2 === 0) {
      newArray.push(element)
    }
  }
  return newArray
}


//console.log(rangeEveryOther(11, 18))

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
  // 1. Default Value and Output
  // 2. Define the loop 
  let i = 0
  while (i < array.length) {
    // 3. Accumulate
    if (array[i] === target) {
      return true
    }
    i++
  }
  return false
}

//console.log(containsWhileLoop([ 5, 2, 4 ], 4))
//console.log(containsWhileLoop([ "left", "up", "right" ], "down"))

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
  // 1. Default Value and Output
  // 2. Define the loop 
  for (let i = 0; i < array.length; i++) {
    // 3. Accumulate
    if (array[i] === target) {
      return true
    }
  }
  return false
}

//console.log(containsForLoop([ 5, 2, 4 ], 4))
//console.log(containsForLoop([ "left", "up", "right" ], "down"))

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
  // 1. Default Value and output
  // 2. Define the loop
  let i = 0
  let count = 0
  while (i < array.length) {
    // 3. Accumulate
    if (array[i] === target) {
      count += 1
    } 
    i++
  }
  return count
}

//console.log(targetCount([ 10, 20, 10, 20, 30 ], 10))

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
  // 1. Default value and output
  let firstTime = -1
  // 2. Define the loop
  let i = 0
  while (i < array.length) {
    //3. Accumulate
    if (array[i] === target) {
      firstTime = i
      return firstTime
    }
    i++
  }
  return firstTime
}

//console.log(firstIndexFound([ "left", "right", "left" ], "left"))
//console.log(firstIndexFound([ "left", "right", "left" ], "up"))

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
  // 1. Default value and output
  let lastTime = -1
  // 2. Define the loop
  let i = 0
  while (i < array.length) {
    //3. Accumulate
    if (array[i] === target) {
      lastTime = i
    }
    i++
  }
  return lastTime
}

//console.log(lastIndexFound([ "left", "right", "left" ], "left"))
//console.log(lastIndexFound([ "left", "right", "left" ], "up"))

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
  // 1. Default value and output
  let newArray = []
  // 2. Define the loop
  let i = 0
  while (i < array.length) {
    //3. Accumulate
    newElement = array[i] * i
    newArray.push(newElement)
    i++
  }
  return newArray
}

//console.log(timesIndex([ 7, 10, 11 ]))

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
  // 1. Default value and output
  let newArray = []
  // 2. Define the loop
  let sumTotal = 0
  let i = 0
  while (i < array.length) {
    //3. Accumulate
    sumTotal += array[i]
    newArray.push(sumTotal)
    i++
  }
  return newArray
}

//console.log(cumulativeSum([ 5, 2, 9 ]))

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
