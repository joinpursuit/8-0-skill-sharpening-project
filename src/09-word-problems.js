/**
 * applyDiscount()
 * ---------------------
 * A local movie theater has a few different ticket discounts. 
 * If the attendee is 10 years old or younger, or 65 years old or older, they receive a 10% discount. 
 * If the attendee is viewing the movie with a member, they receive a 20% discount. 
 * If both situations apply, they receive a 30% discount.
 *
 * Write an algorithm that will determine the price of a ticket 
 * based on the `priceInCents` of the ticket, 
 * the `age` of the attendee, 
 * and the membership status (i.e. `hasMembership`).
 * @param {number} priceInCents - The price of the ticket, in cents.
 * @param {number} age - The age of the attendee.
 * @param {boolean} hasMembership - Whether or not the person has access to a membership.
 * @returns {number} The total amount, after all discounts have been applied.
 *
 * EXAMPLE:
 *  applyDiscount(1000, 23, false);
 *  //> 1000
 *
 *  applyDiscount(1000, 66, false);
 *  //> 900
 *
 *  applyDiscount(1000, 9, true);
 *  //> 700
 */
function applyDiscount(priceInCents, age, hasMembership) {
  // output: return the total `price of ticket` after all discounts have been applied

  // problem: How do I apply the discount if both discount situation apply for the attendee 
  // solution: 1. conditional statements

  // declare a variable `discount` and assign it 0
  let discount = 0;
  // if the attendee `age` is 10 years old or younger or 65 years old or older
  if (age <= 10 || age >= 65) {
    // apply a 10 percent discount 
    discount += .10;
  }
  // if the attendee attends the movie with a member 
  if (hasMembership) {
    // apply a 20 percent discount
    discount += .20;
  }
  // declare a variable `totalPriceInDollars` and apply the `discount` to `priceInCents`
  const totalPriceInDollars = priceInCents * (1 - discount);

  // return totalPriceInDollars
  return totalPriceInDollars;
}

/**
 * getCartTotal()
 * ---------------------
 * An online store allows for customers to add products to their cart. 
 * Customers can add multiples of each product to the cart.
 * 
 * Write an algorithm that will determine the total amount of all items in the cart. 
 * Make sure to multiply the `priceInCents` times the `quantity` to get the full cost of each product.
 * @param {Object[]} products - An array of products.
 * @param {number} products[].priceInCents - The price of the product, in cents.
 * @param {number} products[].quantity - The number of products being bought.
 * @returns {string} A formatted representation of the total, rounded to two decimal places.
 * 
 * EXAMPLE:
 *  const cart = [
      { name: "T-Shirt", priceInCents: 1200, quantity: 1 },
      { name: "Socks", priceInCents: 900, quantity: 2 },
    ];
    getCartTotal(cart);
 *  //> "$30.00"
 */
function getCartTotal(products) {
  // output: return a string number rounded to two decimals places --> toFixed()

  // declare a variable called sum and assign it 0
  let sum = 0;
  // loop through array of objects `products
  for (let i of products) {
    // reassign the sum with the product of `products[].priceInCents` and `products[].quantity` 
    sum += (i.priceInCents / 100) * i.quantity;
  }
  // return a formatted string number using toFixed()
  return '$' + sum.toFixed(2);
}

/**
 * compareLocations()
 * ---------------------
 * A shipping company is looking to make its deliveries more efficient by comparing the destinations of multiple deliveries. 
 * If the locations are similar, the packages may be able to be bundled together.
 * 
 * Write an algorithm that takes in two objects of similar shape, each object representing an address. 
 * Then, return a string that describes the relationship between those two addresses.
 * 
 * - If the street, city, state, and zip for both addresses are the same, return the string "Same building."
 * - If the city, state, and zip are the same, return the string "Same city."
 * - If just the state is the same, return the string "Same state."
 * - If none of those matches occur, return the string "Addresses are not near each other."
 * 
 * Keep in mind that an address could have the same street address or the same city but be in a different state. 
 * 
 * @param {Object} address1 - An address object.
 * @param {string} address1.street
 * @param {string} address1.city
 * @param {string} address1.state
 * @param {string} address1.zip
 * @param {Object} address2 - An address object. In the same shape as `address1`, above.
 * @returns {string} A string that describes the relationship between the two addresses.
 * 
 * EXAMPLE:
 *  const address1 = {
      street: "8785 Trenton St.",
      city: "Melbourne",
      state: "FL",
      zip: "32904",
    };
    const address2 = {
      street: "2 Lees Creek Ave.",
      city: "Melbourne",
      state: "FL",
      zip: "32904",
    };
    compareLocations(address1, address2);
    //> "Same city."
 */
function compareLocations(address1, address2) {
  // output: return "Same building.", "Same city." "Same state." or "Addresses are not near each other."

  // problem: How do we compare two objects?
  // solution: access properties and use stricly equal to operator
  
  // If the street, city, state, and zip for both addresses are the same, 
  if (address1.street === address2.street && address1.city === address2.city && address1.state === address2.state && address1.zip === address2.zip) {
    // return the string "Same building."
    return "Same building.";
  }
  // If the city, state, and zip are the same, 
  if (address1.city === address2.city && address1.state === address2.state && address1.zip === address2.zip) {
    // return the string "Same city."
    return "Same city.";
  }
  // If just the state is the same, 
  if (address1.state === address2.state) {
    // return the string "Same state."
    return "Same state.";
  }

  // otherwise return the string "Addresses are not near each other."
  return "Addresses are not near each other.";
}

/**
 * gradeAssignments()
 * ---------------------
 * An online learning management system needs a way to quickly add the current status to a list of assignments. 
 * Depending on the `kind` of assignment, different statuses should be applied.
 *
 * Write an algorithm that adds a key of `status` to each object in an array of objects. 
 * Each object represents a single assignment submitted by a student.
 *
 * - If the assignment has a `kind` of `"PASS-FAIL"`, set the `status` value to `"PASSED"` if the `score.received` equals the `score.max`. Otherwise, set that `status` to be `"FAILED"`.
 * - If the assignment has a `kind` of `"PERCENTAGE"`, set the `status` value to be `"PASSED: <percentage>"` if the student scored at least 80.0%. The `<percentage>` should be set to one decimal place. If the student scored less than 80.0%, set the status to `"FAILED: <percentage>"`.
 * - If the assignment has any other `kind` than the two above, set the `status` value to equal `"SCORE: <received>/<max>"`, where `<received>` is the `score.received` value and `<max>` is the `score.max` value.
 *
 * Then, return the overall array with all modified assignments.
 *
 * @param {Object[]} assignments - An array of assignment objects.
 * @param {string} assignments[].kind - The type of assignment. Could be "PASS-FAIL", "PERCENTAGE", or another value.
 * @param {Object} assignments[].score - An object that contains the scores of the assignment.
 * @param {number} assignments[].score.received - The score received on the assignment.
 * @param {number} assignments[].score.max - The maximum score that could be received on the assignment.
 * @returns {Object[]} The original array of assignment objects, with a new key of `status` added to each object.
 * 
 * EXAMPLE:
 *  const assignments = [
      { kind: "PASS-FAIL", score: { received: 4, max: 4 } },
      { kind: "PERCENTAGE", score: { received: 8, max: 10 } },
      { kind: "ESSAY", score: { received: 4, max: 5 } },
    ];
    gradeAssignments(assignments);
    //> [
    //>   { 
    //>     kind: "PASS-FAIL",
    //>     score: { received: 4, max: 4 },
    //>     status: "PASSED",
    //>   },
    //>   { 
    //>     kind: "PERCENTAGE",
    //>     score: { received: 7, max: 9 },
    //>     status: "FAILED: 77.8%",
    //>   },
    //>   { 
    //>     kind: "ESSAY",
    //>     score: { received: 4, max: 5 },
    //>     status: "SCORE: 4/5",
    //>   },
    //> ];
 */
function gradeAssignments(assignments) {
  // output: return the `assignments` object with a new key of `status` added to each obj

  // iterate through `assigments` array of objects
  for (let i of assignments) {
    // If the assignment has a `kind` of `"PASS-FAIL"`and `score.received` equals the `score.max`.
    if (i.kind === "PASS-FAIL" && i.score.received === i.score.max) {
      // set the `status` value to `"PASSED"`  
      i.status = "PASSED";
      // Otherwise, if the student `score.received` does not strictly equal to equal the `score.max`. set that `status` to be `"FAILED"`.
    } else if (i.kind === "PASS-FAIL" && i.score.received !== i.score.max) {
      i.status = "FAILED";
    }
    const percentScored = (i.score.received / i.score.max) * 100;
    // If the assignment has a `kind` of `"PERCENTAGE"`, and the student scored at least 80.0%.  
    if (i.kind === "PERCENTAGE" && percentScored >= 80.0) {
      // set the `status` value to be `"PASSED: <percentage>" the `<percentage>` should be set to one decimal place.
      i.status = `PASSED: ${percentScored.toFixed(1)}%`;
      // otherwise if the student scored less than 80.0%, set the status to `"FAILED: <percentage>"`.
    } else if (i.kind === "PERCENTAGE" && percentScored < 80.0) {
      i.status = `FAILED: ${percentScored.toFixed(1)}%`;
    }

    // If the assignment has any other `kind` than the two above, 
    if (i.kind !== "PASS-FAIL" && i.kind !== "PERCENTAGE") {
      // set the `status` value to equal `"SCORE: <received>/<max>"`, where `<received>` is the `score.received` value and `<max>` is the `score.max` value.
      i.status = `SCORE: ${i.score.received}/${i.score.max}`;
    }

  }
  // return assignments 
  return assignments;
}

/**
 * createLineOrder()
 * ---------------------
 * An airline wants to build an application that improves the boarding process for its customers. 
 * They want to have customers sign up in order of arrival, but prioritize those customers who have a membership.
 * 
 * Build an algorithm that takes in an array of objects, where each object represents a person. 
 * The order of the array is important; the person at index `0` arrived first while the person at index `1` arrived afterwards.
 * 
 * Return an array that includes only the names of each person, but reordered to account for whether or not each person has a membership. 
 * Everyone who has a membership should be at the front of the line in the same order they arrived. Everyone without a membership should be in the same order they arrived but after those with a membership.
 * @param {Object[]} people - An array of people objects.
 * @param {string} people[].name - The name of the person.
 * @param {boolean} people[].hasMembership - Whether or not the person has a membership.
 * @returns {string[]} An array of names, in order depending on the person's order in the original array and the person's priority.
 * 
 * EXAMPLE:
 *  const people = [
      { name: "Wade Carson", hasMembership: false },
      { name: "Ray Anderson", hasMembership: true },
      { name: "America Marsh", hasMembership: true },
      { name: "Patience Patel", hasMembership: false },
    ];
    createLineOrder(people);
    //> [ "Ray Anderson", "America Marsh", "Wade Carson", "Patience Patel" ]
 */
function createLineOrder(people) {
  // output: return an array of strings depending on order in `people` array of obj and the person's priority

  // declare a variable `membership` and assign it an empty arr
  let membership = [];
  // declare a variable `notAMember` and assign it an empty arr
  let notAMember = [];
  // loop through people which is an array of objs
  for (let i = 0; i < people.length; i++) {
    const person = people[i];
    // check for hasMembership
    if (person.hasMembership) {
      // push `name` to membership arr
      membership.push(person.name);
      // check for hasMembership false
    } else {
      // pushing `name` to `notAMember`
      notAMember.push(person.name);
    } 
  }
  // return cacheArr
  return membership.concat(notAMember);
}

module.exports = {
  applyDiscount,
  getCartTotal,
  compareLocations,
  gradeAssignments,
  createLineOrder,
};
