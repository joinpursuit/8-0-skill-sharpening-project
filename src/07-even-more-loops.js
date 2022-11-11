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
  {
    let newArr = []
    for (let i = 0; i < array.length; i++) {
      newArr.push(array[i] + '!')
    }
    return newArr
  }
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
  {
    let newArr = [];
    let i = 0;
    while (i < array.length) {

      newArr.push(array[i] + '!')
      i++;
    }
    return newArr
  }
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
  {
    let newArr = []
    let i = 0
    for (let element of array) {
      array[i] = array[i] + '!'
      i++
    }
    return array
  }
}
//Brainstorming & Notes ---V
//claims its not a for loop in the npm test result->needs a for...of loop
// for (let value of i = 0) {
//   i < array.length

//   newArr.push(array[i] + '!')
//   i++;
//}
//element is i in array, what we are looking through the array for an element

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
  let total = 0
  for (i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total
}

//return array[array.length - 1]
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
  let odd = []
  for(let i = 0; i < array.length; i++){
       if (array[i] % 2 !== 0){ 
        odd.push(array[i])
   }
          
  }
return odd


}
//array.filter(n => n % 2)
//
//Brainstorming-->
//const odds = array.filter(number => 2)
// {
//   return number % 2 !== 0;
// }
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

function evenArray(array) 
{
  let even =[]
  for (let i = 0; i< array.length; i++) {

  if (array[i] % 2 === 0){even.push(array[i])}
  
 }
 return even

}
// Brainstorming--->
//let even = []
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 == 0) {
//       return array
//     }
//}
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
  let smallest = array[0]
  for (i =0; i < array.length; i++){
    if (array[i] <= smallest){
      smallest = array[i]
    }
  }
return smallest
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
  let largest = array[0]
  for (i =0; i < array.length; i++){
    if (array[i] >= largest){
      largest = array[i]
    }
  }
return largest
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
  for (let i = 0; i < array.length; i++){
    if (array[i] === selected){
      return true
    }
  }
      return false
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
  let newArr = []
  for (let i = 0; i <array.length; i++){
    if (newArr.includes(array[i])=== false) {
      newArr.push(array[i])
    }
  }
  return newArr 

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
