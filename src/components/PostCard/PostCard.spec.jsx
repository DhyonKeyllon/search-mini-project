import React from 'react';

import { render, screen } from '@testing-library/react';

import { PostCardComponent } from '.';
import { postCardPropsMock } from './mock';

const props = postCardPropsMock;

describe('<PostCardComponent />', () => {
  it('should render PostCard correctly', () => {
    render(<PostCardComponent {...props} />);

    expect(screen.getByAltText(props.title)).toHaveAttribute(
      'src',
      props.cover,
    );

    expect(
      screen.getByRole('heading', { name: props.title }),
    ).toBeInTheDocument();

    expect(screen.getByText('body 1')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = render(<PostCardComponent {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
