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
  let total = 0
  let discount = 1
// 10 years old or younger ==> 10% discount <== 65 years old or older
//  if they have a membership 20% discount

if(age <= 10 || age >= 65){
  discount -= .10 
} if (hasMembership){
  discount -= .20
}
total = priceInCents * discount

  return total
   
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
  let total = ""
  let current = 0
  let productPrice = 0
  for (let product of products){
    // multiply product by quantity and the price in cents
  productPrice = product.priceInCents * product.quantity 
  current += productPrice
  }
  total = current / 100
  total = "$" + total.toFixed(2)

  

  return total 
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
  let relationship = "Addresses are not near each other."
  
  
  if(address1.street === address2.street  && 
    address1.city === address2.city && 
    address1.state === address2.state &&
    address1.zip === address2.zip ){

      relationship = "Same building."
      }else if(
        address1.city === address2.city && 
        address1.state === address2.state &&
        address1.zip === address2.zip ){
    
          relationship = "Same city."

      } else if( 
        address1.state === address2.state){
    
          relationship = "Same state."
        
      }
  return relationship
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
  
   
  function gradeAssignments(assignments) {

    let newScore = (assignment.score.received/assignment.score.max)*100
      if(assignment.kind === "PASS-FAIL" && assignment.score.received === assignment.score.max){
        assignment.status = "PASSED"
      }else if(assignment.kind === "PASS-FAIL" && assignment.score.received !== assignment.score.max){
        assignment.status = "FAILED"
      }else if(assignment.kind === "PERCENTAGE" && newScore >= 80){
        assignment.status = `PASSED: ${newScore.toFixed(1)}%`
      }else if(assignment.kind === "PERCENTAGE" && newScore < 80){
        assignment.status = `FAILED: ${newScore.toFixed(1)}%`
      }else{
        assignment.status = `SCORE: ${assignment.score.received}/${assignment.score.max}`
      }
    }
    return assignments

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
  let array = []
  let notMemArray = []
  for(const person of people){
    if(person.hasMembership){
      array.push(person.name)
    } else {
      notMemArray.push(person.name)
    }
  }
  array.push(...notMemArray)
  return array
}

module.exports = {
  applyDiscount,
  getCartTotal,
  compareLocations,
  gradeAssignments,
  createLineOrder,
};
