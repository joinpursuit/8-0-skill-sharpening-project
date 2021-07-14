const {
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
} = require("../src/03-control-flow");

describe("isEqual()", () => {
  test("returns true when numbers are equal", () => {
    expect(isEqual(-1, -1)).toEqual(true);
    expect(isEqual(0, 0)).toEqual(true);
    expect(isEqual(5, 5)).toEqual(true);
  });
  test("returns false when numbers are not equal", () => {
    expect(isEqual(-1, 0)).toEqual(false);
    expect(isEqual(3, 0)).toEqual(false);
    expect(isEqual(5, 7)).toEqual(false);
  });
  test("returns true when strings are equal", () => {
    expect(isEqual("", "")).toEqual(true);
    expect(isEqual("cat", "cat")).toEqual(true);
  });
  test("returns false when strings are not equal", () => {
    expect(isEqual("cat", "")).toEqual(false);
    expect(isEqual("cat", "dog")).toEqual(false);
  });
});

describe("findLarger()", () => {
  test("returns the larger of two numbers", () => {
    expect(findLarger(-1, 5)).toEqual(5);
    expect(findLarger(8, 2)).toEqual(8);
    expect(findLarger(1, 0)).toEqual(1);
    expect(findLarger(-2, -1)).toEqual(-1);
  });
});

describe("findLargerOrTie()", () => {
  test("returns the larger of two numbers", () => {
    expect(findLargerOrTie(-1, 5)).toEqual(5);
    expect(findLargerOrTie(8, 2)).toEqual(8);
    expect(findLargerOrTie(1, 0)).toEqual(1);
    expect(findLargerOrTie(-2, -1)).toEqual(-1);
  });
  test("returns 'tie' when two numbers are the same", () => {
    expect(findLargerOrTie(-1, -1)).toEqual("tie");
    expect(findLargerOrTie(8, 8)).toEqual("tie");
    expect(findLargerOrTie(0, 0)).toEqual("tie");
  });
});

describe("positiveNegativeOrZero()", () => {
  test("returns Positive when number is positive", () => {
    expect(positiveNegativeOrZero(1)).toEqual("Positive");
    expect(positiveNegativeOrZero(2)).toEqual("Positive");
  });
  test("returns Negative when number is negative", () => {
    expect(positiveNegativeOrZero(-1)).toEqual("Negative");
    expect(positiveNegativeOrZero(-2)).toEqual("Negative");
  });
  test("returns Zero when number is 0", () => {
    expect(positiveNegativeOrZero(0)).toEqual("Zero");
  });
});

describe("aroundTheWorldGreeting()", () => {
  test("returns greetings in english, spanish, and german", () => {
    expect(aroundTheWorldGreeting("english")).toEqual("Hello World");
    expect(aroundTheWorldGreeting("spanish")).toEqual("Hola Mundo");
    expect(aroundTheWorldGreeting("german")).toEqual("Hallo Welt");
  });
  test("returns english when no argument is provided", () => {
    expect(aroundTheWorldGreeting()).toEqual("Hello World");
  });
});

describe("aroundTheWorldGreetingWithSwitch()", () => {
  test("returns greetings in english, spanish, and german", () => {
    expect(aroundTheWorldGreetingWithSwitch("english")).toEqual("Hello World");
    expect(aroundTheWorldGreetingWithSwitch("spanish")).toEqual("Hola Mundo");
    expect(aroundTheWorldGreetingWithSwitch("german")).toEqual("Hallo Welt");
  });
  test("returns english when no argument is provided", () => {
    expect(aroundTheWorldGreetingWithSwitch()).toEqual("Hello World");
  });
  test("uses a switch statement", () => {
    expect(
      aroundTheWorldGreetingWithSwitch.toString().includes("switch")
    ).toEqual(true);
  });
});

describe("calculateLetterGrade()", () => {
  test("returns the correct grade", () => {
    expect(calculateLetterGrade(90)).toEqual("A");
    expect(calculateLetterGrade(80)).toEqual("B");
    expect(calculateLetterGrade(70)).toEqual("C");
    expect(calculateLetterGrade(60)).toEqual("D");
    expect(calculateLetterGrade(50)).toEqual("F");
    expect(calculateLetterGrade(5)).toEqual("F");
  });
});

describe("animalCounts()", () => {
  test("works for singular animals", () => {
    expect(animalCounts("cat", 1)).toEqual("1 cat");
    expect(animalCounts("racoon", 1)).toEqual("1 racoon");
  });
  test("works for multiple animals", () => {
    expect(animalCounts("cat", 3)).toEqual("3 cats");
    expect(animalCounts("dolphin", 6)).toEqual("6 dolphins");
  });
});

describe("evenOrOdd()", () => {
  test("works for even numbers", () => {
    expect(evenOrOdd(0)).toEqual("Even");
    expect(evenOrOdd(2)).toEqual("Even");
    expect(evenOrOdd(-2)).toEqual("Even");
  });
  test("works for odd numbers", () => {
    expect(evenOrOdd(-1)).toEqual("Odd");
    expect(evenOrOdd(3)).toEqual("Odd");
    expect(evenOrOdd(9)).toEqual("Odd");
  });
});

describe("evenOrOddWithTernary()", () => {
  test("works for even numbers", () => {
    expect(evenOrOddWithTernary(0)).toEqual("Even");
    expect(evenOrOddWithTernary(2)).toEqual("Even");
    expect(evenOrOddWithTernary(-2)).toEqual("Even");
  });
  test("works for odd numbers", () => {
    expect(evenOrOddWithTernary(-1)).toEqual("Odd");
    expect(evenOrOddWithTernary(3)).toEqual("Odd");
    expect(evenOrOddWithTernary(9)).toEqual("Odd");
  });

  test("Is written as a ternary", () => {
    expect(evenOrOddWithTernary.toString().includes("?")).toEqual(true);
    expect(evenOrOddWithTernary.toString().includes("if")).toEqual(false);
  });
});
