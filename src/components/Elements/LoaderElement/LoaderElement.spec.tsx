import React from 'react';
import { render } from '@testing-library/react';

import { TesterWrapper } from 'src/helpers/tests';

import { LoaderElement } from './LoaderElement';

describe('<LoaderElement />', () => {
  it('should render proeprly loader without text', () => {
    const { queryAllByTestId, queryByText } = render(
      <LoaderElement isVisible />
    );

    expect(queryAllByTestId('loader-circle')).toHaveLength(3);
    expect(queryByText('Loading')).toBeNull();
  });

  it('should render proeprly loader without text', () => {
    const { queryAllByTestId, queryAllByText } = render(
      <TesterWrapper>
        <LoaderElement hasText isVisible />
      </TesterWrapper>
    );

    expect(queryAllByTestId('loader-circle')).toHaveLength(3);
    expect(queryAllByText('Loading')).toHaveLength(1);
  });
});
