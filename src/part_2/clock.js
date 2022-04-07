import React from "react";

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), counter: 0 };
  }

  componentDidMount() {
    console.log("Component mounted!");
    this.timerID = setInterval(() => this.tick(), 1000);
    this.counterID = setInterval(
      () => this.setState((state, props) => ({ counter: state.counter + 1 })),
      500
    );
  }

  componentWillUnmount() {
    console.log("unmount");
    clearInterval(this.timerID);
    clearInterval(this.counterID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <h3>Counter: {this.state.counter}</h3>
      </div>
    );
  }
}
