import { mockAppState } from 'src/helpers/tests';

import {
  getAppFutureView,
  getAppView,
  getIsViewMounted,
  getIsViewSet,
} from './selectors';
import { mockViewState } from './testHelpers';
import { View } from './types';

const state = mockAppState(mockViewState());

describe('view selectors', () => {
  describe('getAppView', () => {
    it('should return proper value', () => {
      expect(getAppView(state)).toBe(View.Underwater);
    });
  });

  describe('getAppFutureView', () => {
    it('should return proper value', () => {
      expect(getAppFutureView(state)).toBe(View.Underwater);
    });
  });

  describe('getIsViewSet', () => {
    it('should return proper value', () => {
      expect(getIsViewSet(View.Underwater, state)).toBe(true);
      expect(getIsViewSet(View.Surface, state)).toBe(false);
    });
  });

  describe('getIsViewMounted', () => {
    it('should return false if provided view is not a current on or future one', () => {
      expect(getIsViewMounted(View.Surface, state)).toBe(false);
    });

    it('should return true if provided view is current one', () => {
      expect(getIsViewMounted(View.Underwater, state)).toBe(true);
    });

    it('should return true if provided view is future one', () => {
      expect(
        getIsViewMounted(
          View.Underwater,
          mockAppState(
            mockViewState({
              appView: View.Surface,
              appFutureView: View.Underwater,
            })
          )
        )
      ).toBe(true);
    });
  });
});
