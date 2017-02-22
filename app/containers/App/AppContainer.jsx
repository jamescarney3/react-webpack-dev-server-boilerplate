import React, { Component } from 'react';
import { App } from '../../components';

export class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <App
        count={this.state.count}
        onClickButton={this.increment}
      />
    );
  }
}
