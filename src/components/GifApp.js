import React, { Component } from 'react';
import giphy from 'giphy-api';

import GifList from './GifList.jsx'
import Gif from './Gif.jsx'
import SearchBar from './SearchBar.jsx'

class GifApp extends Component {
  constructor(props){
    super(props);

    this.state = {
      gifs: null,
      selectedGifId: []
    }
  }

  search = (query) => {
    giphy('xzYCuyxkVuJpJ95O5OmGXKyGVczclziP').search({
      q: query,
      rating: 'g'
    }, (error, result) => {
      this.setState({
        gifs: result.data
      });
    });
  }

  selectGif = (id) => {
    this.setState({
      selectedGifId: id
    })
  }

  render() {
    return(
      <div>
        <div className="leftbox">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="rightbox">
          <p>Click image to enlarge</p>
          <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    )
  }
}

export default GifApp;
