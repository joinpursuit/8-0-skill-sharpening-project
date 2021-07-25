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
  // return an empty array with a space inside the arr
  return [ ]
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
  // a and b are specific `data types`
  // return a array where the first element is `a` and the second element is `b`

  return [a, b]
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
  // input: array is an array of specific `data types`
  // return: return the length of the array

  return array.length
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
  // input: array is an array of specific `data types`
  // output: return the first element in the array

  return array[0]
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
  // input: array is an array of specific `data types`
  // output: return the last element in the array

  return array[array.length - 1]
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
  // input: array is an array with a specific `data type` and element is specific `data type`
  // output: return array with a new element 

  // push element into array
  array.push(element)
  // return arr
  return array
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
  // input: array is an arr of certain data types
  // output: return the removed element from the `array`

  // problem: How do we return the element that has been popped off?
  // solution: .pop() return the element that has been popped off?

  return array.pop()
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
  // input: a is an array of specific data types and element is a specific data type
  // output: return array with a new element at index 0 

  // problem: Which array method add a new element to the array at index 0
  // solution: .unshift() return the last element add to the beginning of the arr

  array.unshift(element)

  return array
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
  // return the removed element at index 0 from the array of data types 

  return array.shift()
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
  // returns the element in the middle of `array`

  return array[(array.length - 1 ) / 2]
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
