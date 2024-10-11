import { render, screen } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  it("renders headline", () => {
    render(<App title="React" />);

    screen.debug();
  });

  it("renders header 1", () => {
    render(<App />)

    const headerOne = screen.getByRole("heading", { level: 1 })

    expect(headerOne).toHaveTextContent(
        "My Mock API"
    );
  })
});