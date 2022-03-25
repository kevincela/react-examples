import React from "react";

export function Welcome(props) {
  console.log(props);
  return (
    <div>
      <h1>
        Hello, {props.name} {props.surname}
      </h1>
      {props.h3}
    </div>
  );
}

export class WelcomeClass extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Hello, {this.props.name} {this.props.surname}
        </h1>
        {this.props.h3}
      </div>
    );
  }
}
