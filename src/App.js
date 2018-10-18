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
  // Setting this.state.friends to the friends json array
  state = {
    images
  };

  handleShuffle = () => {
    let shuffledImages = shuffleImages(images);
    this.setState({ images: shuffledImages });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Navbar />
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
