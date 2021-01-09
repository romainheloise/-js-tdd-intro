const assert = require("assert");

const capitalizeFirstLetters = (sentence) => {
  return sentence
    .split(" ")
    .map((word) => {
      return word.length > 0 ? word[0].toUpperCase() + word.slice(1) : "";
    })
    .join(" ");
};

assert.strictEqual(typeof capitalizeFirstLetters, "function");
assert.strictEqual(capitalizeFirstLetters.length, 1);
assert.strictEqual(
  capitalizeFirstLetters("i am learning TDD"),
  "I Am Learning TDD"
);
assert.strictEqual(capitalizeFirstLetters("i"), "I");
assert.strictEqual(capitalizeFirstLetters(""), "");
