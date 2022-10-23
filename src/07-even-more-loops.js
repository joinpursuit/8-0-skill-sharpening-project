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
// function shoutForLoop(array) {
//   for (let i = 0; i < array.length; i++) {
//     array[i] += "!";
//   }
//   return array;
// }
const shoutForLoop = array => {
  for (let i of array) {
    array[array.indexOf(i)] += "!";
  }
  return array;
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
const shoutWhileLoop = array => {
  let i = 0;
  while (i < array.length) {
    array[i] += "!";
    i++;
  }
  return array;
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
// function shoutForOfLoop(array) {
//   let newArr = [];
//   for (let str of array) {
//     str += "!";
//     newArr.push(str);
//   }
//   return newArr;
// }
const shoutForOfLoop = array => {
  for (let str of array) {
    // array[array.indexOf(str)] = str.concat("!");
    array[array.indexOf(str)] += "!";
  }
  return array;
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
// function sumArray(array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//   }
//   return sum;
// }
const sumArray = array => {
  let sum = 0;
  for (let i of array) {
    sum += i;
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
// function oddArray(array) {
//   let newArr = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 1) {
//       newArr.push(array[i]);
//     }
//   }
//   return newArr;
// }
const oddArray = array => {
  let newArr = [];
  for (let i of array) {
    if (i % 2 === 1) {
      newArr.push(i);
    }
  }
  return newArr;
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
// function evenArray(array) {
//   let newArr = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//       newArr.push(array[i]);
//     }
//   }
//   return newArr;
// }
const evenArray = array => {
  let newArr = [];
  for (let i of array) {
    if (i % 2 === 0) {
      newArr.push(i);
    }
  }
  return newArr;
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
  // assign with first index
  let smallest = array[0];
  // go through the array and check each one
  for (let i = 1; i < array.length; i++) {
    // if next index is smaller than the previous one, update it
    if (array[i] < smallest) {
      smallest = array[i];
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
  let largest = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > largest) {
      largest = array[i];
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
  let result = false;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === selected) {
      result = true;
    }
  }
  return result;
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
  for (let i = 0; i < array.length; i++) {
    // first number assigned to a variable for later comparison
    let firstDup = array[i];
    // second loop to compare with the previous assigned number
    for (let j = 1; j < array.length; j++) {
      if (firstDup === array[j]) {
        // remove the duplicate number from the correct index nubmer
        array.splice(array[j-1], 1);
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
