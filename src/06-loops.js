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
 return ( ( (max+1)*max - (min-1)*min)/2);

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
  oddArr = [];
  let i = min;
  for (i; i < max; i++){
  if (oddArr.includes(min) == false && oddArr.length == 0 && i%2 == 1){
      oddArr.splice((oddArr.length-1,0,i));
  }if (oddArr.includes(min) == false && oddArr.length == 0 && i%2 == 1){
      oddArr.push(i);
  }
    if(oddArr.includes(i) == false && oddArr.length != 0 && i%2 == 1){
      oddArr.unshift(i)
  } 
  }
  if (oddArr.includes(min) == false && oddArr.length == 0 && max%2 == 1){
      oddArr.push(max);
  } else if (oddArr.includes(max) == false && max%2 == 1){
      oddArr.unshift(max);
    }
      return oddArr;
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
  let otherArr = [];
  let i = min;
  let a;
  for (i; i < max; i++){
    if (otherArr.length == 0){
      otherArr.push(i)
    } else if (otherArr[otherArr.length-1] != max && otherArr[otherArr.length-1]+2 <= max ) {
      a = (otherArr[otherArr.length-1]) + 2;
      otherArr.push(a)
    }
    }
    return otherArr;
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
  let result = 0;
  while (i < array.length){
    if (array[i] == target){
      return true;
    } else {
      i++;
      result = false;
    }
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
  let result = 0;
  for (i=0; i < array.length; i++){
    if (array[i] == target){
    return true;
  } else {
    result = false;
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
  let count = [0];
  let a;
  for (i=0; i < array.length; i++){
    if (array[i] == target){
      a = count[0] + 1;
      count.splice(0,1, a);
    }
  }
  return count[0];
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
  let index = -1;
  for (i=0; i < array.length; i ++){
    if (array[i] == target){
      return i;
    }
  }
  return index;
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
  index = -1;
  indexTrue = [0];
  for (i=0; i < array.length; i ++){
    if (array[i] == target){
      indexTrue = indexTrue[0]+1;
      index = i;
    }
  } return index;
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
  let multiArr = [];
  let elem;
  for(i=0; i < array.length; i++){
    elem = ((array[i]) * (i));
    multiArr.push(elem);
  }
  return multiArr;
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
  cumuArr = [];
  let sum;
  for(i=0; i < array.length; i++){
    let a = cumuArr[i-1];
    let b = array[i];
    if (cumuArr.length == 0){
      cumuArr.push(array[i]);
    } else {
      sum = a+b;
      cumuArr.push(sum);
    }
  }
  return cumuArr;
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
