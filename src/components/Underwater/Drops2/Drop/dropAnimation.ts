import React from 'react';
import Konva from 'konva';
import { DropTween } from './types';
import { Attributes } from './dropAttributes';

export class DropAnimation {
  public initializeTween: Konva.Tween | undefined;

  public showHalfTween: Konva.Tween | undefined;

  public showCompleteTween: Konva.Tween | undefined;

  public swimTween: Konva.Tween | undefined;

  public hideTween: Konva.Tween | undefined;

  public resetTween: Konva.Tween | undefined;

  constructor(
    private ref: React.RefObject<Konva.Group>,
    private attributes: Attributes,
    private changeTween: (currentTween: DropTween) => void
  ) {
    const offset = attributes.dropSize / 2;
    if (!this.ref.current) return;

    this.initializeTween = new Konva.Tween({
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

    this.showHalfTween = new Konva.Tween({
      node: this.ref.current,
      opacity: this.attributes.maxOpacity / 2,
      duration: 0.2,
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

    this.showCompleteTween = new Konva.Tween({
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

    this.swimTween = new Konva.Tween({
      node: this.ref.current,
      y: 100,
      duration: 6,
      onFinish: () => {
        this.changeTween(DropTween.Hide);
        this.setHideTween();
      },
    });
  }

  private setHideTween() {
    if (!this.ref.current) return;

    this.hideTween = new Konva.Tween({
      node: this.ref.current,
      y: 0,
      opacity: 0,
      duration: 0.5,
      onFinish: () => {
        this.changeTween(DropTween.None);
      },
    });
  }

  public getCurrentTween(currentTween: DropTween) {
    switch (currentTween) {
      case DropTween.Initialize:
        return this.initializeTween;
      case DropTween.ShowHalf:
        return this.showHalfTween;
      case DropTween.ShowComplete:
        return this.showCompleteTween;
      case DropTween.Swim:
        return this.swimTween;
      case DropTween.Hide:
        return this.hideTween;
      case DropTween.Reset:
        return this.resetTween;
      default:
        return this.initializeTween;
    }
  }
}
