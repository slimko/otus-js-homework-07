import { createListItem } from "./hw7";

describe("createListItem()", () => {
  let app;
  let input;
  let content;
  let button;

  beforeEach(() => {
    app = document.createElement("div");
    createListItem(app);
    input = app.querySelector("input");
    button = app.querySelector("button");
    content = app.querySelector(".content");
  });

  it("it is a function", () => {
    expect(createListItem).toBeInstanceOf(Function);
  });

  it("input created", () => {
    expect(input).toBeTruthy();
  });

  it("div content created", () => {
    expect(content).toBeTruthy();
  });

  it("button submit created", () => {
    expect(button).toBeTruthy();
  });
  it("button submit is hidden", () => {
    expect(button.hidden).toBeTruthy();
  });

  it("content block contains 3 paragraphs", () => {
    expect(content.childNodes.length === 3).toBeTruthy();
  });

  it("the button is visible if there is a value in the input field", () => {
    input.value = 123;
    input.dispatchEvent(new Event("input"));
    expect(button.hidden).toBeFalsy();
  });

  it("when you click on the button, a new paragraph is added containing the text from the input field", () => {
    expect(content.lastElementChild.innerText).not.toBe("New text");
    input.value = "New text";
    button.dispatchEvent(new Event("click"));
    expect(content.lastElementChild.outerHTML).toBe(`<p>New text</p>`);
  });

  it("if there are more than 5 paragraphs, the first one is deleted", () => {
    ["Str 1", "Str 2", "Str 3", "Str 4", "Str 5", "Str 6"].forEach((str) => {
      input.value = str;
      button.dispatchEvent(new Event("click"));
    });
    expect(content.innerHTML).toBe(
      "<p>Str 2</p><p>Str 3</p><p>Str 4</p><p>Str 5</p><p>Str 6</p>"
    );
  });
});
