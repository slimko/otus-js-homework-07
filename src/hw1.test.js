import { sum, multiplication, lengthCharacters, sumNumbers } from "./hw1";

describe("sum()", () => {
  const spy = jest.spyOn(console, "log");

  beforeEach(() => {
    sum(2, 2);
  });

  afterEach(() => {
    spy.mockReset();
  });

  it("call console.log", () => {
    expect(spy).toHaveBeenCalled();
  });

  it("result sum", () => {
    expect(spy).toHaveBeenCalledWith(4);
  });
});

describe("multiplication()", () => {
  const spy = jest.spyOn(console, "log");

  beforeEach(() => {
    multiplication(2, 2);
  });

  afterEach(() => {
    spy.mockReset();
  });

  it("call console.log", () => {
    expect(spy).toHaveBeenCalled();
  });

  it("result multiplication", () => {
    expect(spy).toHaveBeenCalledWith(4);
  });
});

describe("multiplication()", () => {
  const spy = jest.spyOn(console, "log");

  beforeEach(() => {
    multiplication(2, 2);
  });

  afterEach(() => {
    spy.mockReset();
  });

  it("call console.log", () => {
    expect(spy).toHaveBeenCalled();
  });

  it("result multiplication", () => {
    expect(spy).toHaveBeenCalledWith(4);
  });
});

describe("outputs the length of characters", () => {
  const spy = jest.spyOn(console, "log");

  beforeEach(() => {
    lengthCharacters("2", "2");
  });

  afterEach(() => {
    spy.mockReset();
  });

  it("call console.log", () => {
    expect(spy).toHaveBeenCalled();
  });

  it("result lengthCharacters()", () => {
    expect(spy).toHaveBeenCalledWith(2);
  });
});

describe("the sum of the digits of the entered number", () => {
  const windowPrompt = jest.spyOn(window, "prompt");
  const spy = jest.spyOn(console, "log");

  beforeEach(() => {
    windowPrompt.mockImplementation(() => "111");
    sumNumbers();
  });

  afterEach(() => {
    spy.mockReset();
    windowPrompt.mockReset();
  });

  it("call prompt()", () => {
    expect(windowPrompt).toHaveBeenCalled();
  });

  it("call console.log", () => {
    expect(spy).toHaveBeenCalled();
  });

  it("result sumNumbers()", () => {
    expect(spy).toHaveBeenCalledWith(3);
  });
});
