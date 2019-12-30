import React, { useRef, useEffect, useState } from 'react';
import { times } from 'lodash';
import { Stage, Layer, Rect } from 'react-konva';
import Konva from 'konva';

import { Title } from '../Title/Title';
// import { IntroDrop } from '../Drops/IntroDrop/IntroDrop';
import { Starter } from '../Starter/Starter';
import { IntroDrop } from '../Drop/IntroDrop/IntroDrop';
import { random } from 'lodash';

interface Props {
  isIntro: boolean;
  isStarter: boolean;
}

export const Tester = ({ isIntro, isStarter }: Props) => {
  const [isClicked, setIsClicked] = useState();
  const ref = useRef();
  const ref2 = useRef();

  const a = async () => {
    const x = new Konva.Tween({
      node: ref.current,
      y: 0,
      duration: 5,
      onFinish: s => console.log('dsa', s),
    });

    x.play();
  };

  const b = () => {
    const x = new Konva.Tween({
      node: ref2.current,
      y: 0,
      duration: 5,
      onFinish: s => console.log('dsa', s),
    });

    x.play();
  };

  const c = () => {
    const x = new Konva.Tween({
      node: ref2.current,
      x: 100,
      duration: 5,
      onFinish: s => console.log('dsa', s),
    });

    x.play();
  };

  useEffect(() => {
    a();
    b();
  }, []);
  return (
    <>
      <Rect
        ref={ref}
        width={50}
        height={50}
        y={window.innerHeight - 50}
        x={random(30, window.innerWidth)}
        fill="green"
        onClick={() => {
          setIsClicked(true);
          c();
        }}
        opacity={isClicked ? 0 : 1}
      />

      <Rect
        ref={ref2}
        width={10}
        height={10}
        fill="red"
        opacity={isClicked ? 1 : 0}
        y={window.innerHeight - 50}
        x={0}
      />
    </>
  );
};
