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
  for (let i = 0; i < array.length; ++i) {
    newArray.push(`${array[i]}!`);
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
    newArray.push(`${array[i]}!`);
    ++i;
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
  for (let word of array) {
    newArray.push(`${word}!`);
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
  let sum = 0;
  for (let number of array) {
    sum += number;
  }
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
  let oddArray = [];
  for (let i = 0; i < array.length; ++i) {
    if ((array[i] % 2 !== 0) || (array[i] % 2 !== -0)) {
      oddArray.push(array[i]);
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
  let oddArray = [];
  for (let i = 0; i < array.length; ++i) {
    if ((array[i] % 2 === 0) || (array[i] % 2 === -0)) {
      oddArray.push(array[i]);
    }
  }
  return oddArray;
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
  let tinyNum = array[0];
  for (let i = 1; i < array.length; ++i) {
    if (array[i] <= tinyNum) {
      tinyNum = array[i];
    }
  }
  return tinyNum
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
  let giantNum = array[0];
  for (let i = 1; i < array.length; ++i) {
    if (array[i] >= giantNum) {
      giantNum = array[i];
    }
  }
  return giantNum
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
  let bool = false;
  for (let i = 0; i < array.length; ++i) {
    if (array[i] !== selected) {
      continue
    } else if (array[i] === selected) {
      bool = true;
    }
  }
  return bool;
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

// Bear with me on this function. I had a lot of fun designing it! 
// I was really curious about the potential of using loops within loops.

/**
 * Line 226 creates a loop that iterates through each element of the given array, staring with the first (zeroth) element.
 * Line 227 creates a loop within that loop that compares the previous elements, one by one, to every other element after it.
 * Line 228 takes out (splices) the first repeated occurances of the observed element, then moving on to the next element to perfomr the double loop again.
 * Lines 233 to 236 repeat this entire process to take into account the fault that line 228 has of not accounting for multiple repitions, thus continuing the process.
 * 
 * I still have a lot to explore but I thought it was nice that this function passes the test! 
 * Thank you .splice and loops!
*/

function removeDuplicates(array) {
  for (let indx = 0; indx < array.length; ++indx) {
    for (let counter = indx + 1; counter < array.length; ++counter) {
      if (array[indx] === array[counter]) {
        array.splice(counter, 1);
      }
    }
  }
  for (let indx = 0; indx < array.length; ++indx) {
    for (let counter = indx + 1; counter < array.length; ++counter) {
      if (array[indx] === array[counter]) {
        array.splice(counter, 1);
      }
    }
  }
  return array;
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
