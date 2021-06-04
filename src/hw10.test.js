import { regDate, regEmail, regPhone } from "./hw10";

describe("regDate()", () => {
  it("is a function", () => {
    expect(regDate).toBeInstanceOf(Function);
  });

  [
    ["123123", false],
    ["12.06.2020", true],
    ["12-05-2021", true],
  ].forEach(([str, result]) => {
    it(`assertion that string ${str} date is ${result}`, () => {
      expect(regDate(str)).toBe(result);
    });
  });
});

describe("regMail()", () => {
  it("is a function", () => {
    expect(regEmail).toBeInstanceOf(Function);
  });

  [
    ["mail@mail", false],
    ["mail@m13.ru", true],
    ["asdad@123123.com", true],
    ["1231233", false],
  ].forEach(([str, result]) => {
    it(`assertion that string ${str} email is ${result}`, () => {
      expect(regEmail(str)).toBe(result);
    });
  });
});

describe("regPhone()", () => {
  it("is a function", () => {
    expect(regPhone).toBeInstanceOf(Function);
  });

  [
    ["+78908765438", true],
    ["mail@m13.ru", false],
    ["+8(345)3456544", true],
    ["1231233", false],
  ].forEach(([str, result]) => {
    it(`assertion that string ${str} phone is ${result}`, () => {
      expect(regPhone(str)).toBe(result);
    });
  });
});
