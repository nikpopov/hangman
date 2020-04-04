import React, { Component } from "react";

class Image extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { width, height, backgroundImage, imageClass } = this.props;
    return (
      <div
        className={imageClass}
        style={{
          width: width,
          height: height,
          backgroundImage: backgroundImage,
          position: "absolute",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "50% 50%"
        }}
      ></div>
    );
  }
}

export default Image;
