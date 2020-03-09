import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    this.props.selectGif(this.props.id);
  }

  shouldComponentUpdate(nextProps, nextState) {
    // don't call render if props.id did not change
    return nextProps.id !== this.props.id;
  }

  render() {
    // Destructuring to just use the id of props
    const { id } = this.props
    if(!id.length) {
      return null;
    }

    const src = `https://media2.giphy.com/media/${id}/giphy.gif`;
    return (
      <img src={src} alt="" className="gif" onClick={() => { this.handleClick() } }/>
    )
  }
}

export default Gif;
