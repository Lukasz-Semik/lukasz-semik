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
    setGameState,
    gameState: state.gameState,
    setGameStateIntro: () => setGameState(GameState.Intro),
    setGameStateStarter: () => setGameState(GameState.Starter),
    setGameStateLoader: () => setGameState(GameState.Loader),
    getIsGameStateIntro: () => state.gameState === GameState.Intro,
    getIsGameStateStarter: () => state.gameState === GameState.Starter,
    getIsGameStateLoader: () => state.gameState === GameState.Loader,
  };
};

export default useUnderwaterState;
