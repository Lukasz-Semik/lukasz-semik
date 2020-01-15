import React from 'react';
import { render } from '@testing-library/react';

import { SlidingInBouncingElement } from './SlidingInBouncingElement';

describe('<SlidingInBouncingElement />', () => {
  it('should render children', () => {
    const { getByTestId } = render(
      <SlidingInBouncingElement position="left">
        <div data-test="content">Content</div>
      </SlidingInBouncingElement>
    );

    expect(getByTestId('content')).toHaveTextContent('Content');
  });
});
