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
 *  (3 + 4 + 5 + 6 + 7 = 25)//add to the 
 */

function rangeSum(min, max) {
  let newRange = 0
  for (let i = min; i <= max; i++) {
    newRange += i

  }
  return newRange
}



//Brainstorming--V 


// // //const result = newSum;
// const newSum = 0;
// for (let i = 0; i < arr.length; i++) {
//   newSum += Math.max(arr[i]) + Math.min(arr[i]);
// }
// return newSum

// min = arr[0];
// max = arr[1];
// if (arr[0] > arr[1]) {
//   min = arr[1];
//   max = arr[0]
// }
// return result

// while (min <= max) {
//   result.push(min)
//   min++
// }
// return result;

//let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += Math.max(arr[i]) + Math.min(arr[i]);

// }
// return sum 

//pass the test but not a loop =>return (max - min + 1) * (min + max) / 2
//how many # there are^____how many in the middle^
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
  let arr = [];
  let i;
  for (i = max; i >= min; i--) 
  {
    if (i % 2 != 0)
    arr.push(i)
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
let arr =[];
  if (min % 2 === 0) {
     for (let i = min; i <= max; i++) {
        if (i % 2 === 0) {
          arr.push(i) }
      } 
  }
  else {
    for (let i = min; i <= max; i++) {
      if (i % 2 != 0) {
        arr.push(i) }
    } 
  }
return arr
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
  let i = 0
    while (i < array.length) {
      if (array[i] === target) {
        return true
      }
      i++
    }
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
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return true
    }
  }
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
  let count = 0
  for (const element of array) {
    if (element === target) {
      count += 1
    }


  }
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
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target)

      return i



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
  let lastNum = -1//unlike previous function, must declare the last index found as - 1 
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target)
      lastNum = i//reassigned lastNum =i after the loop in ran through array 






  }


  return lastNum
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
  let totalArr = []
  for (let i = 0; i < array.length; i++) {
    totalArr.push(array[i] * i)
  }
  return totalArr
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
  let newArr = []
  let newSum = 0
  for (let i in array) {
    newSum = newSum + array[i]
    newArr.push(newSum)
  }
  return newArr
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
