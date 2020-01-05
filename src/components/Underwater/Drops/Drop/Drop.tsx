import React, { useRef, useState } from 'react';
import { Circle, Group } from 'react-konva';
import Konva from 'konva';

import styles from 'src/styles';

import { useDropAnimation } from './useDropAnimation';

interface Props {
  windowWidth: number;
  windowHeight: number;
  isFullyVisible?: boolean;
  onClick: () => void;
  onSwimEnd?: (isClicked: boolean) => void;
  index: number;
  isWindowFocused: boolean;
}

export const Drop = ({
  windowWidth,
  windowHeight,
  isFullyVisible,
  onClick,
  index,
  isWindowFocused,
}: Props) => {
  const [isClicked, setIsClicked] = useState(false);
  const dropId = `drop-${index}`;
  const ref = useRef<Konva.Group>(null);

  // TODO: handle onSwimEnd
  const onDropClick = () => {
    onClick();
    setIsClicked(true);
  };

  useDropAnimation({
    ref,
    windowWidth,
    windowHeight,
    isWindowFocused,
    dropId,
    isFullyVisible,
  });

  return (
    <Group
      ref={ref}
      width={50}
      height={50}
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
