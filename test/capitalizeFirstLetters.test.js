const assert = require("assert");
const capitalizeFirstLetters = require("../capitalizeFirstLetters");

describe("capitalizeFirstLetters", () => {
  it("is a function accepting one argument", () => {
    assert.strictEqual(typeof capitalizeFirstLetters, "function");
    assert.strictEqual(capitalizeFirstLetters.length, 1);
  });

  it("transform sentence correctly", () => {
    assert.strictEqual(
      capitalizeFirstLetters("i am learning TDD"),
      "I Am Learning TDD"
    );
  });

  it("work with 1 letter", () => {
    assert.strictEqual(capitalizeFirstLetters("i"), "I");
  });
  it("work with empty string", () => {
    assert.strictEqual(capitalizeFirstLetters(""), "");
  });
});
