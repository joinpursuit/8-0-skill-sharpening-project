/**
 * shoutForLoop()
 * ---------------------
 * Takes in an array and returns a new array, adding "!" to each string.
 *
 * NOTE: You must use a `for` loop.
 *
 * @param {string[]} array
 * @returns {string[]}
 *
 * EXAMPLE:
 *  shoutForLoop([ "A", "Very", "Happy", "Array" ]);
 *  //> [ "A!", "Very!", "Happy!", "Array!" ];
 */
function shoutForLoop(array) {
  let subString = "!"
  for (i = 0; i < array.length; i++){
    array[i] = array[i] + subString
  }
  return array
}

/**
 * shoutWhileLoop()
 * ---------------------
 * Takes in an array and returns a new array, adding "!" to each string.
 *
 * NOTE: You must use a `while` loop.
 *
 * @param {string[]} array
 * @returns {string[]}
 *
 * EXAMPLE:
 *  shoutWhileLoop([ "A", "Very", "Happy", "Array" ]);
 *  //> [ "A!", "Very!", "Happy!", "Array!" ];
 */
function shoutWhileLoop(array) {
  let subString = "!"
  i = 0
  while(i < array.length){
    array[i] = array[i] + subString
    i++
  }
  return array
}

/**
 * shoutForOfLoop()
 * ---------------------
 * Takes in an array and returns a new array, adding "!" to each string.
 *
 * NOTE: You must use a `for...of` loop.
 *
 * @param {string[]} array
 * @returns {string[]}
 *
 * EXAMPLE:
 *  shoutForOfLoop([ "A", "Very", "Happy", "Array" ]);
 *  //> [ "A!", "Very!", "Happy!", "Array!" ];
 */
function shoutForOfLoop(array) {
  let text = "!"
  let index = 0
  for (let element of array){
    array[index] = array[index] + text
    index++
  }
  return array
}

/**
 * sumArray()
 * ---------------------
 * Returns the sum of all values in the array.
 * @param {number[]} array
 * @returns {number}
 *
 * EXAMPLE:
 *  sumArray([ 10, 0, 10, 11 ]);
 *  //> 31
 */
function sumArray(array) {
  let sum = 0 
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i]

  }
  return sum
}

/**
 * oddArray()
 * ---------------------
 * Returns a new array of only the odd numbers from the original array.
 * @param {number[]} array
 * @returns {array}
 *
 * EXAMPLE:
 *  oddArray([ 11, 15, 20, 22, 37 ]);
 *  //> [ 11, 15, 37 ]
 */
function oddArray(array) {
  let oddArr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 1) {
      oddArr.push(array[i]);
    }

    }
      return oddArr
  }
     


/**
 * evenArray()
 * ---------------------
 * Returns a new array of only the even numbers from the original array.
 * @param {number[]} array
 * @returns {array}
 *
 * EXAMPLE:
 *  evenArray([ 11, 15, 20, 22, 37 ]);
 *  //> [ 20, 22 ]
 */
function evenArray(array) {
  let evenArr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evenArr.push(array[i]);
    }

    }
      return evenArr
}

/**
 * findSmallest()
 * ---------------------
 * Returns the smallest number from the array.
 * @param {number[]} array
 * @returns {number}
 *
 * EXAMPLE:
 *  findSmallest([ 0, 11, -2, 5 ]);
 *  //> -2
 */
function findSmallest(array) {
  let smallNum = array[0]
  let secSmallNum = 0
  for(let i = 1; i < array.length; i++){
    if (array[i] < smallNum){
      secSmallNum = smallNum
      smallNum = array[i]
    } else if (array[i] !== smallNum && array[i] < secSmallNum){
      secSmallNum = array[i]
    }
  } 
  return smallNum
}

/**
 * findLargest()
 * ---------------------
 * Returns the largest number from the array.
 * @param {number[]} array
 * @returns {number}
 *
 * EXAMPLE:
 *  findLargest([ 0, 11, -2, 5 ]);
 *  //> 11
 */
function findLargest(array) {
  let largeNum = array[0]
  let secLargeNum = 0
  for(let i = 1; i < array.length; i++){
    if (array[i] > largeNum){
      secLargeNum = largeNum
      largeNum = array[i]
    } else if (array[i] !== largeNum && array[i] > secLargeNum){
      secLargeNum = array[i]
    }
  } 
  return largeNum
}

/**
 * findEqual()
 * ---------------------
 * Returns whether or not the `selected` value can be found in the array.
 * @param {number[]} array
 * @param {number} selected
 * @returns {boolean}
 *
 * EXAMPLE:
 *  findEqual([ 0, 11, -2, 5 ], 11);
 *  //> true
 *
 *  findEqual([ 0, 11, -2, 5 ], 9);
 *  //> false
 */
function findEqual(array, selected) {
  for (let i = 0;i < array.length; i++){
    if(array.includes(selected)){
      return true
    } 
  }
    return false
  } 
  // let i = 0 
  // while (i < array.length){
  //   if(array[i] === target){
  //     return true
  //   } 
  //   i++
  //   }
  //   return false
  //or you can do 
  // for (let i = 0;i < array.length; i++){
  //   if(array[i]===selected){
  //     return true
  //   } 
  // }
  //   return false
/**
 * removeDuplicates()
 * ---------------------
 * Returns a new array like the original array except there are no duplicates. The numbers in the array should be ordered similarly.
 *
 * HINT: The `.includes()` method could help here.
 *
 * @param {number[]} array
 * @returns {number[]}
 *
 * EXAMPLE:
 *  removeDuplicates([ 1, 11, 2, 3, 4, 4, 2, 11, 9 ]);
 *  //> [ 1, 11, 2, 3, 4, 9 ]
 */

 function removeDuplicates(array) {
  for(i = 0; i < array.length; i++){
    for(j = i + 1; j < array.length; j++){   
      if(array[j] === array[i]){
      array.splice(j,1)
      }
      if(array[j] === array[i]){
        array.splice(j,1)
        }
      }
    }
    return array
  }

// Do not change any code below this line.
module.exports = {
  shoutForLoop,
  shoutWhileLoop,
  shoutForOfLoop,
  sumArray,
  oddArray,
  evenArray,
  findSmallest,
  findLargest,
  findEqual,
  removeDuplicates,
};
