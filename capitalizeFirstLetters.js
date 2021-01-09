const assert = require("assert");

const capitalizeFirstLetters = (sentence) => {};

assert.strictEqual(typeof capitalizeFirstLetters, "function");
assert.strictEqual(capitalizeFirstLetters.length, 1);
assert.strictEqual(capitalizeFirstLetters("i am learning TDD"), "I Am Learning TDD");
assert.strictEqual(capitalizeFirstLetters("i"), "I");
assert.strictEqual(capitalizeFirstLetters(""), "");

