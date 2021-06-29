import {
  isRectangularTriangle,
  getLengthAndAreaCircle,
  quadraticEquation,
} from "./hw9";

describe("isRectangularTriangle()", () => {
  it("is a function", () => {
    expect(isRectangularTriangle).toBeInstanceOf(Function);
  });

  [
    [3, 4, 5, true],
    [12, 34, 5, false],
    [12, 15, 13, false],
  ].forEach(([a, b, c, res]) => {
    it(`determines if triangle with sides ${a}, ${b}, ${c} is a is a right triangle ${res}`, () => {
      expect(isRectangularTriangle(a, b, c)).toBe(res);
    });
  });
});

describe("getLengthAndAreaCircle()", () => {
  it("is a function", () => {
    expect(getLengthAndAreaCircle).toBeInstanceOf(Function);
  });

  [
    [12, 75.39822368615503, 452.3893421169302],
    [15, 94.24777960769379, 706.8583470577034],
    [55, 345.57519189487726, 9503.317777109125],
  ].forEach(([r, lenght, area]) => {
    it(`a circle with radius ${r} has a circumference ${lenght} and an area of a circle equal to ${area}`, () => {
      expect(getLengthAndAreaCircle(r)).toStrictEqual([lenght, area]);
    });
  });
});

describe("quadraticEquation()", () => {
  it("is a function", () => {
    expect(quadraticEquation).toBeInstanceOf(Function);
  });

  [
    [1, -1, -5, [2.79128784747792, -1.79128784747792]],
    [1, -4, 0, [4, 0]],
    [1, 2, 4, "No roots"],
    [1, -6, 9, [3]],
  ].forEach(([a, b, c, result]) => {
    it(`quadratic roots with coefficients ${a}, ${b} and ${c}`, () => {
      expect(quadraticEquation(a, b, c)).toStrictEqual(result);
    });
  });
});
