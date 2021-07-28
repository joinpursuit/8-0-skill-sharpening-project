
//  For all of the functions below, assume each function takes the following `person` object as its input. While the values of the object may change, the structure of it will always be the same.

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
  return person.names.firstpe;
}

console.log(getFirstName(person));
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
  return person.names.last;
}
// console.log(getLastName(person))
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
  return person.address.street;
}
// console.log(getAddressStreet(person))
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
  return person.numbers[0];
}
// console.log(getFirstPhoneNumber(person));

/**
 * getLastPhoneNumber()
 * ---------------------
 * Return the first phone number associated with the person.
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
  return person.numbers.pop();
}
// console.log(getLastPhoneNumber(person));

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


let stringName = '';
function getFullName(person) {
  for (const property in person.names) {
    stringName += `${(person.names[property])} `;
  }
return stringName.trim();
}
// console.log(getFullName(person));

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
  return `${person.address.city}, ${person.address.state}`  
}
// console.log(getCityAndState(person));

/**
 * getFullAddress()
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
  return `${person.address.street} ${person.address.unit}, ${getCityAndState(person)}, ${person.address.zip}`
}
// console.log(getFullAddress(person));

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

    // from the object, grab the properties that are just key and value pairs
    //from the object, if the properties are key and value and the value is an object, i want to grab the key and pair values in that object
    // first i have to identify if an object is the value of a key - how do i find that out data type and how do i find the value
    // or i can be explicit and say if it's not name and address - this method works because the structure of the objects are the same
    //person.property = grabs the initial list of properties
    //grab the value 
//array.is array



function getFlatObject(person) {
  let flatObject = {};
  for (const property in person) {
    if (!Array.isArray(person[property])) {
    // console.log(property) - this loops and gives me names, address, street and phone
    // flatObject[property] = person.property; //added the 1st set of objects to the object
      for (const nameAddressProperties in person[property]) {
        flatObject[nameAddressProperties] = person[property][nameAddressProperties];  
      }
    } else { 
      flatObject[property] = person[property];
    }
  }
  return flatObject;
}


//create an object loop to loop through the initial properties
//then create another object loop to loop and grab the properties that are in the subsequent objects

console.log(getFlatObject(person));





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
