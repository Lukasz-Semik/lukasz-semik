import React from 'react';
import { Obstacle } from './Obstacle';

export const Obstacles = ({ windowWidth, windowHeight, isGamePaused }) => {
  return (
    <>
      <Obstacle
        windowWidth={windowWidth}
        windowHeight={windowHeight}
        isGamePaused={isGamePaused}
      />
    </>
  );
};
