import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TesterWrapper } from 'src/helpers/tests';

import { DropMain } from './DropMain';

describe('<DropMain />', () => {
  it('should invoke passed function when clicked and set disabled properly', () => {
    const onClickSpy = jest.fn();
    const onShowEndSpy = jest.fn();

    const { getByTestId } = render(
      <TesterWrapper hasUnderwaterContext>
        <DropMain onClick={onClickSpy} onShowEnd={onShowEndSpy} dropSize={30} />
      </TesterWrapper>
    );

    const button = getByTestId('drop-button');

    expect(button).toBeEnabled();
    userEvent.click(button);
    expect(onClickSpy).toHaveBeenCalledTimes(1);
    expect(button).toBeDisabled();
    userEvent.click(button);
    expect(onClickSpy).toHaveBeenCalledTimes(1);
  });
});
