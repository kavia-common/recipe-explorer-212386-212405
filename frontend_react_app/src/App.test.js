import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Recipe Explorer header", () => {
  render(<App />);
  expect(screen.getByText(/Recipe Explorer/i)).toBeInTheDocument();
  expect(screen.getByText(/Recipe Deck/i)).toBeInTheDocument();
});
