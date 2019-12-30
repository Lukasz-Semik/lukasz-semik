import { mockStore, findAction } from 'src/helpers/tests';

import {
  substractHealthPoints,
  setIsGamePaused,
  setUnderwaterStage,
  setUnderwaterIntro,
  setUnderwaterStarter,
  setUnderwaterGame,
  resetGame,
  addScore,
} from './actions';
import {
  SUBSTRACT_HEALTH_POINTS,
  SET_UNDERWATER_STAGE,
  SET_IS_GAME_PAUSED,
  RESET_GAME,
  ADD_SCORE,
} from './actionTypes';
import { Stage } from './types';
import { mockUnderwaterState } from './testHelpers';

describe('underwater actions creators', () => {
  describe('basic actions creators', () => {
    const store = mockStore(mockUnderwaterState());

    afterEach(() => {
      store.clearActions();
    });

    test('substractHealthPoints', () => {
      store.dispatch(substractHealthPoints(5));

      expect(findAction(store, SUBSTRACT_HEALTH_POINTS)).toEqual({
        type: SUBSTRACT_HEALTH_POINTS,
        payload: { value: 5 },
      });
    });

    test('addScore', () => {
      store.dispatch(addScore(5));

      expect(findAction(store, ADD_SCORE)).toEqual({
        type: ADD_SCORE,
        payload: { value: 5 },
      });
    });

    test('setIsGamePaused', () => {
      store.dispatch(setIsGamePaused(true));

      expect(findAction(store, SET_IS_GAME_PAUSED)).toEqual({
        type: SET_IS_GAME_PAUSED,
        payload: { isGamePaused: true },
      });
    });

    test('setUnderwaterStage', () => {
      store.dispatch(setUnderwaterStage(Stage.Intro));

      expect(findAction(store, SET_UNDERWATER_STAGE)).toEqual({
        type: SET_UNDERWATER_STAGE,
        payload: { stage: Stage.Intro },
      });
    });
  });

  describe('setUnderwaterIntro', () => {
    it('should dispatch proper actions', () => {
      const store = mockStore(mockUnderwaterState());

      store.dispatch(setUnderwaterIntro());

      expect(findAction(store, SET_UNDERWATER_STAGE)).toEqual({
        type: SET_UNDERWATER_STAGE,
        payload: { stage: Stage.Intro },
      });
    });
  });

  describe('setUnderwaterStarter', () => {
    it('should dispatch proper actions', () => {
      const store = mockStore(mockUnderwaterState());

      store.dispatch(setUnderwaterStarter());

      expect(findAction(store, SET_UNDERWATER_STAGE)).toEqual({
        type: SET_UNDERWATER_STAGE,
        payload: { stage: Stage.Starter },
      });
    });
  });

  describe('setUnderwaterGame', () => {
    it('should dispatch proper actions', () => {
      const store = mockStore(mockUnderwaterState());

      store.dispatch(setUnderwaterGame());

      expect(findAction(store, RESET_GAME)).toEqual({
        type: RESET_GAME,
      });
      expect(findAction(store, SET_UNDERWATER_STAGE)).toEqual({
        type: SET_UNDERWATER_STAGE,
        payload: { stage: Stage.Game },
      });
    });
  });

  describe('resetGame', () => {
    it('should dispatch proper actions', () => {
      const store = mockStore(mockUnderwaterState());

      store.dispatch(resetGame());

      expect(findAction(store, RESET_GAME)).toEqual({
        type: RESET_GAME,
      });
    });
  });
});
