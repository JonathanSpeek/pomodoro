import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders time and buttons", () => {
  const { getByText } = render(<App />);
  const time = getByText(/25:00/i);
  const startButton = getByText(/START/i);
  const resetButton = getByText(/RESET/i);
  expect(time).toBeInTheDocument();
  expect(startButton).toBeInTheDocument();
  expect(resetButton).toBeInTheDocument();
});
