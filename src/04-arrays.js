/**
 * createEmptyArray()
 * ---------------------
 * Returns an empty array.
 * Make sure you return a different empty array each time the function is called.
 * You can do this by returning an empty array that is created INSIDE the 
 * function (not outside it).
 * @returns {*[]}
 *
 * EXAMPLE:
 *  createEmptyArray();
 *  //> []
 */

//
function createEmptyArray() {

  //New array declared, initialized with no element 
  const newArr = [];
  
  //Return value
  return newArr;
}
console.log(createEmptyArray())
/**
 * createArrayWithTwoElements()
 * ---------------------
 * Creates and returns an array where the first element is `a` 
 * and the second element is `b`.
 * @param {*} a
 * @param {*} b
 * @returns {*[]}
 *
 * EXAMPLE:
 *  createArrayWithTwoElements(true, false);
 *  //> [ true, false ]
 */
function createArrayWithTwoElements(a, b) {
//New array declared, initialized with two elements
  const newArr = [a, b];

  //Return value
  return newArr;
}

/**
 * getArrayLength()
 * ---------------------
 * Returns the length of the array
 * @param {*[]} array
 * @returns {number}
 *
 * EXAMPLE:
 *  getArrayLength([ 10, 20, 30 ]);
 *  //> 3
 */

function getArrayLength(array) {
  //gets array length
const length = array.length

//Return value
return length;
}

/**
 * getFirstElementOfArray()
 * ---------------------
 * Returns the first element of the array.
 * HINT: How is this similar to getFirstAndLastCharacter() 
 * in part 1?
 * @param {*[]} array
 * @returns {*}
 *
 * EXAMPLE:
 *  getFirstElementOfArray([ 10, 20, 30 ]);
 *  //> 10
 */
function getFirstElementOfArray(array) {
  //gets thefirst element
const firstElement = array[0]

//return value
return firstElement;
}


/**
 * getLastElementOfArray()
 * ---------------------
 * Returns the last element of the array.
 * HINT: How is this similar to getFirstAndLastCharacter() 
 * in part 1?
 * @param {*[]} array
 * @returns {*}
 *
 * EXAMPLE:
 *  getLastElementOfArray([ null, undefined ]);
 *  //> undefined
 */
function getLastElementOfArray(array) {

  //get the last element
  const lastElement = array[array.length-1];

  //return value
  return lastElement;
}


/**
 * addElementToEndOfArray()
 * ---------------------
 * Adds an `element` to the end of the inputted `array`. 
 * Then, returns the array.
 * @param {*[]} array
 * @param {*} element
 * @returns {*[]}
 *
 * EXAMPLE:
 *  addElementToEndOfArray([ 10 ], 9);
 *  //> [ 10, 9 ]
 */
function addElementToEndOfArray(array, element) {
  //adds an element at the back
  array.push(element);

  //return value
  return array; 
}

/**
 * removeElementFromEndOfArray()
 * ---------------------
 * Removes the last element of the inputted `array`. Then, returns the removed element.
 * @param {*[]} array
 * @returns {*[]}
 *
 * EXAMPLE:
 *  removeElementFromEndOfArray([ 10, 9, 8 ]);
 *  //> 8
 */
function removeElementFromEndOfArray(array) {
  
  //Removes element from the back
  const elementRemovedEnd  = array.pop();

  //return value
  return elementRemovedEnd; 
}

/**
 * addElementToFrontOfArray()
 * ---------------------
 * Adds an `element` to the front of the inputted `array`. Then, returns the array.
 * @param {*[]} array
 * @param {*} element
 * @returns {*[]}
 *
 * EXAMPLE:
 *  addElementToFrontOfArray([ 10 ], 9);
 *  //> [ 9, 10 ]
 */
function addElementToFrontOfArray(array, element) {

  //puts  an element at index zero
  array.unshift(element);
  //return value
  return array;
}

/**
 * removeElementFromFrontOfArray()
 * ---------------------
 * Removes the first element of the inputted `array`. Then, returns the removed element.
 * @param {*[]} array
 * @returns {*[]}
 *
 * EXAMPLE:
 *  removeElementFromFrontOfArray([ 10, 9, 8 ]);
 *  //> 10
 */
function removeElementFromFrontOfArray(array) {
  //removes first elemnent
  const elementRemovedFront = array.shift();

  //return value
  return elementRemovedFront;
}

/**
 * getMiddleElement()
 * ---------------------
 * Returns the element in the middle of the array.
 *
 * NOTE: Inputted arrays will always be of odd length.
 *
 * @param {*[]} array
 * @returns {*}
 *
 * EXAMPLE:
 *  getMiddleElement([ 10, null, "30" ]);
 *  //> null
 */
function getMiddleElement(array) {
//Checks if the array is empty
  if(array.length === 0){
    return [];
  }

  let middleElement = 0;
  //checks if array length is even
  if(array.length % 2 === 0 ){

    middleElement  = `Two elementsare in the middle`
  }
 //checks if array lengthis odd
  else if(array.length % 2 === 1 ){
    //truncates the remainder allowing us to use the quotient
    middleElement  = array[Math.trunc(array.length/2)]
    // Or : array.length/2 -.5
  }
//return value
  return middleElement;
}

// Do not change any code below this line.
module.exports = {
  createEmptyArray,
  createArrayWithTwoElements,
  getArrayLength,
  getFirstElementOfArray,
  getLastElementOfArray,
  addElementToEndOfArray,
  removeElementFromEndOfArray,
  addElementToFrontOfArray,
  removeElementFromFrontOfArray,
  getMiddleElement,
};
