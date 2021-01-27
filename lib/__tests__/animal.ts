import { Animal } from "../animal";

const animal = new Animal();
test("bark", () => {
  expect(animal.bark()).toBe("bark");
});
