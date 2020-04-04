import React, { Component } from "react";
import BottomContainer from "./BottomContainer";
import TopContainer from "./TopContainer";
import images from "../data/images.js";

class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      alphabet: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
      ],
      gameOver: false,
      word: "ABABAGALAMAGA",
      defaultLength: 18,
      payload: null,
      trying: ["G"]
    };
    this.onEnterLetter = this.onEnterLetter.bind(this);
  }

  componentDidMount() {
    fetch("https://wordsapiv1.p.mashape.com/words?random=true", {
      headers: {
        ["X-Mashape-Key"]: "5b4942ed6cmshe616e11f0b4ec56p13b780jsna8a5507c7b63",
        ["X-RapidAPI-Proxy-Secret"]:
          "5b4942ed6cmshe616e11f0b4ec56p13b780jsna8a5507c7b63",
        ["X-RapidAPI-User"]: "Nikolay Popov",
        ["X-RapidAPI-Subscription"]: "FREE",
        Accept: "application/json"
      }
    })
      .then(res => res.json())
      .then(payload => this.setState({ payload }))
      .catch(error => console.log(error));
    window.addEventListener("onKeyPress", this.onPrintLetter, false);
  }

  componentWillUnmount() {
    window.removeEventListener("onKeyPress", this.onPrintLetter, false);
  }

  onEnterLetter(e) {
    console.log(e);
    const tryArr = this.state.trying;
    tryArr.push(e);
    this.setState({
      trying: tryArr
    });
  }

  getMissedLetters() {}

  render() {
    const trying = new Set(this.state.trying);
    const tryingArr = Array.from(trying);

    const reducer = (acc, item, index) => {
      if (defaultLength >= wordArrayLength) {
        const diff = defaultLength - wordArrayLength;
        if (diff > index) {
          acc.push(" ");
        } else {
          const idx = index - diff;
          if (idx === 0 || idx === wordArrayLength - 1) {
            //            const newTry = this.state.trying;
            //            newTry.push(wordArray[idx]);
            //            this.setState({
            //              trying: newTry
            //            });
            acc.push(wordArray[idx]);
          } else {
            if (tryingArr.includes(wordArray[idx])) {
              acc.push(wordArray[idx]);
            } else {
              acc.push(" ");
            }
          }
        }
      } else {
        this.setState({
          gameOver: true
        });
      }
      return acc;
    };

    const wordArray = this.state.word.toUpperCase().split("");
    const wordArrayLength = wordArray.length;
    const defaultLength = this.state.defaultLength;
    const templateArr = Array(this.state.defaultLength).fill(" ");
    const defaultTemplate = templateArr.reduce(reducer, []);

    if (this.state.gameOver) {
      return <h1>Game is OVER!</h1>;
    }
    return (
      <div className="layoutWrapper">
        <TopContainer
          images={images}
          letter={this.state.letter}
          missedLetters={this.getMissedLetters()}
          onEnterLetter={this.onEnterLetter}
          alphabet={this.state.alphabet}
          word={this.state.word}
        />
        <BottomContainer template={defaultTemplate} />
      </div>
    );
  }
}

export default Layout;
