"use strict";

//JSON

const obj = {
  number: 1,
  string: "string",
  array: [1, 2, false],
  boolean: true,
  null: null,
  plainObject: { prop: 10 },
  // метод не => JSON
  getNumber() {
    return this.number;
  },
  // undefined не => JSON
  undefined: undefined,
};

// obj => JSON серіалізація
const obfJson = JSON.stringify(obj);

// JSON => obj десеріалізація
const parseObj = JSON.parse(obfJson);
