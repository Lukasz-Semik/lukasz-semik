import { mockAppState } from 'src/helpers/tests';

import {
  getAppView,
  getIsSurfaceView,
  getIsUnderwaterView,
  getIsWindowFocused,
} from './selectors';
import { mockViewState } from './testHelpers';
import { View } from './types';

describe('view selectors', () => {
  describe('getIsWindowFocused', () => {
    it('should return proper value', () => {
      expect(getIsWindowFocused(mockAppState(mockViewState()))).toBe(true);
    });
  });

  describe('getAppView', () => {
    it('should return proper value', () => {
      expect(getAppView(mockAppState(mockViewState()))).toBe(View.Underwater);
    });
  });

  describe('getIsSurfaceView', () => {
    it('should return proper value', () => {
      expect(
        getIsSurfaceView(
          mockAppState(mockViewState({ appView: View.Underwater }))
        )
      ).toBe(false);

      expect(
        getIsSurfaceView(mockAppState(mockViewState({ appView: View.Surface })))
      ).toBe(true);
    });
  });

  describe('getIsUnderwaterView', () => {
    it('should return proper value', () => {
      expect(
        getIsUnderwaterView(
          mockAppState(mockViewState({ appView: View.Surface }))
        )
      ).toBe(false);

      expect(
        getIsUnderwaterView(
          mockAppState(mockViewState({ appView: View.Underwater }))
        )
      ).toBe(true);
    });
  });
});
