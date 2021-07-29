/**
 * shoutForLoop()
 * ---------------------
 * Takes in an array and returns a new array, 
 * adding "!" to each string.
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
  let wordArray = []
  for (let word of array){
    wordArray.push(`${word}!`)
  }
  return wordArray
}

/**
 * shoutWhileLoop()
 * ---------------------
 * Takes in an array and returns a new array, adding "!" 
 * to each string.
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
let size = array.length;
let count = 0
  let wordArray = []
 while(count < size){
    wordArray.push(`${array[count]}!`)
    count++;
  }
  return wordArray
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
  let wordArray = []
  for (let word of array){
    wordArray.push(`${word}!`)
  }
  return wordArray
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
  let total = 0;
  for (let number of array){
    total +=number
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
  let oddNumber = []
  for (let i = 0; i < array.length; i++){
    if(array[i] % 2 === 1){
      oddNumber.push(array[i])
    }
  }
  return oddNumber;
}
console.log(oddArray([11, 15, 20, 22, 37]))
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
  
  let evenNumber = []
  for (let i = 0; i < array.length; i++){
    if(array[i] % 2 === 0){
      evenNumber.push(array[i])
    }
  }
  return evenNumber;
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
let smallest = array[0];
for (let i = 0; i < array.length; i++){
    if(array[i] <  smallest){
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
for (let i = 0; i < array.length; i++){
    if(array[i] >  largest){
      largest = array[i];
    }

}
return largest;
}
/**
 * findEqual()
 * ---------------------
 * Returns whether or not the `selected` value can be found 
 * in the array.
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

for(let equal of array){
if(equal === selected){
  return true
}
}
return  false;

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
  
    let duplicateArr = [];
    
    for (let i = 0; i < array.length; i++) {
      if (!duplicateArr.includes(array[i])) {
        duplicateArr.push(array[i]);
      }
    } 
    return duplicateArr;
  
// let duplicateArr = []
//     duplicateArr = [...new Set(array)];
//     return duplicateArr;


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
