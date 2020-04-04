import React, { Component } from "react";
import Image from "./Image";

class TopContainer extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  renderImage() {
    return this.props.images.map((image, i) => {
      return (
        <Image
          key={i}
          name={image.name}
          width={image.width}
          height={image.height}
          backgroundImage={`url(${image.backgroundImage})`}
          imageClass={image.imageClass}
        />
      );
    });
  }

  renderAlphabet() {
    const set = new Set(this.props.word.split(""));
    const setArr = Array.from(set);
    return (
      <div className="alphabet">
        <div className="alphabetRow">
          {this.props.alphabet.map(el => {
            return (
              <div
                className="letterWrapper"
                key={el}
                onClick={() => this.props.onEnterLetter(el)}
              >
                <span className="letter">{el}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="topWrapper">
        <div className="imageContainer">{this.renderImage()}</div>
        <div className="displayContainer">
          <div className="label">You Missed</div>
          <div className="missedLetters">{this.props.missedLetters}</div>
          {this.renderAlphabet()}
        </div>
      </div>
    );
  }
}

export default TopContainer;
