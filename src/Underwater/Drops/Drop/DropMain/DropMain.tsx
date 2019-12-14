import React, { useEffect, useRef, useMemo, useState } from 'react';
import gsap from 'gsap';
import { random } from 'lodash';

import { DropButton } from '../styled';
import useGamePause from '../useGamePause';

interface Props {
  onClick: () => void;
  onShowEnd: () => void;
  dropSize: number;
  maxOpacity?: number;
  isForcedToHide?: boolean;
}

const DropMain = ({
  onClick,
  onShowEnd,
  dropSize,
  maxOpacity,
  isForcedToHide,
}: Props) => {
  const [isClicked, setIsClicked] = useState(false);

  const dropRef = useRef<HTMLButtonElement>(null);

  const delay = useMemo(() => random(0, 10, true), []);
  const tl = useMemo(() => gsap.timeline(), []);

  useGamePause(tl);

  useEffect(() => {
    if (!dropRef.current) {
      return;
    }

    tl.to(dropRef.current, { opacity: 0, scale: 1.5, duration: 0.3, delay }).to(
      dropRef.current,
      {
        opacity: maxOpacity,
        scale: 1,
        duration: 0.3,
        onComplete: onShowEnd,
      }
    );

    return () => {
      tl.kill();
    };

    // ONLY on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isForcedToHide) {
      tl.kill();
    }
  }, [isForcedToHide, tl]);

  return (
    <DropButton
      dropSize={dropSize}
      ref={dropRef}
      onClick={() => {
        setIsClicked(true);
        onClick();
      }}
      isVisible={!isClicked && !isForcedToHide}
      hasSparkle
    />
  );
};

export default DropMain;
