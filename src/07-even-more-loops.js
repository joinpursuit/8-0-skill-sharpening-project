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
  let arr = [];
  for(let i = 0; i < array.length; i++) {
    arr.push(array[i] + `!`);
  }
  return arr;
}
// console.log(shoutForLoop([ "A", "very", "Very", "Happy", "Array" ]));

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
  let arr = [];
  let i = 0;
  while(i < array.length){
    arr.push(array[i] + `!`);
    i++;
  }
  return arr;
}
// console.log(shoutWhileLoop([ "A", "Very", "Happy", "Array" ]));

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
  let arr = [];
  for(const str of array) {
    arr.push(str + `!`);
  }
  return arr;
}
// console.log(shoutForOfLoop([ "A", "Very", "Happy", "Array" ]));

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
  for(const num of array){
    sum += num;
  }
  return sum;
}
// console.log(sumArray([ 10, 0, 10, 11 ]));

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
  let arr = [];
  for(const num of array){
    if(num % 2){
      arr.push(num);
    }
  }
  return arr;
}
// console.log(oddArray([ 11, 15, 20, 22, 37 ]));

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
  let arr = [];
  for(const num of array){
    if(!(num % 2)){
      arr.push(num);
    }
  }
  return arr;
}
// console.log(evenArray([ 11, 15, 20, 22, 37 ]));

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
  let small = array[0];
  for(const num of array){
    if(small > num){
      small = num;
    }
  }
  return small;
}
// console.log(findSmallest([ 0, 11, -2, 5 ]));

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
  for(const num of array){
    if(num > largest){
      largest = num;
    }
  }
  return largest;
}
// console.log(findLargest([ 0, 11, -2, 5 ]));

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
  for(const num of array){
    if(num === selected){
      return true;
    }
  }
  return false;
}
// console.log(findEqual([ 0, 11, -2, 5 ], 11));

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
  let arr = [];
  for(const val of array){
    if(arr.includes(val)){
      continue;
    } else {
      arr.push(val);
    }
  }
  return arr;
}
// console.log(removeDuplicates([ 1, 11, 2, 3, 4, 4, 2, 11, 9 ]));

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
