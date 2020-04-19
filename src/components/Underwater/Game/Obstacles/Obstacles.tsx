import React from 'react';

import { Obstacle } from './Obstacle';
import { useItems } from './useItems';

interface Props {
  windowWidth: number;
  windowHeight: number;
  isGamePaused: boolean;
  onClick: () => void;
}

export const Obstacles = ({
  windowWidth,
  windowHeight,
  isGamePaused,
  onClick,
}: Props) => {
  const obstacles = useItems();

  return (
    <>
      {obstacles.map((obstacle, i) => (
        <Obstacle
          key={`obstacle-${i}`}
          windowWidth={windowWidth}
          windowHeight={windowHeight}
          isGamePaused={isGamePaused}
          onClick={onClick}
          {...obstacle}
        />
      ))}
    </>
  );
};
