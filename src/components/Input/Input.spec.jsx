import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { InputComponent } from ".";

describe("<InputComponent />", () => {
  it("should have value of searchValue", () => {
    const fn = jest.fn();

    render(
      <InputComponent
        handleChangeValue={fn}
        searchValue="Testing"
        placeholder="type your search"
      />
    );

    const input = screen.getByPlaceholderText(/type your search/i);

    expect(input).toBeInTheDocument();
    expect(input.value).toBe("Testing");
  });

  it("should call handleChange function on each key pressed", async () => {
    const fn = jest.fn();
    render(
      <InputComponent handleChangeValue={fn} placeholder="type your search" />
    );

    const input = screen.getByPlaceholderText(/type your search/i);
    const valueTyped = "the value";

    await userEvent.type(input, valueTyped);

    expect(input.value).toBe(valueTyped);
    expect(fn).toHaveBeenCalledTimes(valueTyped.length);
  });

  it("should match snapshot", () => {
    const fn = jest.fn();
    const { container } = render(
      <InputComponent
        handleChangeValue={fn}
        searchValue="Testing"
        placeholder="type your search"
      />
    );
    expect(container).toMatchSnapshot();
  });
});
