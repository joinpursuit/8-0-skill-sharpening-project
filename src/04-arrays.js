/**
 * createEmptyArray()
 * ---------------------
 * Returns an empty array.
 * Make sure you return a different empty array each time the function is called.
 * You can do this by returning an empty array that is created INSIDE the function (not outside it).
 * @returns {*[]}
 *
 * EXAMPLE:
 *  createEmptyArray();
 *  //> []
 */
function createEmptyArray() {
  //return an empty array
  return [];
}

/**
 * createArrayWithTwoElements()
 * ---------------------
 * Creates and returns an array where the first element is `a` and the second element is `b`.
 * @param {*} a
 * @param {*} b
 * @returns {*[]}
 *
 * EXAMPLE:
 *  createArrayWithTwoElements(true, false);
 *  //> [ true, false ]
 */
function createArrayWithTwoElements(a, b) {
  //return an array with the two elements
  return [a, b];
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
  //get array length and return
  return array.length;
}

/**
 * getFirstElementOfArray()
 * ---------------------
 * Returns the first element of the array.
 * HINT: How is this similar to getFirstAndLastCharacter() in part 1?
 * @param {*[]} array
 * @returns {*}
 *
 * EXAMPLE:
 *  getFirstElementOfArray([ 10, 20, 30 ]);
 *  //> 10
 */
function getFirstElementOfArray(array) {
  //return first element
  return array[0];
}

/**
 * getLastElementOfArray()
 * ---------------------
 * Returns the last element of the array.
 * HINT: How is this similar to getFirstAndLastCharacter() in part 1?
 * @param {*[]} array
 * @returns {*}
 *
 * EXAMPLE:
 *  getLastElementOfArray([ null, undefined ]);
 *  //> undefined
 */
function getLastElementOfArray(array) {
  //get the length minus 1 to find the last element
  return array[array.length - 1];
}

/**
 * addElementToEndOfArray()
 * ---------------------
 * Adds an `element` to the end of the inputted `array`. Then, returns the array.
 * @param {*[]} array
 * @param {*} element
 * @returns {*[]}
 *
 * EXAMPLE:
 *  addElementToEndOfArray([ 10 ], 9);
 *  //> [ 10, 9 ]
 */
function addElementToEndOfArray(array, element) {
  //add the element to the array
  array.push(element);
  //return the array
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
  //remove and return the element at end
  return array.pop();
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
  //add element in front of array
  array.unshift(element);
  //return the array
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
  //remove and return first array element
  return array.shift();
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
  //return the element in the middle
  return array[(array.length - 1)/ 2];
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
