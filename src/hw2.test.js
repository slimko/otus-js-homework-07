import { greatest, numberToMonth, circleInSquare } from "./hw2";

describe("greatest(a,b)", () => {
  let spy = "";
  beforeEach(() => {
    spy = jest.spyOn(console, "log");
  });

  afterEach(() => {
    spy.mockRestore();
  });

  it("is a function", () => {
    expect(greatest).toBeInstanceOf(Function);
  });

  [
    [1, 2, 2],
    [6, 0, 6],
    [-5, 2, 2],
  ].forEach(([a, b, result]) => {
    // eslint-disable-next-line max-len
    it(`compares numbers ${a} and ${b} and returns the largest number ${result}`, () => {
      greatest(a, b);
      expect(console.log).toHaveBeenCalledWith(result);
    });
  });
});

describe("numberToMonth()", () => {
  let spy = "";
  beforeEach(() => {
    spy = jest.spyOn(console, "log");
  });

  afterEach(() => {
    spy.mockRestore();
  });

  it("is a function", () => {
    expect(numberToMonth).toBeInstanceOf(Function);
  });

  [
    [1, "Январь"],
    [2, "Февраль"],
    [3, "Март"],
    [4, "Апрель"],
    [5, "Май"],
    [6, "Июнь"],
    [7, "Июль"],
    [8, "Август"],
    [9, "Сентябрь"],
    [10, "Октябрь"],
    [11, "Ноябрь"],
    [12, "Декабрь"],
  ].forEach(([number, nameMonth]) => {
    it(`Returns month ${nameMonth} for number ${number}`, () => {
      jest.spyOn(window, "prompt").mockReturnValue(`${number}`);
      numberToMonth();
      expect(console.log).toHaveBeenCalledWith(nameMonth);
    });
  });
});

describe("circleInSquare()", () => {
  let spy = "";
  beforeEach(() => {
    spy = jest.spyOn(console, "log");
  });

  afterEach(() => {
    spy.mockRestore();
  });

  it("is a function", () => {
    expect(circleInSquare).toBeInstanceOf(Function);
  });

  [
    [20, 90, true],
    [5, 34, true],
    [24, 6, false],
    [3, 2, true],
  ].forEach(([areaCircle, areaSquare, result]) => {
    // eslint-disable-next-line max-len
    it(`Does a circle of area ${areaCircle} fit into a square of area ${areaSquare}?`, () => {
      expect(circleInSquare(areaCircle, areaSquare)).toBe(result);
    });
  });
});
