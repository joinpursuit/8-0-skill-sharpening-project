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
  //create new array
  let newArr = [];
  //loop through array
  for (let i = 0; i < array.length; i++){
    //assign value to new array
    newArr[i] = `${array[i]}!`;
  }
  //return new array
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
  //create new array
  let newArr = [];
  //create increment variable
  let i = 0;
  //loop through array
  while (i < array.length){
    //assign value to new array
    newArr[i] = `${array[i]}!`;
    //increment 
    i++;
  }
  //return new array
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
  //create new array
  let newArr = [];
  let i = 0;
  //loop through array
  for (let word of array){
    //put the word with ! into new array
    newArr[i] = word + "!";
    i++;
  }
  //return the new array
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
  //create result variable
  let result = 0;
  //loop through array
  for (let i = 0; i < array.length; i++){
    //add to result
    result += array[i];
  }
  //return result
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
  //create new array
  let newArr = [];
  //loop through array
  for (let i = 0; i < array.length; i++){
    //check if value is odd
    if (array[i] % 2 !== 0){
      //put in new array
      newArr.push(array[i]);
    }
  }
  //return the new array
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
  //create new array
  let newArr = [];
  //loop through array
  for (let i = 0; i < array.length; i++){
    //check if value is even
    if (array[i] % 2 === 0){
      //put in new array
      newArr.push(array[i]);
    }
  }
  //return the new array
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
  //create a variable equal to the first array element
  let num = array[0];
  //loop through array
  for (let i = 1; i < array.length; i++){
    //check which number is bigger
    if (num > array[i]){
      //assign smaller number to variable
      num = array[i];
    }
  }
  return num;
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
function findLargest(array) {//create a variable equal to the first array element
  let num = array[0];
  //loop through array
  for (let i = 1; i < array.length; i++){
    //check which number is bigger
    if (num < array[i]){
      //assign bigger number to variable
      num = array[i];
    }
  }
  return num;}

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
  //loop through array
  for (let i = 0; i < array.length; i++){
    //check if the number is there
    if (selected === array[i]){
      //return true
      return true;
    }
  }
  //otherwise return false
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

function removeDuplicates(array) {}

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
