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
  //declare a var, assign it an empty arr
  let newArr = [];
  //for i loop through our array
  for (let i = 0; i < array.length; i++) {
    //.push var + '!' to each string
    newArr.push(array[i] + "!");
  }
  //return var outside of loop
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
  //declare a var, assign it an empty arr
  let newArr = [];
  //decare i and assing it 0
  let i = 0;
  //while i is less than the array.length...
  while (i < array.length) {
    //.push array at any index plus '!' into the var
    newArr.push(array[i] + "!");
    //make sure to increment i by 1!
    i++;
  }
  //outside the loop return the var
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
  //declare a var, assign it an empty arr
  let newArr = [];
  //for of loop through our array
  for (const arr of array) {
    //.push var + '!' to each string
    newArr.push(arr + "!");
  }
  //return var outside of loop
  return newArr;
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
  //declare a var, assign it 0
  let result = 0;
  //for of loop through arr
  for (const arr of array) {
    //result now equals result plus arr
    result += arr;
  }
  //return the var
  return result;
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
  //decalre a var, assign it an empty array
  let newArr = [];
  // for of loop through 'array'
  for (const arr of array) {
    //create var assign it array%2 !== 0
    let odd = arr % 2 !== 0;
    //if that var...
    if (odd) {
      //then push that result into our empty arr
      newArr.push(arr);
    }
  }
  //outside of the loop return the empty arr with the odd #'s
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
  //decalre a var, assign it an empty array
  let newArr = [];
  // for of loop through 'array'
  for (const arr of array) {
    //create var assign it array%2 === 0
    let even = arr % 2 === 0;
    //if that var...
    if (even) {
      //then push that result into our empty arr
      newArr.push(arr);
    }
  }
  //outside of the loop return the empty arr with the odd #'s
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
  //declare a var, assign it array index at 0
  let smallest = array[0];
  //for of loop through our array
  for (const arr of array) {
    //if array at any index is samller than the var
    if (arr < smallest) {
      //then the var is equal to array at any index
      smallest = arr;
    }
  }
  //outside of the loop return the var
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
  //declare a var, assign it array index at 0
  let biggest = array[0];
  //for of loop through our array
  for (const arr of array) {
    //if array at any index is bigger than the var
    if (arr > biggest) {
      //then the var is equal to array at any index
      biggest = arr;
    }
  }
  //outside of the loop return the var
  return biggest;
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
  //declare a var, assign it false
  let equal = false;
  //for of through our array
  for (const arr of array) {
    //if selected
    if (selected === arr) {
      //assign equal to true
      equal = true;
    }
  }
  //return var
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
  //create a var, assign it an empty arr
  let newArr = [];
  //for of loop through our array
  for (const arr of array) {
    //if false, var .includes array at any given index
    if (!newArr.includes(arr)) {
      //then .push the array at any given index into the var
      newArr.push(arr);
    }
  }
  //outside of the loop return the var
  return newArr;
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
