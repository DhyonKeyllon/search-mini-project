import React from 'react';
const { render, screen, fireEvent } = require('@testing-library/react');

import { ButtonComponent } from '.';

describe('<ButtonComponent />', () => {
  it('should render the button with text "Load more posts"', () => {
    const fn = jest.fn();
    render(<ButtonComponent text="Load more posts" onClick={fn} />);
    expect.assertions(1);

    const button = screen.getByRole('button', { name: /load more posts/i });
    expect(button).toBeInTheDocument();
  });

  it('should call function on click button', () => {
    const fn = jest.fn();
    render(<ButtonComponent text="Load more posts" onClick={fn} />);

    const button = screen.getByRole('button', { name: /load more posts/i });

    fireEvent.click(button);

    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('should be disabled when disabled is true', () => {
    const fn = jest.fn();
    render(
      <ButtonComponent text="Load more posts" disabled={true} onClick={fn} />,
    );

    const button = screen.getByRole('button', { name: /load more posts/i });

    expect(button).toBeDisabled();
  });

  it('should be enabled when disabled is false', () => {
    const fn = jest.fn();
    render(
      <ButtonComponent text="Load more posts" disabled={false} onClick={fn} />,
    );

    const button = screen.getByRole('button', { name: /load more posts/i });

    expect(button).toBeEnabled();
  });

  it('should match snapshot', () => {
    const fn = jest.fn();
    const { container } = render(
      <ButtonComponent text="Load more posts" disabled={false} onClick={fn} />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
