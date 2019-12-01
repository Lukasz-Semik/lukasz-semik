import React, { useEffect, useRef, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import { random } from 'lodash';

import { SwimmingWrapper, DropButton } from './styled';
import Satellites from './Satellites/Satellites';

import DropContainer from './DropContainer';

const Drop = ({ resetDrop }) => {
  const [isClicked, setIsClicked] = useState(false);

  const swimmingRef = useRef();
  const dropRef = useRef();

  const leftPosition = useMemo(() => random(5, 90), []);
  const delay = useMemo(() => random(0, 10, true), []);
  const dropSize = useMemo(() => random(25, 50), []);
  const maxOpacity = useMemo(() => (dropSize - 25) / 20, [dropSize]);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(swimmingRef.current, { top: '80%' })
      .to(dropRef.current, { opacity: 0, scale: 1.5, duration: 0.3, delay })
      .to(dropRef.current, { opacity: maxOpacity, scale: 1, duration: 0.3 })
      .to(swimmingRef.current, { top: '10%', ease: 'linear', duration: 8 })
      .to(swimmingRef.current, {
        top: 0,
        opacity: 0.3,
        ease: 'linear',
        duration: 1,
        onComplete: resetDrop,
      });
  }, [delay, dropSize, maxOpacity, resetDrop]);

  return (
    <SwimmingWrapper
      dropSize={dropSize}
      leftPosition={leftPosition}
      ref={swimmingRef}
    >
      {isClicked && <Satellites />}

      <DropButton
        dropSize={dropSize}
        ref={dropRef}
        onClick={() => setIsClicked(true)}
        isVisible={!isClicked}
        hasSparkle
      />
    </SwimmingWrapper>
  );
};

Drop.propTypes = {
  resetDrop: PropTypes.func.isRequired,
};

const render = renderProps => <Drop {...renderProps} />;
export default props => <DropContainer render={render} {...props} />;
