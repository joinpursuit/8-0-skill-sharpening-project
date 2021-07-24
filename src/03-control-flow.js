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
if(a === b){
  return true;
}
return false;
}

 console.log(isEqual(-1, "1"))
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
let largeNum = a;
if(largeNum < b){
  largeNum = b;
}
return largeNum
}


console.log(findLarger(-2, -1))
/**
 * findLargerOrTie()
 * ---------------------
 * Takes in two numbers and returns the larger number. 
 * Returns the string "tie" if both numbers are the same.
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
  let largeOrTie = a;
  if(largeOrTie < b){
    largeOrTie = b;

  } else if(largeOrTie === b){
    largeOrTie = `"tie"`
  }
  return largeOrTie
  }
 
console.log(findLargerOrTie(2, -1))
/**
 * positiveNegativeOrZero()
 * ---------------------
 * Takes in a number and returns whether that number is "Positive", 
 * "Negative", or "Zero".
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
   if(typeof a !== 'number' ){
     return `'\"${a}", not a number'`
   }
let thing = 'Zero';
if(a > 0){

return 'Positive'
} else if(a < 0){
  return 'Negative'
}
return thing;
}
 console.log(positiveNegativeOrZero(0))
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
if(language === undefined){
  return "Hello World";
}
  let languageTolowerCase = language.toLowerCase();  
  let languageGreeting = '';
  

if(languageTolowerCase === 'english'){
  languageGreeting += "Hello World"; 
}
else if(languageTolowerCase === 'spanish'){
  languageGreeting += "Hola Mundo"; 
}
else if(languageTolowerCase === 'german'){
  languageGreeting += "Hallo Welt"; 
}
return languageGreeting

}

//console.log(aroundTheWorldGreeting('Spanish'))

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
    if(language === undefined){
      return "Hello World";
    }
      let languageTolowerCase = language.toLowerCase();  
      let languageGreeting = "";
      
    switch(languageTolowerCase){
        case 'english': languageGreeting += 'Hello World';
        return languageGreeting;
        break;
        case 'spanish': languageGreeting += 'Hola Mundo';
        return languageGreeting;
        break;
        case 'german': languageGreeting += 'Hallo Welt';
        return languageGreeting; 
        
    }

  }
  console.log(aroundTheWorldGreetingWithSwitch())
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
  if(grade < 0 ){
    return `'${grade}' cannot be a negative number`
  }
let letterGradeScore = '';
if(grade < 60){
  letterGradeScore += 'F'; 

}
else if(grade >= 90){
  letterGradeScore += 'A'; 

}
else if(grade >= 80){
  letterGradeScore += 'B'; 

}
else if(grade >= 70){
  letterGradeScore += 'C'; 

}
else if(grade >= 60){
  letterGradeScore += 'D'; 

}
return letterGradeScore;
}
console.log(calculateLetterGrade(5))
/**
 * animalCounts()
 * ---------------------
 * Returns the count of animals, properly pluralizing the animal 
 * if there is more than one.
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
  if(numberOfAnimals === 0){
    return `There's no animal`
  }

let numberOfAnimal = '';
if(numberOfAnimals === 1){
  numberOfAnimal += `"${numberOfAnimals} ${animal}"`
} 
else if(numberOfAnimals > 1){
  numberOfAnimal += `"${numberOfAnimals} ${animal}s"`
}

return numberOfAnimal;
}

console.log(animalCounts("dolphin", 6))
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
let typeOfNumber = '';
if(a % 2 === 1 || a % 2 === -1){
  typeOfNumber += `"Odd"`
} 
else if(a % 2 === 0){
  typeOfNumber +=`"Even"`

}
return typeOfNumber;
}

 console.log(evenOrOdd(-2))
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

  if(a === -1){
    return '"Odd"';
  }
let typeOfNumber = ''
typeOfNumber += a % 2 === 1? '"Odd"' : '"Even"';

return typeOfNumber;
}

console.log(evenOrOddWithTernary(9))
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
