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
  let sum = 0
  for (let num = min; num <= max; num++){
      sum = sum + num
  }
  return sum
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
  number = []
for(value = max; value >= min; value--){
  if (value%2 !==0){
      number.push(value)
  }
}
  return number
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
//This totally works in a separate replit!  But I can't tell if it full passed the npm test though.
function rangeEveryOther(min, max) {
  number = []
  for(value = min; value <= max; value+=2){
     number.push(value)
  }
  return number
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
  let max = array.length
  counter = 0
  let check = false
  
    while (counter < max){
    if(array[counter] === target) { 
        check = true
      }
      counter++
    }
    return check
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
let max = array.length
let check
  for (let counter = 0; counter <= max; counter ++){
      if(array[counter] === target) { 
          check = true
          return check
        } else {
          check = false
  } 
}
return check
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
let max = array.length-1
let check
let total = 0

  for (let counter = 0; counter <= max; counter ++){
  if(array[counter] === target) { 
      total = total + 1
    }
  }
      return total
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
  let max = array.length-1
  //let check
  let notFound = -1
  let firstFound 
    for (let counter = 0; counter <= max; counter ++){
    if(array[counter] === target) { 
        firstFound = counter
        return firstFound
    }  
  }
   return notFound
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
  let max = array.length-1
  let notFound = -1
  let lastFound 
    for (let counter = max; counter >= 0; counter --){
    if(array[counter] === target) { 
        lastFound = counter
        return lastFound
    }  
  }
   return notFound

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
  let max = array.length - 1
  let newArr = []
  let product 
  for (let counter = 0; counter <= max; counter ++){
    product = array[counter] * counter
    //console.log("element is " + array[counter], "counter is " + counter)
    //console.log("product = " + product)
    newArr.push(product)  
  }
   //console.log(newArr)
   return newArr

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
  let max = array.length - 1
  let newArr = []
  let counter = 0
   let cumSum= 0
 
  while (counter <= max){
    cumSum = cumSum + array[counter]  
    console.log("element is " + array[counter], "counter is " + counter)
  console.log("cumSum = " + cumSum)
    newArr.push(cumSum) 
    counter++ 
    console.log(counter)
  }
   console.log(newArr)
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
