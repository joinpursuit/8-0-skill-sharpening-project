const {
  rangeSum,
  rangeOdd,
  rangeEveryOther,
  containsWhileLoop,
  containsForLoop,
  targetCount,
  firstIndexFound,
  lastIndexFound,
  timesIndex,
  cumulativeSum,
} = require("../src/06-loops");

describe("rangeSum", () => {
  test("returns sum of all numbers between min and max inclusive", () => {
    expect(rangeSum(2, 3)).toBe(5);
    expect(rangeSum(10, 12)).toBe(33);
    expect(rangeSum(1, 5)).toBe(15);
  });
});

describe("rangeOdd", () => {
  test("returns only odd numbers in decreasing order", () => {
    expect(rangeOdd(2, 3)).toEqual([3]);
    expect(rangeOdd(10, 26)).toEqual([25, 23, 21, 19, 17, 15, 13, 11]);
    expect(rangeOdd(1, 5)).toEqual([5, 3, 1]);
  });
});

describe("rangeEveryOther", () => {
  test("returns every other num in range in increasing order", () => {
    expect(rangeEveryOther(2, 3)).toEqual([2]);
    expect(rangeEveryOther(10, 26)).toEqual([
      10, 12, 14, 16, 18, 20, 22, 24, 26,
    ]);
    expect(rangeEveryOther(1, 6)).toEqual([1, 3, 5]);
  });
});

describe("containsWhileLoop", () => {
  test("returns true for found elements", () => {
    expect(containsWhileLoop([5, 2, 3, 5, 9], 3)).toBe(true);
    expect(containsWhileLoop(["cat", "dog", "bird"], "cat")).toBe(true);
  });
  test("returns false for not found elements", () => {
    expect(containsWhileLoop([5, 2, 3, 5, 9], 6)).toBe(false);
    expect(containsWhileLoop(["cat", "dog", "bird"], "whale")).toBe(false);
  });

  test("is written with a while loop", () => {
    const funcString = containsWhileLoop.toString();
    expect(funcString.includes("while")).toBe(true);
    expect(funcString.includes("for")).toBe(false);
  });

  test("is implemented and does not use built in includes method", () => {
    const funcString = containsWhileLoop.toString();
    expect(funcString.includes("includes")).toBe(false);
    expect(funcString !== "function containsWhileLoop() {}").toBe(true);
  });
});

describe("containsForLoop", () => {
  test("returns true for found elements", () => {
    expect(containsForLoop([5, 2, 3, 5, 9], 3)).toBe(true);
    expect(containsForLoop(["cat", "dog", "bird"], "cat")).toBe(true);
  });
  test("returns false for not found elements", () => {
    expect(containsForLoop([5, 2, 3, 5, 9], 6)).toBe(false);
    expect(containsForLoop(["cat", "dog", "bird"], "whale")).toBe(false);
  });

  test("is written with a for loop", () => {
    const funcString = containsForLoop.toString();
    expect(funcString.includes("while")).toBe(false);
    expect(funcString.includes("for")).toBe(true);
  });

  test("is implemented and does not use built in includes method", () => {
    const funcString = containsForLoop.toString();
    expect(funcString.includes("includes")).toBe(false);
    expect(funcString !== "function containsForLoop() {}").toBe(true);
  });
});

describe.only("targetCount", () => {
  test("returns the accurate count", () => {
    expect(targetCount([5, 2, 3, 5, 9], 5)).toBe(2);
    expect(targetCount([5, 2, 3, 5, 9], 6)).toBe(0);
    expect(targetCount(["cat", "cat", "cat", "bird"], "cat")).toBe(3);
    expect(targetCount(["cat", "cat", "cat", "bird"], "bird")).toBe(1);
    expect(targetCount(["cat", "cat", "cat", "bird"], "whale")).toBe(0);
  });
});

describe("firstIndexFound", () => {
  test("returns -1 when element not found", () => {
    expect(firstIndexFound([5, 2, 3, 5, 9], 6)).toBe(-1);
    expect(firstIndexFound([5, 2, 3, 5, 9], 0)).toBe(-1);
    expect(firstIndexFound([], 8)).toBe(-1);
  });
  test("returns index of the first element match", () => {
    expect(firstIndexFound([0, 2, 3, 5, 9], 9)).toBe(4);
    expect(firstIndexFound([5, 2, 3, 5, 9], 5)).toBe(0);
  });
});

describe("lastIndexFound", () => {
  test("returns -1 when element not found", () => {
    expect(lastIndexFound([5, 2, 3, 5, 9], 6)).toBe(-1);
    expect(lastIndexFound([5, 2, 3, 5, 9], 0)).toBe(-1);
    expect(lastIndexFound([], 8)).toBe(-1);
  });
  test("returns index of the last element match", () => {
    expect(lastIndexFound([0, 2, 3, 5, 9], 9)).toBe(4);
    expect(lastIndexFound([5, 2, 3, 5, 9], 5)).toBe(3);
  });
});

describe("timesIndex", () => {
  test("returns new array with each element multiplied by its index", () => {
    expect(timesIndex([2, 2, 2])).toEqual([0, 2, 4]);
    expect(timesIndex([1, 2, 3, 4, 5])).toEqual([0, 2, 6, 12, 20]);
    expect(timesIndex([])).toEqual([]);
  });
});

describe("cumulativeSum", () => {
  test("returns new array with each element is the cumulative sum", () => {
    expect(cumulativeSum([2, 2, 2])).toEqual([2, 4, 6]);
    expect(cumulativeSum([5, 2, 9])).toEqual([5, 7, 16]);
    expect(cumulativeSum([])).toEqual([]);
  });
});
