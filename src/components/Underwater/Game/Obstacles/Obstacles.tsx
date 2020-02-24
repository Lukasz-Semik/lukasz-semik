import React from 'react';
import { Obstacle } from './Obstacle';

const getShark = (index: number) => ({
  name: `shark_${index}`,
  width: 120,
  height: 70,
});

const getFish = (index: number) => ({
  name: `fish_${index}`,
  width: 80,
  height: 80,
});

const squid = { name: 'squid', width: 40, height: 120 };
const fishWide = { name: 'fish_wide', width: 120, height: 60 };
const batiscaf = { name: 'batiscaf', width: 100, height: 80 };

const obstacles = [
  getShark(1),
  getShark(2),
  getShark(3),
  getFish(1),
  getFish(2),
  squid,
  fishWide,
  batiscaf,
];

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
}: Props) => (
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
