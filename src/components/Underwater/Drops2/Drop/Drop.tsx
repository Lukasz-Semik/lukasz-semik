import React, { useRef, useEffect, useState } from 'react';
import { Circle, Group } from 'react-konva';
import Konva from 'konva';
import { random } from 'lodash';

import styles from 'src/styles';

import { DropAnimation } from './dropAnimation';

interface Args {
  isFullyVisible?: boolean;
  cycle: number;
  windowWidth: number;
}

const maxDropSize = 50;

const generateAttributes = ({ isFullyVisible, cycle, windowWidth }: Args) => {
  const dropSize = random(25, maxDropSize);
  const scale = dropSize / maxDropSize;

  return {
    positionX: random(maxDropSize, windowWidth - maxDropSize),
    maxOpacity: isFullyVisible ? 1 : (dropSize - 25) / 20,
    cycle,
    dropSize,
    scale,
  };
};

interface Props {
  windowWidth: number;
  windowHeight: number;
  isFullyVisible?: boolean;
  onClick: () => void;
  onSwimEnd?: (isClicked: boolean) => void;
}

export const Drop = ({
  windowWidth,
  windowHeight,
  isFullyVisible,
  onClick,
  onSwimEnd,
}: Props) => {
  const [isClicked, setIsClicked] = useState(false);
  const [attributes, setAttributes] = useState(
    generateAttributes({ windowWidth, isFullyVisible, cycle: 0 })
  );

  const ref = useRef<Konva.Group>(null);

  const onDropSwimEnd = () => {
    setAttributes(
      generateAttributes({
        windowWidth,
        isFullyVisible,
        cycle: attributes.cycle + 1,
      })
    );
    if (onSwimEnd) {
      onSwimEnd(isClicked);
    }

    setIsClicked(false);
  };

  const onDropClick = () => {
    onClick();
    setIsClicked(true);
  };

  const { cycle, scale, maxOpacity } = attributes;
  const offset = attributes.dropSize / 2;

  useEffect(() => {
    if (ref.current) {
      setTimeout(() => {
        const animation = new DropAnimation(
          ref,
          onDropSwimEnd,
          maxOpacity,
          scale
        );
        animation.animate();
      }, random(1, 11, true) * 1000);
    }
    // effect only when cycle changed and on didMount
    // eslint-disable-next-line
  }, [cycle]);

  return (
    <Group
      ref={ref}
      offsetX={offset}
      offsetY={offset}
      width={50}
      height={50}
      y={windowHeight - 60}
      x={attributes.positionX}
      scaleX={0}
      scaleY={0}
      opacity={0}
      visible={!isClicked}
      onClick={onDropClick}
    >
      <Circle fill={styles.colors.dropLight} radius={25} />
      <Circle fill={styles.colors.dropDark} radius={20} />
      <Circle fill={styles.colors.dropLight} radius={5} x={10} y={-10} />
    </Group>
  );
};
