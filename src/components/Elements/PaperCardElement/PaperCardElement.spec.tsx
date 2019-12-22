import React from 'react';
import { render } from '@testing-library/react';

import PaperCardElement from './PaperCardElement';

describe('<PaperCardElement />', () => {
  const { getByTestId } = render(
    <PaperCardElement isMounted>
      <div data-test="content">Content</div>
    </PaperCardElement>
  );

  it('should be selected by passed data-test id and invoke onClickSpy', () => {
    expect(getByTestId('content')).toHaveTextContent('Content');
  });
});
