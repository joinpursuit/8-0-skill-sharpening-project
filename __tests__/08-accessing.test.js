const {
  getFirstName,
  getLastName,
  getAddressStreet,
  getCountOfPhoneNumbers,
  getFirstPhoneNumber,
  getLastPhoneNumber,
  getFullName,
  getCityAndState,
  getFullAddress,
  getFlatObject,
} = require("../src/08-accessing");

// Inputs
const person = {
  names: {
    first: "Rachel",
    middle: "Eleanor",
    last: "Rojas",
  },
  address: {
    street: "697 Pine Drive",
    unit: "2A",
    city: "Staten Island",
    state: "NY",
    zip: "10306",
  },
  numbers: [7185550921, 7185558611],
};

const otherPerson = {
  names: {
    first: "Sergio",
    middle: "Reuben",
    last: "Burris",
  },
  address: {
    street: "47 Ocean Lane",
    unit: "9B",
    city: "Apex",
    state: "NC",
    zip: "27502",
  },
  numbers: [9195554309],
};

const anotherPerson = {
  names: {
    first: "Jack",
    middle: "Reuben",
    last: "Stein",
  },
  address: {
    street: "47 Ocean Ave",
    unit: "9B",
    city: "Apex",
    state: "NC",
    zip: "27502",
  },
  numbers: [9195554309],
  lovesViolin: true,
  isHappy: true,
  isConfused: false,
  favNums: [1, 2, 3, 4, 69, 100],
  social: null,
};

describe("getFirstName()", () => {
  test("should return the person's first name", () => {
    const actual = getFirstName(person);
    const expected = "Rachel";
    expect(actual).toEqual(expected);
  });

  test("should dynamically change depending on the input", () => {
    const actual = getFirstName(otherPerson);
    const expected = "Sergio";
    expect(actual).toEqual(expected);
  });
});

describe("getLastName()", () => {
  test("should", () => {
    const actual = getLastName(person);
    const expected = "Rojas";
    expect(actual).toEqual(expected);
  });

  test("should dynamically change depending on the input", () => {
    const actual = getLastName(otherPerson);
    const expected = "Burris";
    expect(actual).toEqual(expected);
  });
});

describe("getAddressStreet()", () => {
  test("should get the street address without the unit", () => {
    const actual = getAddressStreet(person);
    const expected = "697 Pine Drive";
    expect(actual).toEqual(expected);
  });

  test("should dynamically change depending on the input", () => {
    const actual = getAddressStreet(otherPerson);
    const expected = "47 Ocean Lane";
    expect(actual).toEqual(expected);
  });
});

describe("getCountOfPhoneNumbers()", () => {
  test("should get a count of how many phone numbers are listed", () => {
    const actual = getCountOfPhoneNumbers(person);
    const expected = 2;
    expect(actual).toEqual(expected);
  });

  test("should dynamically change depending on the input", () => {
    const actual = getCountOfPhoneNumbers(otherPerson);
    const expected = 1;
    expect(actual).toEqual(expected);
  });
});

describe("getFirstPhoneNumber()", () => {
  test("should return the first phone number listed", () => {
    const actual = getFirstPhoneNumber(person);
    const expected = 7185550921;
    expect(actual).toEqual(expected);
  });

  test("should dynamically change depending on the input", () => {
    const actual = getFirstPhoneNumber(otherPerson);
    const expected = 9195554309;
    expect(actual).toEqual(expected);
  });
});

describe("getLastPhoneNumber()", () => {
  test("should get the last phone number listed", () => {
    const actual = getLastPhoneNumber(person);
    const expected = 7185558611;
    expect(actual).toEqual(expected);
  });

  test("should dynamically change depending on the input", () => {
    const actual = getLastPhoneNumber(otherPerson);
    const expected = 9195554309;
    expect(actual).toEqual(expected);
  });
});

describe("getFullName()", () => {
  test("should return the first, middle, and last name of the person separated by spaces", () => {
    const actual = getFullName(person);
    const expected = "Rachel Eleanor Rojas";
    expect(actual).toEqual(expected);
  });

  test("should dynamically change depending on the input", () => {
    const actual = getFullName(otherPerson);
    const expected = "Sergio Reuben Burris";
    expect(actual).toEqual(expected);
  });
});

describe("getCityAndState()", () => {
  test("should return the city and state of the person's address, separated by a comma and space", () => {
    const actual = getCityAndState(person);
    const expected = "Staten Island, NY";
    expect(actual).toEqual(expected);
  });

  test("should dynamically change depending on the input", () => {
    const actual = getCityAndState(otherPerson);
    const expected = "Apex, NC";
    expect(actual).toEqual(expected);
  });
});

describe("getFullAddress()", () => {
  test("should return the full address of the person, formatted properly", () => {
    const actual = getFullAddress(person);
    const expected = "697 Pine Drive 2A, Staten Island, NY, 10306";
    expect(actual).toEqual(expected);
  });

  test("should dynamically change depending on the input", () => {
    const actual = getFullAddress(otherPerson);
    const expected = "47 Ocean Lane 9B, Apex, NC, 27502";
    expect(actual).toEqual(expected);
  });
});

describe("getFlatObject()", () => {
  test("should flatten all of the objects, but keep the numbers array", () => {
    const actual = getFlatObject(person);
    const expected = {
      first: "Rachel",
      middle: "Eleanor",
      last: "Rojas",
      street: "697 Pine Drive",
      unit: "2A",
      city: "Staten Island",
      state: "NY",
      zip: "10306",
      numbers: [7185550921, 7185558611],
    };
    expect(actual).toEqual(expected);
  });

  test("should dynamically change depending on the input", () => {
    const actual = getFlatObject(otherPerson);
    const expected = {
      first: "Sergio",
      middle: "Reuben",
      last: "Burris",
      street: "47 Ocean Lane",
      unit: "9B",
      city: "Apex",
      state: "NC",
      zip: "27502",
      numbers: [9195554309],
    };
    expect(actual).toEqual(expected);
  });

  test("should be dynamic for all situations depending on the input", () => {
    const actual = getFlatObject(anotherPerson);
    const expected = {
      first: "Jack",
      middle: "Reuben",
      last: "Stein",
      street: "47 Ocean Ave",
      unit: "9B",
      city: "Apex",
      state: "NC",
      zip: "27502",
      numbers: [9195554309],
      lovesViolin: true,
      isHappy: true,
      isConfused: false,
      favNums: [1, 2, 3, 4, 69, 100],
      social: null,
    };
    expect(actual).toEqual(expected);
  });
});
