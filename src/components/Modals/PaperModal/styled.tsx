import { rem } from 'polished';
import styled from 'styled-components';

import styles from 'src/styles';
import { ButtonElement } from 'src/components/Elements';

export const Button = styled(ButtonElement)`
  margin-bottom: ${rem(20)};
  font-size: ${rem(25)};
  font-weight: 700;
`;

export const Title = styled.h2.attrs({ 'data-test': 'pause-modal-title' })`
  margin-bottom: ${rem(30)};
  text-align: center;
  font-size: ${rem(50)};
  font-family: ${styles.fonts.uniq};
`;
