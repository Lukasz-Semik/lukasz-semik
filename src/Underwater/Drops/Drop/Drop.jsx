import React, { useEffect, useRef, useMemo, useState } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { random } from 'lodash';

import { styleCircle } from 'src/styles/helpers';
import styles from 'src/styles';

const Wrapper = styled.button`
  ${({ dropSize }) => styleCircle(dropSize)};
  position: absolute;
  top: 80%;
  left: ${({ leftPosition }) => leftPosition}%;
  opacity: 0;
  background-color: ${styles.colors.dropDark};
  border: 5px solid ${styles.colors.dropLight};
  transform: scale(0);

  &::after {
    ${styleCircle(10)};
    content: '';
    position: absolute;
    left: 30%;
    bottom: 15%;
    display: block;
    background-color: ${styles.colors.dropLight};
  }
`;

const Drop = () => {
  const [isPreparing, setIsPreparing] = useState(false);
  const ref = useRef();
  /* eslint-disable react-hooks/exhaustive-deps */
  const leftPosition = useMemo(() => random(5, 90), [isPreparing]);
  const delay = useMemo(() => random(0, 10, true), [isPreparing]);
  const dropSize = useMemo(() => random(25, 50), [isPreparing]);
  /* eslint-enable */
  const maxOpacity = useMemo(() => (dropSize - 25) / 20, [dropSize]);

  useEffect(() => {
    const tl = gsap.timeline({
      repeat: -1,
      onComplete: () => setIsPreparing(true),
    });

    tl.to(ref.current, { top: '80% ' })
      .to(ref.current, { opacity: 0, scale: 1.5, duration: 0.3, delay })
      .to(ref.current, { opacity: maxOpacity, scale: 1, duration: 0.3 })
      .to(ref.current, { top: '10%', ease: 'linear', duration: 8 })
      .to(ref.current, { top: 0, opacity: 0.3, ease: 'linear', duration: 1 });
  }, [delay, maxOpacity]);

  useEffect(() => {
    if (isPreparing) {
      setIsPreparing(false);
    }
  }, [isPreparing]);

  return <Wrapper dropSize={dropSize} leftPosition={leftPosition} ref={ref} />;
};

export default Drop;
