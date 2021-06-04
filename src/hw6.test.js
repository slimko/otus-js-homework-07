import { diff, isWord, pow } from "./hw6";

describe("diff()", () => {
  it("it is a function", () => {
    expect(diff).toBeInstanceOf(Function);
  });

  [
    ["1", "6", 5],
    ["-5", "-10", 5],
    ["90", "82", 8],
  ].forEach(([a, b, result]) => {
    it(`the difference between parameters ${a} and ${b} is ${result}`, () => {
      expect(diff(a, b)).toBe(result);
    });
  });
});

describe("isWord()", () => {
  it("it is a function", () => {
    expect(isWord).toBeInstanceOf(Function);
  });

  [
    ["", false],
    ["однослово", true],
    ["два слова", false],
  ].forEach(([str, result]) => {
    it(`returns ${result} for "${str}"`, () => {
      expect(isWord(str)).toBe(result);
    });
  });
});

describe("pow()", () => {
  it("it is a function", () => {
    expect(pow).toBeInstanceOf(Function);
  });

  [
    [2, 2, 4],
    [5, 3, 125],
    [-6, 3, -216],
  ].forEach(([a, x, result]) => {
    it(`${a} to the power of ${x} equals ${result}`, () => {
      expect(pow(a, x)).toBe(result);
    });
  });
});
