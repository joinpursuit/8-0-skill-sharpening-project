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
  // 1. Default Value and Output
  let newArray = []
  // 2. Define the loop 
  for (let i = 0; i < array.length; i++) {
    // 3. Accumulate
    newElement = array[i] +"!"
    newArray.push(newElement)
    }
  return newArray
}

//console.log(shoutForLoop([ "A", "Very", "Happy", "Array" ]))

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
  // 1. Default Value and Output
  let newArray = []
  let i = 0
  // 2. Define the loop 
  while (i < array.length) {
    // 3. Accumulate
    let newElement = array[i] + "!"
    newArray.push(newElement)
    i++
    }
  return newArray
}

//console.log(shoutWhileLoop([ "A", "Very", "Happy", "Array" ]));

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
  // 1. Default Value and Output
  let newArray = []
  
  // 2. Define the loop 
  for (const element of array) {
  // 3. Accumulate
    let newElement = element + "!"
    newArray.push(newElement)
    }
  return newArray
}

//console.log(shoutForOfLoop([ "A", "Very", "Happy", "Array" ]));

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
  // 1. Default Value and Output
  let sumTotal = 0
  // 2. Define the loop 
  for (let element of array) {
    // 3. Accumulate
    sumTotal += element
  }
   return sumTotal
}

//console.log(sumArray([ 10, 0, 10, 11 ]))

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
  // 1. Default Value and Output
  let newArray = []
  // 2. Define the loop 
  for (let element of array) {
    // 3. Accumulate
    // to check if odd, set it to === 1
    (element % 2 === 1) ? newArray.push(element) : newArray;
  }
   return newArray
}

//console.log(oddArray([ 11, 15, 20, 22, 37 ]))

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
  // 1. Default Value and Output
  let newArray = []
  // 2. Define the loop 
  for (let element of array) {
    // 3. Accumulate
    // to check if even, set it to === 0
    (element % 2 === 0) ? newArray.push(element) : newArray;
  }
   return newArray
}

//console.log(evenArray([ 11, 15, 20, 22, 37 ]))

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
  // 1. Default Value and Output
  let smallest = array[0]
  // 2. Define the loop 
  for (let element of array) {
    // 3. Accumulate
    if (element < smallest) {
      smallest = element
    } 
  }
   return smallest
}

//console.log(findSmallest([ 0, 11, -2, 5 ]))

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
  // 1. Default Value and Output
  let largest = array[0]
  // 2. Define the loop 
  for (let element of array) {
    // 3. Accumulate
    if (element > largest) {
      largest = element
    } 
  }
   return largest
}

//console.log(findLargest([ 0, 11, -2, 5 ]))

/**
 * findEqual()
 * ---------------------
 * Returns whether or not the `selected` value can be found in the array.
 * @param {number[]} array
 * @param {number} selected
 * @returns {number}
 *
 * EXAMPLE:
 *  findEqual([ 0, 11, -2, 5 ], 11);
 *  //> true
 *
 *  findEqual([ 0, 11, -2, 5 ], 9);
 *  //> false
 */
function findEqual(array, selected) {
  // 1. Default Value and Output
  let isFound = false
  // 2. Define the loop 
  for (let element of array) {
    // 3. Accumulate
    if (element === selected) {
      isFound = true
    } 
  }
   return isFound
}

//console.log(findEqual([ 0, 11, -2, 5 ], 11))
//console.log(findEqual([ 0, 11, -2, 5 ], 9))

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
  // 1. Default Value and Output
  let newArray = []
  // 2. Define the loop 
  for (let element of array) {
    // 3. Accumulate
    if (newArray.includes(element)) {
      continue;
    } newArray.push(element)
  }
   return newArray
}

//console.log(removeDuplicates([ 1, 11, 2, 3, 4, 4, 2, 11, 9 ]))

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
