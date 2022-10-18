/**
 * createEmptyObject()
 * ---------------------
 * Returns an empty object.
 * Should return a new empty object each time the function is called.
 * @returns {Object}
 *
 * EXAMPLE:
 *  createEmptyObject()
 *  //> {}
 */
function createEmptyObject() {}

/**
 * createObjectWithValue()
 * ---------------------
 * Creates an object with the input as a value. The key can be anything.
 * @param {*} val
 * @returns {Object}
 *
 * EXAMPLE:
 *  createObjectWithValue(19);
 *  //> { whateverKey: 19 }
 */
function createObjectWithValue(val) {}

/**
 * createObjectWithKey()
 * ---------------------
 * Creates an object with the input as a key. The value can be anything.
 * @param {*} key
 * @returns {Object}
 *
 * EXAMPLE:
 *  createObjectWithKey("left");
 *  //> { left: false }
 */
function createObjectWithKey(key) {}

/**
 * createObjectWithKeyValuePair()
 * ---------------------
 * Creates an object with the inputs as a key-value pair.
 * @param {*} key
 * @param {*} val
 * @returns {Object}
 *
 * EXAMPLE:
 *  createObjectWithKeyValuePair("left", "right");
 *  //> { left: "right" }
 */
function createObjectWithKeyValuePair(key, val) {}

/**
 * getNameFromObject()
 * ---------------------
 * Returns the value of the `name` key from the inputted object.
 * @param {Object} object
 * @returns {*}
 *
 * EXAMPLE:
 *  getNameFromObject({ name: "Jay" });
 *  //> "Jay"
 */
function getNameFromObject(object) {}

/**
 * getAgeFromObject()
 * ---------------------
 * Returns the value of the `age` key from the inputted object.
 * @param {Object} object
 * @returns {*}
 *
 * EXAMPLE:
 *  getAgeFromObject({ age: 30 });
 *  //> 30
 */
function getAgeFromObject(object) {}

/**
 * addValueToObject()
 * ---------------------
 * Adds the input as a value on the given object. The key can be anything.
 * @param {Object} object
 * @param {*} val
 * @returns {Object}
 *
 * EXAMPLE:
 *  addValueToObject({ left: true }, false);
 *  //> { left: true, key: false }
 */
function addValueToObject(object, val) {}

/**
 * addKeyToObject()
 * ---------------------
 * Adds the input as a key on the given object. The value can be anything.
 * @param {Object} object
 * @param {*} key
 * @returns {Object}
 *
 * EXAMPLE:
 *  addKeyToObject({ right: false }, "left");
 *  //> { right: false, left: true }
 */
function addKeyToObject(object, key) {}

/**
 * addKeyValuePairToObject()
 * ---------------------
 * Adds the inputted key and value as a key-value pair on the given object.
 * @param {Object} object
 * @param {*} key
 * @param {*} val
 * @returns {Object}
 *
 * EXAMPLE:
 *  addKeyValuePairToObject({ up: true }, "left", false);
 *  //> { up: true, left: false }
 */
function addKeyValuePairToObject(object, key, val) {}

/**
 * deleteKeyFromObject()
 * ---------------------
 * Remove the key from the given object. You may use the `delete` keyword.
 * @param {Object} object
 * @param {string} key
 * @returns {Object}
 *
 * EXAMPLE:
 *  deleteKeyFromObject({ left: true, right: false }, "left");
 *  //> { right: false }
 */
function deleteKeyFromObject(object, key) {}

// Do not change any code below this line.
module.exports = {
  createEmptyObject,
  createObjectWithValue,
  createObjectWithKey,
  createObjectWithKeyValuePair,
  getNameFromObject,
  getAgeFromObject,
  addValueToObject,
  addKeyToObject,
  addKeyValuePairToObject,
  deleteKeyFromObject,
};
