import React from 'react';
import { render } from '@testing-library/react';

import { PaperCardElement } from './PaperCardElement';

describe('<PaperCardElement />', () => {
  it('should render children', () => {
    const { getByTestId } = render(
      <PaperCardElement isMounted>
        <div data-test="content">Content</div>
      </PaperCardElement>
    );

    expect(getByTestId('content')).toHaveTextContent('Content');
  });
});
