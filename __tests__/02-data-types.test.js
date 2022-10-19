const {
  getLengthOfString,
  convertToNumber,
  convertToString,
  convertToShoutingText,
  convertToWhisperText,
  checkIfCharacterIsInString,
  isEven,
  isOdd,
  isTruthy,
  isFalsy,
} = require("../src/02-data-types");

describe("getLengthOfString()", () => {
  test("should return the length of the string", () => {
    const input = "pursuit";
    const actual = getLengthOfString(input);
    const expected = 7;
    expect(actual).toEqual(expected);
  });

  test("should dynamically change depending on the input", () => {
    const input = "coding";
    const actual = getLengthOfString(input);
    const expected = 6;
    expect(actual).toEqual(expected);
  });

  test("should work with an empty string", () => {
    const input = "";
    const actual = getLengthOfString(input);
    const expected = 0;
    expect(actual).toEqual(expected);
  });
});

describe("convertToNumber()", () => {
  test("should convert a string to a number", () => {
    const input = "10";
    const actual = convertToNumber(input);
    const expected = 10;
    expect(actual).toEqual(expected);
  });

  test("should dynamically change depending on the input", () => {
    const input = "9910";
    const actual = convertToNumber(input);
    const expected = 9910;
    expect(actual).toEqual(expected);
  });
});

describe("convertToString()", () => {
  test("should convert a number to a string", () => {
    const input = 10;
    const actual = convertToString(input);
    const expected = "10";
    expect(actual).toEqual(expected);
  });

  test("should dynamically change depending on the input", () => {
    expect(convertToString(11)).toEqual("11");
    expect(convertToString(-10)).toEqual("-10");
    expect(convertToString(true)).toEqual("true");
  });
});

describe("convertToShoutingText()", () => {
  test("should capitalize the given text", () => {
    const input = "PursuiT";
    const actual = convertToShoutingText(input);
    const expected = "PURSUIT";
    expect(actual).toEqual(expected);
  });

  test("should dynamically change depending on the input", () => {
    const input = "cODINg";
    const actual = convertToShoutingText(input);
    const expected = "CODING";
    expect(actual).toEqual(expected);
  });
});

describe("convertToWhisperText()", () => {
  test("should lowercase the given text", () => {
    const input = "PursuiT";
    const actual = convertToWhisperText(input);
    const expected = "pursuit";
    expect(actual).toEqual(expected);
  });

  test("should dynamically change depending on the input", () => {
    const input = "cODINg";
    const actual = convertToWhisperText(input);
    const expected = "coding";
    expect(actual).toEqual(expected);
  });
});

describe("checkIfCharacterIsInString()", () => {
  test("should return `true` if the character is in the string", () => {
    const text = "Pursuit";
    const actual = checkIfCharacterIsInString(text, "u");
    const expected = true;
    expect(actual).toEqual(expected);
  });

  test("should return `false` if the the character is not in the string", () => {
    const text = "Pursuit";
    const actual = checkIfCharacterIsInString(text, "m");
    const expected = false;
    expect(actual).toEqual(expected);
  });

  test("should dynamically change depending on the input", () => {
    expect(checkIfCharacterIsInString("guitar", "l")).toEqual(false);
    expect(checkIfCharacterIsInString("marimba", "a")).toEqual(true);
    expect(checkIfCharacterIsInString("piano", "x")).toEqual(false);
  });
});

describe.only("isEven()", () => {
  test("should return `true` if the number given is even", () => {
    const input = 8;
    const actual = isEven(input);
    const expected = true;
    expect(actual).toEqual(expected);
  });

  test("should return `false` if the number given is odd", () => {
    const input = 9;
    const actual = isEven(input);
    const expected = false;
    expect(actual).toEqual(expected);
  });

  test("should dynamically change depending on the input", () => {
    expect(isEven(10)).toEqual(true);
    expect(isEven(13)).toEqual(false);
    expect(isEven(16)).toEqual(true);
    expect(isEven(19)).toEqual(false);
    expect(isEven(100)).toEqual(true);
  });
});

describe.only("isOdd()", () => {
  test("should return `true` if the number given is odd", () => {
    const input = 7;
    const actual = isOdd(input);
    const expected = true;
    expect(actual).toEqual(expected);
  });

  test("should return `false` if the number given is even", () => {
    const input = 10;
    const actual = isOdd(input);
    const expected = false;
    expect(actual).toEqual(expected);
  });

  test("should dynamically change depending on the input", () => {
    expect(isOdd(1)).toEqual(true);
    expect(isOdd(2)).toEqual(false);
    expect(isOdd(3)).toEqual(true);
    expect(isOdd(4)).toEqual(false);
    expect(isOdd(5)).toEqual(true);
  });
});

describe("isTruthy()", () => {
  test("should return `true` if the value given is a truthy value", () => {
    const input = 7;
    const actual = isTruthy(input);
    const expected = true;
    expect(actual).toEqual(expected);
  });

  test("should return `false` if the value given is a falsy value", () => {
    const input = 0;
    const actual = isTruthy(input);
    const expected = false;
    expect(actual).toEqual(expected);
  });

  test("should dynamically change depending on the input", () => {
    expect(isTruthy([])).toEqual(true);
    expect(isTruthy("")).toEqual(false);
    expect(isTruthy({})).toEqual(true);
    expect(isTruthy(null)).toEqual(false);
    expect(isTruthy(" ")).toEqual(true);
  });
});

describe("isFalsy()", () => {
  test("should return `false` if the value given is a truthy value", () => {
    const input = 7;
    const actual = isFalsy(input);
    const expected = false;
    expect(actual).toEqual(expected);
  });

  test("should return `true` if the value given is a falsy value", () => {
    const input = 0;
    const actual = isFalsy(input);
    const expected = true;
    expect(actual).toEqual(expected);
  });

  test("should dynamically change depending on the input", () => {
    expect(isFalsy([])).toEqual(false);
    expect(isFalsy("")).toEqual(true);
    expect(isFalsy({})).toEqual(false);
    expect(isFalsy(null)).toEqual(true);
    expect(isFalsy(" ")).toEqual(false);
  });
});
