import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import XButtonElement from './XButtonElement';

describe('<XButtonElement />', () => {
  const onClickSpy = jest.fn();

  const { getByTestId } = render(<XButtonElement onClick={onClickSpy} />);

  it('should invoke passed function when clicked', () => {
    const button = getByTestId('close-button');

    fireEvent.click(button);
    expect(onClickSpy).toHaveBeenCalled();
  });
});
