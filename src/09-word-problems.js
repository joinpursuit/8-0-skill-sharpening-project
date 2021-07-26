/**
 * applyDiscount()
 * ---------------------
 * A local movie theater has a few different ticket discounts. If the attendee is 10 years old or younger, or 65 years old or older, they receive a 10% discount. If the attendee is viewing the movie with a member, they receive a 20% discount. If both situations apply, they receive a 30% discount.
 *
 * Write an algorithm that will determine the price of a ticket based on the `priceInCents` of the ticket, the `age` of the attendee, and the membership status (i.e. `hasMembership`).
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
  //declate variable with our default value, 0
  let discountedPrice = 0;
  //declare discount variable to accumulate our discounts to
  let discount = 0;
  //check if their age is less than 10 or more than 65
  //if they are, add a 10% discount, if not, add no discount
  age <= 10 || age >= 65 ? discount += .10 : discount += 0;
  //check if the person has membership
  //if they do, add 20% discount, if not, add no discount
  hasMembership ? discount += .20 : discount += 0;
  //declare our result to be their ticket cost times (1 - their discount)
  discountedPrice = priceInCents * (1 - discount); 
  //return discountedPrice
  return discountedPrice;
}

/**
 * getCartTotal()
 * ---------------------
 * An online store allows for customers to add products to their cart. Customers can add multiples of each product to the cart.
 * 
 * Write an algorithm that will determine the total amount of all items in the cart. Make sure to multiply the `priceInCents` times the `quantity` to get the full cost of each product.
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
  //declare variable to accumulate to
  let totalInCents = 0;
  //declare loop to iterate through the products;
  for (let item of products){
    //in loop, add each product times it's quanity to the total variable
    totalInCents += (item.priceInCents * item.quantity);
  }
  //after looping, convert our cost from cents to dollars
  let totalInDollars = (totalInCents / 100).toFixed(2);
  //return an formatted string using totalInDollars
  return `$${totalInDollars}`
}

/**
 * compareLocations()
 * ---------------------
 * A shipping company is looking to make its deliveries more efficient by comparing the destinations of multiple deliveries. If the locations are similar, the packages may be able to be bundled together.
 * 
 * Write an algorithm that takes in two objects of similar shape, each object representing an address. Then, return a string that describes the relationship between those two addresses.
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
  //declare default result, set to "Addresses are not near each other"
  let result = "Addresses are not near each other."
  //create values for streetcheck, city check, state check, and zip check, all false
  let streetCheck = false;
  let cityCheck = false;
  let stateCheck = false;
  let zipCheck = false;
  //check if each key value pair is equal to eachother
  //if they are, turn their respective variable true, if not, then false
  address1.street === address2.street ? streetCheck = true : Check = false;
  address1.city === address2.city ? cityCheck = true : Check = false;
  address1.state === address2.state ? stateCheck = true : Check = false;
  address1.zip === address2.zip ? zipCheck = true : Check = false;
  //Check if all our checks match
  if (streetCheck && cityCheck && stateCheck && zipCheck){
    //if they do, result = Same building
    result = "Same building.";
  }
  //Check if if city, state, and zip match 
  else if (cityCheck && stateCheck && zipCheck){
    //if they do, result = same city
    result = "Same city.";
  }
  //Check if state matches,
  else if (stateCheck){
    //if it does, result = same state
    result = "Same state.";
  }
  //return result;
  return result;
}

/**
 * gradeAssignments()
 * ---------------------
 * An online learning management system needs a way to quickly add the current status to a list of assignments. Depending on the `kind` of assignment, different statuses should be applied.
 *
 * Write an algorithm that adds a key of `status` to each object in an array of objects. Each object represents a single assignment submitted by a student.
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
  //declare result variable as our assignments parameter
  const result = assignments;
  //create a loop to iterate through our array
  for (const test of result){
    //in loop, check if "kind" is pass-fail
    if (test.kind === "PASS-FAIL"){
      //if it is, check if score recieved = score max
      //if it is, set status to passed, else, set status to failed
      test.status = test.score.received === test.score.max ? "PASSED" : "FAILED"
    }
    //check if kind is percentage
    else if (test.kind === "PERCENTAGE"){
      //create percentage variable for clarity
      let percentage = test.score.received / test.score.max
      //if it is, set status to passed it score is above 80%, else set status to failed
      test.status = percentage >= .8 ? `PASSED: ${(percentage * 100).toFixed(1)}%` : `FAILED: ${(percentage * 100).toFixed(1)}%`
    }
    //check if kind isn't pass-fail or percentage, set status to "SCORE: recieved / max"
    else if (test.kind !== "PASS-FAIL" && test.kind !== "PERCENTAGE"){
      test.status = `SCORE: ${test.score.received}/${test.score.max}`
    }
  }
  //after loop return result
  return result;
}

/**
 * createLineOrder()
 * ---------------------
 * An airline wants to build an application that improves the boarding process for its customers. They want to have customers sign up in order of arrival, but prioritize those customers who have a membership.
 * 
 * Build an algorithm that takes in an array of objects, where each object represents a person. The order of the array is important; the person at index `0` arrived first while the person at index `1` arrived afterwards.
 * 
 * Return an array that includes only the names of each person, but reordered to account for whether or not each person has a membership. Everyone who has a membership should be at the front of the line in the same order they arrived. Everyone without a membership should be in the same order they arrived but after those with a membership.
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
  //declare a variable to accumulate to, set to empty array
  const result = [];
  //create a loop to iterate through our array
  for (const member of people){
    //in loop, check if the person has a membership
    if (member.hasMembership){
      //if they do, push JUST THEIR NAME into the result array
      result.push(member.name);
    }
  }
  //after looping, declare a second loop for our un-membered guest
  for (nonMember of people){
    //in loop, check if the person DOESN'T have a membership
    if (!nonMember.hasMembership){
      //if they don't, add JUST THEIR NAME to our result array
      result.push(nonMember.name);
    }
  }
  //after looping, return result
  return result;
}

module.exports = {
  applyDiscount,
  getCartTotal,
  compareLocations,
  gradeAssignments,
  createLineOrder,
};
