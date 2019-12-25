import {
  SUBSTRACT_HEALTH_POINTS,
  SET_UNDERWATER_STAGE,
  SET_IS_GAME_PAUSED,
} from './actionTypes';

import reducer, { initialState } from './reducer';
import { Stage } from './types';

describe('underwater reducer', () => {
  it('should return initial state', () => {
    // @ts-ignore
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`should handle ${SUBSTRACT_HEALTH_POINTS} action type`, () => {
    expect(
      reducer(initialState, {
        type: SUBSTRACT_HEALTH_POINTS,
        payload: {
          value: 5,
        },
      })
    ).toEqual({
      ...initialState,
      healthPoints: 95,
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
});
