import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TesterWrapper } from 'src/helpers/tests';

import { Satellite } from './Satellite';

describe('<Satellite />', () => {
  it('should remove satellite when clicked', () => {
    const { getByTestId, queryByTestId } = render(
      <TesterWrapper store={{ underwater: {} }}>
        <Satellite index={0} />
      </TesterWrapper>
    );

    const satellite = getByTestId('satellite');

    expect(satellite).toBeDefined();
    userEvent.click(satellite);
    expect(queryByTestId('satellite')).not.toBeVisible();
  });
});
