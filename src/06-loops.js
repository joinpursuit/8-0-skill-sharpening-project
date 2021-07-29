/**
 * rangeSum()
 * ---------------------
 * Takes in range (inclusive) and returns the 
 * sum of all numbers in that range.
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
      sum +=i 
    }
    return sum
  }

console.log(rangeSum(1, 2))
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
  let sum = [];
  for (let i = min; i <= max; i++) {
    if (i % 2) { 
      sum.unshift(i)
     }
  }
  return sum;
}
console.log(rangeOdd(3, 9))
/**
 * rangeEveryOther()
 * ---------------------
 * Takes in range (inclusive) and returns an array in increasing 
 * order of only every other element. 
 * Start by including the first number.
 * @param {number} min
 * @param {number} max
 * @returns {number[]}
 *
 * EXAMPLE:
 *  rangeEveryOther(11, 18);
 *  //> [ 11, 13, 15, 17 ]
 */
//Chanllenge line 154 objects
function rangeEveryOther(min, max) {

  let sum = [];
  for (let i = min; i <= max; i += 2) {  
      sum.push(i)
     
  }
  return sum;
}
console.log(rangeEveryOther(1, 6))
/**
 * containsWhileLoop()
 * ---------------------
 * Returns whether or not the `target` value exists in the array.
 * 
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

let length = array.length;
let count = 0;

while(count < length){
   if(array[count] === target){
     return true
   }
   count++;
}
return false
}


console.log(containsWhileLoop(["cat","whale", "dog", "bird"], "whale"))
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

  for (let element of array){
      if(element === target){
        return true
      }
  }
  return false
}
console.log(containsForLoop(["cat", "dog", "bird"], "whale"))
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
  for (let element of array){
    //searches for the target
    if(element === target){
      count++;  //increase count by 1
    } // if element is 
}
return count
}

console.log(targetCount(["cat", "cat", "cat", "bird"], "whale"))
/**
 * firstIndexFound()
 * ---------------------
 * Returns the first index that the `target` is found at 
 * in the array. If the `target` is not found, 
 * it should return `-1`.
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

  let indexAt = -1;
  for (let i = 0; i < array.length;  i++){
    if(array[i] == target){
      indexAt = i;
      break;
    }
    }
    return indexAt;  
    }

console.log(firstIndexFound([0, 0, 3, 5, 9], 0))
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
  let indexAt = -1;
  for (let i = array.length; i >= 0;  i--){
    if(array[i] === target){ 
      return i;
    }
    }
    return indexAt;  
    }

  console.log(lastIndexFound([0, 2, 3, 5, 9], 9))
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
let productResult = [];
let product = 0;
for (let i = 0; i < array.length; i++){
  product = array[i] * i ;
  productResult.push(product)
}
return productResult;
}
console.log( timesIndex([]))
/**
 * cumulativeSum()
 * ---------------------
 * Returns a new array where each element is the cumulative sum in the array, 
 * up until that point.
 * @param {number[]} array
 * @returns {number[]}
 *
 * EXAMPLE:
 *  cumulativeSum([ 5, 2, 9 ]);
 *  //> [ 5, 5 + 2, 5 + 2 + 9 ]
 *  //> [ 5, 7, 16 ]
 */
function cumulativeSum(array) {
  
    let sumResult = [];
    let sum = 0;
    for (let i = 0; i < array.length; i++){
      sum += array[i];
      sumResult.push(sum)
    }
    return sumResult;
    }
console.log(cumulativeSum([5, 2, 9]))
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
