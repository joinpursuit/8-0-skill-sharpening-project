/**
 * shoutForLoop()
 * ---------------------
 * Takes in an array and returns a new array, adding "!" to each string.
 *
 * NOTE: You must use a `for` loop.
 *
 * @param {string[]} array
 * @returns {string[]}
 *
 * EXAMPLE:
 *  shoutForLoop([ "A", "Very", "Happy", "Array" ]);
 *  //> [ "A!", "Very!", "Happy!", "Array!" ];
 */
 function shoutForLoop(array) { 
  for (let i = 0; i < array.length; i++) {
    array[i]= `${array[i]}!` //we are asking to point at what we want the array to do -- the equal is going to assign it to the next element in array toadd the "!"
  } //YOU BETTER FORMAT IT SIS!
  return array
  }//END OF FUNCTION
  
  /**
   * shoutWhileLoop()
   * ---------------------
   * Takes in an array and returns a new array, adding "!" to each string.
   *
   * NOTE: You must use a `while` loop.
   *
   * @param {string[]} array
   * @returns {string[]}
   *
   * EXAMPLE:
   *  shoutWhileLoop([ "A", "Very", "Happy", "Array" ]);
   *  //> [ "A!", "Very!", "Happy!", "Array!" ];
   */
  function shoutWhileLoop(array) { // does not have a counter to iterate through the array!
    let i = 0  // initialize!
    while(i<array.length){ //loop through the array
    array[i] = `${array[i]}!` //we are asking to point at what we want the array to do -- the equal is going to assign it to the next element in array toadd the "!"
    i++ // increment
  } //YOU BETTER FORMAT IT SIS
   return array
  } // END
  
  
  /**
   * shoutForOfLoop()
   * ---------------------
   * Takes in an array and returns a new array, adding "!" to each string.
   *
   * NOTE: You must use a `for...of` loop.
   *
   * @param {string[]} array
   * @returns {string[]}
   *
   * EXAMPLE:
   *  shoutForOfLoop([ "A", "Very", "Happy", "Array" ]);
   *  //> [ "A!", "Very!", "Happy!", "Array!" ];
   */
  function shoutForOfLoop(array) {
    for (let fruit of array){
      array[array.indexOf(fruit)] = `${array[array.indexOf(fruit)]}!`//when you first enter the index -- find the FIRST element --every time it iterates that index is gonna change the index.
    }//above we must use the array to call the loop - we are calling
    return array
  }
  /**
   * sumArray()
   * ---------------------
   * Returns the sum of all values in the array.
   * @param {number[]} array
   * @returns {number}
   *
   * EXAMPLE:
   *  sumArray([ 10, 0, 10, 11 ]);
   *  //> 31
   */
  function sumArray(array) {
    let sum = 0 //what do you want to define
    for (let i = 0; i < array.length; i++) { //run this loop an iterate throught the array increment
      sum += array[i] //inside this loop what are we doing? getting the sum of each element equal to this array
    }//end for loop
    return sum //what are you giving back??
  } //end function
  
  /**
   * oddArray()
   * ---------------------
   * Returns a new array of only the odd numbers from the original array.
   * @param {number[]} array
   * @returns {array}
   *
   * EXAMPLE:
   *  oddArray([ 11, 15, 20, 22, 37 ]);
   *  //> [ 11, 15, 37 ]
   */
  function oddArray(array) {
    let oddArray = []
    console.log(array)//just checking to see if the array prints
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 !== 0)//as i iterate through this loop did we check each index to be divisible by 2? if not add into new array
        oddArray.push(array[i])// is this being pushed in to the odd array
    }
    console.log(oddArray) //checking to see the other array
    return oddArray
  }
  
  /**
   * evenArray()
   * ---------------------
   * Returns a new array of only the even numbers from the original array.
   * @param {number[]} array
   * @returns {array}
   *
   * EXAMPLE:
   *  evenArray([ 11, 15, 20, 22, 37 ]);
   *  //> [ 20, 22 ]
   */
  function evenArray(array) {
    let evenArray = []
    console.log(array)//just checking to see if the array prints
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0)//as i iterate through this loop did we check each index to be divisible by 2? if not add into new array
        evenArray.push(array[i])// is this being pushed in to the odd array
    }
    console.log(evenArray) //checking to see the other array
    return evenArray
  }
  
  /**
   * findSmallest()
   * ---------------------
   * Returns the smallest number from the array.
   * @param {number[]} array
   * @returns {number}
   *
   * EXAMPLE:
   *  findSmallest([ 0, 11, -2, 5 ]);
   *  //> -2
   */
  function findSmallest(array) {
    let smallest = array[0] //define for the iteration below
    for (let i = 1; i < array.length; i++) { //loop through
      if (array[i] < smallest) { //is asking if the array is less than the smallest
        smallest = array[i]// is going to represent the arrays index of smallest integer/element
      }
    }
    return smallest //its giving
  }
  /**
   * findLargest()
   * ---------------------
   * Returns the largest number from the array.
   * @param {number[]} array
   * @returns {number}
   *
   * EXAMPLE:
   *  findLargest([ 0, 11, -2, 5 ]);
   *  //> 11
   */
  function findLargest(array) {
    let largest = array[0] //define for the iteration below
    for (let i = 1; i < array.length; i++) { //loop through
      if (array[i] > largest) { //is asking if the array is greater than the largest
        largest = array[i]// is going to represent the arrays index of largest integer/element
      }
    } return largest // its giving
  }
  
  /**
   * findEqual()
   * ---------------------
   * Returns whether or not the `selected` value can be found in the array.
   * @param {number[]} array
   * @param {number} selected
   * @returns {boolean}
   *
   * EXAMPLE:
   *  findEqual([ 0, 11, -2, 5 ], 11);
   *  //> true
   *
   *  findEqual([ 0, 11, -2, 5 ], 9);
   *  //> false
   */
  function findEqual(array, selected) {
    let equal = false // we need to define the equal function to return only when found the TRUE value -- ya git me???
    for (let i= 0; i < array.length; i++) { //loop on over up and through this array
      if (array[i] === selected){ //is this the parameter selected from the index??
        equal = true // WHAT IS THE TRUTH! Give it back to us this is the condition within a condition of value setting.
      } // this is the condition that we are searching for to be true!!
    }
    return equal
  }//end findEqual
  
  /**
   * removeDuplicates()
   * ---------------------
   * Returns a new array like the original array except there are no duplicates. The numbers in the array should be ordered similarly.
   *
   * HINT: The `.includes()` method could help here.
   *
   * @param {number[]} array
   * @returns {number[]}
   *
   * EXAMPLE:
   *  removeDuplicates([ 1, 11, 2, 3, 4, 4, 2, 11, 9 ]);
   *  //> [ 1, 11, 2, 3, 4, 9 ]
   */
  
  function removeDuplicates(array) {
    let newArray = [] //define a new array to remove duplicates
    for (let i = 0; i < array.length; i++) { //iterate the loop through the already defined array
      if (!newArray.includes(array[i])) { // if this new array is NOT equal to an already "included" index
        newArray.push(array[i]) //then push the ones that are into a new empty array ---> newArray
      } // when it goes through it again it knows its already in the array
    }
    return newArray // its  giving
  } //array.from method will convert an object back into an array. the new set will then have the duplicate values (this is for the edgecase you dont want to use a loop)
  
  // Do not change any code below this line.
  module.exports = {
    shoutForLoop,
    shoutWhileLoop,
    shoutForOfLoop,
    sumArray,
    oddArray,
    evenArray,
    findSmallest,
    findLargest,
    findEqual,
    removeDuplicates,
  };
  