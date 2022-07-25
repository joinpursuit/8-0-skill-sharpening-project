const {
  applyDiscount,
  getCartTotal,
  compareLocations,
  gradeAssignments,
  createLineOrder,
} = require("../src/09-word-problems");

describe.only("applyDiscount()", () => {
  test("should not apply any discount if the person does not meet the requirements", () => {
    const actual = applyDiscount(1000, 30, false);
    const expected = 1000;
    expect(actual).toEqual(expected);
  });

  test("should apply a 10% discount to people 10 years old or younger", () => {
    const actual = applyDiscount(1000, 10, false);
    const expected = 900;
    expect(actual).toEqual(expected);
  });

  test("should apply a 10% discount to people 65 years old or older", () => {
    const actual = applyDiscount(1000, 65, false);
    const expected = 900;
    expect(actual).toEqual(expected);
  });

  test("should apply a 20% discount to anyone who has a membership", () => {
    const actual = applyDiscount(1000, 35, true);
    const expected = 800;
    expect(actual).toEqual(expected);
  });

  test("should apply a 30% discount to anyone who has a membership and is 65 years old or older", () => {
    const actual = applyDiscount(1000, 65, true);
    const expected = 700;
    expect(actual).toEqual(expected);
  });

  test("should apply a 30% discount to anyone who has a membership and is 10 years old or younger", () => {
    const actual = applyDiscount(1000, 10, true);
    const expected = 700;
    expect(actual).toEqual(expected);
  });
});

describe("getCartTotal()", () => {
  let cart;
  beforeEach(() => {
    cart = [
      { name: "T-Shirt", priceInCents: 1200, quantity: 1 },
      { name: "Shoes", priceInCents: 8950, quantity: 1 },
      { name: "Skirt", priceInCents: 4400, quantity: 1 },
      { name: "Socks", priceInCents: 900, quantity: 1 },
    ];
  });

  test("should return the total amount adding all items in the cart, formatted", () => {
    const actual = getCartTotal(cart);
    const expected = "$154.50";
    expect(actual).toEqual(expected);
  });

  test("should multiply each amount by the quantity in the cart", () => {
    cart[0].quantity = 2;
    cart[1].quantity = 2;
    cart[2].quantity = 3;
    cart[3].quantity = 4;
    const actual = getCartTotal(cart);
    const expected = "$371.00";
    expect(actual).toEqual(expected);
  });
});

describe("compareLocations()", () => {
  test("should say that the addresses are not near each other if there is no matching component", () => {
    const address1 = {
      street: "8785 Trenton St.",
      city: "Melbourne",
      state: "FL",
      zip: "32904",
    };
    const address2 = {
      street: "2 Lees Creek Ave.",
      city: "Littleton",
      state: "CO",
      zip: "80123",
    };

    const actual = compareLocations(address1, address2);
    const expected = "Addresses are not near each other.";
    expect(actual).toEqual(expected);
  });

  test("should say that the state is the same if they are", () => {
    const address1 = {
      street: "8785 Trenton St.",
      city: "Melbourne",
      state: "FL",
      zip: "32904",
    };
    const address2 = {
      street: "2 Lees Creek Ave.",
      city: "Littleton",
      state: "FL",
      zip: "80123",
    };

    const actual = compareLocations(address1, address2);
    const expected = "Same state.";
    expect(actual).toEqual(expected);
  });

  test("should say that the city is the same if the city, state, and zip all match", () => {
    const address1 = {
      street: "8785 Trenton St.",
      city: "Melbourne",
      state: "FL",
      zip: "32904",
    };
    const address2 = {
      street: "2 Lees Creek Ave.",
      city: "Melbourne",
      state: "FL",
      zip: "32904",
    };

    const actual = compareLocations(address1, address2);
    const expected = "Same city.";
    expect(actual).toEqual(expected);
  });

  test("should say that the building is the same if the street, city, state, and zip all match", () => {
    const address1 = {
      street: "8785 Trenton St.",
      city: "Melbourne",
      state: "FL",
      zip: "32904",
    };
    const address2 = {
      street: "8785 Trenton St.",
      city: "Melbourne",
      state: "FL",
      zip: "32904",
    };

    const actual = compareLocations(address1, address2);
    const expected = "Same building.";
    expect(actual).toEqual(expected);
  });

  test("should say that the addresses are different if the city is different even if other values are the same", () => {
    const address1 = {
      street: "8785 Trenton St.",
      city: "Melbourne",
      state: "FL",
      zip: "32904",
    };
    const address2 = {
      street: "8785 Trenton St.",
      city: "Littleton",
      state: "CO",
      zip: "32904",
    };

    const actual = compareLocations(address1, address2);
    const expected = "Addresses are not near each other.";
    expect(actual).toEqual(expected);
  });

  test("should say that the addresses are different if the state is different even if other values are the same", () => {
    const address1 = {
      street: "8785 Trenton St.",
      city: "Melbourne",
      state: "FL",
      zip: "32904",
    };
    const address2 = {
      street: "8785 Trenton St.",
      city: "Melbourne",
      state: "CO",
      zip: "32904",
    };

    const actual = compareLocations(address1, address2);
    const expected = "Addresses are not near each other.";
    expect(actual).toEqual(expected);
  });
});

describe("gradeAssignments()", () => {
  test("should, for PASS-FAIL assignments, add a `status` of PASSED if the `score.received` equals the `score.max", () => {
    const assignments = [{ kind: "PASS-FAIL", score: { received: 4, max: 4 } }];
    const actual = gradeAssignments(assignments);
    const expected = [
      { status: "PASSED", kind: "PASS-FAIL", score: { received: 4, max: 4 } },
    ];
    expect(actual).toEqual(expected);
  });

  test("should, for PASS-FAIL assignments, add a `status` of FAILED if the `score.received` does not equal the `score.max", () => {
    const assignments = [{ kind: "PASS-FAIL", score: { received: 3, max: 4 } }];
    const actual = gradeAssignments(assignments);
    const expected = [
      { status: "FAILED", kind: "PASS-FAIL", score: { received: 3, max: 4 } },
    ];
    expect(actual).toEqual(expected);
  });

  test("should, for PERCENTAGE assignments, add a `status` of PASSED if the `score` is equal to or greater than 80% and include the percentage", () => {
    const assignments = [
      { kind: "PERCENTAGE", score: { received: 8, max: 10 } },
    ];
    const actual = gradeAssignments(assignments);
    const expected = [
      {
        status: "PASSED: 80.0%",
        kind: "PERCENTAGE",
        score: { received: 8, max: 10 },
      },
    ];
    expect(actual).toEqual(expected);
  });

  test("should, for PERCENTAGE assignments, add a `status` of FAILED if the `score` is less than 80% and include the percentage", () => {
    const assignments = [
      { kind: "PERCENTAGE", score: { received: 7, max: 10 } },
    ];
    const actual = gradeAssignments(assignments);
    const expected = [
      {
        status: "FAILED: 70.0%",
        kind: "PERCENTAGE",
        score: { received: 7, max: 10 },
      },
    ];
    expect(actual).toEqual(expected);
  });

  test("should, for PERCENTAGE assignments, round to one decimal integer", () => {
    const assignments = [
      { kind: "PERCENTAGE", score: { received: 6, max: 7 } },
    ];
    const actual = gradeAssignments(assignments);
    const expected = [
      {
        status: "PASSED: 85.7%",
        kind: "PERCENTAGE",
        score: { received: 6, max: 7 },
      },
    ];
    expect(actual).toEqual(expected);
  });

  test("should, for any other assignment, add a `status` that shows the `score.received` out of the `score.max`", () => {
    const assignments = [{ kind: "ESSAY", score: { received: 4, max: 5 } }];
    const actual = gradeAssignments(assignments);
    const expected = [
      { status: "SCORE: 4/5", kind: "ESSAY", score: { received: 4, max: 5 } },
    ];
    expect(actual).toEqual(expected);
  });

  test("should add the `status` key for all assignments in the array", () => {
    const assignments = [
      { kind: "PASS-FAIL", score: { received: 4, max: 4 } },
      { kind: "PASS-FAIL", score: { received: 3, max: 4 } },
      { kind: "PERCENTAGE", score: { received: 8, max: 10 } },
      { kind: "PERCENTAGE", score: { received: 7, max: 9 } },
      { kind: "ESSAY", score: { received: 4, max: 5 } },
    ];

    const actual = gradeAssignments(assignments);
    const expected = [
      { status: "PASSED", kind: "PASS-FAIL", score: { received: 4, max: 4 } },
      { status: "FAILED", kind: "PASS-FAIL", score: { received: 3, max: 4 } },
      {
        status: "PASSED: 80.0%",
        kind: "PERCENTAGE",
        score: { received: 8, max: 10 },
      },
      {
        status: "FAILED: 77.8%",
        kind: "PERCENTAGE",
        score: { received: 7, max: 9 },
      },
      { status: "SCORE: 4/5", kind: "ESSAY", score: { received: 4, max: 5 } },
    ];
    expect(actual).toEqual(expected);
  });
});

describe("createLineOrder()", () => {
  test("should return an array of everyone's name who is in the line, in order", () => {
    const people = [
      { name: "Jackson Read", hasMembership: false },
      { name: "Esme Day", hasMembership: false },
      { name: "Willow Francis", hasMembership: false },
    ];
    const actual = createLineOrder(people);
    const expected = ["Jackson Read", "Esme Day", "Willow Francis"];
    expect(actual).toEqual(expected);
  });

  test("should prioritize anyone with a membership", () => {
    const people = [
      { name: "Jackson Read", hasMembership: false },
      { name: "Esme Day", hasMembership: true },
      { name: "Willow Francis", hasMembership: false },
    ];
    const actual = createLineOrder(people);
    const expected = ["Esme Day", "Jackson Read", "Willow Francis"];
    expect(actual).toEqual(expected);
  });

  test("should prioritize multiple people with memberships", () => {
    const people = [
      { name: "Jackson Read", hasMembership: true },
      { name: "Esme Day", hasMembership: false },
      { name: "Ethan Hart", hasMembership: true },
      { name: "Willow Francis", hasMembership: false },
      { name: "Kiran Foster", hasMembership: false },
      { name: "Noah Harper", hasMembership: true },
    ];
    const actual = createLineOrder(people);
    const expected = [
      "Jackson Read",
      "Ethan Hart",
      "Noah Harper",
      "Esme Day",
      "Willow Francis",
      "Kiran Foster",
    ];
    expect(actual).toEqual(expected);
  });
});
