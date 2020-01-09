import React, { PureComponent } from 'react';
import { Sprite, Container } from '@inlet/react-pixi';
import gsap from 'gsap';

import { generateAttributes } from './dropAttributes';

interface Props {
  windowWidth: number;
  windowHeight: number;
  onClick: () => void;
  onSwimEnd?: (isClicked: boolean) => void;
  isPaused?: boolean;
  isFullyVisible?: boolean;
}

interface State {
  isClicked: boolean;
  isReady: boolean;
}

export class Drop extends PureComponent<Props, State> {
  private tl = gsap.timeline();

  private dropRef: Sprite | null = null;

  private containerRef: Container | null = null;

  public state = {
    isClicked: false,
    isReady: false,
  };

  public componentDidMount() {
    this.setState({ isReady: true });
  }

  public componentDidUpdate(prevProps: Props, prevState: State) {
    if (!this.state.isReady) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ isReady: true });
    }

    if (this.props.isPaused) {
      this.tl.pause();
    } else if (this.tl.paused()) {
      this.tl.resume();
    }

    if (!prevState.isReady && this.state.isReady) {
      const { windowHeight, windowWidth, isFullyVisible } = this.props;

      const attributes = generateAttributes({
        windowHeight,
        windowWidth,
        isFullyVisible,
      });

      const maxSize = attributes.dropSize * 1.5;

      this.tl
        .to(this.dropRef, {
          width: 0,
          height: 0,
          alpha: 0,
        })
        .to(this.containerRef, {
          x: attributes.x,
          y: this.props.windowHeight - 60,
        })
        .to(this.dropRef, {
          width: maxSize,
          height: maxSize,
          alpha: attributes.maxAlpha / 2,
          delay: attributes.delay,
          ease: 'linear',
          duration: 0.2,
        })
        .to(this.dropRef, {
          width: attributes.dropSize,
          height: attributes.dropSize,
          alpha: attributes.maxAlpha,
          ease: 'linear',
          duration: 0.2,
        })
        .to(this.containerRef, {
          y: 100,
          ease: 'linear',
          duration: 6,
        })
        .to(this.containerRef, {
          y: 0,
          ease: 'linear',
          duration: 0.5,
        })
        .to(
          this.dropRef,
          {
            alpha: 0,
            ease: 'linear',
            duration: 1,
            onComplete: () => {
              this.onSwimEnd();
              this.setState({
                isClicked: false,
                isReady: false,
              });
            },
          },
          '-=1'
        );
    }
  }

  public componentWillUnmount() {
    this.tl.kill();
  }

  private onSwimEnd() {
    const { onSwimEnd } = this.props;

    if (onSwimEnd) {
      onSwimEnd(this.isClicked);
    }
  }

  private get isClicked() {
    return this.state.isClicked;
  }

  private handeClick = () => {
    this.setState({ isClicked: true });
    this.props.onClick();
  };

  public render() {
    const { isClicked, isReady } = this.state;

    return (
      <Container ref={ref => (this.containerRef = ref)}>
        <Sprite
          ref={ref => (this.dropRef = ref)}
          image="drop.png"
          anchor={0.5}
          visible={isReady && !isClicked}
          interactive={isReady && !isClicked}
          pointerdown={this.handeClick}
          cursor="pointer"
        />
      </Container>
    );
  }
}
