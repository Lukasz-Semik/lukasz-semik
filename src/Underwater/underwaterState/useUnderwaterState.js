import { useStateValue } from './UnderwaterStateProvider';
import { gameState } from './constants';
import { SET_GAME_STATE } from './actionTypes';

const useUnderwaterState = () => {
  const [state, setState] = useStateValue();

  const setGameState = newState => {
    setState({ type: SET_GAME_STATE, payload: { newState } });
  };

  return {
    state,
    setGameState,
    setGameStateStarter: () => setGameState(gameState.starter),
  };
};

export default useUnderwaterState;
