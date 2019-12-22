import React from 'react';
import { render } from '@testing-library/react';

import SlidingInElement from './SlidingInElement';

describe('<SlidingInElement />', () => {
  it('should render children', () => {
    const { getByTestId } = render(
      <SlidingInElement position="left">
        <div data-test="content">Content</div>
      </SlidingInElement>
    );

    expect(getByTestId('content')).toHaveTextContent('Content');
  });
});
