import { render, fireEvent, screen } from "@testing-library/react";
import Signup from "./Signup";
import { expect } from "vitest";

test("on change event testin", () => {
  render(<Signup />);
  let inputValue = "tesst@gmail.com";
  let inputBox = screen.getByRole("emailbox");
  fireEvent.change(inputBox, { target: { value: inputValue } });
  expect(inputBox.value).toBe(inputValue);
});
test("renders 'Sign Up' text", () => {
  render(<Signup />);

  expect(screen.getByText("SignUp")).toBeInTheDocument();
});

test("renders a button with 'Sign Up' text", () => {
  render(<Signup />);

  expect(screen.getByRole("button", { name: "Sign up" })).toBeInTheDocument();
});
