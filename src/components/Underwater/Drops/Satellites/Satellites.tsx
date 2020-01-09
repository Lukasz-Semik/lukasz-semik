import React, { Component } from 'react';
import { times } from 'lodash';

import { Satellite } from './Satellite';

interface Props {
  isPaused: boolean;
  onClick?: (value: number) => void;
}

interface State {
  counter: number;
}

export class Satellites extends Component<Props, State> {
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

  public render() {
    const { isPaused } = this.props;

    return (
      <>
        {times(4, index => (
          <Satellite
            index={index}
            key={`satellite-${index}`}
            isPaused={isPaused}
            onClick={this.onClick}
          />
        ))}
      </>
    );
  }
}
