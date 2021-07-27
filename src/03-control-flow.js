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
  // RETURN BOOLEAN if two PARAMETRs are strictly equal
  // can be done w/ two lines of code, using 
  // === --> strictly equal to
  // == ---> loosely equal to
  return (a === b);
}

/**
 * findLarger()
 * ---------------------
 * Takes in two numbers and returns the larger number. 
 * The numbers are guaranteed to be unique (not equal to each other).
 * @param {number} a
 * @param {number} b
 * @returns {number}
 *
 * EXAMPLE:
 *  findLarger(19, 7);
 *  //> 19
 */
function findLarger(a, b) {
  // IF a > b
  if (a > b) {
    // RETURNs the larger parameter of out the two
    return a;
  // else
  } else {
    // RETURN the other parameter
    return b;
  }
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
  // IF a and b are strictly equal
  if (a === b) {
    // return 'tie'
    return 'tie'
    // ELSE IF a > b
  } else if (a > b) {
    // return a
    return a;
  // ELSE 
  } else {
    // return b
    return b;
  }
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
  // let result = "";
  if (a >= 1) {
    return "Positive";
  } else if (a < 0) {
    return "Negative";
  } else if (a === 0) {
    return "Zero";
  }
  // return result;
}

/**
 * aroundTheWorldGreeting()
 * ---------------------
 * Takes in a `language` (e.g "english", "spanish", or "german") and 
 * returns "Hello World" in that language. Must work for at least "english", 
 * "spanish", and "german". It should default to English if no argument is passed in.
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
  if (language === 'spanish') {
    return "Hola Mundo";
  } else if (language === 'german') {
    return "Hallo Welt";
  } else {
    return "Hello World";
  }
}

/**
 * aroundTheWorldGreetingWithSwitch()
 * ---------------------
 * Takes in a language (e.g "english", "spanish", "german") and 
 * returns "Hello World" in that language. Must work for at least "english", 
 * "spanish", and "german". It should default to English if no argument is passed in.
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
  switch(language) {
    case ('spanish'):
      return 'Hola Mundo';
    case ('german'):
      return 'Hallo Welt';
    default: 
      return 'Hello World';
  }
}

/**
 * calculateLetterGrade()
 * ---------------------
 * Takes in a number and returns the letter grade corresponding to that number. 
 * Letter grades consist of "A", "B", "C", "D", or "F".
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
  // default value is F, when grade is lower than 60
  // declare letterGrade and assign it the default value "F"
  let letterGrade = "F";
  // IF grade is greater than or equal to 90
  if (grade >= 90) {
    // assign a to letterGrade
    letterGrade = "A";
    // ELSE IF grade is greater than or equal to 80
  } else if (grade >= 80) {
    // assign b to letterGrade
    letterGrade = "B";
    // ELSE IF grade is greater than or equal to 70
  } else if (grade >= 70) {
    // assign c to letterGrade
    letterGrade = "C";
    // ELSE IF grade is greater than or equal to 60
  } else if (grade >= 60) {
    // assign d to letterGrade
    letterGrade = "D";
  }
  // RETURN modified default value
  return letterGrade;
}

/**
 * animalCounts()
 * ---------------------
 * Returns the count of animals, properly pluralizing the animal if there is more than one.
 * The animal is guaranteed to be one you can pluralize by adding `s`. 
 * (NO geese, fish, deer, oxen, etc.)
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
  // IF numberOfAnimals is equal to 1
  if (numberOfAnimals === 1) {
    // RETURN string numberOfAnimals and animal
    return `${numberOfAnimals} ${animal}`;
    // ELSE IF numberOfAnimals is greaters than 1
  } else if (numberOfAnimals > 1) {
    // RETURN string numberOfAnimals and (pluralize)animal
    return `${numberOfAnimals} ${animal}s`;
  }
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
  // IF a is divisible by 2 with no remainder
  if (a % 2 === 0) {
    // RETURN even
    return "Even";
  // ELSE
  } else {
    // RETURN odd
    return "Odd";
  }
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
  return a % 2 === 0 ? "Even" : "Odd";
}

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
