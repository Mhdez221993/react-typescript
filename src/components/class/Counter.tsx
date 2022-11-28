import { Component } from 'react';

type CounterProps = {
  message: string
}

type CounterState = {
  count: number
}

class Counter extends Component<CounterProps, CounterState> {

  state = {
      count: 0
  }

  handleIncrement = () => {
    this.setState(({count}) => ({count: count + 1}))
  }

  render() {
    return (
      <div>
          <button
            onClick={this.handleIncrement}
          >Increment</button>
        {this.props.message} - {this.state.count}
      </div>
    );
  }
}

export default Counter
