import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TesterWrapper } from 'src/helpers/tests';

import { PauseModal } from './PauseModal';

describe('<PauseModal />', () => {
  it('should render modal and properly act when game is not over', () => {
    const resumeGameSpy = jest.fn();
    const restartGameSpy = jest.fn();
    const backToIntroSpy = jest.fn();

    const { getByTestId, getByText } = render(
      <TesterWrapper>
        <PauseModal
          resumeGame={resumeGameSpy}
          restartGame={restartGameSpy}
          backToIntro={backToIntroSpy}
          isGameOver={false}
          isWindowResized={false}
        />
      </TesterWrapper>
    );

    expect(getByTestId('pause-modal-title')).toHaveTextContent('Pause');

    userEvent.click(getByText('Resume'));
    expect(resumeGameSpy).toHaveBeenCalledTimes(1);

    userEvent.click(getByText('Restart'));
    expect(restartGameSpy).toHaveBeenCalledTimes(1);

    userEvent.click(getByText('Back to intro'));
    expect(backToIntroSpy).toHaveBeenCalledTimes(1);
  });

  it('should render modal and properly act when game is over', () => {
    const resumeGameSpy = jest.fn();
    const restartGameSpy = jest.fn();
    const backToIntroSpy = jest.fn();

    const { getByTestId, getByText, queryByText } = render(
      <TesterWrapper withModalRoot>
        <PauseModal
          resumeGame={resumeGameSpy}
          restartGame={restartGameSpy}
          backToIntro={backToIntroSpy}
          isWindowResized={false}
          isGameOver
        />
      </TesterWrapper>
    );

    expect(getByTestId('pause-modal-title')).toHaveTextContent('Game over');

    expect(queryByText('Resume')).toBeNull();

    userEvent.click(getByText('Restart'));
    expect(restartGameSpy).toHaveBeenCalledTimes(1);

    userEvent.click(getByText('Back to intro'));
    expect(backToIntroSpy).toHaveBeenCalledTimes(1);
  });
});
