import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TesterWrapper } from 'src/helpers/tests';

import { Satellites } from './Satellites';

describe('<Satellites />', () => {
  it('should render 4 satellites', () => {
    const onSateliteClickSpy = jest.fn();
    const renderIndicatorSpy = jest.fn();

    const { queryAllByTestId } = render(
      <TesterWrapper store={{ underwater: {} }}>
        <Satellites
          onSateliteClick={onSateliteClickSpy}
          renderIndicator={renderIndicatorSpy}
        />
      </TesterWrapper>
    );

    const satellites = queryAllByTestId('satellite');

    expect(satellites).toHaveLength(4);
    userEvent.click(satellites[0]);
    expect(onSateliteClickSpy).toHaveBeenCalledWith(2);
    expect(renderIndicatorSpy).toHaveBeenCalledWith(2);
    userEvent.click(satellites[1]);
    expect(onSateliteClickSpy).toHaveBeenCalledWith(3);
    expect(renderIndicatorSpy).toHaveBeenCalledWith(3);
    userEvent.click(satellites[2]);
    expect(onSateliteClickSpy).toHaveBeenCalledWith(4);
    expect(renderIndicatorSpy).toHaveBeenCalledWith(4);
    userEvent.click(satellites[3]);
    expect(onSateliteClickSpy).toHaveBeenCalledWith(5);
    expect(renderIndicatorSpy).toHaveBeenCalledWith(5);
  });
});
