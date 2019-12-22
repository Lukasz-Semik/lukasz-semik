import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import XButtonElement from './XButtonElement';

describe('<XButtonElement />', () => {
  const onClickSpy = jest.fn();

  const { getByTestId } = render(<XButtonElement onClick={onClickSpy} />);

  it('should invoke passed function when clicked', () => {
    const button = getByTestId('close-button');

    userEvent.click(button);
    expect(onClickSpy).toHaveBeenCalled();
  });
});
