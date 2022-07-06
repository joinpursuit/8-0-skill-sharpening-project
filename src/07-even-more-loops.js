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
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
   newArr.push(array[i]+'!');
  }
  return newArr;
}
shoutForLoop([ "A", "Very", "Happy", "Array" ])
// ran debugger to realize I was not making the function inclusive and the loop would stop one index early

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
  let i = 0;
  let newArr = [];
  while (i < array.length) {
    newArr.push(array[i]+'!');
    i++;
  }
  return newArr;
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
  let newArr = [];
  for (let elemsArr of array) {
    newArr.push(elemsArr + '!');
  }
  return newArr;
}
// shoutForOfLoop([ "A", "Very", "Happy", "Array" ]);

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
  let total = 0;
  for (let i = 0; i<array.length; i++) {
   total += array[i];
  }
  return total;
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
  let newArr =[];
  for (let i = 0; i<array.length; i++) {
    if (array[i]%2 !== 0) {
      newArr.push(array[i]);
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
function evenArray(array) {
  let newArr = [];
  for (let i=0; i< array.length; i++) {
    if (array[i]%2 ===0) {
      newArr.push(array[i]);
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
  let smallestNum = array[0]; 
  for (let i = 1; i < array.length; i++) {
    const currentNum = array[i];
    if (currentNum < smallestNum) {
      smallestNum = currentNum;
    }
  }
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
  let largestNum = array[0];
  for (let i = 1; i<array.length; i++) {
    const currentNum = array[i];
    if (currentNum > largestNum) {
      largestNum = currentNum;
    }
  }
  return largestNum;
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
  for (let i=0; i< array.length; i++) {
    if (array[i] === selected) {
      return true;
    }
  }
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
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (newArr.includes(array[i])===false) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}




  removeDuplicates([ 11, 11, 2, 3, 4, 4, 2, 11, 9 ]);
//   let firstElem = array[0];
//   let newArr = [];
//   for (let i = 1; i < array.length; i++) {
//     const secondElem = array[i];
//     if (firstElem !== secondElem) {
//       newArr.push(firstElem);
//       firstElem = secondElem;
//     } else {
//       firstElem = secondElem;
//     }
//   }
//   return newArr;
// }
//-------------------------------------------------------------
//   const copyArray = [];
//   for (let i=0; i < array.length; i++) {
//     if (array[i]===array[i+1]) {
//     copyArray.push(array[i+1]);
//     } 
//   } 
// return copyArray;

//   for (let i = 0; i<array.length; i++) {
//     copyArray.push(array[i])
//       if (copyArray[i] === array[i+1]) {
//       copyArray.push(array[i+1]);
//       copyArray.pop();
//       }
//     // }
//   }
//   return copyArray;
// }




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
