import React, { PureComponent } from 'react';
import { Sprite, Container } from '@inlet/react-pixi';
import gsap from 'gsap';

import { animateDrop } from './animateDrop';
import { PointsIndicator } from '../../PointsIndicator/PointsIndicator';

interface Props {
  windowWidth: number;
  windowHeight: number;
  onClick: () => void;
  satellites: React.ReactElement;
  onSwimEnd?: (isClicked: boolean) => void;
  isPaused?: boolean;
  isFullyVisible?: boolean;
  hasIndicator?: boolean;
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

    const { windowHeight, windowWidth, isFullyVisible } = this.props;

    const isReady = !prevState.isReady && this.state.isReady;

    if (isReady && this.dropRef && this.containerRef) {
      animateDrop({
        windowHeight,
        windowWidth,
        isFullyVisible,
        tl: this.tl,
        dropRef: this.dropRef,
        containerRef: this.containerRef,
        onComplete: () => {
          this.onSwimEnd();
          this.setState({
            isClicked: false,
            isReady: false,
          });
        },
      });
    }
  }

  public componentWillUnmount() {
    this.tl.kill();
  }

  private onSwimEnd() {
    const { onSwimEnd } = this.props;

    if (onSwimEnd) {
      onSwimEnd(this.state.isClicked);
    }
  }

  private handeClick = () => {
    this.setState({ isClicked: true });
    this.props.onClick();
  };

  public render() {
    const { isClicked, isReady } = this.state;
    const { hasIndicator, satellites, isPaused } = this.props;

    return (
      <Container ref={ref => (this.containerRef = ref)}>
        <Sprite
          ref={ref => (this.dropRef = ref)}
          image="underwater/drop.png"
          anchor={0.5}
          visible={isReady && !isClicked}
          interactive={isReady && !isClicked}
          pointerdown={this.handeClick}
          cursor="pointer"
        />

        {isClicked && (
          <>
            {hasIndicator && (
              <PointsIndicator
                value="+1"
                x={-15}
                y={-15}
                isPaused={Boolean(isPaused)}
              />
            )}

            {satellites}
          </>
        )}
      </Container>
    );
  }
}
