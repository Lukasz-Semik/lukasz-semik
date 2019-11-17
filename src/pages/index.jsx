import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import Drop from 'src/components/Drops/Drop';

export default () => (
  <div>
    <FormattedMessage id="underwater.title" />
    <Drop />
  </div>
);
