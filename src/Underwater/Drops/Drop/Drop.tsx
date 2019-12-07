import React, { useEffect, useRef, useMemo, useState } from 'react';
import gsap from 'gsap';
import { random, floor } from 'lodash';

import { SwimmingWrapper, DropButton } from './styled';
import Satellites from './Satellites/Satellites';

import DropContainer, { RenderProps } from './DropContainer';

const BASE_ROAD_SPEED = 880;

const Drop = ({
  resetDrop,
  handleDropClick,
  isGameLoading,
  isGameRunning,
}: RenderProps) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const swimmingRef = useRef<HTMLDivElement>(null);
  const dropRef = useRef<HTMLButtonElement>(null);

  const leftPosition = useMemo(() => random(5, 90), []);
  const delay = useMemo(() => random(0, 10, true), []);
  const dropSize = useMemo(() => random(25, 50), []);
  const maxOpacity = useMemo(() => (isGameRunning ? 1 : (dropSize - 25) / 20), [
    isGameRunning,
    dropSize,
  ]);
  const mountingTl = useMemo(() => gsap.timeline(), []);

  const areSatellitesVisible = isGameLoading ? isMounted : isClicked;

  useEffect(() => {
    if (!swimmingRef.current || !dropRef.current) {
      return;
    }

    mountingTl
      .to(swimmingRef.current, { top: '80%' })
      .to(dropRef.current, { opacity: 0, scale: 1.5, duration: 0.3, delay })
      .to(dropRef.current, {
        opacity: maxOpacity,
        scale: 1,
        duration: 0.3,
        onComplete: () => {
          setIsMounted(true);
        },
      });

    return () => {
      mountingTl.kill();
    };

    // ONLY on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();

    if (isMounted && swimmingRef.current) {
      const windowHeight = window.innerHeight;

      const firstStageDuration = floor((windowHeight * 8) / BASE_ROAD_SPEED, 2);
      const secondStageDuration = floor(windowHeight / BASE_ROAD_SPEED, 2);

      tl.to(swimmingRef.current, {
        top: '10%',
        ease: 'linear',
        duration: firstStageDuration,
      }).to(swimmingRef.current, {
        top: 0,
        opacity: 0.3,
        ease: 'linear',
        duration: secondStageDuration,
        onComplete: resetDrop,
      });
    }

    return () => {
      tl.kill();
    };

    // ONLY after mounting animation
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMounted]);

  useEffect(() => {
    if (isGameLoading) {
      mountingTl.kill();
    }
  }, [isGameLoading, mountingTl]);

  return (
    <SwimmingWrapper
      dropSize={dropSize}
      leftPosition={leftPosition}
      ref={swimmingRef}
    >
      <>
        {areSatellitesVisible && <Satellites maxOpacity={maxOpacity} />}

        <DropButton
          dropSize={dropSize}
          ref={dropRef}
          onClick={() => {
            setIsClicked(true);
            handleDropClick();
          }}
          isVisible={!isClicked && !isGameLoading}
          hasSparkle
        />
      </>
    </SwimmingWrapper>
  );
};

const render = (renderProps: RenderProps) => <Drop {...renderProps} />;
export default () => <DropContainer render={render} />;
