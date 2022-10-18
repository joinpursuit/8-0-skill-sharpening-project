const {
  createEmptyArray,
  createArrayWithTwoElements,
  getArrayLength,
  getFirstElementOfArray,
  getLastElementOfArray,
  addElementToEndOfArray,
  removeElementFromEndOfArray,
  addElementToFrontOfArray,
  removeElementFromFrontOfArray,
  getMiddleElement,
} = require("../src/04-arrays");

describe("createEmptyArray()", () => {
  test("should return an empty array", () => {
    const actual = createEmptyArray();
    const expected = [];
    expect(actual).toEqual(expected);
  });

  /*
   * Guards against incorrect implementations such as:
   * let myArr = [];
   * function createEmptyArray() {
   *   return myArr;
   * }
  */
  test("each function call should return a different array", () => {
    const first = createEmptyArray();
    const second = createEmptyArray();
    expect(first).toEqual(second);
    expect(first).not.toBe(second);
  })
});

describe("createArrayWithTwoElements()", () => {
  test("should return an array with the two given levels", () => {
    const actual = createArrayWithTwoElements("A", "B");
    const expected = ["A", "B"];
    expect(actual).toEqual(expected);
  });

  test("should dynamically change depending on the input", () => {
    expect(createArrayWithTwoElements(1, 2)).toEqual([1, 2]);
    expect(createArrayWithTwoElements(true, false)).toEqual([true, false]);
    expect(createArrayWithTwoElements(null, undefined)).toEqual([
      null,
      undefined,
    ]);
  });
});

describe("getArrayLength()", () => {
  test("should return the length of an array", () => {
    const actual = getArrayLength([1, 2, 3]);
    const expected = 3;
    expect(actual).toEqual(expected);
  });

  test("should dynamically change depending on the input", () => {
    expect(getArrayLength([])).toEqual(0);
    expect(getArrayLength(["element"])).toEqual(1);
    expect(getArrayLength([[], []])).toEqual(2);
  });
});

describe("getFirstElementOfArray()", () => {
  test("should return the first element of the array", () => {
    const actual = getFirstElementOfArray(["first", "last"]);
    const expected = "first";
    expect(actual).toEqual(expected);
  });

  test("should dynamically change depending on the input", () => {
    expect(getFirstElementOfArray([10, 9, 8])).toEqual(10);
    expect(getFirstElementOfArray(["A"])).toEqual("A");
    expect(getFirstElementOfArray([undefined, null])).toEqual(undefined);
  });
});

describe("getLastElementOfArray()", () => {
  test("should return the last element of the array", () => {
    const actual = getLastElementOfArray(["first", "last"]);
    const expected = "last";
    expect(actual).toEqual(expected);
  });

  test("should dynamically change depending on the input", () => {
    expect(getLastElementOfArray([10, 9, 8])).toEqual(8);
    expect(getLastElementOfArray(["A"])).toEqual("A");
    expect(getLastElementOfArray([undefined, null])).toEqual(null);
  });
});

describe("addElementToEndOfArray()", () => {
  test("should add an element to the end of the array and return the array", () => {
    const array = [10];
    const actual = addElementToEndOfArray(array, "A");
    expect(actual.pop()).toEqual("A");
  });

  test("should dynamically change depending on the input", () => {
    expect(addElementToEndOfArray([1, 2, 3], 4).pop()).toEqual(4);
    expect(addElementToEndOfArray(["A"], "B").pop()).toEqual("B");
    expect(addElementToEndOfArray([], true).pop()).toEqual(true);
  });
});

describe("removeElementFromEndOfArray()", () => {
  test("should remove an element from end of the array and return that element", () => {
    const array = ["A"];
    const actual = removeElementFromEndOfArray(array);
    expect(actual).toEqual("A");
  });

  test("should dynamically change depending on the input", () => {
    expect(removeElementFromEndOfArray([1, 2, 3])).toEqual(3);
    expect(removeElementFromEndOfArray(["A"])).toEqual("A");
    expect(removeElementFromEndOfArray([true, false])).toEqual(false);
  });
});

describe("addElementToFrontOfArray()", () => {
  test("should add an element to the front of the array and return the array", () => {
    const array = [10];
    const actual = addElementToFrontOfArray(array, "A");
    expect(actual.shift()).toEqual("A");
  });

  test("should dynamically change depending on the input", () => {
    expect(addElementToFrontOfArray([1, 2, 3], 4).shift()).toEqual(4);
    expect(addElementToFrontOfArray(["A"], "B").shift()).toEqual("B");
    expect(addElementToFrontOfArray([], true).shift()).toEqual(true);
  });
});

describe("removeElementFromFrontOfArray()", () => {
  test("should remove an element from front of the array and return that element", () => {
    const array = ["A", "B", "C"];
    const actual = removeElementFromFrontOfArray(array);
    expect(actual).toEqual("A");
  });

  test("should dynamically change depending on the input", () => {
    expect(removeElementFromFrontOfArray([1, 2, 3])).toEqual(1);
    expect(removeElementFromFrontOfArray(["A"])).toEqual("A");
    expect(removeElementFromFrontOfArray([true, false])).toEqual(true);
  });
});

describe("getMiddleElement()", () => {
  test("should return the middle element of the array", () => {
    const actual = getMiddleElement(["first", "middle", "last"]);
    const expected = "middle";
    expect(actual).toEqual(expected);
  });

  test("should dynamically change depending on the input", () => {
    expect(getMiddleElement([10, 9, 8])).toEqual(9);
    expect(getMiddleElement(["A"])).toEqual("A");
    expect(getMiddleElement([-Infinity, 0, Infinity])).toEqual(0);
  });
});
