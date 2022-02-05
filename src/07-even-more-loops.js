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
  let blankArr = []
  for(let i = 0; i < array.length; i++){
    blankArr.push(array[i] + "!");
  }
  return blankArr;
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
  let arrayTwo = [];
  let i = 0;

  while (array[i]){ // INSTEAD: while(i < array.length)
    arrayTwo.push(array[i] + "!");
    i++ ;
  } 
  return arrayTwo;
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
  let arrayThree = [];

  for (let element of array){
    arrayThree.push(element + "!");
  } 
  return arrayThree;
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
  let total = 0
  for (let i = 0; i < array.length; i++){
    total += array[i]
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
  let newArray = [];

  for (let i = 0; i < array.length; i++){
    if (array[i] % 2 !== 0){
      newArray.push(array[i])
    }
  }
  return newArray;
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
  let newEvenArray = [];

  for (let i = 0; i < array.length; i++){
    if (array[i] % 2 === 0){
      newEvenArray.push(array[i])
    }
  }
  return newEvenArray;
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
  // My Original ANSWER: return Math.min(...array);
  // Gigi's Answer
  let smallestNumber = array[0]; //By default, when starting a loop, the first number is the
                                 // smallest until there is another number to compare it to

  for(let i = 1; i < array.length; i++){ 
    if(array[i] < smallestNumber){ // Here we compare the values
      smallestNumber = array[i];
    };
  }
  return smallestNumber;
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
  // My Original ANSWER: return Math.max(...array);
  // Gigi's Answer:
  let largestNumber = array[0]; // By default, when starting a loop, the first number is the
                                // largest until there is another number to compare it to
  
  for(let i = 1; i < array.length; i++){ 
    if(array[i] > largestNumber){ // Here we compare the values
      largestNumber = array[i];
    };
  }
  return largestNumber;
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
  // My Original ANSWER: return array.includes(selected)
  // My Second Answer - CORRECT!

  let foundValue = false;

  for (i = 0; i < array.length; i++){
    if (array[i] === selected){
      foundValue = true; 
    }
  }
  return foundValue;
}

  // ANOTHER WAY - Classmate: Luke!
  // let i = 0
  // while (i < array.length){
  //  if (array[i] === selected){
  //    return true;
  //  }
  // i++;
  // };
  //  return false;
  //};

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
  //My ORIGINAL ANSWER: return [...new Set(array)];
  //Gigi's Answer:

  let duplicateFree = [];
  
  for(let element of array){
    if(!duplicateFree.includes(element)){ //if the new array doesnt already include the current element, 
      duplicateFree.push(element);        //then we are clear to push the element into the new array.
    }
  }
  return duplicateFree; //here we return a duplicate free array
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
