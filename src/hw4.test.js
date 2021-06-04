import { setAgeToUser, cloneUser, propsObject } from "./hw4";

describe("setAgeToUser()", () => {
  const user = {
    name: "John",
  };

  it("is a function", () => {
    expect(setAgeToUser).toBeInstanceOf(Function);
  });

  it("call prompt()", () => {
    jest.spyOn(window, "prompt").mockReturnValue("111");
    setAgeToUser(user);
    expect(window.prompt).toHaveBeenCalled();
  });

  [
    ["12", { name: "John", age: 12 }],
    ["54", { name: "John", age: 54 }],
    ["234", { name: "John", age: 234 }],
  ].forEach(([number, result]) => {
    it(`add the age property ${number} to the user object`, () => {
      jest.spyOn(window, "prompt").mockReturnValue(number);
      expect(setAgeToUser(user)).toMatchObject(result);
    });
  });
});

describe("cloneUser()", () => {
  it("is a function", () => {
    expect(cloneUser).toBeInstanceOf(Function);
  });

  [
    [
      { name: "John", age: "20" },
      { name: "John", age: "20", role: "admin" },
    ],
    [
      { name: "Mike", age: "54" },
      { name: "Mike", age: "54", role: "admin" },
    ],
    [
      { name: "Luiza", age: "56" },
      { name: "Luiza", age: "56", role: "admin" },
    ],
  ].forEach(([useeer, result]) => {
    // eslint-disable-next-line max-len
    it(`Create a copy of the user object named admin. Add a role field with the value 'admin' to the new object`, () => {
      expect(cloneUser(useeer)).toMatchObject(result);
    });
  });
});

describe("propsObject()", () => {
  it("is a function", () => {
    expect(propsObject).toBeInstanceOf(Function);
  });

  [
    [{ name: "John" }, ["John", undefined, undefined]],
    [{ name: "Mike", age: "54" }, ["Mike", "54", undefined]],
    [{ name: "Luiza", age: "56", role: "admin" }, ["Luiza", "56", "admin"]],
  ].forEach(([obj, result]) => {
    it(`it destructures object ${obj.name} and returns result ${result}`, () => {
      expect(propsObject(obj)).toStrictEqual(result);
    });
  });
});
