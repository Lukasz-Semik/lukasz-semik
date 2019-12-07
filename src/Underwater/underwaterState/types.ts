export enum UnderwaterState {
  Intro = 'intro',
  Starter = 'starter',
  Loader = 'loader',
  Game = 'game',
}

export interface State {
  underwater: UnderwaterState;
}
