import React, { Component } from 'react';
import Gif from './Gif.jsx';

class GifList extends Component {
  renderList = () => {
    if(this.props.gifs){
      return this.props.gifs.map(gif => <Gif id={gif.id} key={gif.id} selectGif={this.props.selectGif} />);
    }
  }

  render() {
    return (
      <div className="gif-list">
        {this.renderList()}
      </div>
    )
  }
}

export default GifList;
