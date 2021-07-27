/*
  For all of the functions below, assume each function takes the following `person` object as its input. 
  While the values of the object may change, the structure of it will always be the same.

  const person = {
    names: {
      first: "Rachel",
      middle: "Eleanor",
      last: "Rojas"
    },
    address: {
      street: "697 Pine Drive",
      unit: "2A",
      city: "Staten Island",
      state: "NY",
      zip: "10306"
    },
    numbers: [
      7185550921,
      7185558611
    ]
  }
*/

/**
 * getFirstName()
 * ---------------------
 * Return the `first` name of the inputted person.
 * @param {Object} person
 * @returns {string}
 *
 * EXAMPLE:
 *  getFirstName(person);
 *  //> "Rachel"
 */
function getFirstName(person) {
  // input: person is an obj
  // output: return the `first` `names` of `person`

  return person.names.first
}

/**
 * getLastName()
 * ---------------------
 * Return the `last` name of the inputted person.
 * @param {Object} person
 * @returns {string}
 *
 * EXAMPLE:
 *  getLastName(person);
 *  //> "Rojas"
 */
function getLastName(person) {
  // input: person is an obj
  // output: return the `last` `names` of `person`

  return person.names.last
}

/**
 * getAddressStreet()
 * ---------------------
 * Return the `street` of the inputted person's `address`.
 * @param {Object} person
 * @returns {string}
 *
 * EXAMPLE:
 *  getAddressStreet(person);
 *  //> "697 Pine Drive"
 */
function getAddressStreet(person) {
  // input: person is an obj
  // output: return the `street` `address` of `person` 

  return person.address.street
}

/**
 * getCountOfPhoneNumbers()
 * ---------------------
 * Return a count of how many phone `numbers` the person has.
 * @param {Object} person
 * @returns {number}
 *
 * EXAMPLE:
 *  getCountOfPhoneNumbers(person);
 *  //> 2
 */
function getCountOfPhoneNumbers(person) {
// thank you
  return person.numbers.length;
}

/**
 * getFirstPhoneNumber()
 * ---------------------
 * Return the first phone number associated with the person.
 *
 * NOTE: There will always be at least one phone number.
 *
 * @param {Object} person
 * @returns {number}
 *
 * EXAMPLE:
 *  getFirstPhoneNumber(person);
 *  //> 7185550921
 */
function getFirstPhoneNumber(person) {
  // input: person is an obj
  // output: return the first phone number [0] `numbers` of `person` 
  
  return person.numbers[0]
}

/**
 * getLastPhoneNumber()
 * ---------------------
 * Return the first phone number associated with the person. // last not first
 *
 * NOTE: There will always be at least one phone number.
 *
 * @param {Object} person
 * @returns {number}
 *
 * EXAMPLE:
 *  getLastPhoneNumber(person);
 *  //> 7185558611
 */
function getLastPhoneNumber(person) {
  // input: person is an obj
  // output: return the last phone number [] `numbers` of `person` 

  return person.numbers[person.numbers.length -1]
}

/**
 * getFullName()
 * ---------------------
 * Combine the `first`, `middle`, and `last` names to return the full name.
 * @param {Object} person
 * @returns {string}
 *
 * EXAMPLE:
 *  getFullName(person);
 *  //> "Rachel Eleanor Rojas"
 */
function getFullName(person) {
  // return the full name of the person

  return person.names.first + ' ' + person.names.middle + ' ' + person.names.last
}

/**
 * getCityAndState()
 * ---------------------
 * Combine the `city` and `state` of the person's `address`.
 *
 * NOTE: Pay attention to the formatting below.
 *
 * @param {Object} person
 * @returns {string}
 *
 * EXAMPLE:
 *  getCityAndState(person);
 *  //> "Staten Island, NY"
 */
function getCityAndState(person) {
  // output: return the `city` and `state` of the `person` `address`
  
  return person.address.city + ', ' + person.address.state
}

/**
 * getFullAddress() // how can we invoke previous function to use that string interpolation of cit yand state
 * ---------------------
 * Combine all of the `address` fields to create a full address for the person.
 *
 * NOTE: Pay attention to the formatting below.
 *
 * @param {Object} person
 * @returns {string}
 *
 * EXAMPLE:
 *  getFullAddress(person);
 *  //> "697 Pine Drive 2A, Staten Island, NY, 10306"
 */
function getFullAddress(person) {
  // output: return the full `address` of `person` that includes `street` `unit` `city` `state` `zip`

  // declare a variable shortcut that is not the same name as parameter for person.address
  const address = person.address
  return `${address.street} ${address.unit}, ${address.city}, ${address.state}, ${address.zip}`
}

/**
 * getFlatObject()
 * ---------------------
 * Create a new object where all of the keys from the `names` and `address` objects are in the same object. You may leave the `numbers` array as is.
 * @param {Object} person 
 * @returns {Object}
 * 
 * EXAMPLE:
 *  getFlatObject(person);
 *  //> {
      first: "Rachel",
      middle: "Eleanor",
      last: "Rojas",
      street: "697 Pine Drive",
      unit: "2A",
      city: "Staten Island",
      state: "NY",
      zip: "10306",
      numbers: [7185550921, 7185558611],
    };
 */
function getFlatObject(person) {
  // output: create a new object with key value pair shown above

  // declare a variable `cacheObj` and assign it an empty obj
  let cacheObj = {}
  // create keys from `person` : `names` `address` `numbers` to `cacheObj`
  cacheObj.first = person.names.first
  cacheObj.middle = person.names.middle
  cacheObj.last = person.names.last
  cacheObj.street = person.address.street
  cacheObj.unit = person.address.unit
  cacheObj.city = person.address.city
  cacheObj.state = person.address.state
  cacheObj.zip = person.address.zip
  cacheObj.numbers = person.numbers
  
  // return cacheObj
  return cacheObj
} 

// Do not change the code below.
module.exports = {
  getFirstName,
  getLastName,
  getAddressStreet,
  getCountOfPhoneNumbers,
  getFirstPhoneNumber,
  getLastPhoneNumber,
  getFullName,
  getCityAndState,
  getFullAddress,
  getFlatObject,
};
