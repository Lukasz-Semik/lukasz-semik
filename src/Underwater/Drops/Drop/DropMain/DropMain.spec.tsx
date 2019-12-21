import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { UnderwaterStateProvider } from 'src/Underwater/underwaterState';

import DropMain from './DropMain';

describe('<DropMain />', () => {
  const onClickSpy = jest.fn();
  const onShowEndSpy = jest.fn();

  const { getByTestId } = render(
    <UnderwaterStateProvider>
      <DropMain onClick={onClickSpy} onShowEnd={onShowEndSpy} dropSize={30} />
    </UnderwaterStateProvider>
  );

  it('should invoke passed function when clicked and set disabled properly', () => {
    const button = getByTestId('drop-button');

    expect(button).toBeEnabled();
    userEvent.click(button);

    expect(button).toBeDisabled();

    expect(onClickSpy).toHaveBeenCalled();
  });
});
