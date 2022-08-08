import { JSDOM } from "jsdom";
import { getByRole } from "@testing-library/dom";
import "@testing-library/jest-dom";

let screen: HTMLElement;

beforeAll(() => {
  const options = {
    contentType: "text/html",
  };

  return JSDOM.fromFile("src/index.html", options).then((dom) => {
    screen = dom.window.document.body;
  });
});

test("Submit button should be in document", () => {
  const submitButton = getByRole(screen, "button", {
    name: /submit/i,
  });
  expect(submitButton).toBeInTheDocument();
});
