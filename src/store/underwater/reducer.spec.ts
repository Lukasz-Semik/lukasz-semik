import type { AnyAction } from 'redux';

import {
  ADD_SCORE,
  CHANGE_HEALTH_POINTS,
  RESET_GAME,
  SET_IS_GAME_PAUSED,
  SET_UNDERWATER_STAGE,
} from './actionTypes';
import reducer, { initialState } from './reducer';
import { Stage } from './types';

describe('underwater reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {} as AnyAction)).toEqual(initialState);
  });

  it(`should handle ${CHANGE_HEALTH_POINTS} action type`, () => {
    expect(
      reducer(initialState, {
        type: CHANGE_HEALTH_POINTS,
        payload: {
          value: -5,
        },
      })
    ).toEqual({
      ...initialState,
      healthPoints: 95,
    });
  });

  it(`should handle ${ADD_SCORE} action type`, () => {
    expect(
      reducer(initialState, {
        type: ADD_SCORE,
        payload: {
          value: 5,
        },
      })
    ).toEqual({
      ...initialState,
      score: 5,
    });
  });

  it(`should handle ${SET_UNDERWATER_STAGE} action type`, () => {
    expect(
      reducer(initialState, {
        type: SET_UNDERWATER_STAGE,
        payload: {
          stage: Stage.Game,
        },
      })
    ).toEqual({
      ...initialState,
      stage: Stage.Game,
    });
  });

  it(`should handle ${SET_IS_GAME_PAUSED} action type`, () => {
    expect(
      reducer(initialState, {
        type: SET_IS_GAME_PAUSED,
        payload: {
          isGamePaused: true,
        },
      })
    ).toEqual({
      ...initialState,
      isGamePaused: true,
    });
  });

  it(`should handle ${RESET_GAME} action type`, () => {
    expect(
      reducer(
        {
          ...initialState,
          isGamePaused: true,
          healthPoints: 30,
        },
        {
          type: RESET_GAME,
        }
      )
    ).toEqual({
      ...initialState,
      isGamePaused: false,
      healthPoints: 100,
    });
  });
});
