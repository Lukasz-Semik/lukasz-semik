import { useState, useEffect } from 'react';
import { random } from 'lodash';
import Timeout from 'smart-timeout';
import Konva from 'konva';

import { generateAttributes } from './dropAttributes';
import { DropAnimation } from './dropAnimation';

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
  const [currentTween, setCurrentTween] = useState<Konva.Tween>();

  useEffect(() => {
    if (ref && ref.current != null && !currentTween) {
      const attributes = generateAttributes({
        windowWidth,
        windowHeight,
        isFullyVisible,
      });

      Timeout.set(
        dropId,
        () => new DropAnimation(ref, attributes, setCurrentTween),
        random(1, 11, true) * 1000
      );
    }
    // we don't want to react on window size changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, currentTween, dropId]);

  useEffect(() => {
    if (currentTween) {
      if (isWindowFocused) {
        currentTween.play();
      } else {
        currentTween.pause();
      }
    }
  }, [currentTween, isWindowFocused]);

  useEffect(() => {
    if (isWindowFocused) {
      Timeout.resume(dropId);
    } else {
      Timeout.pause(dropId);
    }
  }, [isWindowFocused, dropId]);

  useEffect(
    () => () => {
      if (currentTween) {
        currentTween.destroy();
      }

      if (Timeout.exists(dropId)) {
        Timeout.clear(dropId);
      }
    },
    [dropId, currentTween]
  );
};
