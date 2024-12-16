import { render, screen } from "@testing-library/react";
import Login from "./Login"; // Ensure this path matches your project structure
import { it } from "vitest";

it("renders the Login component", () => {
  render(<Login />);
  expect(screen.getByText("Login")).toBeInTheDocument();
});
