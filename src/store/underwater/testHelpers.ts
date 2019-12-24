import { UnderwaterState, Stage } from './types';

export const mockUnderwaterState = (state: Partial<UnderwaterState> = {}) => ({
  underwater: {
    healthPoints: 100,
    stage: Stage.Intro,
    isGamePaused: false,
    ...state,
  },
});
