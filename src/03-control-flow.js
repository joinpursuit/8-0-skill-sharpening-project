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
  //compare the values strictly
  return (a === b);
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
  //check if a is bigger
  if (a > b){
    return a;
  } else {
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
    //check if a is bigger
    if (a > b){
      return a;
      //check if b is bigger
    } else if (b > a){
      return b;
      //ties
    } else {
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
  //check if less than 0
  if (a < 0){
    return "Negative";
    //check if more than 0
  } else if (a > 0){
    return "Positive";
    //equals 0
  } else {
    return "Zero";
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
  //check if spanish
  if (language === "spanish"){
    return "Hola Mundo";
    //check if german
  } else if (language === "german"){
    return "Hallo Welt";
    //if anything else do english
  } else {
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
    //switch statment
    switch (language){
      //check if spanish
      case "spanish":
        return "Hola Mundo";
        break;
      //check if german
      case "german":
        return "Hallo Welt";
        break;
      //if anything else do english
      default:
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
  //check if grade is 90 or more
  if (grade >= 90){
    //return A for letter grade
    return "A";
    //check if grade is 80 or more
  } else if (grade >= 80){
    //return B for letter grade
    return "B";
    //check if grade is 70 or more
  } else if (grade >= 70){
    //return C for letter grade
    return "C";
    //check if grade is 60 or more
  } else if (grade >= 60){
    //return D for letter grade
    return "D";
    //anything else gets F
  } else {
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
  //check if multiple animals
  if (numberOfAnimals > 1){
    //pluralize the message
    return `${numberOfAnimals} ${animal}s`;
    //single animal message
  } else {
    return `${numberOfAnimals} ${animal}`;
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
  //check if theres no remainder
  if (a % 2 === 0){
    //even number
    return "Even";
  } else {
    //odd number
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
  //check even or odd and return that
  return (a % 2 === 0 ? "Even" : "Odd");
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
