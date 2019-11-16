import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import SetupTest from 'src/components/SetupTest';

export default () => (
  <div>
    <FormattedMessage id="underwater.title" />
    <SetupTest />
  </div>
);
