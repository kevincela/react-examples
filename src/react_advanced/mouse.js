import React from "react";

export class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.state = { x: 0, y: 0 };

    this.onMouseMove = this.onMouseMove.bind(this);
  }

  onMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  }

  render() {
    return (
      <div style={{ position: "relative", height: "40vh", border: "1px solid black" }} onMouseMove={this.onMouseMove}>
        {this.props.render(this.state)}
      </div>
    );
  }
}

export function Cat(props) {
  return (
    <img
      src="https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg"
      width="100"
      style={{ position: "sticky", left: props.mouse.x, top: props.mouse.y }}
    />
  );
}
