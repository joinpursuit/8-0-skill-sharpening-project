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
  // //if a and b are equal
  // if(typeof a === typeof b && a === b){
  //   //return true
  //   return true;
  // }
  // //if not
  // else{
  //   //return false
  //   return false;
  // }
  //return a equals b becasue its basically the same as above
  return a === b;
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
  //if a is bigger than b
  if (a > b) {
    //return a
    return a;
  }
  //if b is bigger than a
  else if (b > a) {
    //return b
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
  //if a is bigger than b
  if (a > b) {
    //return a
    return a;
  }
  //if b is bigger than a
  else if (b > a) {
    //return b
    return b;
  }
  //if a and b are equal
  else if (a === b) {
    //return 'tie'
    return "tie";
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
  //if a is negative
  if (a < 0) {
    //return "Negative"
    return "Negative";
  }
  //if a is zero
  else if (a === 0) {
    //return "Zero"
    return "Zero";
  }
  //if a is positive
  else if (a > 0) {
    //return "Positive"
    return "Positive";
  }
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
  //if language is spanish
  if (language === "spanish") {
    //return "Hola Mundo"
    return "Hola Mundo";
  }
  //if language is german
  else if (language === "german") {
    //return "Hallo Welt"
    return "Hallo Welt";
  }
  //else
  else if (!language || language === "english") {
    //return "Hello World"
    return "Hello World";
  }
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
  //decalre a switch for language
  switch (language) {
    //case for 'spanish'
    case "spanish":
      //return "Hola Mundo"
      return "Hola Mundo";
    //case for 'german'
    case "german":
      //return "Hallo Welt"
      return "Hallo Welt";
    //case for 'english' and default
    default:
      //return "Hello World"
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
  //if grade is 90 >=
  if (grade >= 90) {
    //return "A"
    return "A";
  }
  //if grade is 80 >= && grade < 90
  else if (grade >= 80 && grade < 90) {
    //return "B"
    return "B";
  }
  //if grade is 70 >= && grade < 80
  else if (grade >= 70 && grade < 80) {
    //return "C"
    return "C";
  }
  //if grade is 60 >= && grade < 70
  else if (grade >= 60 && grade < 70) {
    //return "D"
    return "D";
  }
  //else
  else {
    //retrun "F"
    return "F";
  }
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
  //if numberOfAnimals is greater than 1
  if (numberOfAnimals > 1) {
    // return the number of animals, the animal, and s at the end
    return `${numberOfAnimals} ${animal}s`;
  }
  //else
  else {
    //return 1 animal
    return `1 ${animal}`;
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
  //if the number is even...
  if (a % 2 === 0) {
    //return even
    return "Even";
  }
  //if else...
  else {
    //return odd
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
