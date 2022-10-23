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
  return emptyObject = { }
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
  let m = {
   key: `my value`,
   para: val,
}
return m
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
  let lonelyObject = {}
  lonelyObject[key] = `cool`
  return lonelyObject
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
  let word = {}
  word[key] = val
  return word
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
  let Object = {}
  Object.name = [null, `A`]
   return object.name
}
//figure out to get exact value in return
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
  let newObj = {}
  return object.age
}
 //newObj.age = age.filter(age => age)
 // return newObj.map(x => console.log(newObj.age))
//`${object.age}`
//   newObj.age = ``
//   let values = Object.values(newObj.age)
// console.log(Object.values(newObj))

  // let num = 1
  // newObj.age = 10, `eleven`, 99, undefined
  // while (num <= newObj.age) {
  //   newObj.age.push(num++)
  // }
  // //for (let i = 0; i < newObj.length; i++)
  // return newObj
  //return newObj.age.length <= 2
  // newObj.age = 10, `eleven`, 99, undefined;
  // for (let i = 0; i < newObj.length; i++) {
  //   return object[i].age
  // }
  //newObj.age = 10, `eleven`, 99, undefined;
  //return newObj.values
  // Object.values()
  // Object.getPrototypeOf()


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
  object.key = val  
 
  return object
}
// let newObjt = {}

// return newObjt[]
 /* object[subject] = val
  return object
   //add value to object also known as 'val' using dot notation
} */
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
    object = {} 
    object[key] = `jewel` 
    return object 
  }
//the object defined;we dont have to create it
// use bracket notation; add a property and a value 
//return object with the added pair properties
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
  object = {
    [key]: val
  }
  return object
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
 delete object[key]
 return object
}
//  let object = {}
//   delete object[key];
//   return object
// } 

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
