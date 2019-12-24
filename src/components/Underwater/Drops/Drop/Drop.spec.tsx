import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TesterWrapper } from 'src/helpers/tests';

import { Drop } from './Drop';

describe('<Drop />', () => {
  it('should invoke passed function when clicked and show 4 satellites', () => {
    const onDropClickSpy = jest.fn();

    const { getByTestId, queryAllByTestId } = render(
      <TesterWrapper store={{ underwater: {} }}>
        <Drop
          resetDrop={jest.fn()}
          onDropClick={onDropClickSpy}
          dropSize={20}
          maxOpacity={1}
        />
      </TesterWrapper>
    );

    expect(queryAllByTestId('satellite')).toHaveLength(0);

    const dropButton = getByTestId('drop-button');

    expect(dropButton).toBeEnabled();
    userEvent.click(dropButton);
    expect(dropButton).toBeDisabled();
    expect(onDropClickSpy).toHaveBeenCalled();

    expect(queryAllByTestId('satellite')).toHaveLength(4);
  });
});
