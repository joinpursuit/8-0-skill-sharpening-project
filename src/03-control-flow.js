/**
 * isEqual()
 * ---------------------
 * Takes in two values and returns if they are strictly equal or not
 * HINT: The prompt says STRICTLY equal. What does that mean in JavaScript?
 * @param {*} a
 * @param {*} b
 * @returns {boolean}
 *
 * EXAMPLE:
 *  isEqual(10, 10);
 *  //> true
 *
 *  isEqual(10, "10");
 *  //> false
 */
function isEqual(a, b) {
  //1. Default Value and Output
  let equal = false
  // If check for values in a AND b, this will give a false answer - because both can be ZERO (0, 0) or other falsy
  // if (!a && !b) {
    //return null
  // To check for undefined, strictly check for undefined
  if (a === undefined && b === undefined) {
    return null
  } else if (a === b) {
    equal = true
  }
  return equal
}

// console.log(isEqual(10, 10))
// console.log(isEqual(10, "10"))
// console.log(isEqual())

/**
 * findLarger()
 * ---------------------
 * Takes in two numbers and returns the larger number. The numbers are guaranteed to be unique (not equal to each other).
 * @param {number} a
 * @param {number} b
 * @returns {number}
 *
 * EXAMPLE:
 *  findLarger(19, 7);
 *  //> 19
 */
function findLarger(a, b) {
  //1. Default Value and Output
  if (a === undefined && b === undefined) {
    return null
  } else if (typeof a !== 'number' || typeof b !== 'number') {
    return "Error! Input two different numbers"
  } else if (a === b) {
    return "Error! Input two different numbers"
  } else if (a > b) {
    return a
  }
  return b
}

//console.log(findLarger(19, 7))

/**
 * findLargerOrTie()
 * ---------------------
 * Takes in two numbers and returns the larger number. Returns the string "tie" if both numbers are the same.
 * @param {number} a
 * @param {number} b
 * @returns {number|string}
 *
 * EXAMPLE:
 *  findLargerOrTie(0, 1);
 *  //> 1
 *
 *  findLargerOrTie(0, 0);
 *  //> "tie"
 */
function findLargerOrTie(a, b) {
  //1. Default Value and Output
  if (a === undefined && b === undefined) {
    return null
  } else if (typeof a !== 'number' || typeof b !== 'number') {
    return "Error! Input two numbers"
  } else if (a === b) {
    return "tie"
  } else if (a > b) {
    return a
  }
  return b
}

// console.log(findLargerOrTie(0, 1))
// console.log(findLargerOrTie(0, 0))

/**
 * positiveNegativeOrZero()
 * ---------------------
 * Takes in a number and returns whether that number is "Positive", "Negative", or "Zero".
 * HINT: Capitalization and spelling count!
 * @param {number} a
 * @returns {string}
 *
 * EXAMPLE:
 *  positiveNegativeOrZero(-1);
 *  //> "Negative"
 *
 *  positiveNegativeOrZero(0);
 *  //> "Zero"
 *
 *  positiveNegativeOrZero(1);
 *  //> "Positive"
 */
function positiveNegativeOrZero(a) {
  //1. Default Value and Output
  if (a === undefined) {
    return null
  } else if (typeof a !== 'number') {
    return "Error! Input a number"
  } else if (a === 0) {
    return "Zero"
  } else if (a < 0) {
    return "Negative"
  }  
  return "Positive"
}


// console.log(positiveNegativeOrZero(-1))
// console.log(positiveNegativeOrZero(0))
// console.log(positiveNegativeOrZero(1))

/**
 * aroundTheWorldGreeting()
 * ---------------------
 * Takes in a `language` (e.g "english", "spanish", or "german") and returns "Hello World" in that language. Must work for at least "english", "spanish", and "german". It should default to English if no argument is passed in.
 *
 * TRANSLATIONS: english -> "Hello World"
 *               spanish -> "Hola Mundo"
 *               german  -> "Hallo Welt"
 * HINT: The function expects lowercase names of languages.
 * @param {string} language
 * @returns {string}
 *
 * EXAMPLE:
 *  aroundTheWorldGreeting("spanish");
 *  //> "Hola Mundo"
 *
 *  aroundTheWorldGreeting();
 *  //> "Hello World"
 */
function aroundTheWorldGreeting(language) {
  // 1. Default Value and output
  if (language === 'spanish') {
    return "Hola Mundo"
  } else if (language === 'german') {
    return "Hallo Welt"
  }
  return "Hello World"
}


// console.log(aroundTheWorldGreeting("spanish"))
// console.log(aroundTheWorldGreeting())

/**
 * aroundTheWorldGreetingWithSwitch()
 * ---------------------
 * Takes in a language (e.g "english", "spanish", "german") and returns "Hello World" in that language. Must work for at least "english", "spanish", and "german". It should default to English if no argument is passed in.
 *
 * TRANSLATIONS: English -> "Hello World"
 *               Spanish -> "Hola Mundo"
 *               German  -> "Hallo Welt"
 *
 * NOTE: You must use a `switch` statement in solving this.
 *
 * @param {string} language
 * @returns {string}
 *
 * EXAMPLE:
 *  aroundTheWorldGreetingWithSwitch("german");
 *  //> "Hallo Welt"
 *
 *  aroundTheWorldGreetingWithSwitch();
 *  //> "Hello World"
 */
function aroundTheWorldGreetingWithSwitch(language) {
  //switch works like lookup and it makes having one value checked short and simple
  // use it when you're having these kind of conditionals to use less brackets, etc.
  switch (language) {
    case 'spanish':
      return "Hola Mundo"
      // only use break if you can't use return statement. 
      // you'll still need it in console.logging stuff
      // you won't need it when using for loops
   
    case 'german':
      return "Hallo Welt"
      
    default:
      return "Hello World"
  }
}

// console.log(aroundTheWorldGreetingWithSwitch("german"))
// console.log(aroundTheWorldGreetingWithSwitch())

/**
 * calculateLetterGrade()
 * ---------------------
 * Takes in a number and returns the letter grade corresponding to that number. Letter grades consist of "A", "B", "C", "D", or "F".
 *
 * SCORING: 90 and above is an A
 *          80 and above is a B
 *          70 and above is a C
 *          60 and above is a D
 *          Anything lower than 60 is an F
 * @param {number} grade
 * @returns {string}
 *
 * EXAMPLE:
 *  calculateLetterGrade(99);
 *  //> "A"
 */
function calculateLetterGrade(grade) {
  // 1. Default Value and output
  if (grade === undefined) {
    return null
  } else if (typeof grade !== 'number') {
    return "Error! Input a number"
  } else if (grade >= 90) {
    return "A"
  } else if (grade >= 80) {
    return "B"
  } else if (grade >= 70) {
    return "C"
  } else if (grade >= 60) {
    return "D"
  } 
  return "F"
}


//console.log(calculateLetterGrade(99))

/**
 * animalCounts()
 * ---------------------
 * Returns the count of animals, properly pluralizing the animal if there is more than one.
 * The animal is guaranteed to be one you can pluralize by adding `s`. (NO geese, fish, deer, oxen, etc.)
 * @param {string} animal
 * @param {number} numberOfAnimals
 * @returns {string}
 *
 * EXAMPLE:
 *  animalCounts("dog", 2);
 *  //> "2 dogs"
 *
 *  animalCounts("pig", 1);
 *  //> "1 pig"
 */
function animalCounts(animal, numberOfAnimals) {
  // 1. Default Value and output
  if (animal === undefined && numberOfAnimals === undefined) {
    return null
  } else if (typeof animal !== 'string' || typeof numberOfAnimals !== 'number') {
    return "Error! Input a string and then a number"
  } else if (numberOfAnimals > 1) {
    return numberOfAnimals + " " + animal + "s"
  } 
  return numberOfAnimals + " " + animal
}

// console.log(animalCounts("dog", 2))
// console.log(animalCounts("pig", 1))

/**
 * evenOrOdd()
 * ---------------------
 * Takes in a number and returns whether that number is "Even" or "Odd".
 * HINT: How is this similar to isOdd() or isEven() from part 2? Using modulo and boolean to check results
 * @param {number} a
 * @returns {string}
 *
 * EXAMPLE:
 *  evenOrOdd(11);
 *  //> "Odd"
 * 
 *  evenOrOdd(48);
 *  //> "Even"
 */
function evenOrOdd(a) {
  //1. Default Value and Output 
  if (a === undefined) {
    return null
  } else if (a % 2 === 0) {
    return "Even"
  }
  return "Odd"
}

// console.log(evenOrOdd(11))
// console.log(evenOrOdd(48))

/**
 * evenOrOddWithTernary()
 * ---------------------
 * Takes in a number and returns whether that number is even or odd.
 *
 * NOTE: You must use a ternary to solve this.
 *
 * @param {number} a
 * @returns {string}
 *
 * EXAMPLE:
 *  evenOrOddWithTernary(8);
 *  //> "Even"
 */
function evenOrOddWithTernary(a) {
  
  return (a % 2 === 0) ? "Even" : "Odd" 
}


//console.log(evenOrOddWithTernary(9))

// Do not change any code below this line.
module.exports = {
  isEqual,
  findLarger,
  findLargerOrTie,
  positiveNegativeOrZero,
  aroundTheWorldGreeting,
  aroundTheWorldGreetingWithSwitch,
  calculateLetterGrade,
  animalCounts,
  evenOrOdd,
  evenOrOddWithTernary,
};
