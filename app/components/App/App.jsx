import React, { Component, PropTypes } from 'react';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
        <h1>Boilerplate</h1>
        <div>Count: {this.props.count}</div>
        <button
          onClick={this.props.onClickButton}
        >
          Increment
        </button>
      </div>
    );
  }
}

App.propTypes = {
  count: PropTypes.number.isRequired,
  onClickButton: PropTypes.func.isRequired,
};
