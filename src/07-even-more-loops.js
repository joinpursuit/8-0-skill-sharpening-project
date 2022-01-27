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
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    // use push to append exclamation point to each element at iterator index and insert into new array 
    newArray.push(array[i] + "!");
  }
  return newArray;
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
  let newArray = [];
  let i = 0;
  while (i < array.length) {
    // use push to append exclamation point to each element at iterator index and insert into new array 
    newArray.push(array[i] + "!");
    // increase iterator with each pass
    i++;
  }
  return newArray;
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
  let newArray = [];
  for (let element of array) {
    // use push to append exclamation point to each element and insert into new array 
    newArray.push(element + "!");
  }
  return newArray;
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
  let number = 0;
  for (let element of array) {
    // store sum of all elements into number
    number += element;
  }
  return number;
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
  let oddArray = [];
  for (let element of array) {
    // use modulo to determine if element is odd; if so, push to new array
    if (element % 2 === 1) {
      oddArray.push(element);
    }
  }
  return oddArray;
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
  let evenArray = [];
  for (let element of array) {
    // use modulo to determine if element is even; if so, push to new array
    if (element % 2 === 0) {
      evenArray.push(element);
    }
  }
  return evenArray;
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
  // start with smallest variable at first index value of array
  let smallest = array[0];
  for (let element of array) {
    // compare each subsequent element value of array to current value
    if (element < smallest) {
      // reasign value of smallest if element is smaller
      smallest = element;
    }
  }
  return smallest;
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
    // start with largest variable at first index value of array
    let largest = array[0];
    for (let element of array) {
      // compare each subsequent element value of array to current value
      if (element > largest) {
        // reasign value of smallest if element is larger
        largest = element;
      }
    }
    return largest;
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
  let equal = false;
  for (let element of array) {
    // compare element to selected; if equal, set equal to true
    // otherwise, leave equal as false
    if (element === selected) {
      equal = true;
    }
  }
  return equal;
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
  let newArray = [];
  for (const element of array) {
    // use includes() method to check if element is not a duplicate
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
    if (!newArray.includes(element)) {
      // if element is unique, use push to store in new array
      newArray.push(element);
    }
  }
  return newArray;
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
