import { useStateValue } from './UnderwaterStateProvider';
import { UnderwaterState } from './types';
import {
  SET_UNDERWATER_STATE,
  SET_GAME_PAUSE,
  SET_UNDERWATER_WINDOW_FOCUS,
} from './actionTypes';

const useUnderwaterState = () => {
  // @ts-ignore TODO: resolve this place
  const [state, setState] = useStateValue();

  const setUnderwaterState = (newState: UnderwaterState) => {
    setState({ type: SET_UNDERWATER_STATE, payload: { newState } });
  };

  const setIsGamePaused = (isGamePaused?: boolean) => {
    setState({ type: SET_GAME_PAUSE, payload: { isGamePaused } });
  };

  const setIsUndewaterWindowFocused = (isFocused: boolean) => {
    setState({ type: SET_UNDERWATER_WINDOW_FOCUS, payload: { isFocused } });
  };

  const resetGame = () => {
    setUnderwaterState(UnderwaterState.Loader);
    setIsGamePaused(false);
  };

  return {
    setUnderwaterState,
    underwater: state.underwater,
    setUnderwaterIntro: () => {
      setUnderwaterState(UnderwaterState.Intro);

      if (state.isGamePaused) {
        setIsGamePaused(false);
      }
    },
    setUnderwaterStarter: () => {
      setUnderwaterState(UnderwaterState.Starter);
    },
    setUnderwaterLoader: () => {
      setUnderwaterState(UnderwaterState.Loader);
    },
    setUnderwaterGame: () => {
      setUnderwaterState(UnderwaterState.Game);
    },
    getIsUnderwaterIntro: () => state.underwater === UnderwaterState.Intro,
    getIsUnderwaterStarter: () => state.underwater === UnderwaterState.Starter,
    getIsUnderwaterLoader: () => state.underwater === UnderwaterState.Loader,
    getIsUnderwaterGame: () => state.underwater === UnderwaterState.Game,
    getIsGamePaused: () => state.isGamePaused,
    setIsGamePaused: (isPaused: boolean) => setIsGamePaused(isPaused),
    setIsUndewaterWindowFocused: (isFocused: boolean) =>
      setIsUndewaterWindowFocused(isFocused),
    getIsUnderwaterWindowFocused: () => state.isUnderwaterWindowFocused,
    resetGame,
  };
};

export default useUnderwaterState;
