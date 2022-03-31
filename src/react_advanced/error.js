import React from "react";

export default class Error extends React.Component {
  render() {
    return <button
      onClick={() => {
        this.setState(() => {
          throw Error("error encountered!");
        });
      }}
    >
      Trigger error!
    </button>;
  }
}
