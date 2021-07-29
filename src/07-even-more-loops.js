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
  // This function takes in array and returns a new array adding "1" to each string
  // Declare a variable that holds a new array
  let newArr = [];
  // Create a loop that goes through each element of the array
  for (let i = 0; i < array.length; i++) {
    // Create an if statement that adds ! to each string and adds to new array
    if (array[i]) {
      array[i] = array[i] + "!";
      newArr.push(array[i]);
    }
  }
  return newArr;
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
  // This function does the same as the above function but within a while loop
  let newestArr = [];
  let i = 0;
  //Create a while loop
  while (i < array.length) {
    //if (arrray[i]) {
    //array += '!'
    newestArr.push(array[i] + "!");
    i++;
  }
  return newestArr;
}

// This function takes in a new array and adds ! to each string

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
  let emptyArr = [];
  for (arr of array) {
    //if (array[i]) {
    // arr = array[i] + "!";
    emptyArr.push(arr + "!");
  }
  return emptyArr;
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
  // This function returns the sum of all values in the array
  // Create a variable that holds a number
  let num = 0;
  // Create a for loop that loops through the array
  for (let i = 0; i < array.length; i++) {
    num += array[i];
  }
  return num;
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
  // Declare a variable that holds an empty array
  let emptyArr = [];
  // Create a for loop that loops through each element
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 1) {
      emptyArr.push(array[i]);
    }
  }
  return emptyArr;
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
  // Declare a variable an assign it to an empty array
  let newArr1 = [];
  // Create a loop that goes through each element
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      newArr1.push(array[i]);
    }
  }
  return newArr1;
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
  // Declare a variable that holds a number
  let smallNum = 0;
  // Declare a variable that holds the smallest number
  let smallestNum = Math.min.apply(Math, array);
  // Create a for loop that loops through each element in an array
  for (let i = 0; i < array.length; i++) {
    if (array[i] === smallestNum) {
      smallNum = array[i];
    }
  }
  return smallNum;
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
  // Declare a variable that holds a number
  let largeNum = 0;
  // Declare a variable that holds the largest number
  let largestNum = Math.max.apply(Math, array);
  // Create a for loop that loops through each element in an array
  for (let i = 0; i < array.length; i++) {
    if (array[i] === largestNum) {
      largeNum = array[i];
    }
  }
  return largeNum;
}

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
  // Declare a variable that holds a number
  let selectedNum = false;
  // Create a for loop that loops through each element
  for (let i = 0; i < array.length; i++) {
    // Create an if statement that finds the selected value
    if (array[i] === selected) {
      return true;
    }
  }
  return selectedNum;
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
  let oneElement = [...new Set(array)];
  return oneElement;
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
