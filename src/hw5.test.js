import { sum, newArr, minAndMaxEl } from "./hw5";

describe("sum()", () => {
  beforeEach(() => {
    jest.spyOn(console, "log");
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("is a function", () => {
    expect(sum).toBeInstanceOf(Function);
  });

  [
    [[1, 2, 3], 6],
    [[4, 5, 1], 10],
    [[3, 3, 3], 9],
  ].forEach(([array, result]) => {
    it(`the sum of all the elements ${array.join(
      ","
    )} in the array is ${result}`, () => {
      sum(array);
      expect(console.log).toHaveBeenCalledWith(result);
    });
  });
});

describe("newArr()", () => {
  it("is a function", () => {
    expect(newArr).toBeInstanceOf(Function);
  });

  [
    [
      [1, 2, 3],
      [2, 4, 6],
    ],
    [
      [4, 5, 1],
      [8, 10, 2],
    ],
    [
      [3, 3, 3],
      [6, 6, 6],
    ],
  ].forEach(([array, newArray]) => {
    it(`each element of the array ${array.join(
      ","
    )} will be twice the size of the element of the original array`, () => {
      expect(newArr(array)).toStrictEqual(newArray);
    });
  });
});

describe("minAndMaxEl()", () => {
  beforeEach(() => {
    jest.spyOn(console, "log");
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("is a function", () => {
    expect(minAndMaxEl).toBeInstanceOf(Function);
  });

  [
    [
      [1, 2, 3, 4],
      [1, 4],
    ],
    [
      [4, 5, 1, 12, 44],
      [1, 44],
    ],
    [
      [3, 3, 3, 33, 44, 0],
      [0, 44],
    ],
    [
      [1, 1],
      [1, 1],
    ],
  ].forEach(([array, result]) => {
    it(`the smallest and largest elements of the array [${array.join(
      ","
    )}] are equal [${result.join(",")}]`, () => {
      minAndMaxEl(array);
      expect(console.log).toHaveBeenCalledWith(result);
    });
  });
});
