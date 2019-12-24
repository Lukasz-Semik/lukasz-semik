export enum Stage {
  Intro = 'intro',
  Starter = 'starter',
  Game = 'game',
}

export interface UnderwaterState {
  healthPoints: number;
  stage: Stage;
  isGamePaused: boolean;
}
