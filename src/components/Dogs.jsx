import React from 'react';
import Dog from './Dogs';

class Dogs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { timeToEat: false };
  }
  render() {
    return (
      <div>
        <Dog timeToEat={this.state.timeToEat} />
        <button onClick={() => this.setState({ timeToEat: !this.state })}>
          this.setState.timeToEat
        </button>
      </div>
    );
  }
}

export default Dogs;
