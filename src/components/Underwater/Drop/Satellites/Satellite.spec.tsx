import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TesterWrapper } from 'src/helpers/tests';

import { Satellite } from './Satellite';

describe('<Satellite />', () => {
  it('should remove satellite when clicked', () => {
    const onClickSpy = jest.fn();
    const renderIndicatorSpy = jest.fn();

    const { getByTestId, queryByTestId } = render(
      <TesterWrapper store={{ underwater: {} }}>
        <Satellite
          index={0}
          counterRotation={-180}
          onClick={onClickSpy}
          renderIndicator={renderIndicatorSpy}
        />
      </TesterWrapper>
    );

    const satellite = getByTestId('satellite');

    expect(satellite).toBeDefined();
    userEvent.click(satellite);
    expect(queryByTestId('satellite')).not.toBeVisible();
    expect(onClickSpy).toHaveBeenCalledTimes(1);
    expect(renderIndicatorSpy).toHaveBeenCalledTimes(1);
  });
});
