import { mockAppState } from 'src/helpers/tests';

import { mockUnderwaterState } from './testHelpers';

import {
  getIsGamePaused,
  getUnderwaterStage,
  getIsUnderwaterIntro,
  getIsUnderwaterStarter,
  getIsUnderwaterGame,
} from './selectors';
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
});