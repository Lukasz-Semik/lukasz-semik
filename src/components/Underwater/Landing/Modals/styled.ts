import { rem } from 'polished';
import styled from 'styled-components';

import styles from 'src/styles';
import { ButtonElement } from 'src/components/Elements';

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${rem(25)};
`;

export const Button = styled(ButtonElement)`
  font-weight: 700;
  font-size: ${rem(27)};

  @media ${styles.breakpoints.smUp} {
    font-size: ${rem(35)};
  }
`;

export const Text = styled.div`
  margin: ${rem(15)} 0;
  text-align: center;
  color: ${styles.colors.grey};
`;

export const CenterButton = styled.div`
  display: flex;
  justify-content: center;
`;
