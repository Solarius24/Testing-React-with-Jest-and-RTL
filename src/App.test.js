import { render, screen, fireEvent } from "@testing-library/react";
import { logRoles } from "@testing-library/dom";
import App from "./App";

test("button has correct initial color and updates when clicked", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });
  expect(colorButton.textContent).toBe("Change to red");
});

test("button functionality switch between disabled and enabled", () => {
  render(<App />);
  const button = screen.getByRole("button");
  const checkBox = screen.getByRole("checkbox");
  fireEvent.click(checkBox);
  expect(button).toBeDisabled();

  fireEvent.click(checkBox)
  expect(button).toBeEnabled()
});
