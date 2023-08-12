import { render, screen, fireEvent } from "@testing-library/react";
import { logRoles } from "@testing-library/dom";
import App from "./App";

// test("button has correct initial color and updates when clicked", () => {
//   render(<App />);
//   const colorButton = screen.getByRole("button", { name: "Change to blue" });
//   expect(colorButton).toHaveStyle({ backgroundColor: "red" });
//   fireEvent.click(colorButton);
//   expect(colorButton).toHaveStyle({ backgroundColor: "blue" });
//   expect(colorButton.textContent).toBe("Change to red");
// });

test("button functionality switch between disabled and enabled", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", {name:"Change to blue"});
  const checkBox = screen.getByRole("checkbox", {name:"Disable Button"});

  fireEvent.click(checkBox);
  expect(colorButton).toBeDisabled();
  expect(colorButton).toHaveStyle({backgroundColor:"grey"})

  fireEvent.click(checkBox)
  expect(colorButton).toBeEnabled()
  expect(colorButton).toHaveStyle({backgroundColor:"red"})
});

test("Clicked disabled button has gray background and reverse to blue", ()=>{
  render(<App />);
  const colorButton = screen.getByRole("button", {name:"Change to blue"});
  const checkBox = screen.getByRole("checkbox", {name:"Disable Button"});

  fireEvent.click(colorButton)

  fireEvent.click(checkBox)
  expect(colorButton).toHaveStyle({backgroundColor:"grey"})

  fireEvent.click(checkBox)
  expect(colorButton).toHaveStyle({backgroundColor:"blue"})
})

