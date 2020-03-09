import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    if (this.props.selectGif) {
      this.props.selectGif(this.props.id);
    }
  }

  componentWillMount() {
    console.log('MOUNTING GIF')
  }

  shouldComponentUpdate(nextProps, nextState) {
    // don't call render if props.id did not change
    return nextProps.id !== this.props.id;
  }

  componentDidMount() {
    console.log('MOUNTED');
  }

  render() {

    console.log("Gif render " + this.props.id)
    const { id } = this.props

    if(!id) {
      return null;
    }

    const src = `https://media2.giphy.com/media/${id}/giphy.gif`;
    return (
      <img src={src} alt="" className="gif" onClick={() => { this.handleClick() } }/>
    )
  }
}

export default Gif;
