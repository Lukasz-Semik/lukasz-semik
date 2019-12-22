import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ButtonElement from './ButtonElement';

describe('<ButtonElement />', () => {
  const onClickSpy = jest.fn();

  const { getByTestId } = render(
    <ButtonElement data-test="button-element" onClick={onClickSpy} />
  );

  it('should be selected by passed data-test id and invoke onClickSpy', () => {
    const button = getByTestId('button-element');

    userEvent.click(button);
    expect(onClickSpy).toHaveBeenCalled();
  });
});
