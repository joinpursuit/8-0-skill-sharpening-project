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
//Compares two values
function isEqual(a, b) {
if(a === b){
  //Returns true if the two values are equal
  return true;
}
////Returns false if the two values are not equal
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
//Searches for high value
function findLarger(a, b) {
  //Declare a variable, largeNum and assign a value to it
  // Designated largeNum as the highest value
let largeNum = a;

//Compare variable, largeNum to b  
if(largeNum < b){
  
  //Assigns b value to largeNum if b is greater than largeNum
  largeNum = b;
}

//Return value
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

//Searches for the highest value or a tie   
function findLargerOrTie(a, b) {
  // Assuming value a is the highest 
  let largeOrTie = a;
  //Compares the two values 
  if(largeOrTie < b){

    //Assigns value of b to largeOrTie if b is larger 
    //than variable largeOrTie 
    largeOrTie = b;
  } 
  
  //compares if equal
  else if(largeOrTie === b){

    //Then assigns tie to variable largeOrTie if they're equal  
    largeOrTie = "tie"
  }

  //return value
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
//Checks for the type of number
 function positiveNegativeOrZero(a) {
   //if a is not a number 
   if(typeof a !== 'number' ){

    //returns value if not a number
     return `${a}, not a number'`
   }
   //Accumulator default value
let thing = 'Zero';

//Compares a value to 0
if(a > 0){
//return positive if the condition is true
return 'Positive'
} 
//return Negative if the condition is false
else if(a < 0){
  //
  return 'Negative'
}
//default return value
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

//Returns greeting based on the language chosen other default greeing 
function aroundTheWorldGreeting(language) {
  //checks if the defined language is inputted
if(language === undefined){

  //returns Hello World if any other language is 
  //inputted other than the defined ones
  return "Hello World";
}
  //Converts string to lowercase 
  let languageTolowerCase = language.toLowerCase();  
  
  //Sets the accumulator to a string  
  let languageGreeting = '';
  
//checks if the language is english
if(languageTolowerCase === 'english'){
  languageGreeting += "Hello World"; 
}
//checks if the language is spanish
else if(languageTolowerCase === 'spanish'){
  languageGreeting += "Hola Mundo"; 
}
//checks if the language is german
else if(languageTolowerCase === 'german'){
  languageGreeting += "Hallo Welt"; 
}
//return value
return languageGreeting

}

console.log(aroundTheWorldGreeting())

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
  //This block runs when languages other than english, spanish or german is inputted
    if(language === undefined){
      return "Hello World";
    }
      let languageTolowerCase = language.toLowerCase();  
      let languageGreeting = "";
      //checks truthy
    switch(languageTolowerCase){
      //if english this line of code runs
        case 'english': languageGreeting += 'Hello World';
        return languageGreeting;
        break;
          //if spanish this line of code runs
        case 'spanish': languageGreeting += 'Hola Mundo';
        return languageGreeting;
        break;
         //if german this line of code runs
        case 'german': languageGreeting += 'Hallo Welt';
        return languageGreeting; 
        //default
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
  //Checks if grade is less than zero
  if(grade < 0 ){
    return `'${grade}' cannot be a negative number`
  }

  //Assigns as tring to the accumulator
let letterGradeScore = '';
//checks if the number inputted is less than 60
if(grade < 60){
  //Assigns letter F letterGradeScore 
  
  letterGradeScore += 'F'; 

}
//checks if the number inputted is greater or equal 90
else if(grade >= 90){

  //Assigns letter A letterGradeScore 
  letterGradeScore += 'A'; 

}
//checks if the number inputted is greater or equal 80
else if(grade >= 80){
  //Assigns letter B letterGradeScore 
  letterGradeScore += 'B'; 

}
//checks if the number inputted is greater or equal 70
else if(grade >= 70){
  //Assigns letter C letterGradeScore 
  letterGradeScore += 'C'; 

}
//checks if the number inputted is greater or equal 60
else if(grade >= 60){
  //Assigns letter D letterGradeScore 
  letterGradeScore += 'D'; 

}
//Return value
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

  //if animal count is zero only this code block runs
  if(numberOfAnimals === 0){
    return `There's no ${animal}`
    
  }

let numberOfAnimal = '';
//checks if animal count is 1

if(numberOfAnimals === 1){
  //reassigns variable, numberOfAnimal
  numberOfAnimal += `${numberOfAnimals} ${animal}`
} 
//checks if animal count is more than 1
else if(numberOfAnimals > 1){

  //reassigns variable, numberOfAnimal
  numberOfAnimal += `${numberOfAnimals} ${animal}s`
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
//checks if odd
if(a % 2 === 1 || a % 2 === -1){
  typeOfNumber += "Odd"
} 
//Checks if even
else if(a % 2 === 0){
  typeOfNumber +="Even"

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
  //Accumulator
  let typeOfNumber = '' 
    // ternary operator
    typeOfNumber += a % 2 ===  0 ? 'Even' : 'Odd';
  
//return value
  return typeOfNumber;
}

//console.log(9 % 2 === 1 )
console.log(evenOrOddWithTernary("if"))
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
