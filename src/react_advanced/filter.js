import React from "react";

export function withFilter(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = { filter: "" };

      this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
      this.setState({ filter: event.target.value });
    }

    render() {
      const { data, ...rest } = this.props;

      return (
        <div>
          <input type="text" onChange={this.onChange} />
          <WrappedComponent
            data={data.filter(
              (el) => this.state.filter === "" || el.includes(this.state.filter)
            )}
            {...rest}
          />
        </div>
      );
    }
  };
}

export function Fruits(props) {
  return (
    <div>
      <h1>Fruits</h1>
      <ul>
        {props.data.map((el) => (
          <li key={el}>
            <strong>Fruit:</strong> {el}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Cellphones(props) {
  return (
    <div>
      <h1>Cellphones</h1>
      <ul>
        {props.data.map((el) => (
          <li key={el}>
            <strong>Cellphone:</strong> {el}
          </li>
        ))}
      </ul>
    </div>
  );
}
