import React from 'react';
import Konva from 'konva';

export class DropAnimation {
  public constructor(
    private ref: React.RefObject<Konva.Group>,
    private onSwimEnd: () => void,
    private maxOpacity: number,
    private scale: number
  ) {}

  private get showFirstHalfTween() {
    return new Konva.Tween({
      node: this.ref.current,
      opacity: this.maxOpacity / 2,
      duration: 0.2,
      scaleX: this.scale + 0.5,
      scaleY: this.scale + 0.5,
      onFinish: () => this.showSecondHalfTween.play(),
    });
  }

  private get showSecondHalfTween() {
    return new Konva.Tween({
      node: this.ref.current,
      opacity: this.maxOpacity,
      duration: 0.2,
      scaleX: this.scale,
      scaleY: this.scale,
      onFinish: () => this.swimTween.play(),
    });
  }

  private get swimTween() {
    return new Konva.Tween({
      node: this.ref.current,
      y: 0,
      duration: 8,
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
