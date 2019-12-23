import { useStateValue } from './UnderwaterStateProvider';
import { UnderwaterState } from './types';
import {
  SET_UNDERWATER_STATE,
  SET_GAME_PAUSE,
  // SET_UNDERWATER_WINDOW_FOCUS,
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

  return {
    setUnderwaterIntro: () => {
      setUnderwaterState(UnderwaterState.Intro);

      if (state.isGamePaused) {
        setIsGamePaused(false);
      }
    },
    setUnderwaterStarter: () => {
      setUnderwaterState(UnderwaterState.Starter);
    },
    setUnderwaterGame: () => {
      setUnderwaterState(UnderwaterState.Game);
    },
    getIsUnderwaterIntro: () => state.underwater === UnderwaterState.Intro,
    getIsUnderwaterStarter: () => state.underwater === UnderwaterState.Starter,
    getIsUnderwaterGame: () => state.underwater === UnderwaterState.Game,

    getIsGamePaused: () => state.isGamePaused,
    setIsGamePaused: (isPaused: boolean) => setIsGamePaused(isPaused),
  };
};

export default useUnderwaterState;
