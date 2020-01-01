import React from 'react';
import Konva from 'konva';

export class DropAnimation {
  public constructor(
    private ref: React.RefObject<Konva.Group>,
    private onSwimEnd: () => void
  ) {}

  private get showFirstHalfTween() {
    return new Konva.Tween({
      node: this.ref.current,
      opacity: 0.5,
      duration: 0.2,
      scaleX: 1.5,
      scaleY: 1.5,
      onFinish: () => this.showSecondHalfTween.play(),
    });
  }

  private get showSecondHalfTween() {
    return new Konva.Tween({
      node: this.ref.current,
      opacity: 1,
      duration: 0.2,
      scaleX: 1,
      scaleY: 1,
      onFinish: () => this.swimTween.play(),
    });
  }

  private get swimTween() {
    return new Konva.Tween({
      node: this.ref.current,
      y: 0,
      duration: 5,
      onFinish: () => this.resetTween.play(),
    });
  }

  private get resetTween() {
    return new Konva.Tween({
      node: this.ref.current,
      y: window.innerHeight - 50,
      opacity: 0,
      duration: 0,
      onFinish: () => this.onSwimEnd(),
    });
  }

  public animate() {
    this.showFirstHalfTween.play();
  }
}
