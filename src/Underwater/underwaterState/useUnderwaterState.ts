import { useStateValue } from './UnderwaterStateProvider';
import { GameState } from './types';
import { SET_GAME_STATE } from './actionTypes';

const useUnderwaterState = () => {
  // @ts-ignore TODO: resolve this place
  const [state, setState] = useStateValue();

  const setGameState = (newState: GameState) => {
    setState({ type: SET_GAME_STATE, payload: { newState } });
  };

  return {
    state,
    setGameState,
    setGameStateStarter: () => setGameState(GameState.Starter),
  };
};

export default useUnderwaterState;
