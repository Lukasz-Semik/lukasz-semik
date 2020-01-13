import styled from 'styled-components';
import { rem } from 'polished';
import styles from 'src/styles';

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${rem(25)};
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
