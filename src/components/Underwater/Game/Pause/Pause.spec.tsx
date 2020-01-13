import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TesterWrapper } from 'src/helpers/tests';

import { Pause } from './Pause';

describe('<Pause />', () => {
  it('should properly open modal if game became paused and handle reseting drops', () => {
    const resetDropsSpy = jest.fn();

    const { getByText, queryByTestId, rerender } = render(
      <TesterWrapper store={{ underwater: {}, view: {} }}>
        <Pause isGameOver={false} resetDrops={resetDropsSpy} />
      </TesterWrapper>
    );

    expect(queryByTestId('pause-modal-title')).toBeNull();

    rerender(
      <TesterWrapper store={{ underwater: {}, view: {} }}>
        <Pause isGameOver resetDrops={resetDropsSpy} />
      </TesterWrapper>
    );

    expect(queryByTestId('pause-modal-title')).toBeDefined();
    userEvent.click(getByText('Restart'));
    expect(resetDropsSpy).toHaveBeenCalledTimes(1);
  });
});
