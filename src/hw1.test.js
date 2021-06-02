import { sum, multiplication, lengthCharacters, sumNumbers } from "./hw1";

describe("sum()", () => {
  let spy = "";
  beforeEach(() => {
    spy = jest.spyOn(console, "log");
  });

  afterEach(() => {
    spy.mockRestore();
  });

  it("is a function", () => {
    expect(sum).toBeInstanceOf(Function);
  });

  [
    [1, 1, 2],
    [6, 0, 6],
    [-5, 2, -3],
  ].forEach(([a, b, result]) => {
    it(`the sum of ${a} and ${b} is ${result}`, () => {
      sum(a, b);
      expect(console.log).toHaveBeenCalledWith(result);
    });
  });
});

describe("multiplication()", () => {
  let spy = "";
  beforeEach(() => {
    spy = jest.spyOn(console, "log");
  });

  afterEach(() => {
    spy.mockRestore();
  });

  it("is a function", () => {
    expect(multiplication).toBeInstanceOf(Function);
  });

  [
    [1, 1, 1],
    [6, 0, 0],
    [-5, 2, -10],
  ].forEach(([a, b, result]) => {
    it(`the result of multiplying ${a} by ${b} is ${result}`, () => {
      multiplication(a, b);
      expect(console.log).toHaveBeenCalledWith(result);
    });
  });
});

describe("outputs the length of characters", () => {
  let spy = "";
  beforeEach(() => {
    spy = jest.spyOn(console, "log");
  });

  afterEach(() => {
    spy.mockRestore();
  });

  it("is a function", () => {
    expect(lengthCharacters).toBeInstanceOf(Function);
  });

  [
    ["Ivan", "Nadya", 9],
    ["anton", "mouse", 10],
    ["string", "12345678", 14],
  ].forEach(([a, b, result]) => {
    it(`the result of multiplying ${a} by ${b} is ${result}`, () => {
      lengthCharacters(a, b);
      expect(console.log).toHaveBeenCalledWith(result);
    });
  });
});

describe("the sum of the digits of the entered number", () => {
  let spy = "";
  beforeEach(() => {
    spy = jest.spyOn(console, "log");
  });

  afterEach(() => {
    spy.mockRestore();
  });

  it("is a function", () => {
    expect(lengthCharacters).toBeInstanceOf(Function);
  });

  it("call prompt()", () => {
    jest.spyOn(window, "prompt").mockReturnValue("111");
    sumNumbers();
    expect(window.prompt).toHaveBeenCalled();
  });

  [
    ["123", 6],
    ["111", 3],
    ["345", 12],
  ].forEach(([a, result]) => {
    it(`the sum of the digits of the number ${a} is ${result}`, () => {
      jest.spyOn(window, "prompt").mockReturnValue(`${a}`);
      sumNumbers();
      expect(console.log).toHaveBeenCalledWith(result);
    });
  });
});
