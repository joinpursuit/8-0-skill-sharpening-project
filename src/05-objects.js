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
function createEmptyObject() {
  //declare result variable, make it an empty array
  let result = {};
  //return result
  return result;
}

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
function createObjectWithValue(val) {
  //create an empty object, let it be our result
  let result = {};
  //declare any key, and make it's value the "val" parameter
  result.key1 = val;
  //return result
  return result;
}

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
function createObjectWithKey(key) {
 //declare an empty object, let it be our result
 let result = {};
 //declare a key that's our "key" paramater with any value
 result[key] = 12;
 //return result
 return result;
}

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
function createObjectWithKeyValuePair(key, val) {
  //create an empty object, let it be our result
  let result = {};
  //declare a key and value using the given parameters
  result[key] = val;
  //return result
  return result;
}

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
function getNameFromObject(object) {
  //declare a result variable, let it's value be the value of the name key in object
  let result = object.name;
  //return result
  return result;
}

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
function getAgeFromObject(object) {
   //declare a result variable, let it's value be the value of the age key in object
   let result = object.age;
   //return result
   return result;
}

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
function addValueToObject(object, val) {
  //declare a result variable, let it's value be our object parameter
  let result = object;
  //declare a key of choice into the object, let it's value be the "val" parameter
  result.key = val;
  //return result
  return result;
}

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
function addKeyToObject(object, key) {
  //declare a result variable, let it's value be our object parameter
  let result = object;
  //declare our key paramater as the key, it's value can be anything
  result[key] = 12;
  //return result
  return result;
}

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
function addKeyValuePairToObject(object, key, val) {
  //declare a result variable, let it's value be our object parameter
  let result = object;
  //declare a key and value using the given parameters
  result[key] = val; 
  //return result
  return result;
}

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
function deleteKeyFromObject(object, key) {
  //declare a result variable, make it the object parameter
  let result = object;
  //use the key parameter to identify what to delete from our result
  delete result[key];
  //return result
  return result;
}

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
