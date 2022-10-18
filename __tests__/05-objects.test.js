const {
  createEmptyObject,
  createObjectWithValue,
  createObjectWithKey,
  createObjectWithKeyValuePair,
  getNameFromObject,
  getAgeFromObject,
  addValueToObject,
  addKeyToObject,
  addKeyValuePairToObject,
  deleteKeyFromObject,
} = require("../src/05-objects");

describe("createEmptyObject()", () => {
  test("should return an empty object", () => {
    const actual = createEmptyObject();
    const expected = {};
    expect(actual).toEqual(expected);
  });

  test("should return a new empty object each time function is called", () => {
    const first = createEmptyObject();
    const second = createEmptyObject();
    expect(first).toEqual(second);
    expect(first).not.toBe(second);
  })
});

describe("createObjectWithValue()", () => {
  test("should return an object the given value; the key can be anything", () => {
    const actual = createObjectWithValue("my value");
    const expected = "my value";
    expect(Object.values(actual)).toContain(expected);
  });
  test("should change dynamically depending on the inputs", () => {
    expect(Object.values(createObjectWithValue(true))).toContain(true);
    expect(Object.values(createObjectWithValue(10))).toContain(10);
    expect(Object.values(createObjectWithValue(null))).toContain(null);
  });
});

describe("createObjectWithKey()", () => {
  test("should create an object with the give key; the value can be anything", () => {
    const actual = createObjectWithKey("my key");
    const expected = "my key";
    expect(Object.keys(actual)).toContain(expected);
  });
  test("should change dynamically depending on the inputs", () => {
    expect(Object.keys(createObjectWithKey(1))).toContain("1");
    expect(Object.keys(createObjectWithKey(false))).toContain("false");
    expect(Object.keys(createObjectWithKey(undefined))).toContain("undefined");
  });
});

describe("createObjectWithKeyValuePair()", () => {
  test("should create an object with the given key-value pair", () => {
    const actual = createObjectWithKeyValuePair("key", "value");
    const expected = { key: "value" };
    expect(actual).toEqual(expected);
  });
  test("should change dynamically depending on the inputs", () => {
    expect(createObjectWithKeyValuePair("A", "B")).toEqual({ A: "B" });
    expect(createObjectWithKeyValuePair(1, 2)).toEqual({ 1: 2 });
    expect(createObjectWithKeyValuePair("left", "right")).toEqual({
      left: "right",
    });
  });
});

describe("getNameFromObject()", () => {
  test("should access the value of the `name` key from the given object", () => {
    const actual = getNameFromObject({ name: "Marshall" });
    const expected = "Marshall";
    expect(actual).toEqual(expected);
  });
  test("should change dynamically depending on the inputs", () => {
    expect(getNameFromObject({ name: "A" })).toEqual("A");
    expect(getNameFromObject({ name: 10 })).toEqual(10);
    expect(getNameFromObject({ name: null })).toEqual(null);
  });
});

describe("getAgeFromObject()", () => {
  test("should access the value of the `age` key from the given object", () => {
    const actual = getAgeFromObject({ age: 10 });
    const expected = 10;
    expect(actual).toEqual(expected);
  });
  test("should change dynamically depending on the inputs", () => {
    expect(getAgeFromObject({ age: "eleven" })).toEqual("eleven");
    expect(getAgeFromObject({ age: 99 })).toEqual(99);
    expect(getAgeFromObject({ age: undefined })).toEqual(undefined);
  });
});

describe("addValueToObject()", () => {
  test("should add a value to an existing object and then return the object; the key can be anything", () => {
    const actual = addValueToObject({ a: 10 }, 20);
    const expected = 20;
    expect(Object.values(actual)).toContain(expected);
  });
  test("should change dynamically depending on the inputs", () => {
    expect(Object.values(addValueToObject({ b: "C" }, "value"))).toContain(
      "value"
    );
    expect(Object.values(addValueToObject({ d: "element" }, true))).toContain(
      true
    );
    expect(Object.values(addValueToObject({}, null))).toContain(null);
  });
});

describe("addKeyToObject()", () => {
  test("should add a key to an existing object and then return the object; the value can be anything", () => {
    const actual = addKeyToObject({ a: 10 }, "my key");
    const expected = "my key";
    expect(Object.keys(actual)).toContain(expected);
  });
  test("should change dynamically depending on the inputs", () => {
    expect(Object.keys(addKeyToObject({}, "A"))).toContain("A");
    expect(Object.keys(addKeyToObject({ name: "Eloise" }, "age"))).toContain(
      "age"
    );
    expect(Object.keys(addKeyToObject({ true: false }, false))).toContain(
      "false"
    );
  });
});

describe("addKeyValuePairToObject()", () => {
  test("should add a key-value pair to an existing object and then return the object", () => {
    const key = "name";
    const value = "Opal";
    const actual = addKeyValuePairToObject({}, key, value);
    expect(actual.name).toEqual("Opal");
  });
  test("should change dynamically depending on the inputs", () => {
    const key = "age";
    const value = 21;
    const actual = addKeyValuePairToObject({}, key, value);
    expect(actual.age).toEqual(21);
  });
});

describe("deleteKeyFromObject()", () => {
  test("should remove a key from an object and then return the object", () => {
    const object = { name: "Opal", age: 21 };
    const actual = deleteKeyFromObject(object, "name");
    const expected = { age: 21 };
    expect(actual).toEqual(expected);
    expect(actual).toStrictEqual(object);
  });
  test("should change dynamically depending on the inputs", () => {
    const object = { key: "val", true: false };
    const actual = deleteKeyFromObject(object, "true");
    const expected = { key: "val" };
    expect(actual).toEqual(expected);
    expect(actual).toStrictEqual(object);
  });
});
