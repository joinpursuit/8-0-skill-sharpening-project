const {
  shoutForLoop,
  shoutWhileLoop,
  shoutForOfLoop,
  sumArray,
  oddArray,
  evenArray,
  findSmallest,
  findLargest,
  findEqual,
  removeDuplicates,
} = require("../src/07-even-more-loops");

describe("shoutForLoop", () => {
  test("adds an ! to the end of each element", () => {
    expect(shoutForLoop([])).toEqual([]);
    expect(shoutForLoop(["I", "am", "a", "happy", "array"])).toEqual([
      "I!",
      "am!",
      "a!",
      "happy!",
      "array!",
    ]);
  });

  test("uses a for loop", () => {
    const funcString = shoutForLoop.toString();
    expect(funcString.includes("for")).toBe(true);
    expect(funcString.includes("while")).toBe(false);
  });
});

describe("shoutWhileLoop", () => {
  test("adds an ! to the end of each element", () => {
    expect(shoutWhileLoop([])).toEqual([]);
    expect(shoutWhileLoop(["I", "am", "a", "happy", "array"])).toEqual([
      "I!",
      "am!",
      "a!",
      "happy!",
      "array!",
    ]);
  });

  test("uses a while loop", () => {
    const funcString = shoutWhileLoop.toString();
    expect(funcString.includes("for")).toBe(false);
    expect(funcString.includes("while")).toBe(true);
  });
});

describe("shoutForOfLoop", () => {
  test("adds an ! to the end of each element", () => {
    expect(shoutForOfLoop([])).toEqual([]);
    expect(shoutForOfLoop(["I", "am", "a", "happy", "array"])).toEqual([
      "I!",
      "am!",
      "a!",
      "happy!",
      "array!",
    ]);
  });

  test("uses a for/of loop", () => {
    const funcString = shoutForOfLoop.toString();
    expect(funcString.includes("for")).toBe(true);
    expect(funcString.includes("of")).toBe(true);
    expect(funcString.includes("while")).toBe(false);
  });
});

describe.only("sumArray", () => {
  test("returns the sum of all values", () => {
    expect(sumArray([])).toBe(0);
    expect(sumArray([1, 2, 3])).toBe(6);
    expect(sumArray([5, 5, 5, 5])).toBe(20);
  });
});

describe("oddArray", () => {
  test("returns a new array of only the odd valued elements", () => {
    expect(oddArray([1, 2, 3, 4, 5])).toEqual([1, 3, 5]);
    expect(oddArray([0, 2, 4, 6])).toEqual([]);
    expect(oddArray([7, 9])).toEqual([7, 9]);
  });
});

describe("evenArray", () => {
  test("returns a new array of only the even valued elements", () => {
    expect(evenArray([1, 2, 3, 4, 5])).toEqual([2, 4]);
    expect(evenArray([0, 2, 4, 6])).toEqual([0, 2, 4, 6]);
    expect(evenArray([7, 9])).toEqual([]);
  });
});

describe("findSmallest", () => {
  test("returns the smallest element in an array", () => {
    expect(findSmallest([1, 2, 3, 4])).toBe(1);
    expect(findSmallest([5, 4, 3, 2])).toBe(2);
    expect(findSmallest([5, 4, 6, -6, 3, 9])).toBe(-6);
  });
});

describe("findLargest()", () => {
  test("should return the largest element in the array", () => {
    expect(findLargest([10, 20, 30, 40])).toEqual(40);
    expect(findLargest([-100, 0, -10])).toEqual(0);
    expect(findLargest([5, 7, 3, 1, 8, 2])).toEqual(8);
  });
});

describe("findEqual()", () => {
  test("should return `true` if the element can be found in the array", () => {
    expect(findEqual([10, 20, 30, 40], 10)).toEqual(true);
    expect(findEqual([-100, 0, -10], -10)).toEqual(true);
    expect(findEqual([5, 7, 3, 1, 8, 2], 1)).toEqual(true);
  });

  test("should return `false` if the element can be found in the array", () => {
    expect(findEqual([10, 20, 30, 40], -10)).toEqual(false);
    expect(findEqual([-100, 0, -10], 10)).toEqual(false);
    expect(findEqual([5, 7, 3, 1, 8, 2], 10)).toEqual(false);
  });
});

describe("removeDuplicates", () => {
  test("returns an array without any of the duplicates", () => {
    expect(removeDuplicates([4, 2, 6, 2, 2, 6, 4, 9, 2, 1])).toEqual([
      4, 2, 6, 9, 1,
    ]);
    expect(removeDuplicates([3, 4, 5])).toEqual([3, 4, 5]);
    expect(removeDuplicates([1, 1, 1])).toEqual([1]);
  });
});
