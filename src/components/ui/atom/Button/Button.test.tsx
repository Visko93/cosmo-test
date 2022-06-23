import { Button } from ".";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
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
  it("Test Button with a text Child", async () => {
    render(<Button onClick={() => {}}>Test</Button>);

    const button = screen.getByText(/Test/i);
    expect(button).toHaveTextContent("Test");
  });

  it("Should apply custom properties using rest properties", async () => {
    render(
      <Button onClick={() => {}} {...{ placeholder: "Test", disabled: true }}>
        Test
      </Button>
    );

    const buttonPlaceholder = screen.getByPlaceholderText(/Test/i);
    expect(buttonPlaceholder).toHaveTextContent("Test");

    const isDisablled = screen.getByText(/Test/i);
    expect(isDisablled.ariaDisabled).toBeTruthy();
  });

  it("Fire event when button is clicked", async () => {
    const handleClick = vi.fn();
    render(<Button label="Test" onClick={handleClick} />);

    const button = screen.getByRole("button", { name: /Test/i });
    fireEvent.click(button);
    expect(handleClick).toBeCalledTimes(1);
  });
});
