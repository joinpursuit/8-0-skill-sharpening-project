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
  let sum = 0// initate variable sum; assigns sum to interger 0
  for ( i = min; i <= max; i++){// initiate for loop index equal min int as long as index is less than max int;(i = i+1)
    sum += i;//sum = sum + the index of intergers within the range of min int and max int
  }
  return sum// sum of all intergers with in the range of given numbers
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
  let odd =[]// intiate variable "odd" assigning it to an empty array 
  for ( i = max; i >= min; i --){// initiate for loop index equal max int as long as index is greater than min int;(i = i-1)>0
 if (i % 2 !== 0)//if the remainder index divided by 2 is not equal to 0
  odd.push(i)//insert the indexes that fit the condition into the odd array 
  }
return odd//return array of odd numbers
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
  let other= []//intiate variable "other" assigning it to an empty array 
  for(i = min; i <= max; i+= 2){//for loop initiated;index set to min less than equal to max; index set to increment by 2
    other.push(i)//insert the indexes that fit the condition into the odd array 
    }
    return other// returns an array in increasing order of every other element 
    
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
i = array.length;// assign i to the index of the [] array
while(i--){// while (i = i - 1) > 0, run until condition is false
  if (array[i] === target){//if array index is stricly equal to the array element target 
      return true;// return boolean true
    }//ends if statement
  }//ends while loop
  return false;// return boolean false
}//ends function

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
 for (i=0 ;i < array.length; i++ ){//intiate for loop;if index 0 less than length of array increment by 1
    if (array[i] === target){//if array index is stricly equal to the array element target 
        return true;// return boolean true
      }//ends if statement
    }//ends for loop
    return false;// return boolean false
  }//ends function


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
  let counter = 0;
  for (array[target] of array){
    if (array[target] == target){
      counter++;
    }
  }
  return counter
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
for(i=0;i <= array.length; i++){
  if (array[i] === target){
    return i
  }
}return -1
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
  for(i= array.length -1 ;i >= 0; i--){//decrement 
    if (array[i] === target){
      return i
    }
  }return -1
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
  timesArray = []
  for (i =0; i < array.length; i++){

  timesArray.push(array[i]*i)
  }
  return timesArray
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
  let timesArray = []
  let sum = 0
  for (i = 0; i < array.length; i++){
  sum = sum + array[i]
 // timesArray.push(i += array[array.length + 1])
 timesArray.push(sum)
  }
  return timesArray
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
