import React from "react";

export default class PageSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedPage: 0 };
  }

  changeSelectedPage(index) {
    this.setState({
      selectedPage: index,
    });
  }

  render() {
    return (
      <div>
        {this.props.pages.map((page, index) => (
          <button
            onClick={() => {
              this.changeSelectedPage(index);
            }}
            key={page.name}
          >
            {page.name}
          </button>
        ))}
        {this.props.pages[this.state.selectedPage].component}
      </div>
    );
  }
}
