import IntlPolyfill from 'intl';
import 'intl/locale-data/jsonp/en';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import { configure } from '@testing-library/react';

configure({ testIdAttribute: 'data-test' });

const setupTests = () => {
  // https://formatjs.io/guides/runtime-environments/#server
  if (global.Intl) {
    Intl.NumberFormat = IntlPolyfill.NumberFormat;
    Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat;
  } else {
    // @ts-ignore
    global.Intl = IntlPolyfill;
  }
};

setupTests();
