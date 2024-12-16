import { render } from "@testing-library/react";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { it } from "vitest";

it("renders Signup component", () => {
  render(<Signup />);
  expect(screen.getByText("SignUp")).toBeInTheDocument();
});
it("renders Signup component", () => {
  render(<Login />);
  expect(screen.getByText("SignUp")).toBeInTheDocument();
});
