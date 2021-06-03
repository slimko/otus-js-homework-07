import { getSum, multiplicationTable, average } from "./hw3";

describe("getSum()", () => {
  let spy = "";
  beforeEach(() => {
    spy = jest.spyOn(console, "log");
  });

  afterEach(() => {
    spy.mockRestore();
  });

  it("is a function", () => {
    expect(getSum).toBeInstanceOf(Function);
  });

  it(`the sum of all integers between 50 and 100`, () => {
    getSum();
    expect(console.log).toHaveBeenCalledWith(3825);
  });
});

describe("multiplicationTable()", () => {
  let spy = "";
  beforeEach(() => {
    spy = jest.spyOn(console, "log");
  });

  afterEach(() => {
    spy.mockRestore();
  });

  it("is a function", () => {
    expect(multiplicationTable).toBeInstanceOf(Function);
  });

  it(`print the multiplication table by 7`, () => {
    multiplicationTable();
    [
      "7 x 1 = 7",
      "7 x 2 = 14",
      "7 x 3 = 21",
      "7 x 4 = 28",
      "7 x 5 = 35",
      "7 x 6 = 42",
      "7 x 7 = 49",
      "7 x 8 = 56",
      "7 x 9 = 63",
    ].forEach((str) => {
      expect(console.log).toHaveBeenCalledWith(str);
    });
  });
});

describe("average()", () => {
  beforeEach(() => {
    jest.spyOn(console, "log");
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("is a function", () => {
    expect(average).toBeInstanceOf(Function);
  });

  it("call prompt()", () => {
    jest.spyOn(window, "prompt").mockReturnValue("111");
    average();
    expect(window.prompt).toHaveBeenCalled();
  });

  [
    [12, 6],
    [854, 427],
    [444, 222],
  ].forEach(([number, result]) => {
    it(`Print to the console the arithmetic mean of all odd numbers from 1 to ${number}`, () => {
      jest.spyOn(window, "prompt").mockReturnValue(number);
      average();
      expect(console.log).toHaveBeenCalledWith(result);
    });
  });
});
