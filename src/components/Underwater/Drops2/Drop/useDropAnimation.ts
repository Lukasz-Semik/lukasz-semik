import { useState, useEffect } from 'react';
import { random } from 'lodash';
import Timeout from 'smart-timeout';
import Konva from 'konva';

import { generateAttributes } from './dropAttributes';
import { DropAnimation } from './dropAnimation';
import { DropTween } from './types';

interface Props {
  ref: React.RefObject<Konva.Group>;
  windowWidth: number;
  windowHeight: number;
  isWindowFocused: boolean;
  dropId: string;
  isFullyVisible?: boolean;
}

export const useDropAnimation = ({
  ref,
  windowWidth,
  windowHeight,
  isWindowFocused,
  dropId,
  isFullyVisible,
}: Props) => {
  const [animation, setAnimation] = useState<DropAnimation>();
  const [currentTween, setCurrentTween] = useState<DropTween>(DropTween.None);

  useEffect(() => {
    if (ref && ref.current != null && currentTween === DropTween.None) {
      const attributes = generateAttributes({
        windowWidth,
        windowHeight,
        isFullyVisible,
      });

      Timeout.set(
        dropId,
        () => {
          setAnimation(new DropAnimation(ref, attributes, setCurrentTween));
          setCurrentTween(DropTween.Initialize);
        },
        random(1, 11, true) * 1000
      );
    }
    // we don't want to react on window size changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, currentTween, dropId]);

  useEffect(() => {
    if (currentTween !== DropTween.None && animation) {
      const tween = animation.getCurrentTween(currentTween);

      if (!tween) return;

      if (isWindowFocused) {
        tween.play();
      } else {
        tween.pause();
      }
    }
  }, [animation, currentTween, isWindowFocused]);

  useEffect(() => {
    if (isWindowFocused) {
      Timeout.resume(dropId);
    } else {
      Timeout.pause(dropId);
    }
  }, [isWindowFocused, dropId]);

  useEffect(
    () => () => {
      if (Timeout.exists(dropId)) {
        Timeout.clear(dropId);
      }
    },
    [dropId]
  );
};
