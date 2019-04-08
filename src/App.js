import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import './App.css';

library.add(faThumbsUp)

class App extends Component {
  state = {
    numLikes: 0,
    likeStr: "Likes",
    likesMultiplier: 1
  }

  changeLikeButton = (e) => {

    e.preventDefault();

    this.setState({
      numLikes: Number(this.state.numLikes) + Number(this.state.likesMultiplier)
    });

    if (Number(this.state.numLikes) === 0) {
      this.setState({
        likeStr: "Like"
      });
    } else {
      this.setState({
        likeStr: "Likes"
      });
    }

  }

  changeMultiplier1 = (e) => {

    e.preventDefault();

    this.setState({
      likesMultiplier: Number(this.state.likesMultiplier) + 1
    })

  }

  changeMultiplier10 = (e) => {

    e.preventDefault();

    this.setState({
      likesMultiplier: Number(this.state.likesMultiplier) + 10
    })

  }

  changeMultiplier100 = (e) => {

    e.preventDefault();

    this.setState({
      likesMultiplier: Number(this.state.likesMultiplier) + 100
    })

  }

  changeMultiplier1000 = (e) => {

    e.preventDefault();

    this.setState({
      likesMultiplier: Number(this.state.likesMultiplier) + 1000
    })

  }

  render() {
    return (
      <div>
        <form id="likeButtonContainer" onSubmit={this.changeLikeButton}>
          <button className="likesButton" type="submit"><FontAwesomeIcon icon={faThumbsUp} /> {this.state.numLikes} {this.state.likeStr}</button>
          <p>Current like multiplier: {this.state.likesMultiplier}</p>
        </form>
        <form id="upgradesContainer">
          <button onClick={this.changeMultiplier1} className="upgradeButton" type="button">+1</button>
          <button onClick={this.changeMultiplier10} className="upgradeButton" type="button">+10</button>
          <button onClick={this.changeMultiplier100} className="upgradeButton" type="button">+100</button>
          <button onClick={this.changeMultiplier1000} className="upgradeButton" type="button">+1000</button>
        </form>
      </div>
    );
  }
}

export default App;
