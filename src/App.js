import React, { Component } from "react";
import images from "./images.json";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import ImageCard from "./components/ImageCard"
import "./App.css";

function shuffleImages(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

class App extends Component {
  state = {
    images,
    currentScore: 0,
    highScore: 0,
    message: "Click any image to start the game!",
    clicked: [],
  };

  handleClick = name => {
    if (this.state.clicked.indexOf(name) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(name) });
      console.log(this.state.clicked);
    } else {
      this.setState({ message: "That's incorrect! You lost!" });
      this.handleReset();
    }
  };

  handleShuffle = () => {
    let shuffledImages = shuffleImages(images);
    this.setState({ images: shuffledImages });
  };

  // Function in increment score when correct selection made
  handleIncrement = () => {
    const updatedScore = this.state.currentScore + 1;
    this.setState({
      currentScore: updatedScore,
      message: "That's correct!"
    });
    if (updatedScore >= this.state.highScore) {
      this.setState({ highScore: updatedScore });
    }
    if (updatedScore === 12) {
      this.setState({ message: "You won!" });
      this.handleReset();
    }
    if (updatedScore <= 11)
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      clicked: []
    });
    this.handleShuffle();
  };

  render() {
    return (
      <Wrapper>
        <Navbar
          currentScore={this.state.currentScore}
          highScore={this.state.highScore}
          message={this.state.message}
        />
        <Jumbotron />
        <div className="row align-items-center">
          {this.state.images.map(image => (
            <ImageCard
              key={image.id}
              handleClick={this.handleClick}
              handleShuffle={this.handleShuffle}
              handleIncrement={this.handleIncrement}
              name={image.name}
              id={image.id}
              image={image.image}
            />
          ))}
        </div>
      </Wrapper>
    );
  }
}

export default App;
