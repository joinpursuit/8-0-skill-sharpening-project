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
  // input: a and b are data types
  // output: return true if a and b are strictly equal to one another 

  // problem: strictly equal to 
  // solution: ===

  // // if a is strictly equal to b 
  // if (a === b) {
  //    // return true
  //    return true
  // }

  // // otherwise return false
  // return false

  return a === b
}

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
  // input: a and b are numbers
  // output: return the largest number, a and b will never be the same number

  // problem: How can I find the largest number
  // solution: 1. > greater than arthmetic operator

  // if b is greater than a
  if (b > a) {

    // return b
    return b
  }

  // otherwise return a 
  return a
}

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
  // input: a and b are numbers
  // output: return the largest number or return a string `tie` if both numbers are the same

  // edge case: if both the numbers are the same 
  if (a === b) {

    // return `tie`
    return `tie`
  }

  // // if b is greater than a 
  // if (b > a) {

  //   // return b
  //   return b
  // }

  // // otherwise return a ...if a is greater than b
  // return a

  return findLarger(a, b)
}

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
  // input: a is a number
  // output: return a string if the number is `Positive`, `Negative` or `Zero`

  // problem: How do I check if a number is `Positive`, `Negative` or `Zero`
  // solution: 1. arthmetic operators > 0, < 0 or === 0
  
  // if the the number is greater than 0
  if (a > 0) {
    // return `Positive`
    return `Positive`
  }
  // if the number is less than zero
  if (a < 0) {
    // return `Negative`
    return `Negative`
  }
  
  // otherwise return `Zero`
  return `Zero`
}

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
  // input: language is a string
  // output: return `Hello World` if the language is english, return `Hola Mundo` if the language is spanish, otherwise return `Hallo Welt`

  // problem: what is the default value for the last return? 
  // solution: english

  // if the language is german
  if (language === `german`) {
    // return Hello World`
    return `Hallo Welt`
    // if the language is spanish
  } else if (language === `spanish`) {
    // return `Hola Mundo`
    return `Hola Mundo`
  }
  
  // otherwise return `Hello World`
  return `Hello World`
}

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
  // input: language is a string `english`, `spanish` or `german`
  // output: return  "Hallo Welt" if language is German or return "Hola Mundo" if Spanish otherwise return "Hello World"

  // problem: How do I use a switch statement?
  // solution: 1. switch statement syntax

  // declare switch + space + place the variable inside () and open curly braces
  switch (language) {
    // declare keyword case with + space + `spanish` + colon
    case `spanish`:
        // return "Hola Mundo"
        return "Hola Mundo"
    // declare keyword case with + space + `german` + colon
    case `german`:
        // return "Hallo Welt"
        return "Hallo Welt"
    // declare keyword default + colon
    default: 
        // return "Hello World"
        return "Hello World";
  }
}

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
  // input: grade is a number greater than 90 or less than 60
  // output: return the corresponding letter grade for that number

  // if your grade is greater than or equal to 90
  if (grade >= 90) {
    // return `A`
    return `A`
  }
  // if your grade is greater than or equal to 80 and less than 90
  if (grade >= 80 && grade < 90) {
    // return `B`
    return `B`
  }
  // if your grade is greater than or equal to 70 and less than 80
  if (grade >= 70 && grade < 80) {
    // return `C`
    return `C`
  }
  // if your grade is greater than or equal to 60 and less than 70
  if (grade >= 60 && grade < 70)  {
    // return `D`
    return `D`
  }
  // otherwise return `F`
  return `F`
}

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
  // input: animal is a `string` and numberOfAnimals is a number
  // output: return a string of the count and the singular or plural name of the animal

  // if the count is greater than 1
  if (numberOfAnimals > 1) {
    // return `2 animal`
    return `${numberOfAnimals} ${animal}s`
  }
  
  // otherwise return `1 animal + s`
  return `1 ${animal}`
}

/**
 * evenOrOdd()
 * ---------------------
 * Takes in a number and returns whether that number is "Even" or "Odd".
 * HINT: How is this similar to isOdd() or isEven() from part 2?
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
  // input: a is a number
  // output: return `Even` if the number is even otherwise return odd

  // if the number is even 
  if (a % 2 === 0) {
    // return `Even`
    return `Even`
  }

  // otherwise return `Odd`
  return `Odd`
}

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
  
  return a % 2 === 0 ? `Even` :  `Odd`
}
// input: a is a number
  // output: return `Even` if a is even otherwise return `Odd`

  // problem: How do we declare a ternary?
  // solution: return variableName ? execute this code if true : execute this code if false

  // return a is even ? execute this code if true : execute this code if false

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
