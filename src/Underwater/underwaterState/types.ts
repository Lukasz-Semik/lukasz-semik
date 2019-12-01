export enum GameState {
  Intro = 'intro',
  Starter = 'starter',
  Game = 'game',
  Pause = 'pause',
}

export interface State {
  gameState: GameState;
}
