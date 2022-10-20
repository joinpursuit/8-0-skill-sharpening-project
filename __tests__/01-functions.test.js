const {
  alwaysTrue,
  greet,
  add,
  multiply,
  average,
  averageThree,
  compareTypes,
  flipSign,
  joinStringsWithSpaces,
  getFirstAndLastCharacter,
} = require("../src/01-functions");

describe("alwaysTrue()", () => {
  test("should always return `true`", () => {
    const actual = alwaysTrue();
    const expected = true;
    expect(actual).toEqual(expected);
  });
});

describe("greet()", () => {
  test("should return a greeting with the given name", () => {
    const name = "Reed";
    const actual = greet("Reed");
    const expected = "Hello, Reed.";
    expect(actual).toEqual(expected);
  });

  test("should dynamically work with other names", () => {
    const name = "Aisha";
    const actual = greet("Aisha");
    const expected = "Hello, Aisha.";
    expect(actual).toEqual(expected);
  });
});

describe("add()", () => {
  test("should add two numbers together", () => {
    const actual = add(10, 20);
    const expected = 30;
    expect(actual).toEqual(expected);
  });

  test("should dynamically add different numbers", () => {
    const actual = add(5, 7);
    const expected = 12;
    expect(actual).toEqual(expected);
  });
});

describe("multiply()", () => {
  test("should multiply two numbers together", () => {
    const actual = multiply(10, 20);
    const expected = 200;
    expect(actual).toEqual(expected);
  });

  test("should dynamically multiply different numbers", () => {
    const actual = multiply(5, 11);
    const expected = 55;
    expect(actual).toEqual(expected);
  });
});

describe("average()", () => {
  test("should return the average of the two numbers", () => {
    const actual = average(5, 5);
    const expected = 5;
    expect(actual).toEqual(expected);
  });

  test("should dynamically average different numbers", () => {
    expect(average(4, 10)).toEqual(7);
    expect(average(100, 200)).toEqual(150);
    expect(average(-5, 11)).toEqual(3);
  });
});

describe("averageThree()", () => {
  test("should return the average of the three numbers", () => {
    const actual = averageThree(5, 5, 5);
    const expected = 5;
    expect(actual).toEqual(expected);
  });

  test("should dynamically average different numbers", () => {
    expect(averageThree(3, 6, 9)).toEqual(6);
    expect(averageThree(140, 100, 150)).toEqual(130);
    expect(averageThree(-5, 11, -3)).toEqual(1);
  });
});

describe("compareTypes()", () => {
  test("should return `true` if the two inputs are of the same type", () => {
    const actual = compareTypes("Reed", "Aisha");
    const expected = true;
    expect(actual).toEqual(expected);
  });

  test("should return `false` if the two inputs are not of the same type", () => {
    const actual = compareTypes(false, "Aisha");
    const expected = false;
    expect(actual).toEqual(expected);
  });
});

describe("flipSign()", () => {
  test("should change a positive value into a negative value", () => {
    const input = 10;
    const actual = flipSign(input);
    const expected = -10;
    expect(actual).toEqual(expected);
  });
  test("should change a negative value into a positive value", () => {
    const input = -20;
    const actual = flipSign(input);
    const expected = 20;
    expect(actual).toEqual(expected);
  });
  test("should dynamically flip different numbers", () => {
    expect(flipSign(50)).toEqual(-50);
    expect(flipSign(-1)).toEqual(1);
    expect(flipSign(-22)).toEqual(22);
  });
});

describe("joinStringsWithSpaces()", () => {
  test("should join five strings with spaces between", () => {
    const actual = joinStringsWithSpaces("A", "B", "C", "D", "E");
    const expected = "A B C D E";
    expect(actual).toEqual(expected);
  });
  test("should dynamically change based on the inputs", () => {
    expect(joinStringsWithSpaces("C", "C", "C", "C", "C")).toEqual("C C C C C");
    expect(
      joinStringsWithSpaces("apple", "cherry", "grape", "blueberry", "pear")
    ).toEqual("apple cherry grape blueberry pear");
  });
});

describe.only("getFirstAndLastCharacter()", () => {
  test("should return the first and last character of a string, joined together", () => {
    const input = "pursuit";
    const actual = getFirstAndLastCharacter(input);
    const expected = "pt";
    expect(actual).toEqual(expected);
  });
  test("should dynamically change based on the inputs", () => {
    expect(getFirstAndLastCharacter("coding")).toEqual("cg");
    expect(getFirstAndLastCharacter("all about functions")).toEqual("as");
  });
});
