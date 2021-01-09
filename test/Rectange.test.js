const assert = require("assert");
const Rectangle = require("../Rectangle");

describe("Rectangle", () => {
  it("renvoie true si cote de meme longueur", () => {
    const plop = new Rectangle(4, 4);
    assert.strictEqual(plop.isSquare(), true);
  });
  it("renvoie false si cote pas de meme  longueur", () => {
    const plop = new Rectangle(4, 12);
    assert.strictEqual(plop.isSquare(), false);
  });
  it("renvoie l'air du rect ", () => {
    const plop = new Rectangle(4, 12);
    assert.strictEqual(plop.getArea(), 48);
  });
  it("renvoie le perimetre", () => {
    const plop = new Rectangle(6, 15);
    assert.strictEqual(plop.getPerimeter(), 42);
  });
});
