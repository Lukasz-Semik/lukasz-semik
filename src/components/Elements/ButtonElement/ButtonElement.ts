import styled from 'styled-components';
import { rem } from 'polished';

const ButtonElement = styled.button`
  font-size: ${rem(35)};
  color: grey;
  transition: color 0.3s ease;

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background-color: grey;
    transform: scale(0);
    transition: transform 0.3s ease, background-color 0.3s ease;
  }

  &:hover {
    color: black;

    &::after {
      background-color: black;
      transform: scale(1);
    }
  }
`;

export default ButtonElement;
