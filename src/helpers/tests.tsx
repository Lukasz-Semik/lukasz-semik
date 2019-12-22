import React from 'react';
import { IntlProvider } from 'react-intl';

// @ts-ignore usually we don't want to import json
import messagess from 'src/intl/en.json';
import { UnderwaterStateProvider } from 'src/Underwater/underwaterState';

import { flattenMessages } from './intl';

interface Props {
  hasUnderwaterContext?: boolean;
  children: React.ReactNode | React.ReactNode[];
}

export const TesterWrapper = ({ hasUnderwaterContext, children }: Props) => {
  let wrapper = (
    <IntlProvider locale="en" messages={flattenMessages(messagess)}>
      {children}
    </IntlProvider>
  );

  if (hasUnderwaterContext) {
    wrapper = <UnderwaterStateProvider>{wrapper}</UnderwaterStateProvider>;
  }

  return wrapper;
};
