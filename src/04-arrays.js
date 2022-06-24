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
  const dummy= []
  return dummy;
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
function createArrayWithTwoElements() {}
function createArrayWithTwoElements(a, b) {
  let dummy = [a, b]
  return dummy;
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
function getArrayLength() {}
function getArrayLength(array) {
  for(i =0; i <= array.length; i++){
    return array.length;
  }
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
function getFirstElementOfArray() {}
function getFirstElementOfArray(array) {
  for(i =0; i <= array.length; i++){
    return (array[0]);
  }
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
function getLastElementOfArray() {}
function getLastElementOfArray(array) {
  for(i =0; i <= array.length; i++){
    last = array[array.length];
    return last;
  }
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
function addElementToEndOfArray() {}
function addElementToEndOfArray(array, element) {
  for (i =0; i <= array.length; i++){
    array.push(element);
      return array;
  }
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
function removeElementFromEndOfArray(array) {}
function removeElementFromEndOfArray(array) {
  for(i =0; i <= array.length; i++){
    element = array.pop()
    return element;
  } 
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
function addElementToFrontOfArray(array, element) {}
function addElementToFrontOfArray(array, element) {
  for (i =0; i <= array.length; i++){
    array.unshift(element)
    return array;
  }
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
function removeElementFromFrontOfArray() {}
function removeElementFromFrontOfArray(array) {
  for (i =0; i <= array.length; i++){
    element + array.shift()
    return element;
  }
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
function getMiddleElement() {}
function getMiddleElement(array) {
  return array[Math.floor(array.length/2)];
}

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
