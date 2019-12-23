import React from 'react';
import { render } from '@testing-library/react';

import { TesterWrapper } from 'src/helpers/tests';

import { Satellites } from './Satellites';

describe('<Satellites />', () => {
  it('should render 4 satellites', () => {
    const { queryAllByTestId } = render(
      <TesterWrapper hasUnderwaterContext>
        <Satellites />
      </TesterWrapper>
    );

    const satellites = queryAllByTestId('satellite');

    expect(satellites).toHaveLength(4);
  });
});
