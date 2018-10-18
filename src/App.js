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

  handleShuffle = () => {
    let shuffledImages = shuffleImages(images);
    this.setState({ images: shuffledImages });
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
            handleShuffle={this.handleShuffle}
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
