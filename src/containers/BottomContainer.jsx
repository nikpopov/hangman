import React, { Component } from "react";
import Letter from "../components/Letter";

class BottomContainer extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="bottomContainer">
        <div className="bottomWrapper">
          {this.props.template.map((item, index) => (
            <Letter key={index} item={item} />
          ))}
        </div>
      </div>
    );
  }
}

export default BottomContainer;
