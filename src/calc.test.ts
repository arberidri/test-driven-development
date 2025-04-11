import { sub, sum } from "./calc";

describe("adding up numbers", () => {
  test("sum of zeros is zero", () => {
    expect(sum(0, 0)).toBe(0);
  });
  test("sum of one and two is three", () => {
    expect(sum(1, 2)).toBe(3);
  });
  test("sum of number and its negative counterpart is zero", () => {
    expect(sum(25, -25)).toBe(0);
  });
});

describe("adding up numbers - special cases", () => {
  test("sum of a large positive and a large negative number is zero", () => {
    expect(sum(1_000_000, -1_000_000)).toBe(0);
  });
  test("sum of two negative numbers", () => {
    expect(sum(-3, -7)).toBe(-10);
  });
  test("sum of a number and zero is the number itself", () => {
    expect(sum(42, 0)).toBe(42);
  });
});

describe("subtracting numbers - parametric tests", () => {
  test.each([
    [10, 5, 5],
    [-10, -5, -5],
    [0, 10, -10],
    [100, 50, 50],
    [-50, 50, -100],
  ])("sub(%f, %f) == %f", (a, b, expected) => {
    expect(sub(a, b)).toBe(expected);
  });
});

describe("subtracting numbers - special cases", () => {
  test("subtracting a number from itself results in zero", () => {
    expect(sub(123, 123)).toBe(0);
  });
  test("subtracting zero from a number results in the number itself", () => {
    expect(sub(99, 0)).toBe(99);
  });
  test("subtracting a negative number is equivalent to addition", () => {
    expect(sub(10, -5)).toBe(15);
  });
});
