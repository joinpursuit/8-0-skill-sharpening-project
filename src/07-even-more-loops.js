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
  // return a new array of strings by adding 1 exclamation point to the elements in `array`

  // declare a variable `cacheArr` and assign it an empty arr
  let cacheArr = [];
  // loop through the array of string
  for (let i = 0; i < array.length; i++) {
    // use string concatenation to add an exclamatino point and push to cacheArr
    cacheArr.push(array[i] + `!`);
  }
  // return cacheArr
  return cacheArr;
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
  // output: return a new array by adding one excalamation point to the elements in the `array`

  // // edge case: if the array is empty
  // if (array.length === 0) {
  //   // return empty arr
  //   return []
  // }

  // declare a variable `cacheArr` and assign it an empty arr
  let cacheArr = [];
  // declare a variable `i` and assign it index 0
  let i = 0;
  // use while loop where the condition i is less than array length
  while (i < array.length) {
    // use string interpolation to add one exclamation point and push to `cacheArr`
    cacheArr.push(array[i] + `!`);
    // increment index
    i++;
  }
  // return cacheArr
  return cacheArr;
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
  // output: return a new array by adding one exclamation point to the element in `array`

  // declare a variable `cacheArr` and assign it an empty arr
  let cacheArr = [];
  // loop through array using for of
  for (let strings of array) {
    // use string concatenation to add an exclamation point and push it too `cacheArr`
    cacheArr.push(strings + `!`);
  }
  // return `cacheArr`
  return cacheArr;
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
  // output: return a number that represents the sum of all values in the array

  // declare a variable called sum and assign it the first index in `array`
  let sum = 0;
  // loop through array but it won't loop if array is empty
  for (let i of array) {
    // reassign the sum by adding tht element with index 1 to element with index 0
    sum += i;
  }
  // return sum
  return sum;
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
  // output: return a new array and push all the odd numbers from `array`

  // declare a variable `cacheArr` and assign it an empty arr
  let cacheArr = [];
  // loop through `array` of number
  for (let i of array) {
    // if the numbers in `array` are odd
    if (i % 2) {
      // push the odd numbers into cacheArr
      cacheArr.push(i);
    }
  }
  // return cacheArr
  return cacheArr;
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
  // output: return a new array and push all the even numbers from `array`

  // declare a variable `cacheArr` and assign it an empty arr
  let cacheArr = [];
  // loop through `array` of numbers
  for (let numbers of array) {
    // if the numbers are even 
    if (numbers % 2 === 0) {
      // push the number to cacheArr
      cacheArr.push(numbers);
    }
  }
  // return cacheArr
  return cacheArr;
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
  // output: return the smallest number from the array of numbers

  // declare a variable `smallestNum` and assign it the first index in `array`
  let smallestNum = array[0];
  // use a for loop to iterate over the numbers in `array`
  for (let i of array) {
    // if the current element is less than smallestNum
    if (i < smallestNum) {
      // reassign smallestNum to current element with index i
      smallestNum = i;
    }
  }
  // return smallestNum
  return smallestNum;
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
  // output: return the largest number from `array`

  // declare a variable `largestNum` and assign it the first element with index 0 in `array`
  let largestNum = array[0];
  // use a for loop to iterate through the numbers in `array`
  for (let i of array) {
    // if the element with index i is greater than largestNum
    if (i > largestNum) {
      // reassign largestNum to element with index i
      largestNum = i;
    }
  }
  // return largestNum
  return largestNum;
}

/**
 * findEqual() // return boolean
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
  // output: return true if the `selected` value is found within `array` otherwise return false

  // loop through `array`
  for (let i of array) {
    // if the `selected` value is strictly equal to one of the numbers in the array
    if (i === selected) {
      // return true
      return true;
    }
  }
  // otherwise return false
  return false;
}

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
  // output: return a new array with no duplicate numbers from `array`

  // problem: How do I not push duplicate numbers from `array` to new array?
  // solution: 1. loop 2. includes as conditional statment 3. push

  // declare a variable `cacheArr` and assign it an empty arr
  let cacheArr = [];
  // use for of loop to iterate through numbers in `array`
  for (let i of array) {
    // if cacheArr does not include number in array
    if (!cacheArr.includes(i)) {
      // push that number to cacheArr
      cacheArr.push(i);
    }
  }
  // return cacheArr
  return cacheArr;
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
