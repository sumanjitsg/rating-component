import { JSDOM } from "jsdom";
import { getByRole } from "@testing-library/dom";
import "@testing-library/jest-dom";

let screen: HTMLElement;

// todo: clean jsdom handle after each test. required?

beforeAll(async () => {
  const options = {
    contentType: "text/html",
  };

  const dom = await JSDOM.fromFile("src/index.html", options);

  screen = dom.window.document.body;
});

describe("Submit button", () => {
  test("should be in document", () => {
    const submitButton = getByRole(screen, "button", {
      name: /submit/i,
    });

    expect(submitButton).toBeInTheDocument();
  });

  test("should be disabled", () => {
    const submitButton = getByRole(screen, "button", {
      name: /submit/i,
    });

    expect(submitButton).toBeDisabled();
  });

  test.todo("should not receive focus");
  test.todo("should not call its click event handler on clicked");
  test.todo("should not dispatch submit event to the form on clicked");
});
