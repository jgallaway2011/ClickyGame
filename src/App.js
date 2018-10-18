import React, { Component } from "react";
import images from "./images.json";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import ImageCard from "./components/ImageCard"
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    images
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
            id={image.id}
            key={image.id}
            name={image.name}
            image={image.image}
          />
        ))}
        </div>
      </Wrapper>
    );
  }
}

export default App;
