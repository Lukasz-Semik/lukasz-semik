import React, { Component } from 'react';
import { times, random } from 'lodash';
import { Container } from '@inlet/react-pixi';

import { Satellite } from './Satellite';
import { PointsIndicator } from '../../PointsIndicator/PointsIndicator';

interface Props {
  isPaused: boolean;
  hasIndicator?: boolean;
  onClick?: (value: number) => void;
}

interface State {
  counter: number;
}

export class Satellites extends Component<Props, State> {
  private rotation = random(0, 360);

  public state = {
    counter: 1,
  };

  private onClick = () => {
    const { onClick } = this.props;

    if (onClick) {
      onClick(this.state.counter + 1);

      this.setState(({ counter }) => ({
        counter: counter + 1,
      }));
    }
  };

  private renderIndicator = () => (
    <PointsIndicator
      value={`+${this.state.counter}`}
      isPaused={this.props.isPaused}
    />
  );

  public render() {
    const { isPaused, hasIndicator } = this.props;

    return (
      <Container rotation={this.rotation}>
        {times(4, index => (
          <Satellite
            index={index}
            key={`satellite-${index}`}
            isPaused={isPaused}
            onClick={this.onClick}
            rotation={-this.rotation}
            renderIndicator={hasIndicator ? this.renderIndicator : undefined}
          />
        ))}
      </Container>
    );
  }
}
