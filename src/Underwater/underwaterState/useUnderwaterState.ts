import { useStateValue } from './UnderwaterStateProvider';
import { UnderwaterState } from './types';
import { SET_UNDERWATER_STATE, SET_GAME_PAUSE } from './actionTypes';

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
    setUnderwaterState,
    underwater: state.underwater,
    setUnderwaterIntro: () => setUnderwaterState(UnderwaterState.Intro),
    setUnderwaterStarter: () => setUnderwaterState(UnderwaterState.Starter),
    setUnderwaterLoader: () => setUnderwaterState(UnderwaterState.Loader),
    setUnderwaterGame: () => setUnderwaterState(UnderwaterState.Game),
    getIsUnderwaterIntro: () => state.underwater === UnderwaterState.Intro,
    getIsUnderwaterStarter: () => state.underwater === UnderwaterState.Starter,
    getIsUnderwaterLoader: () => state.underwater === UnderwaterState.Loader,
    getIsUnderwaterGame: () => state.underwater === UnderwaterState.Game,
    getIsGamePaused: () => state.isGamePaused,
    setIsGamePaused: (isGamePaused: boolean) => setIsGamePaused(isGamePaused),
  };
};

export default useUnderwaterState;
