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
  //return if value a equals value b
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
  //find out what number is bigger, and save it to a variable
  let bigNumber = a > b ? a : b;
  //return bigNumber
  return bigNumber;
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
  let result = 0;
  //find out what number is bigger, and save it to a variable
  let bigNumber = a > b ? a : b;
  //if number is equal, let result be "tie", else let the result be the bigger number
  return a === b ? "tie" : bigNumber;
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
  //let our result be positive or negitive 
  let result = a > 0 ? "Positive" : "Negative"
  //check if number is Zero, if so return that it's zero, if not use the earlier result
  return a === 0 ? "Zero" : result;
  
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
  //create default greeting, set to english
  let greeting = "Hello World"
  //check if language is spanish
  if (language === "spanish"){
    //if it is, change greeting to spanish
    greeting = "Hola Mundo";
  } //check if language is german
  else if (language === "german"){
    //if it is, return greeting in german
    greeting = "Hallo Welt";
  }
  return greeting;
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
  //Create default greeting, set to english
  let greeting = "Hello World"
  //create switch to search through languages
  switch (language){
    //check if language is spanish
    case "spanish":
      //if it is, change greeting to spanish
      greeting = "Hola Mundo";
      //stop searching
      break;
      //check if language is german
    case "german":
      //if it is, change greeting to german
      greeting = "Hallo Welt";
      //stop searching
      break;
  }
  //return our greeting
  return greeting;
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
  //create default "letterGrade" value, set it at F
  let letterGrade = "F"
  //create an object containing our scoring system
  const gradeGuide = [["D", 60], ["C", 70], ["B", 80], ["A", 90]];
  //create loop to iterate through array
  for (let i = 0; i < gradeGuide.length; i++){
    //Create score variable for clarity
    let score = gradeGuide[i];
    //if grade is greater than or equal to the min score for letter grade
    if (grade >= score[1]){
      //upgrade letterGrade to that letter
      letterGrade = score[0];
    }
    //Keep looping upwards through the grades
  }
  //return our letter grade
  return letterGrade;
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
  //define default, let default be errormsg if no animals
  let result = animal && numberOfAnimals ? `${numberOfAnimals} ${animal}` : "No animals."
  //check if there's more than 1 animal
  if (numberOfAnimals > 1){
    //if there is, make the animal plural 
    result += `s`
  }
  return result; 
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
  //create default value to accumulate to, "Number()" returns NaN which is falsy, made a fix for 0.
  let result = Number(a) || a === 0 ? "" : "error";
  //check if number is Even or odd, our answer is our new result
  result += a % 2 === 0 ? "Even" : "Odd";
  //return our result, and returning error if our number input was falsy
  return result === "Even" || result === "Odd" ? result : "Error";
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
function evenOrOddWithTernary(a) { // was practicing ternary before getting to the question, pardon my copy paste
  //create default value to accumulate to, "Number()" returns NaN which is falsy, made a fix for 0.
  let result = Number(a) || a === 0 ? "" : "error";
  //check number is Even or odd, our answer is our new result
  result += a % 2 === 0 ? "Even" : "Odd";
  //return our result, and returning error our number input was falsy
  return result === "Even" || result === "Odd" ? result : "Error";
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
