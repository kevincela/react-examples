import React from "react";

export default class RandomNumberGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { randomNumber: Math.random() * 100 };
    this.updateRandomNumber = this.updateRandomNumber.bind(this);
  }

  updateRandomNumber() {
    this.setState({ randomNumber: Math.random() * 100 });
  }

  render() {
    return (
      <div>
        <h1>Random value: {this.state.randomNumber}</h1>
        <button onClick={this.updateRandomNumber}>Generate new value!</button>
      </div>
    );
  }
}
