import { mockAppState } from 'src/helpers/tests';

import {
  getHealthPoints,
  getIsGamePaused,
  getIsUnderwaterGame,
  getIsUnderwaterIntro,
  getIsUnderwaterStarter,
  getScore,
  getUnderwaterStage,
} from './selectors';
import { mockUnderwaterState } from './testHelpers';
import { Stage } from './types';

describe('underwater selectors', () => {
  describe('getIsGamePaused', () => {
    it('should return proper value from state', () => {
      expect(
        getIsGamePaused(
          mockAppState(mockUnderwaterState({ isGamePaused: true }))
        )
      ).toBe(true);
    });
  });

  describe('getUnderwaterStage', () => {
    it('should return proper value from state', () => {
      expect(
        getUnderwaterStage(
          mockAppState(mockUnderwaterState({ stage: Stage.Starter }))
        )
      ).toBe(Stage.Starter);
    });
  });

  describe('getIsUnderwaterIntro', () => {
    it('should return proper value from state', () => {
      expect(
        getIsUnderwaterIntro(
          mockAppState(mockUnderwaterState({ stage: Stage.Intro }))
        )
      ).toBe(true);

      expect(
        getIsUnderwaterIntro(
          mockAppState(mockUnderwaterState({ stage: Stage.Starter }))
        )
      ).toBe(false);
    });
  });

  describe('getIsUnderwaterStarter', () => {
    it('should return proper value from state', () => {
      expect(
        getIsUnderwaterStarter(
          mockAppState(mockUnderwaterState({ stage: Stage.Starter }))
        )
      ).toBe(true);

      expect(
        getIsUnderwaterStarter(
          mockAppState(mockUnderwaterState({ stage: Stage.Intro }))
        )
      ).toBe(false);
    });
  });

  describe('getIsUnderwaterGame', () => {
    it('should return proper value from state', () => {
      expect(
        getIsUnderwaterGame(
          mockAppState(mockUnderwaterState({ stage: Stage.Game }))
        )
      ).toBe(true);

      expect(
        getIsUnderwaterGame(
          mockAppState(mockUnderwaterState({ stage: Stage.Intro }))
        )
      ).toBe(false);
    });
  });

  describe('getHealthPoints', () => {
    it('should return proper value from state', () => {
      expect(
        getHealthPoints(mockAppState(mockUnderwaterState({ healthPoints: 30 })))
      ).toBe(30);
    });
  });

  describe('getScore', () => {
    it('should return proper value from state', () => {
      expect(getScore(mockAppState(mockUnderwaterState({ score: 2 })))).toBe(2);
    });
  });
});
