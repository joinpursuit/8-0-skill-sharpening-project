const { add } = require("./01-functions");

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
function rangeSum(min, max) { // curly brackets is the opening of the function block 
  let total = 0 //total is a placeholder for the for loop 
  for (i = min; i <= max; i++){
   total = total + i 
  }
  return total 
}


// let nums = [1, 2, 3, 4, 5, 6] ; i is the representation of the starting point
//i++ is letting the computer know to increment by 1 until the condition is met(for this problem the condition is max)
// function rangeSum(min, max) {
//   let range = [];
//   for (let i = min; i <= max; i++){
//     range.push(i);
//   }
//   let total = range.reduce(function(min, max) {
//     return min + max;
//   });
//    return total;
// }
//help from website: https://stackoverflow.com/questions/30036206/return-sum-all-numbers-in-a-range/30036445
//help from website: https://www.codegrepper.com/code-examples/javascript/range+loop+javascript



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

//figure ot how to go in decreasing value 
//figure out how to return an array for ONLY odd numbers 
//odd numbers can be found by the remainder formula (if number % 2 === 1)
function rangeOdd(min, max) {
  let array = [];
  for (let i = max; i >= min; i--){
    if (i % 2 !== 0)
       array.push(i);//putting all the odd numbers (as a result of the if statement) in the array because .push 
       //put all the odd numbers from line 59 into the array
    }
    return array; 
}


// function rangeOdd(min, max) {
//   let newArray =[];
//   for (let i = max; i >= min; i--){
//     if (i % 2 === 1) newArray.push(i);
//     }
//   return newArray
// };


  
 
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
  let array = [];
  for (let i = min; i <= max; i +=2) {
    array.push(i);
  }
  return array;
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
  let i = 0; //creating an empty variable to ultimately become what we want it to
  while (i < array.length) {
    if (array[i] === target)
    return true; 
    i++; 
  };
  return false;
};

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
    if (array[i] === target)
      return true;
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
  let count = 0;
  for (let i = 0; i <= array.length; i++) {
    if (array[i] === target){
      count = count + 1 //this command returns the # of times target is in array, this can also be as count +=
    }
  }return count;
};

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
  for (let i = 0; i < array.length; i++){
    if (array[i] === target)
    return i; 
  }
  return -1;
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
  for (let i = array.length; i > 0; i--){
    if (array[i] === target)
    return i;
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
let newArr = [];
for (let i = 0; i < array.length; i++) {
  newArr.push(array[i] * i) // i is the index 
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
  let newArr = [];//this creates an empty array 
  let sum = array[0];//this creates an array that takes in the indexes
for (let i = 0; i < array.length; i++) { 
  newArr.push(sum);
  sum += array[i + 1] 
} return newArr 
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
