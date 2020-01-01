import React, { useRef, useEffect, useState } from 'react';
import { Circle, Group } from 'react-konva';
import Konva from 'konva';
import { random } from 'lodash';

// import { useWindow } from 'src/hooks/useWindow';
import styles from 'src/styles';

import { DropAnimation } from './dropAnimation';
import { DropContainer } from './DropContainer';

export const DropUnwrapped = ({ windowHeight, windowWidth }) => {
  const [attribtues, setAttributes] = useState({
    positionX: random(30, windowWidth - 30),
    cycle: 0,
  });

  const ref = useRef<Konva.Group>((undefined as unknown) as null);

  const onSwimEnd = () => {
    setAttributes({
      positionX: random(30, windowWidth - 30),
      cycle: attribtues.cycle + 1,
    });
  };

  useEffect(() => {
    setTimeout(() => {
      if (ref.current) {
        const animation = new DropAnimation(ref, onSwimEnd);
        animation.animate();
      }
    }, random(1, 1, true) * 1000);
  }, [attribtues.cycle]);

  return (
    <Group
      ref={ref}
      offsetX={25 / 2}
      offsetY={25 / 2}
      width={50}
      height={50}
      y={windowHeight - 50}
      x={attribtues.positionX}
      scaleX={0}
      scaleY={0}
      opacity={0}
      fill="#000"
    >
      <Circle fill={styles.colors.dropLight} radius={25} />

      <Circle fill={styles.colors.dropDark} radius={20} />

      <Circle fill={styles.colors.dropLight} radius={5} x={10} y={-10} />
    </Group>
  );
};

export const render = renderProps => <DropUnwrapped {...renderProps} />;
export const Drop = () => <DropContainer render={render} />;
