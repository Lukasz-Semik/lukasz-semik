import React from 'react';
import Konva from 'konva';
import { DropTween } from './types';
import { Attributes } from './dropAttributes';

export class DropAnimation {
  public currentTween: Konva.Tween | undefined;

  constructor(
    private ref: React.RefObject<Konva.Group>,
    private attributes: Attributes,
    private changeTween: (currentTween: DropTween) => void
  ) {
    const offset = attributes.dropSize / 2;
    if (!this.ref.current) return;

    this.currentTween = new Konva.Tween({
      node: ref.current,
      offsetX: offset,
      offsetY: offset,
      scaleX: 0,
      scaleY: 0,
      x: attributes.positionX,
      y: attributes.positionY,
      opacity: 0,
      onFinish: () => {
        this.setShowHaflTween();
        changeTween(DropTween.ShowHalf);
      },
    });
  }

  private setShowHaflTween() {
    if (!this.ref.current) return;

    this.currentTween = new Konva.Tween({
      node: this.ref.current,
      duration: 0.2,
      opacity: this.attributes.maxOpacity / 2,
      scaleX: this.attributes.scale + 0.5,
      scaleY: this.attributes.scale + 0.5,
      onFinish: () => {
        this.setShowCompleteTween();
        this.changeTween(DropTween.ShowComplete);
      },
    });
  }

  private setShowCompleteTween() {
    if (!this.ref.current) return;

    this.currentTween = new Konva.Tween({
      node: this.ref.current,
      opacity: this.attributes.maxOpacity,
      duration: 0.2,
      scaleX: this.attributes.scale,
      scaleY: this.attributes.scale,
      onFinish: () => {
        this.setSwimTween();
        this.changeTween(DropTween.Swim);
      },
    });
  }

  private setSwimTween() {
    if (!this.ref.current) return;

    this.currentTween = new Konva.Tween({
      node: this.ref.current,
      y: 100,
      duration: 6,
      onFinish: () => {
        this.setHideTween();
        this.changeTween(DropTween.Hide);
      },
    });
  }

  private setHideTween() {
    if (!this.ref.current) return;

    this.currentTween = new Konva.Tween({
      node: this.ref.current,
      y: 0,
      opacity: 0,
      duration: 0.5,
      onFinish: () => {
        this.changeTween(DropTween.None);
      },
    });
  }
}
