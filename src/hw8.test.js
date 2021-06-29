import { getDay, diffMin, diffDate } from "./hw8";

describe("getDay()", () => {
  it("is a function", () => {
    expect(getDay).toBeInstanceOf(Function);
  });

  it("call prompt()", () => {
    jest.spyOn(window, "prompt").mockReturnValue("111");
    getDay();
    expect(window.prompt).toHaveBeenCalled();
  });

  [
    ["31.05.2021", "Понедельник"],
    ["01.06.2021", "Вторник"],
    ["5.06.2021", "Суббота"],
  ].forEach(([day, result]) => {
    it(`for the date ${day} the day of the week is ${result}`, () => {
      jest.spyOn(window, "prompt").mockReturnValue(day);
      expect(getDay()).toBe(result);
    });
  });
});

describe("diffMin()", () => {
  beforeEach(() => {
    jest.spyOn(console, "log");
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("is a function", () => {
    expect(diffMin).toBeInstanceOf(Function);
  });

  [
    ["8:00", 480],
    ["8:10", 490],
    ["2:15", 135],
  ].forEach(([time, expectedMinutes]) => {
    it(`calls console.log with number of minutes from day start at ${time}`, () => {
      const [hours, minutes] = time.split(":").map(Number);
      jest.spyOn(Date.prototype, "getHours").mockImplementation(() => hours);
      jest
        .spyOn(Date.prototype, "getMinutes")
        .mockImplementation(() => minutes);
      diffMin();
      expect(console.log).toHaveBeenCalledWith(expectedMinutes);
    });
  });
});

describe("diffDate()", () => {
  it("is a function", () => {
    expect(diffDate).toBeInstanceOf(Function);
  });

  [
    ["12.13.1890", "21.02.1990", "21.02.1990"],
    ["12.13.1891", "21.02.1991", "21.02.1991"],
    ["21.02.1992", "12.13.1892", "21.02.1992"],
  ].forEach(([personOne, personTwo, young]) => {
    it(`among people with dates of birth ${personOne} and ${personTwo}, a is considered young ${young}`, () => {
      expect(diffDate(personOne, personTwo)).toBe(young);
    });
  });
});
