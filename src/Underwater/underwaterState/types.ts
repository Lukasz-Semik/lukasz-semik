export enum UnderwaterState {
  Intro = 'intro',
  Starter = 'starter',
  Game = 'game',
}

export interface State {
  underwater: UnderwaterState;
  isGamePaused: boolean;
  isUnderwaterWindowFocused: boolean;
}
