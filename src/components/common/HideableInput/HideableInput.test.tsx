import * as React from "react";
import { HideableInput } from ".";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "../../../utils/testUtils";
import { Home } from "../../../Features/Home";

describe("Test for the Button component", () => {
  beforeEach(() => {});

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("Hiddleble component should start visible", async () => {
    render(<Home />);

    const hiddleableInput = screen.getByTestId(/hiddleableInput/i);

    expect(hiddleableInput.className.match(/colapsed/i)).toBeFalsy();
  });

  it("Hiddleble component should colapsed when clicked", async () => {
    render(<Home />);

    const hiddleableInput = screen.getByTestId(/hiddleableInput/i);
    const collpaseButton = screen.getByTestId(/collapse-button/i);

    expect(hiddleableInput.className.match(/colapsed/i)).toBeFalsy();
    fireEvent.click(collpaseButton);

    expect(hiddleableInput.className.match(/colapsed/i)).toBeTruthy();
  });
});
