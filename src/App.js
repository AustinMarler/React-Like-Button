import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import './App.css';

library.add(faThumbsUp)

class App extends Component {
  state = {
    numLikes: 0,
    likeStr: "Likes"
  }

  changeLikeButton = (e) => {

    e.preventDefault();

    this.setState({
      numLikes: Number(this.state.numLikes) + 1
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

  render() {
    return (
      <form onSubmit={this.changeLikeButton}>
        <button className="likesButton" type="submit"><FontAwesomeIcon icon={faThumbsUp} /> {this.state.numLikes} {this.state.likeStr}</button>
      </form>
    );
  }
}

export default App;
