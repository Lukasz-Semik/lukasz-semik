export enum GameState {
  Intro = 'intro',
  Starter = 'starter',
  Loader = 'loader',
  Game = 'game',
  Pause = 'pause',
}

export interface State {
  gameState: GameState;
}
