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

//grab each element of a loop and add an ! after each
//creating a new array to dump the array into
function shoutForLoop(array) {
  let shoutingArray = [];
    for (const element of array) {
      let shoutingElement = element + `!`;
      shoutingArray.push(shoutingElement);
    }
  return shoutingArray;
}
// console.log(shoutForLoop([ "A", "Very", "Happy", "Array" ]));

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

//grab each element and dumps it into the new array - declare a new array
// while in the duration of the array
function shoutWhileLoop(array) {
  let whileLoopShouting = [];
  let index = 0;
  while (index < array.length) {
    let value = array[index] + `!`;
    whileLoopShouting.push(value);
    index++
  }
  return whileLoopShouting;
}
console.log(shoutWhileLoop([ "A", "Very", "Happy", "Array" ]));


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

//grab each element of an array and dump it into an array
// of each each element, i want to add an ! 
function shoutForOfLoop(array) {
  let forShoutingLoop = [];
  for(const element of array) {
    let value = element + `!`;
    forShoutingLoop.push(value);
  }
  return forShoutingLoop;
}

console.log(shoutForOfLoop([ "A", "Very", "Happy", "Array" ]));

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
  let totalSum = 0;
    for (const element of array) {
    totalSum = totalSum + element
    }
  return totalSum;  
}
console.log(sumArray([ 10, 0, 10, 11 ]));


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
//creating a new array to dump the values
//if the the values are odd then they get pushed into the array
function oddArray(array) {
  let oddArray = [];
  for (const element of array) {
    if (element % 2 === 1) {
      oddArray.push(element);
    }
  }
  return oddArray;
}
console.log(oddArray([ 11, 15, 20, 22, 37 ]));


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

//create a new array of even elements
//push the even numbers into the array
function evenArray(array) {
  let evenArray = [];
  for (const element of array) {
    if (element % 2 === 0) {
      evenArray.push(element);
    }
  }
  return evenArray;
}
console.log(evenArray([ 11, 15, 20, 22, 37 ]));


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

//compare the values within the loop
//declare an index as default 
//compare the index to the rest
//the smallest one will take the place of the declared variable
//returning the value in the index
function findSmallest(array) {
  let smallestNumber = array[0];
  for (let i = 0; i < array.length; i++) {
    let value = array[i];
    if (value < smallestNumber ) {
      smallestNumber = value; 
    }
  }
  return smallestNumber;
}
console.log(findSmallest([ 0, 11, -2, 5 ]));

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

//declaring an index value as default
//comparing the values in the array to the default
//if it meets the requirement then the default value takes the place of the new value
function findLargest(array) {
  let largestNumber = array[0];
  for (let i = 0; i < array.length; i++) {
    let value = array[i];
    if (value > largestNumber) {
      largestNumber = value;
    }
  }
  return largestNumber
}

console.log(findLargest([ 0, 11, -2, 5 ]));


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

//look through an array to find a value
//if value is found then it's declared to be true, if it is not then it returns false
function findEqual(array, selected) {
  for (const element of array) {
    if (element === selected) {
      return true;
    }
  }
  return false;
}
console.log(findEqual([ 0, 11, -2, 5 ], 9));

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

//takes values from the old array and dumps it into the new array;
//if the new array already includes the element that's going to be dumped into the array then don't push it
function removeDuplicates(array) {
  let newAndImprovedArray = [];
  for (const element of array) {
      if (!newAndImprovedArray.includes(element)) {
        newAndImprovedArray.push(element)
      }
    }
  return newAndImprovedArray;
}
console.log(removeDuplicates([ 1, 11, 2, 3, 4, 4, 2, 11, 9 ]));

    
  

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
