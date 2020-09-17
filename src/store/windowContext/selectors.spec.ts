import { mockAppState } from 'src/helpers/tests';

import { getIsWindowFocused } from './selectors';
import { mockWindowContextState } from './testHelpers';

describe('windowContext selectors', () => {
  describe('getIsWindowFocused', () => {
    it('should return proper value', () => {
      expect(getIsWindowFocused(mockAppState(mockWindowContextState()))).toBe(
        true
      );
    });
  });
});
