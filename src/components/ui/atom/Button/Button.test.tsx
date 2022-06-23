import * as React from "react";
import { Button } from ".";
import {
  afterEach,
  assert,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from "vitest";
import { fireEvent, render, screen } from "../../../../utils/testUtils";

describe("Test for the Button component", () => {
  beforeEach(() => {});

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("Test Button with no child and a label prop", async () => {
    render(<Button label="Test" onClick={() => {}} />);

    const button = screen.getByText(/Test/i);
    expect(button).toHaveTextContent("Test");
  });

  it("Fire event when button is clicked", async () => {
    const handleClick = vi.fn();
    render(<Button label="Test" onClick={handleClick} />);

    const button = screen.getByRole("button", { name: /Test/i });
    fireEvent.click(button);
    expect(handleClick).toBeCalledTimes(1);
  });
});
