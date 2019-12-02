export enum UnderwaterState {
  Intro = 'intro',
  Starter = 'starter',
  Loader = 'loader',
  Game = 'game',
  Pause = 'pause',
}

export interface State {
  underwater: UnderwaterState;
}
